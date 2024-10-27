// src/components/PastTranscriptions.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/PastTranscriptions.module.css'; // Import styles for this component

const PastTranscriptions = ({ pastTranscriptions, addTranscription }) => {
  const [newTranscription, setNewTranscription] = useState('');

  const handleAddTranscription = () => {
    if (newTranscription.trim()) {
      addTranscription(newTranscription); // Calls the addTranscription function passed as a prop
      setNewTranscription(''); // Clear input after adding
    }
  };

  return (
    <div className={styles.pastTranscriptionsContainer}>
      <h2>Past Transcriptions:</h2>
      <ul className={styles.transcriptionsList}>
        {pastTranscriptions.length > 0 ? (
          pastTranscriptions.map((transcription, index) => (
            <li key={index} className={styles.transcriptionItem}>
              {transcription}
            </li>
          ))
        ) : (
          <li>No past transcriptions available.</li>
        )}
      </ul>

      <div className={styles.addTranscription}>
        <input
          type="text"
          value={newTranscription}
          onChange={(e) => setNewTranscription(e.target.value)}
          placeholder="Enter transcription to save"
          className={styles.transcriptionInput}
        />
        <button onClick={handleAddTranscription} className={styles.addButton}>
          Add Transcription
        </button>
      </div>
    </div>
  );
};

PastTranscriptions.propTypes = {
  pastTranscriptions: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of past transcriptions
  addTranscription: PropTypes.func.isRequired, // Function to add a new transcription
};

export default PastTranscriptions;

