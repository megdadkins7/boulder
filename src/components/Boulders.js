  
import React, { useState } from 'react'
import styled from 'styled-components'

import BoulderRoute from './BoulderRoute'
import Scorecard from './Scorecard'

import { boulderRoutes } from '../data'

const StyledBoulders = styled.div`
  .GridWrapper {
    display: grid;
    max-width: 100%;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(10px, auto);
    grid-template-rows: 20px calc(100vh - 700px);
  }
  .GridWrapper > div {
    padding: 1em;
  }
  .TitleWrapper {
    display: flex;
    padding 10px;
  }
  .BoulderHeader {
    grid-column: 1 / 4;
    grid-row: 1;
    margin: 5px;
    text-transform: uppercase;
    font-size: 2rem;
  }
  .BoulderHeader * {
    display: inline;
  }
  .Content {
    grid-column: 1;
    grid-row: 2 / 5;
    overflow: auto;
  }
  .BoulderList {
    height: 80vh;
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
      <div className='GridWrapper'>
      <div className='BoulderWrapper'>
        <header className='BoulderHeader'>Boulder Route List</header>
        <div className='TitleWrapper'>
          <div className='RouteTitle'>Route Number</div>
          <div className='RoutePoints'>Route Points</div>
        </div>
        <div className='Content'>
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
      </div>
      <div className='EmptySpace'></div>
      <div className='ScorecardWrapper'>
        <Scorecard boulders={boulders} />
      </div>
      </div>
    </StyledBoulders>
  )
}

export default Boulders