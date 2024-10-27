// src/pages/index.js

import React, { useState } from 'react';
import MicrophoneButton from '../components/MicrophoneButton';
import TranscriptionDisplay from '../components/TranscriptionDisplay';
import PastTranscriptions from '../components/PastTranscriptions';
import styles from '../styles/Home.module.css'; // Importing styles for the main page

const Home = () => {
  const [transcription, setTranscription] = useState(''); // Holds current transcription
  const [pastTranscriptions, setPastTranscriptions] = useState([]); // Holds past transcriptions

  // Function to add a new transcription to the past transcriptions list
  const addTranscription = (newTranscription) => {
    setPastTranscriptions((prev) => [...prev, newTranscription]); // Append new transcription to the array
  };

  return (
    <div className={styles.container}>
      <h1>Audio Transcription App</h1>
      <MicrophoneButton transcription={transcription} setTranscription={setTranscription} />
      <TranscriptionDisplay transcription={transcription} />
      <PastTranscriptions pastTranscriptions={pastTranscriptions} addTranscription={addTranscription} />
    </div>
  );
};

export default Home;
 
