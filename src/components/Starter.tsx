import React from 'react';
import logo from '../logo.svg';

export interface StarterProps {
  greetingText: String;
}

const Starter = ({ greetingText }: StarterProps): JSX.Element => {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>{greetingText}</p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </header>
  );
};

export default Starter;
