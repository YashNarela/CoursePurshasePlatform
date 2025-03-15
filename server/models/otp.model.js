const mongoose = require("mongoose");

const mailSender = require("../utilis/mailsender");
const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5,
  },
});

async function sendVerificationEmail(email, otp) {
  try {
    let mailResponse = await mailSender(
      email,
      "verification email from study",
      otp
    );

    console.log("email send successfully", mailResponse);
  } catch (error) {
    console.log("error occur while sending mail", error);

    throw error;
  }
}

OTPSchema.pre("save", async function (next) {
  await sendVerificationEmail(this.email, this.otp);
  next();
});

const OTP = mongoose.model("OTP", OTPSchema);
