import Contact from '../models/Contact.model.js';

const createContact = async (req, res, next) => {
  try {
    const { fullName, email, subject, message } = req.body;

    if (!fullName || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: 'Missing required fields' });
    }

    const contact = await Contact.create({
      fullName,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: 'MESSAGE SEND SUCCESSFULLY',
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'SENDING MESSAGE FAILED',
      error: error.message,
    });
  }
};

const ContactController = {
  createContact,
};

export default ContactController;
