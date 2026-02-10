import express from 'express';
import ContactController from '../controllers/contact.controller.js';

const router = express.Router();

router.post('/create-contact', ContactController.createContact);

export default router;
