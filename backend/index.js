const app = require("./app");
const connectDatabase = require("./db/Database.js");

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

// connect database
connectDatabase();

// create server

let PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});
