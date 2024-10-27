// src/App.js

import React, { useState } from 'react';
import MicrophoneButton from './components/MicrophoneButton';
import TranscriptionDisplay from './components/TranscriptionDisplay';
import PastTranscriptions from './components/PastTranscriptions';
import { useRecorder } from './hooks/useRecorder';
import './styles/globals.css'; // Import global styles

const App = () => {
  const [transcription, setTranscription] = useState(''); // State to hold the current transcription
  const [pastTranscriptions, setPastTranscriptions] = useState([]); // State to hold past transcriptions
  const { isRecording, startRecording, stopRecording } = useRecorder(setTranscription); // Hook for audio recording

  // Handler to save the current transcription to past transcriptions
  const handleSaveTranscription = () => {
    if (transcription.trim()) {
      setPastTranscriptions((prev) => [...prev, transcription.trim()]); // Add current transcription to past transcriptions
      setTranscription(''); // Clear current transcription after saving
    }
  };

  return (
    <div className="container">
      <h1>Audio Transcription App</h1>
      <MicrophoneButton 
        isRecording={isRecording} 
        startRecording={startRecording} 
        stopRecording={stopRecording} 
      />
      <TranscriptionDisplay transcription={transcription} />
      <button onClick={handleSaveTranscription} disabled={!transcription.trim()}>
        Save Transcription
      </button>
      <PastTranscriptions transcriptions={pastTranscriptions} />
    </div>
  );
};

export default App;

