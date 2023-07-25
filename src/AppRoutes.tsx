import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { Landing } from './components/Landing'
import './App.css'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <div className="AppRoutes">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/quiz" element={<App />} />

                </Routes>
            </div>
        </BrowserRouter>
    )
}
