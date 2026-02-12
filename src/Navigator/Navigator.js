import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Profile from '../Profile/Profile';
import Homepage2 from '../Homepage/Homepage2';
import Homepage1 from '../Homepage/Homepage1';
import Map from '../Map/Map';
import Login from '../Login/Login';
import Forgot from '../Forgot/Forgot';
import Recommend from '../Recommend/Recommend';

const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage1 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/map" element={<Map />} />
        <Route path="/homepage2" element={<Homepage2 />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgot" element={<Forgot/>} />
        <Route path="/recommender" element={<Recommend/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
