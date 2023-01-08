const fs = require("fs");
const { S3 } = require("aws-sdk");

const uploadFileToS3 = async (file) => {
  const { originalname } = file;
  const fileStream = fs.createReadStream(file.path);

  const s3 = new S3();

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `uploads/${Date.now()}.${originalname.split(".")[1]}`,
    Body: fileStream,
  };
  try {
    await s3.upload(params).promise();
    fs.unlinkSync(file.path);
    const response = s3.getSignedUrl("putObject", params);
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = uploadFileToS3;
