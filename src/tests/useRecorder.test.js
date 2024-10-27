// src/tests/useRecorder.test.js

import { renderHook, act } from '@testing-library/react-hooks';
import { useRecorder } from '../hooks/useRecorder';

describe('useRecorder', () => {
  it('should initialize with isRecording set to false', () => {
    const { result } = renderHook(() => useRecorder());
    expect(result.current.isRecording).toBe(false); // Check if initial state is false
  });

  it('should start recording when startRecording is called', async () => {
    const { result } = renderHook(() => useRecorder());
    
    await act(async () => {
      result.current.startRecording(); // Start recording
    });
    
    expect(result.current.isRecording).toBe(true); // Check if state is updated
  });

  it('should stop recording when stopRecording is called', async () => {
    const { result } = renderHook(() => useRecorder());
    
    await act(async () => {
      result.current.startRecording(); // Start recording first
    });
    
    await act(async () => {
      result.current.stopRecording(); // Then stop recording
    });
    
    expect(result.current.isRecording).toBe(false); // Verify if recording stopped
  });

  it('should handle errors gracefully', async () => {
    const { result } = renderHook(() => useRecorder());
    
    // Mock the MediaRecorder to throw an error
    jest.spyOn(window, 'MediaRecorder').mockImplementation(() => {
      return {
        start: jest.fn().mockImplementation(() => { throw new Error('Recording failed'); }),
        stop: jest.fn(),
      };
    });
    
    await act(async () => {
      try {
        result.current.startRecording(); // Try to start recording
      } catch (error) {
        expect(error.message).toBe('Recording failed'); // Check for error message
      }
    });
    
    // Restore original MediaRecorder implementation
    window.MediaRecorder.mockRestore();
  });
});

