  
import React, { useState } from 'react'
import styled from 'styled-components'

import BoulderRoute from './BoulderRoute'
import Scorecard from './Scorecard'

import { boulderRoutes } from '../data'

const StyledBoulders = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .TitleWrapper {
    display: flex;
    padding 10px;
  }
  .BoulderHeader {
    margin: 5px;
    text-transform: uppercase;
    font-size: 2rem;
  }
  .RouteTitle {
    padding: 10px;
    margin-left: 80px;
  }
  .RoutePoints {
    padding: 10px;
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
        <div className='BoulderWrapper'>
            <header className='BoulderHeader'>Boulder Route List</header>
          <div className='TitleWrapper'>
            <div className='RouteTitle'>Route Number</div>
            <div className='RoutePoints'>Route Points</div>
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
        <div className='EmptySpace'></div>
        <div className='ScorecardWrapper'>
          <Scorecard boulders={boulders} />
        </div>
    </StyledBoulders>
  )
}

export default Boulders