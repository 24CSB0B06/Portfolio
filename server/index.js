import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:5173';
const DATA_DIR = path.join(__dirname, process.env.DATA_PATH || './data');

app.use(cors({
  origin: ALLOWED_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

const readJsonFile = (filename) => {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent || '[]');
};

const writeJsonFile = (filename, data) => {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Portfolio Backend API is running',
    version: '1.0.0'
  });
});

app.get('/api/projects', (req, res, next) => {
  try {
    const projects = readJsonFile('projects.json');
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
});

app.get('/api/projects/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const projects = readJsonFile('projects.json');
    const project = projects.find((p) => p.id === id);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
});

app.post('/api/contact', (req, res, next) => {
  try {
    const { name, email, message } = req.body || {};

    const missingFields = [];
    if (!name || typeof name !== 'string' || !name.trim()) missingFields.push('name');
    if (!email || typeof email !== 'string' || !email.trim()) missingFields.push('email');
    if (!message || typeof message !== 'string' || !message.trim()) missingFields.push('message');

    if (missingFields.length > 0) {
      return res.status(400).json({
        error: `Missing required field(s): ${missingFields.join(', ')}`,
        missingFields
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        error: 'Invalid email address format. Email must contain "@" and a valid domain.',
        field: 'email'
      });
    }

    const newSubmission = {
      id: `submission_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString()
    };

    const contacts = readJsonFile('contacts.json');
    contacts.push(newSubmission);
    writeJsonFile('contacts.json', contacts);

    res.status(201).json({
      success: true,
      message: 'Contact form submission received successfully!',
      data: newSubmission
    });
  } catch (error) {
    next(error);
  }
});

app.get('/api/contact', (req, res, next) => {
  try {
    const contacts = readJsonFile('contacts.json');
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
});

app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.originalUrl} not found` });
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  const statusCode = err.status || err.statusCode || 500;
  res.status(statusCode).json({
    error: err.message || 'Internal Server Error',
    status: statusCode
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

