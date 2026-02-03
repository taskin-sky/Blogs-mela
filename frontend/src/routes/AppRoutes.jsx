import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from '../pages/HomePage';
import BlogsPage from '../pages/BlogsPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import MainLayout from '../layouts/MainLayout';
import BlogDetailsPage from '../pages/BlogDetailsPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="blogs/:blogId" element={<BlogDetailsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
