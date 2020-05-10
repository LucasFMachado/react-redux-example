import React from 'react';

import { LogoReduxStore } from './styles';
import reduxLogo from '../../assets/images/reduxLogo.svg';

export default function Logo() {
  return (
    <LogoReduxStore>
      <img src={reduxLogo} alt="ReduxStore" />
      <a href="/">ReduxStore</a>
    </LogoReduxStore>
  );
}
