const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://admin:admin@cluster0.fcsx5xy.mongodb.net/?retryWrites=true&w=majority";
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connect to mongoDB");
  } catch (error) {
    console.log(error);
  }
}

connect();

app.listen(5000, () => {
  console.log("Sever started on 5000");
});

require("./Schema/User");
const User = mongoose.model("userInfo");
app.post("/register", async (req, res) => {
  const { name, email, password, adress, phone } = req.body;
  try {
    const oldUser = User.findOne([email]);
    if (oldUser) {
      res.send({ error: "usuario já existe." });
    } else {
      await User.create({
        name,
        email,
        password,
        adress,
        phone,
      });
      res.send({ status: "ok" });
    }
  } catch (error) {
    res.send({ status: error });
  }
});
