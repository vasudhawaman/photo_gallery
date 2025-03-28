const express = require('express');
const cors = require('cors');
const multer = require('multer')
const fs = require("fs");
const unzipper = require("unzipper"); 
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        const new_name = 
      cb(null, Date.now() + "-" + file.originalname) // change to keep track 
    },
  });
  const uploadStorage = multer({ storage: storage })
 app.use(cors(
      {
          credentials: true,
          origin:
                process.env.NODE_ENV === "production"
                    ? process.env.FRONTEND
                    : "http://localhost:3000",
      }
 ));
 

// Function to get images in a structured format
const getImagesInFolders = (dirPath) => {
    let result = {};

    fs.readdirSync(dirPath).forEach(folder => {
        const folderPath = path.join(dirPath, folder);
        
        if (fs.statSync(folderPath).isDirectory()) {
            let imagesBase64 = {};
            fs.readdirSync(folderPath).forEach(file => {
                if (file.endsWith(".png") || file.endsWith(".jpg") || file.endsWith(".jpeg")) {
                    const filePath = path.join(folderPath, file);
                    const imageBuffer = fs.readFileSync(filePath);
                    const base64Image = imageBuffer.toString("base64");
                    imagesBase64[file] = base64Image;  // Store filename with base64
                }
            });
            result[folder] = imagesBase64;  // Store folder and its images
        }
    });

    return result;
};
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/images/:username", async (req, res) => {
    let imagesBase64 = {};
    const username = req.params.username;
    console.log(username);
    const current_p = `/Users/vasudha/photo_gallery/backend/${username}`;
    const imagesData = getImagesInFolders(current_p);
    res.json(imagesData);
});

app.post("/upload/single", uploadStorage.single("file"), (req, res) => {
    console.log(req.file);
   const zipPath = req.file.path;
   const user_name = req.body.username;
    const extractPath = path.join(__dirname, user_name);
    fs.createReadStream(zipPath)
        .pipe(unzipper.Extract({ path:  extractPath }))
        .on("close", () => {
            fs.unlinkSync(zipPath); 
            res.status(200).json({ message: "ZIP extracted successfully!", path: extractPath });
        })
        .on("error", (err) => {
            console.error("Unzip error:", err);
            res.status(500).json({ message: "Error extracting ZIP." });
        });
  });
app.listen(5000, () => {
     console.log("Listening on port 5000");
});