import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Photos from "./pages/Photos";
import Posts from "./pages/Postspage";
import Contacts from "./pages/Contactspage";
import "./style.scss";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="posts" element={<Posts />} />
          <Route path="photos" element={<Photos />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
