import React from 'react';

import { LogoReduxShoes } from './styles';
import reduxLogo from '../../assets/images/reduxLogo.svg';

export default function Logo() {
  return (
    <LogoReduxShoes>
      <img src={reduxLogo} alt="ReduxShoes" />
      <span href="/">ReduxShoes</span>
    </LogoReduxShoes>
  );
}
