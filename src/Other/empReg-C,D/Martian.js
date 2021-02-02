import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Martian() {
    const options = [
        'Admin', 'Driver'
      ];
      const defaultOption = options[0];
    return (
        <div>
             <Dropdown options={options} value={defaultOption} placeholder='Admin' />
        </div>
    )
}

export default Martian
