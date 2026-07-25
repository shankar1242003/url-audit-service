# 🚀 Production URL Audit Service

A production-ready URL Audit Service built with **Node.js** and **Express.js**.

The API audits a given website and returns useful information such as:

- Website Title
- Meta Description
- HTTP Status
- Response Time
- HTTPS Status
- Number of Links
- Number of Images
- Content Type
- Server Information

---

# 📌 Features

- RESTful API
- Express.js Architecture
- Environment Variable Configuration
- Joi Request Validation
- Global Error Handling
- Custom API Error Class
- Winston Logging
- Request ID Middleware
- In-Memory Caching (NodeCache)
- Rate Limiting
- Concurrency Control (p-limit)
- Automated Testing (Jest + Supertest)
- Docker Support
- GitHub Actions CI

---

# 🛠 Technologies Used

- Node.js
- Express.js
- Axios
- Cheerio
- Joi
- Winston
- NodeCache
- Express Rate Limit
- p-limit
- UUID
- Jest
- Supertest
- Docker
- GitHub Actions

---

# 📂 Project Structure

```
url-audit-service
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── src/
│   ├── cache/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── test/
├── logs/
├── Dockerfile
├── .dockerignore
├── .gitignore
├── package.json
└── README.md
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/shankar1242003/url-audit-service.git
```

Move into the project:

```bash
cd url-audit-service
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
REQUEST_TIMEOUT=5000
CACHE_TTL=300
MAX_CONCURRENT_REQUESTS=5
NODE_ENV=development
```

Start the server:

```bash
npm run dev
```

---

# 📡 API Endpoint

## Audit URL

### POST

```
/api/v1/audit
```

Request Body

```json
{
  "url": "https://github.com"
}
```

Example Response

```json
{
  "success": true,
  "message": "URL audited successfully.",
  "data": {
    "cached": false,
    "audit": {
      "url": "https://github.com",
      "status": 200,
      "statusText": "OK",
      "responseTime": "1369 ms",
      "title": "...",
      "description": "...",
      "https": true,
      "links": 144,
      "images": 24
    }
  }
}
```

---

# 🧪 Running Tests

```bash
npm test
```

---

# 🐳 Docker

Build Image

```bash
docker build -t url-audit-service .
```

Run Container

```bash
docker run -p 5001:5000 url-audit-service
```

---

# 🔄 GitHub Actions

This project uses GitHub Actions for Continuous Integration.

Every push automatically:

- Installs dependencies
- Runs automated tests
- Reports success or failure

---

# 📈 Future Improvements

- Lighthouse Performance Audit
- SSL Certificate Information
- SEO Score
- Broken Link Detection
- Sitemap Detection
- robots.txt Analysis
- Security Header Checks

---

# 👨‍💻 Author

Shankar Rawool

GitHub:
https://github.com/shankar1242003
