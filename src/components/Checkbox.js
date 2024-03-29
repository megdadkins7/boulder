import React from 'react'
import styled from 'styled-components'

const StyledCheckbox = styled.div`
  input {
    appearance: none;
    border: 0;
    background: transparent;
    outline: none;
  }
  .BoulderComplete {
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    margin: 10px;
    color: #f1f1f1;
    display: flex;
    background-color: #fff;
  }
`;

function Checkbox({ isOn, handleToggle }) {
  return (
    <StyledCheckbox>
      <div className="BoulderTask">
        <input
          type="checkbox"
          style={{ backgroundColor: isOn && '#00C9F2' }}
          checked={isOn}
          onChange={handleToggle}
          className="BoulderComplete"
        />
      </div>
    </StyledCheckbox>
  );
}

export default Checkbox