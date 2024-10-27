// src/components/TranscriptionDisplay.js

import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Transcription.module.css'; // Importing styles for this component

const TranscriptionDisplay = ({ transcription }) => {
  return (
    <div className={styles.transcriptionContainer}>
      <h2>Transcription:</h2>
      <p className={styles.transcriptionText}>{transcription || 'Start recording to see transcription...'}</p>
    </div>
  );
};

TranscriptionDisplay.propTypes = {
  transcription: PropTypes.string.isRequired, // Ensures transcription is passed as a string
};

export default TranscriptionDisplay;

