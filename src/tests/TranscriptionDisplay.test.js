// src/tests/TranscriptionDisplay.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import TranscriptionDisplay from '../components/TranscriptionDisplay';

describe('TranscriptionDisplay', () => {
  it('renders correctly with transcription', () => {
    const transcription = "This is a test transcription."; // Sample transcription text
    render(<TranscriptionDisplay transcription={transcription} />); // Render component with transcription
    
    const transcriptionElement = screen.getByText(transcription); // Get the text element
    expect(transcriptionElement).toBeInTheDocument(); // Check if transcription is displayed
  });

  it('renders correctly with no transcription', () => {
    render(<TranscriptionDisplay transcription="" />); // Render component with empty transcription
    
    const messageElement = screen.getByText(/no transcription available/i); // Check for no transcription message
    expect(messageElement).toBeInTheDocument(); // Verify message is displayed
  });

  it('renders correctly with whitespace transcription', () => {
    render(<TranscriptionDisplay transcription="   " />); // Render with whitespace
    
    const messageElement = screen.getByText(/no transcription available/i); // Check for no transcription message
    expect(messageElement).toBeInTheDocument(); // Verify message is displayed
  });
});

