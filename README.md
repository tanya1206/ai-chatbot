# AI Chatbot

## Overview

AI Chatbot is a modern conversational web application built using React. The chatbot allows users to interact through a clean chat interface and receive AI-generated responses from a backend API. The application supports Markdown rendering, responsive design, and real-time message updates.

## Features

* Real-time chat interface
* AI-generated responses
* Markdown support for formatted responses
* Loading indicator while processing requests
* Responsive design for desktop and mobile devices
* Clean and user-friendly UI

## Tech Stack

### Frontend

* React.js
* JavaScript
* CSS3
* React Markdown

### Backend

* FastAPI (or Python Backend)
* REST API Communication

## Project Structure

```text
ai-chatbot/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── public/
├── package.json
├── README.md
└── .gitignore
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd ai-chatbot
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

Make sure the backend server is running on:

```text
http://127.0.0.1:8000
```

## How It Works

1. User enters a message.
2. The frontend sends the message to the backend API.
3. The backend processes the request and generates a response.
4. The chatbot displays the response in the chat window.
5. Markdown responses are rendered automatically.

## Future Improvements

* Voice input support
* User authentication
* Chat history storage
* Dark mode
* Multiple AI model support
* Deployment on cloud platforms

## Author

Tanya Singh

B.Tech CSE (AIML)

SGT University
