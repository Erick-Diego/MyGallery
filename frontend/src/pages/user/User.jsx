import React, { useState, useEffect } from 'react';
import { Title } from './styles'
import { getUserInfo } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const User = () => {

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
        <Title>User</Title>
    </>
  )
}

export default User;