import React, { Component } from 'react';
import { Keyboard } from './Keyboard/Keyboard'
import './styles.css';

class Piano extends Component {
  render() {
    return (
      <div style={{display:'flex'}}>
        <Keyboard/>
        <Keyboard/>
        <Keyboard/>
      </div>

    );
  }
}

export default Piano;
