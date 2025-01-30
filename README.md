# HNG12 STAGE 0 API

## DESCRIPTION
The application serves as a straightforward public API endpoint for HNG12 Stage 0 backend requirements. The API returns basic information in JSON format, including:
* My registered email address (HNG12 Slack workspace email)
The JSON output contains "email" which shows the registered email address (HNG12 Slack workspace email) rolled into an object of type "email." Additionally, the "current_datetime" key returns the current date and time in ISO 8601 format (UTC) also as an object, and the "github_url" key gives the GitHub URL of the project repository within an object.
* The GitHub URL of the project repository

## API DOCUMENTATION
 # Endpoint URL
   GET: https://basic-user-api-2.onrender.com/

 # Request
- Method: `GET`
- Headers: None required

 # Response Format (200 OK)
```json
{
  "email": "aliogochukwu06@gmail.com",
  "current_datetime": "2025-01-30T04:37:59Z",
  "github_url": "https://github.com/Ali-Peter/basic-user-api"
}
```

# Example Usage
Test the API using `curl`:
```sh
curl -X GET https://basic-user-api-2.onrender.com/
```
Or visit the URL in your browser.

## Setup Instructions
 # Prerequisites
- Node.js installed ([Download Here](https://nodejs.org/))
- Git installed ([Download Here](https://git-scm.com/))

 ## Steps to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/Ali-Peter/basic-user-api
   cd HNG_STAGE_0
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the server:
   ```sh
   npm run dev
   ```

4. Visit in your browser or test with Postman:
   ```
   http://localhost:3000/
   ```

## Deployment Guide
 # Deploy on Render
1. Create an account on [Render](https://render.com/)
2. Create a **new web service**
3. Connect your GitHub repository
4. Set the **Start Command** as:
   ```sh
   npm start
   ```
5. Deploy and get your **public API URL**

## Performance Considerations
- The API is designed to have a **fast response time (< 500ms)**
- Using Express.js ensures lightweight and efficient request handling

## Links
## Links
- **Project Repository:** [GitHub Repo](https://github.com/Ali-Peter/basic-user-api)
- **Hire Node.js Developers:** [Node.js Developers](https://hng.tech/hire/nodejs-developers)
