// src/config.js

// Configuration settings for the application, including environment variables.
// This file centralizes all configurations for easy access and modification.

// Deepgram API settings
export const DEEPGRAM_API_KEY = process.env.REACT_APP_DEEPGRAM_API_KEY || ''; // Fallback in case the key is missing

// Deepgram WebSocket URL for streaming transcription
export const DEEPGRAM_WS_URL = 'wss://api.deepgram.com/v1/listen'; // Default WebSocket endpoint for Deepgram API

// Default settings for recording audio
export const AUDIO_CONFIG = {
  sampleRate: 16000,   // Deepgram recommends 16kHz for optimal transcription quality
  audioBitsPerSecond: 128000, // Bitrate for audio recording (128 kbps)
  mimeType: 'audio/webm; codecs=opus' // Format compatible with Deepgram and Web Audio API
};

