const express = require("express");
const fs = require("fs");
const User = require("./model/User");

const router = express.Router();

// Generate portfolio
router.post("/generate", async (req, res) => {
  try {
    const { name, role, phno, bio, email, photo, projects } = req.body;

    // Save user data to MongoDB
    const newUser = new User({ name, role, phno, bio, email, photo, projects });
    await newUser.save();

    // Select a random template
    const templates = ["template1.html", "template2.html", "template3.html"];
    const randomTemplate =
      templates[Math.floor(Math.random() * templates.length)];

    // Read the selected template
    const templatePath = `./templates/${randomTemplate}`;
    let template = fs.readFileSync(templatePath, "utf8");

    // Replace placeholders with user data
    const projectsStr = Array.isArray(projects) ? projects.join(", ") : projects;
    template = template
      .replace(/{{name}}/g, name)
      .replace(/{{role}}/g, role)
      .replace(/{{phno}}/g, phno)
      .replace(/{{bio}}/g, bio)
      .replace(/{{email}}/g, email)
      .replace(/{{photo}}/g, photo)
      .replace(/{{projects}}/g, projectsStr);

    // Set user ID in response header
    res.setHeader('user-id', newUser._id.toString());
    res.send(template);
  } catch (error) {
    console.error("Error generating portfolio:", error);
    res.status(500).send("Server error");
  }
});
router.get("/regenerate/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Select a new random template
    const templates = ["template1.html", "template2.html", "template3.html"];
    const randomTemplate =
      templates[Math.floor(Math.random() * templates.length)];

    // Read the selected template
    const templatePath = `./templates/${randomTemplate}`;
    let template = fs.readFileSync(templatePath, "utf8");

    // Replace placeholders with user data
    const projectsStr = Array.isArray(user.projects) ? user.projects.join(", ") : user.projects;
    template = template
      .replace(/{{name}}/g, user.name)
      .replace(/{{role}}/g, user.role)
      .replace(/{{phno}}/g, user.phno)
      .replace(/{{bio}}/g, user.bio)
      .replace(/{{email}}/g, user.email)
      .replace(/{{photo}}/g, user.photo)
      .replace(/{{projects}}/g, projectsStr);

    res.send(template);
  } catch (error) {
    console.error("Error regenerating portfolio:", error);
    res.status(500).send("Server error");
  }
});
module.exports = router;
