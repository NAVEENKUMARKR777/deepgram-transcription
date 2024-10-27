// src/hooks/useRecorder.js

import { useState, useEffect, useRef } from 'react';
import {
  createDeepgramWebSocket,
  streamAudioToDeepgram,
  closeDeepgramWebSocket,
  parseTranscriptionResponse,
} from '../services/deepgramService';
import { AUDIO_CONFIG } from '../config';

export function useRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [error, setError] = useState(null);
  
  const mediaRecorderRef = useRef(null); // Reference to manage MediaRecorder instance
  const socketRef = useRef(null); // Reference to manage WebSocket connection

  useEffect(() => {
    return () => {
      stopRecording(); // Cleanup: stop recording when component unmounts
    };
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream, AUDIO_CONFIG);
      
      socketRef.current = createDeepgramWebSocket();

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (socketRef.current && event.data.size > 0) {
          streamAudioToDeepgram(socketRef.current, event.data);
        }
      };

      socketRef.current.onmessage = (event) => {
        const transcript = parseTranscriptionResponse(event);
        setTranscription((prev) => prev + ' ' + transcript); // Append new transcript text
      };

      socketRef.current.onerror = (e) => {
        setError('WebSocket error: Unable to connect to transcription service.');
        console.error(e);
      };

      mediaRecorderRef.current.start(1000); // Collect audio data in 1-second chunks
      setIsRecording(true);
    } catch (err) {
      setError('Error accessing microphone: ' + err.message);
      console.error('Error accessing microphone:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    if (socketRef.current) {
      closeDeepgramWebSocket(socketRef.current);
    }
    setIsRecording(false);
  };

  return {
    isRecording,
    transcription,
    error,
    startRecording,
    stopRecording,
  };
}

