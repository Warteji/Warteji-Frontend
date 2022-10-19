import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/contents/NavBar';
import SectionOption from './components/templates/SectionOption';
import Chef from './pages/Chef';
import Saved from './pages/Saved';
import Order from './pages/Order';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<SectionOption />} />
                    <Route path="/chef" element={<Chef />} />
                    <Route path="/saved" element={<Saved />} />
                    <Route path="/order" element={<Order />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
