```javascript
// Import axios for making HTTP requests
const axios = require('axios');

// OpenAI API endpoint
const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

// OpenAI API key from environment variables
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Create an axios instance for OpenAI API
const openai = axios.create({
  baseURL: OPENAI_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OPENAI_API_KEY}`
  }
});

// Export the axios instance
module.exports = openai;
```
