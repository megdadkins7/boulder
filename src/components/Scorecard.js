import React from 'react'
import styled from 'styled-components'

const StyledScorecard = styled.div`
  margin: 10px;
  font-size: 4rem;
  color: #00C9F2;
`;

function Scorecard({ boulders }) {
  const pointsTotal = boulders.filter(({ done }) => done === true)
  .reduce((nextPoint, totalPoints) => nextPoint + totalPoints.points, 0)
  return (
    <StyledScorecard>
      {pointsTotal}
    </StyledScorecard>
  )
}

export default Scorecard


