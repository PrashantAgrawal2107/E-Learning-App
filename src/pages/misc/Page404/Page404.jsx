import React from 'react';
import style from './Page404.module.css'; // Import CSS module

import { useNavigate } from 'react-router-dom';

export const Page404 = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate('/');
  };

  return (
    <div className={`${style['not-found']} ${style['page']}`}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="not found"
        className={style['not-found__image']}
      />

      <button className={style['not-found__button']} onClick={back}>
        Back to Home
      </button>
    </div>
  );
};
