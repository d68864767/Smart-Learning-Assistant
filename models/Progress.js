```javascript
// Import mongoose
const mongoose = require('mongoose');

// Define the Progress schema
const ProgressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  progress: {
    type: Number,
    required: true,
    default: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

// Export the Progress model
module.exports = mongoose.model('Progress', ProgressSchema);
```
