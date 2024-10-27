// Import the global styles and Tailwind CSS
import '../styles/globals.css';
import { TranscriptionProvider } from '../context/TranscriptionContext';

/**
 * Custom App component to initialize pages.
 * 
 * @param {Object} param0 - Contains the Component to render and its pageProps.
 * @returns {JSX.Element} - Rendered page component.
 */
function MyApp({ Component, pageProps }) {
  return (
    <TranscriptionProvider>
      <Component {...pageProps} />
    </TranscriptionProvider>
  );
}

export default MyApp;

