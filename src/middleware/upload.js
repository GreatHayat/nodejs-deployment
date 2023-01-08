const multer = require("multer");

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}.${file.originalname.split(".")[1]}`);
  },
});

const imageFilter = (req, file, cb) => {
  if (file.mimetype.includes("image")) {
    cb(null, true);
  } else {
    cb({ message: "Only Images are allowed to upload" });
  }
};

const uploadFile = multer({
  storage: diskStorage,
  fileFilter: imageFilter,
  limits: { fileSize: 2 * 1024 * 1024 },
});

module.exports = uploadFile;
