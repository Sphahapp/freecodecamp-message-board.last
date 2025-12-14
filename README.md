# Anonymous Message Board

A freeCodeCamp Information Security project - An anonymous message board application built with Node.js, Express, and MongoDB.

## Project Links

- **Live Solution**: [Your deployed URL here]
- **Source Code**: [Your GitHub repository URL here]

## Features

- Create and manage message boards
- Post threads and replies
- Anonymous posting with password protection
- Report and delete functionality

## Technologies Used

- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- Helmet.js (Security)

## Local Setup

1. Clone the repository:
```bash
git clone [your-repo-url]
cd freecodecamp-message-board-gomix
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
PORT=3000
DB=your_mongodb_connection_string
```

4. Start the server:
```bash
npm start
# or for development
npm run dev
```

## Deployment

This project can be deployed to various platforms:

### Render
1. Connect your GitHub repository
2. Set environment variables:
   - `PORT` (auto-set by Render)
   - `DB` (your MongoDB Atlas connection string)
3. Deploy!

### Railway
1. Connect your GitHub repository
2. Add environment variables in the dashboard
3. Deploy!

### Heroku
1. Install Heroku CLI
2. Run: `heroku create your-app-name`
3. Set environment variables: `heroku config:set DB=your_connection_string`
4. Deploy: `git push heroku main`

## Environment Variables

- `PORT`: Server port (default: 3000)
- `DB`: MongoDB Atlas connection string

## License

MIT

---

[freeCodeCamp Project](https://www.freecodecamp.org/learn/information-security/information-security-projects/anonymous-message-board)