const mongoose = require("mongoose");

const SharkAlert = new mongoose.Schema(
  {
    localisation: {
      type: String,
      required: [true, "Please add localisation"],
      trim: true,
      maxlength: [20, "Name can not be more than 20 characters"],
    },
  
    reportingDate: {
        type: Date,
        required: true,
        min: "2022-01-01",
        max: "2100-01-01",
      },
 
      confirmed: {
        type: Boolean,
        default: false,
        required: true,
      },
  },
  { timestamps: true },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);



module.exports = mongoose.model("SharkAlert", SharkAlertSchema);
