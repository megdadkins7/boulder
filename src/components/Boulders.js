  
import React, { useState } from 'react'
import styled from 'styled-components'

import BoulderRoute from './BoulderRoute'
import Scorecard from './Scorecard'

import { boulderRoutes } from '../data'

const StyledBoulders = styled.div`
  .TitleWrapper {
    display: flex;
    padding 10px;
  }
  .BoulderHeader {
    margin: 10px;
    text-transform: uppercase;
    font-size: 2rem;
  }
  .RouteTitle {
    padding: 10px;
    margin-left: 70px;
  }
  .RoutePoints {
    padding: 10px;
  }
  .ScorecardWrapper {
    padding: 10px
    margin-left: auto;
  }
`;

function Boulders() {
  const initialBoulders = boulderRoutes;
  const [boulders, setBoulders] = useState(initialBoulders)
  const toggleBoulders = routeNumber => {
    const newBoulders = boulders.map(boulder => {
      if(boulder.number !== routeNumber) return boulder;
      return {
        ...boulder,
        done: !boulder.done
      }
    })
    setBoulders(newBoulders)
  }
  return (
    <StyledBoulders>
      <div className='BoulderContainer'>
        <header className='BoulderHeader'>Boulder Route List</header>
        <div className='TitleWrapper'>
          <div className='RouteTitle'>Route Number</div>
          <div className='RoutePoints'>Route Points</div>
          <div className='ScorecardWrapper'><Scorecard /></div>
        </div>
        <ul className='BoulderList'>
          {boulders.map((route, i) => (
            <BoulderRoute 
              route={route}
              key={`${route.number}${i}`}
              toggleBoulders={toggleBoulders}
            />
          ))}
        </ul>
      </div>
    </StyledBoulders>
  )
}

export default Boulders