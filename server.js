const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "aliogochukwu06@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Ali-Peter/basic-user-api"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});