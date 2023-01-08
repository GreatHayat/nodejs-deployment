const { Router } = require("express");
const asyncHandler = require("../../middleware/async");
const upload = require("../../middleware/upload");
const uploadFileToS3 = require("../../utils/helpers");
const router = Router();

router.get("/", (req, res) => {
  res.status(200).send({ message: "We are learning DevOps Basics!" });
});

router.post(
  "/",
  upload.single("file"),
  asyncHandler(async (req, res) => {
    const response = await uploadFileToS3(req.file);
    console.log("Response", response);

    res.status(200).send({ message: "success", path: req.file.filename });
  })
);

module.exports = router;
