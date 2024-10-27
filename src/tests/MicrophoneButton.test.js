// src/tests/MicrophoneButton.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MicrophoneButton from '../components/MicrophoneButton';
import { useRecorder } from '../hooks/useRecorder';

// Mock the useRecorder hook
jest.mock('../hooks/useRecorder');

describe('MicrophoneButton', () => {
  beforeEach(() => {
    useRecorder.mockReturnValue({
      isRecording: false,
      startRecording: jest.fn(),
      stopRecording: jest.fn(),
    });
  });

  it('renders correctly', () => {
    render(<MicrophoneButton />);
    const button = screen.getByRole('button', { name: /record/i });
    expect(button).toBeInTheDocument(); // Check if the button is rendered
  });

  it('calls startRecording when button is clicked and not recording', () => {
    useRecorder.mockReturnValue({
      isRecording: false,
      startRecording: jest.fn(),
      stopRecording: jest.fn(),
    });

    render(<MicrophoneButton />);
    const button = screen.getByRole('button', { name: /record/i });

    fireEvent.click(button); // Simulate button click

    expect(useRecorder().startRecording).toHaveBeenCalled(); // Verify startRecording was called
  });

  it('calls stopRecording when button is clicked and is recording', () => {
    useRecorder.mockReturnValue({
      isRecording: true,
      startRecording: jest.fn(),
      stopRecording: jest.fn(),
    });

    render(<MicrophoneButton />);
    const button = screen.getByRole('button', { name: /stop/i }); // Button changes to "Stop" when recording

    fireEvent.click(button); // Simulate button click

    expect(useRecorder().stopRecording).toHaveBeenCalled(); // Verify stopRecording was called
  });

  it('displays the correct button text based on recording state', () => {
    // Test when not recording
    useRecorder.mockReturnValue({
      isRecording: false,
      startRecording: jest.fn(),
      stopRecording: jest.fn(),
    });

    render(<MicrophoneButton />);
    expect(screen.getByRole('button', { name: /record/i })).toBeInTheDocument(); // Should display "Record"

    // Test when recording
    useRecorder.mockReturnValue({
      isRecording: true,
      startRecording: jest.fn(),
      stopRecording: jest.fn(),
    });

    render(<MicrophoneButton />);
    expect(screen.getByRole('button', { name: /stop/i })).toBeInTheDocument(); // Should display "Stop"
  });
});

