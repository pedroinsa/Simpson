import React from 'react'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { Landing } from './components/Landing'
import './App.css'

export const AppRoutes = () => {
    return (
        <HashRouter>
            <div className="AppRoutes">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/quiz" element={<App />} />

                </Routes>
            </div>
        </HashRouter>
    )
}
