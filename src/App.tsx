import { BrowserRouter, Routes, Route } from 'react-router';

import Login from './pages/login'
import Home from './pages/home';

import './App.css'

function App() {
    return (
        <>
            <section id='viewContainer'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </section>
        </>
    )
}

export default App
