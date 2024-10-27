/**
 * Formats a transcription text for improved readability.
 *
 * @param {string} text - The raw transcription text.
 * @returns {string} - The formatted transcription text.
 */
export function formatTranscription(text) {
    if (!text) return '';
  
    // Trim any unnecessary whitespace
    const trimmedText = text.trim();
  
    // Capitalize the first letter of the transcription
    const formattedText = trimmedText.charAt(0).toUpperCase() + trimmedText.slice(1);
  
    // Return the formatted transcription text
    return formattedText;
  }
  
