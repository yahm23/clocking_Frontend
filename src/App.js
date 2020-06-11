import React from 'react';
import './App.css';
import DateTime from './comps/dateTime';
import AddStaff from './comps/addStaff';
import DropdownStaff from './comps/dropdown';
import StaffModal from './comps/modal';

function App() {
  return (
    <div className="App">
      <div className="overlay"></div>
      <div className="onTopLayer"> 
        <h1>Bob's Coffee Shop</h1>
        <DropdownStaff></DropdownStaff>
        <DateTime></DateTime>
        <StaffModal></StaffModal>
      </div>
    </div>
  );
}

export default App;

