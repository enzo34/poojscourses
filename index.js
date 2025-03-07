const express = require("express");
const connectDb = require("./src/config/database");
const userRoutes = require("./src/routes/User_Routes");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
