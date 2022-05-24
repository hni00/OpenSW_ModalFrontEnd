import React, { useState, useRef } from 'react';
import './Component/Modal.css';
import './App.css';
import ModalForm from './Component/ModalForm';

function App() {
  return (
    <div>
      <ModalForm ClubId={1}></ModalForm>
    </div>
  );
}

export default App;
