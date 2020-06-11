import React from 'react';
import './App.css';
import DateTime from './comps/dateTime';
import AddStaff from './comps/addStaff';
import DropdownStaff from './comps/dropdown';
import StaffModal from './comps/modal';

function App() {
  return (
    <div className="App">
      <p>Hello World</p>
      <DateTime></DateTime>
      <DropdownStaff></DropdownStaff>
      <StaffModal></StaffModal>
    </div>
  );
}

export default App;

