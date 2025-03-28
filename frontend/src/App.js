import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Layout from './components/Layout';
import Photos from './pages/Photos';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/Register" element={<h1>Contact</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
