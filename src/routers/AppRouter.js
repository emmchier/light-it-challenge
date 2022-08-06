import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/atomic-design/molecules/navbar';
import Sidebar from '../components/atomic-design/molecules/sidebar';

import HomePage from '../pages/home';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
