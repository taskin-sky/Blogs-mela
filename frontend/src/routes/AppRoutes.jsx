import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from '../pages/HomePage';
import BlogsPage from '../pages/BlogsPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import MainLayout from '../layouts/MainLayout';
import BlogDetailsPage from '../pages/BlogDetailsPage';
import CreateBlogPage from '../pages/CreateBlogPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import TermsAndServicePage from '../pages/TermsandServicePage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="blogs/:blogId" element={<BlogDetailsPage />} />
        <Route path="create-blog" element={<CreateBlogPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<SignUpPage />} />
        <Route path="terms" element={<TermsAndServicePage />} />

        <Route path="privacy" element={<PrivacyPolicyPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
