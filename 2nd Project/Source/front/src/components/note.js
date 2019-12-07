import React, { Component } from 'react'
import '../css/note.css';
import Navbar from './navbar.js';

class note extends Component {
  render() {
    return (
      <div className='Note'>
        <Navbar/>
        Note
      </div>
    )
  }
}

export default note
