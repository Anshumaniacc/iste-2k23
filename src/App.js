import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home';
import EventPage from "./pages/eventsPage"
import MembersPage from "./pages/membersPage.jsx"
import ImageGalleryPage from './pages/ImageGalleryPage';
import GalleryPageWrapper from './components/GalleryPageWrapper';
import Navbar from './components/navbar';

const App = () => {

  return (
    <>
    {/* <DarkMode /> */}
    <Router>
    <Navbar />
      <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/blogs" element={<MembersPage />} />
        <Route
          path="/gallery"
          element={
            <GalleryPageWrapper>
              <ImageGalleryPage />
            </GalleryPageWrapper>
          }
        />
      </Routes>
    </Router>
    </>
  );
};

export default App;
