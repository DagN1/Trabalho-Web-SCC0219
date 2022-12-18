const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "oweinf9eeunfe23o4m2o3fgim209tgm30r4gme903irgm";
const allowedOrigins = ["http://localhost:5000", "http://localhost:3000"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
app.use(express.json());

const uri =
  "mongodb+srv://admin:admin@cluster0.fcsx5xy.mongodb.net/?retryWrites=true&w=majority";
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Banco conectado.");
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
    await User.create({
      name,
      email,
      password,
      adress,
      phone,
    });

    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: error });
  }
});

app.post("/loginUser", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (password == user.password) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Senha incorreta." });
});

app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});

require("./Schema/Product");
const Product = mongoose.model("productInfo");

app.post("/createProduct", async (req, res) => {
  const { price, image, name, description, sold, stock } = req.body;

  const product = await Product.findOne({ name });
  if (!product) {
    try {
      await Product.create({
        name,
        description,
        sold,
        stock,
        price,
        image,
      });
      res.send({ status: "ok" });
    } catch (error) {
      res.send({ status: error });
    }
  }
});

app.post("/listProduct", async (req, res) => {
  try {
    Product.find({})
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});

// export const deleteProduct = async (id) => {
//   return await Product.db().collection("productInfo").deleteOne({ _id: id });
// };

app.post("/deleteProduct", async (req, res, id) => {
  try {
    Product.deleteOne({ _id: id })
      .then(() => {
        res.send({ status: "ok" });
      })
      .catch(() => {
        res.send({ status: "error" });
      });
  } catch (error) {}
});
