import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/atomic-design/molecules/navbar';
import Sidebar from '../components/atomic-design/molecules/sidebar';
import SidebarMenu from '../components/atomic-design/molecules/sidebar/sidebar-menu';

import HomePage from '../pages/home';

const AppRouter = () => {
  // const [showMenu, setShowMenu] = useState(false);

  // const handleShowMenu = () => setShowMenu(!showMenu);

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <SidebarMenu /* shoMenu={showMenu} setShowMenu={setShowMenu}*/ />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
