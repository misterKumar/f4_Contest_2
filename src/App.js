import React, { useEffect, useContext } from 'react';
import Signup from './Componenet/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Componenet/Profile';
import CreateContext from './Context/CreateContext';

const App = () => {
    const { setUserId } = useContext(CreateContext);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            setUserId(userData.id);
        }
    }, []);

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Signup />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
