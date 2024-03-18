import React, { useState } from 'react';
import axios from 'axios';

function TryModel() {
  const [prompt, setPrompt] = useState('');
  const [maxLength, setMaxLength] = useState(50);
  const [generatedText, setGeneratedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleMaxLengthChange = (e) => {
    const inputValue = parseInt(e.target.value);
    const maxValue = 90; 

    if (!isNaN(inputValue) && inputValue >= 0) {
      if (inputValue > maxValue) {
        setMaxLength(maxValue);
      } else {
        setMaxLength(inputValue);
      }
    } else {
      setMaxLength(0);
    }
  };

  const handleReset = () => {
    setPrompt('');
    setMaxLength(50); 
    setGeneratedText('');
    setError('');
  };

  const handleGenerate = async () => {
    setLoading(true);
    setError('');

    try {
      if (prompt.trim() === '') {
        throw new Error('Prompt cannot be empty.');
      }

      if (isNaN(maxLength) || maxLength <= 0) {
        throw new Error('Max Length must be a positive integer.');
      }

      const response = await axios.post(
        'https://api-inference.huggingface.co/models/gpt2',
        { inputs: prompt, parameters: { max_new_tokens: maxLength } },
        {
          headers: {
            'Authorization': 'Bearer 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', 
            'Content-Type': 'application/json'
          }
        }
      );
      setGeneratedText(response.data[0].generated_text);
    } catch (error) {
      console.error('Error generating text:', error);
      setError('Failed to generate text. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="container">
        <h1>Try out Language Model</h1>
        <p>Users can interact with the LLM by providing a prompt and specifying the maximum length of the generated text. The LLM then leverages its language understanding capabilities to produce text that extends from the provided prompt, offering users a glimpse into the impressive capabilities of modern AI language models.</p>
        <div className="input-field">
            <label htmlFor="prompt">Enter Prompt:</label>
            <input
            type="text"
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="input"
            />
        </div>
        <div className="input-field">
            <label htmlFor="maxLength">Max Length:</label>
            <input
            type="number"
            id="maxLength"
            value={maxLength}
            onChange={handleMaxLengthChange}
            min="0"
            max="90" 
            className="input"
            />
        </div>
        <button
            onClick={handleGenerate}
            disabled={loading}
            className={`button generate-button ${loading ? 'disabled' : ''}`}
        >
            {loading ? 'Generating...' : 'Generate Text'}
        </button>
        <button onClick={handleReset} className="button reset-button">Reset</button>
        {error && <div className="error-message">{error}</div>}
        {generatedText && (
            <div className="generated-text">
            <h2>Generated Text:</h2>
            <p>{generatedText}</p>
            </div>
        )}
        </div>

  );
}

export default TryModel;



