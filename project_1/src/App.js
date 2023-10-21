import React from 'react';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import Content from './Components/Content';

export default function App() {
    return (
        <div>
            <SignupPage />
            <LoginPage />
            <Content />
        </div>
    );
}
