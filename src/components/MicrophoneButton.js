// src/components/MicrophoneButton.js

import React from 'react';
import { useRecorder } from '../hooks/useRecorder';
import styles from '../styles/MicrophoneButton.module.css'; // Optional: For styling

const MicrophoneButton = () => {
  const { isRecording, startRecording, stopRecording } = useRecorder();

  const handleClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <button 
      className={`${styles.microphoneButton} ${isRecording ? styles.recording : ''}`} 
      onClick={handleClick}
      aria-label={isRecording ? 'Stop recording' : 'Start recording'}
    >
      {isRecording ? 'Stop' : 'Start'} Recording
    </button>
  );
};

export default MicrophoneButton;

