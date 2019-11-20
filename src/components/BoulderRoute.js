import React from 'react'
import styled from 'styled-components'

import Checkbox from './Checkbox'

const StyledBoudlerRoute = styled.div`
  list-style-type: none;
  display: flex;
  padding: 20px;
  .Number {
    padding: 10px;
  }
  .Points {
    padding: 10px 10px 10px 85px;
  }
  .CheckboxWrapper {
    margin-left: -20px;
    margin-right: 50px;
  }
`;

function BoulderRoute({ route, toggleBoulders }) {
  return (
    <StyledBoudlerRoute>
      <div className='CheckboxWrapper'>
        <Checkbox
          id={route.number}
          isOn={route.done}
          handleToggle={() => toggleBoulders(route.number)}
        />
      </div>
      <div className='Number'>
       {route.number}
      </div>
      <div className='Points'>
       {route.points}
      </div>
    </StyledBoudlerRoute>
  )
}

export default BoulderRoute