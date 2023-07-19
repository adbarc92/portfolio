import React from 'react';

import 'src/App.css';
import Starter from 'src/components/Starter';
import Header from 'src/components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Starter greetingText='Told myself to boogie more' />
    </div>
  );
}

export default App;
