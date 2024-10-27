// src/services/deepgramService.js

import { DEEPGRAM_API_KEY, DEEPGRAM_WS_URL, AUDIO_CONFIG } from '../config';

// Initializes a WebSocket connection to the Deepgram streaming API
export function createDeepgramWebSocket() {
  if (!DEEPGRAM_API_KEY) {
    console.error('Deepgram API key is missing. Please set it in the .env file.');
    return null;
  }

  // Construct WebSocket URL with authentication header for Deepgram
  const deepgramSocket = new WebSocket(`${DEEPGRAM_WS_URL}?access_token=${DEEPGRAM_API_KEY}`);

  // Event listener for connection open
  deepgramSocket.onopen = () => {
    console.log('Connected to Deepgram WebSocket.');
  };

  // Event listener for connection error
  deepgramSocket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  // Event listener for connection close
  deepgramSocket.onclose = () => {
    console.log('Disconnected from Deepgram WebSocket.');
  };

  return deepgramSocket;
}

// Sends audio data to Deepgram WebSocket for transcription
export function streamAudioToDeepgram(socket, audioBlob) {
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    console.error('WebSocket is not open. Cannot send audio data.');
    return;
  }

  // Send audio data as a blob
  socket.send(audioBlob);
}

// Closes the WebSocket connection
export function closeDeepgramWebSocket(socket) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.close();
  }
}

// Parses Deepgram transcription response and returns transcribed text
export function parseTranscriptionResponse(event) {
  const response = JSON.parse(event.data);
  const { channel } = response;
  if (channel && channel.alternatives && channel.alternatives.length > 0) {
    return channel.alternatives[0].transcript || ''; // Return the first alternative's transcript
  }
  return '';
}

