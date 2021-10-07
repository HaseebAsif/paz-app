import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const StakingDurationDropdown = () => {
  const options = ['30 days - 100% Dividends', '15 days - 100% Dividends', '10 days - 100% Dividends']
  const defaultOption = options[0]
  return (
    <div>
      <Dropdown options={options} value={defaultOption} placeholder="Select an option" className="paz-dropdown" />;
    </div>
  )
}

export default StakingDurationDropdown
