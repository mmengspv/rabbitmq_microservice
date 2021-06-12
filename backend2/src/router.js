import express from "express";
import firebase from "../db.js";

const router = express.Router({ strict: true, caseSensitive: true });

router.get("/", (req, res) => {
  res.send("Second Backend is running");
});

router.post("/", async (req, res) => {
  try {
    const {userId, name, email } = req.body;
    await firebase
      .database()
      .ref("users/" + userId)
      .set({
        name: name,
        email: email,
      });
    res.send("Add new user success");
  } catch (e) {
    console.log(e.message());
  }
});

export default router;
