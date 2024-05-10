import React, { useState, useEffect } from 'react';
import { 
  Title, 
  Button 
} from './styles';
import { getUserInfo } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/navbar/Nav';

const Principal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        await getUserInfo();
      } catch (error) {
        navigate('/');
      }
    };
    fetchUserInfo();
  }, [navigate]);

  return (
    <>
      <Nav/>
    </>
  );
};

export default Principal;
