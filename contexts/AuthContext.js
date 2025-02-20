'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import config from '@/configuration/config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [accessToken, setAccessToken] = useState(Cookies.get('access_token'));
  const [refreshToken, setRefreshToken] = useState(Cookies.get('refresh_token'));

  // const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  // const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));

  const login = (access, refresh) => {

    // localStorage.setItem('accessToken', access);
    // localStorage.setItem('refreshToken', refresh);

    Cookies.set('access_token', access);
    Cookies.set('refresh_token', refresh);
    

    setAccessToken(access);
    setRefreshToken(refresh);
  };

  const logout = () => {

    // localStorage.removeItem('accessToken');
    // localStorage.removeItem('refreshToken');

    Cookies.remove('access_token');
    Cookies.remove('refresh_token');

    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
  };

  const refreshAccessToken = async () => {
    try {
      const response = await axios.post(`${config.api_host}/api/users/token/refresh/`, {
        refresh: refreshToken,
      });
      setAccessToken(response.data.access);

      // localStorage.setItem('accessToken', response.data.access);
      Cookies.set('access_token', response.data.access);

    } catch (error) {
      console.error('Failed to refresh token:', error);
      logout();
    }
  };

  useEffect(() => {
    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      axios.get(`${config.api_host}/api/users/me/`)
        .then(response => setUser(response.data))
        .catch(error => {
          console.error('Failed to fetch user data:', error);
          logout();
        });
    }
  }, [accessToken]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (refreshToken) {
        refreshAccessToken();
      }
    }, config.AccessTokenTTL); // Refresh the access token
    return () => clearInterval(interval);
  }, [refreshToken]);

  return (
    <AuthContext.Provider value={{ user, accessToken, refreshToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);