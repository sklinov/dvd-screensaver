import React from 'react';
import css from './screen.module.scss';
import { Logo } from '../Logo/Logo';

export const Screen = () => {
  return (
    <div className={css.screen}>
      <Logo />
    </div>
  )
}