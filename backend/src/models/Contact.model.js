import { model, Schema } from 'mongoose';

const contactSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Contact = model('Contact', contactSchema);

export default Contact;
