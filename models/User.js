```javascript
// Import mongoose
const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  dateRegistered: {
    type: Date,
    default: Date.now
  },
  learningProgress: [{
    topic: String,
    progress: Number
  }]
});

// Export the User model
module.exports = mongoose.model('User', UserSchema);
```
