const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const multer = require('multer');
const pdfParse = require('pdf-parse'); // For PDF parsing
const fs = require('fs');
const mongoose = require('mongoose');
const { extractData } = require('./resumeParser');


const upload = multer({ dest: 'uploads/' });

// MongoDB Model
const ResumeSchema = new mongoose.Schema({
  filePath: String,
  parsedData: Object,
});

const Resume = mongoose.model('Resume', ResumeSchema);

// Upload Resume and Parse Data
app.post('/uploads', upload.single('resume'), async (req, res) => {
  try {
    const filePath = req.file.path;
    const fileBuffer = fs.readFileSync(filePath);

    let text;
    if (req.file.mimetype === 'application/pdf') {
      const parsed = await pdfParse(fileBuffer);
      text = parsed.text;
    } else {
      return res.status(400).send('Unsupported file format');
    }

    // Extract data
    const parsedData = extractData(text);

    // Save to MongoDB
    const resume = new Resume({ filePath, parsedData });
    await resume.save();

    res.json(parsedData);
  } catch (error) {
    res.status(500).send('Error parsing resume');
  }
});

// MongoDB Connection
mongoose.connect("mongodb+srv://khushichoudhary1107:Khushi123@cluster0.n31bj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(5000, () => console.log('Server running on port 5000'));
