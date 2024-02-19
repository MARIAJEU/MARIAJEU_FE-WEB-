import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// AuthProvider 컴포넌트는 로그인 정보를 제공하고 관리합니다.
const AuthProvider = ({ children }) => {
    // 로그인 상태를 useState 훅을 사용하여 관리합니다.
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const [username, setUsername] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');

    // 로그인 함수를 정의합니다.
    const login = (userId, username) => {
        setIsLoggedIn(true);
        setUserId(userId);
        setUsername(username);
    };

    // 로그아웃 함수를 정의합니다.
    const logout = () => {
        setIsLoggedIn(false);
        setUserId(null);
        setUsername('');
    };

    const url = 'http://43.202.194.137:8080';
    const data = {
        userName: 'luna1234',
        password: '!Luna1234'
    }

    useEffect(() => {
        axios.post(url+'/auth/login', data)
            .then(response => {
                // 요청이 성공했을 때 수행할 작업
                // console.log('POST 요청이 성공했습니다.');
                // console.log('응답 데이터:', response.data);
                setAccessToken(response.data.data.accessToken);
                setRefreshToken(response.data.data.refreshToken);
            })
            .catch(error => {
                // 요청이 실패했을 때 수행할 작업
                console.error('POST 요청이 실패했습니다:', error);
            })
    }, []);

    const contextValue = {
        isLoggedIn,
        url,
        userId,
        username,
        accessToken,
        refreshToken,
        login,
        logout,
    };

    return (
        // AuthContext.Provider를 사용하여 로그인 정보를 하위 컴포넌트에 제공합니다.
        <AuthContext.Provider value={contextValue}>
            {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { key: index });
        })}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };