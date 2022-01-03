import React, { useState } from 'react';
import classes from './App.module.scss';
import Title from './components/Title/Title';

const App = () => {
  return (
    <div className={classes.app}>
      <Title titleText={'#8 useRef'} />
    </div>
  );
};

export default App;
