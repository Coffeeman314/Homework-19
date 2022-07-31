import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Photos from "./pages/Photos";
import Posts from "./pages/Postspage";
import Contacts from "./pages/Contactspage";
import "./style.scss";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Homework-19" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/Homework-19/posts" element={<Posts />} />
          <Route path="/Homework-19/photos" element={<Photos />} />
          <Route path="/Homework-19/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
