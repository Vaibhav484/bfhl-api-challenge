const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/bfhl', (req, res) => {
  res.status(200).json({
    "operation_code": 1
  });
});

app.post('/bfhl', (req, res) => {
    const data = req.body.data;

    if (!Array.isArray(data)) {
        return res.status(400).json({
            "is_success": false,
            "error": "Invalid input format"
        });
    }

    // Separate numbers and alphabets
    const numbers = data.filter(item => /^\d+$/.test(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));

    // Find the "highest" alphabet
    let highest_alphabet = [];
    if (alphabets.length > 0) {
        highest_alphabet.push(alphabets.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))[0]);
    }

    const response = {
        "is_success": true,
        "user_id": "vaibhav_rajput",
        "email": "vaibhavrajput.2020@vitbhopal.ac.in",
        "roll_number": "20BCE10911",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_alphabet": highest_alphabet
    };

    res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
