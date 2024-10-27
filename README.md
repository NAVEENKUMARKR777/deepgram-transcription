# Audio Transcription App

## Description

The Audio Transcription App allows users to record audio and transcribe it in real-time using the Deepgram API. The application provides an intuitive interface for recording audio, displaying the transcribed text, and saving past transcriptions.

## Features

- Record audio using your microphone.
- Real-time transcription using Deepgram.
- Display current transcription in the UI.
- Save and display past transcriptions.
- Responsive design for various screen sizes.

## Technologies Used

- **Frontend**: React, Next.js
- **Styling**: Tailwind CSS 
- **Audio Handling**: Web Audio API / MediaRecorder API
- **Transcription Service**: Deepgram API
- **Testing**: Jest, React Testing Library

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NAVEENKUMARKR777/audio-transcription-app.git
   cd audio-transcription-app

2.  Install dependencies:


    ```bash
    npm install
    ```

3.  Create a `.env.local` file in the root directory and add your Deepgram API key:

    ```REACT_APP_DEEPGRAM_API_KEY=your_deepgram_api_key_here

Running the Application
To start the development server, run:
npm start
Visit http://localhost:3000 in your browser to use the application.

Running Tests
To run the tests, use:
npm test

Usage
Click the microphone button to start recording your audio.
After you stop recording, the app will display the transcribed text in real-time.
Click the "Save Transcription" button to save the current transcription for future reference.
View past transcriptions displayed below.

