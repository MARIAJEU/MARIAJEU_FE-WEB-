// Test.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Test = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Food 페이지로 이동
        navigate('/food', { state: { id: 1 }});
    };

    return (
        <div>
            <button onClick={handleClick}>Go to Food Page</button>
        </div>
    );
};

export default Test;
