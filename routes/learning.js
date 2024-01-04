```javascript
// Import required modules
const express = require('express');
const router = express.Router();
const openai = require('../config/openai');

// Route for generating explanations
router.post('/explanation', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await openai.post('', { prompt: prompt, max_tokens: 200 });
    res.json(response.data.choices[0].text.trim());
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route for generating practice questions
router.post('/practice-question', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await openai.post('', { prompt: prompt, max_tokens: 200 });
    res.json(response.data.choices[0].text.trim());
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route for generating solutions
router.post('/solution', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await openai.post('', { prompt: prompt, max_tokens: 200 });
    res.json(response.data.choices[0].text.trim());
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Export the router
module.exports = router;
```
