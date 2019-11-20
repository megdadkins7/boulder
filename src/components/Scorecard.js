import React from 'react'
import styled from 'styled-components'

const StyledScorecard = styled.div`
  font-size: 10rem;
  color: #00C9F2;
`;

function Scorecard({ boulders }) {
  const pointsTotal = boulders.filter(({ done }) => done === true)
  .reduce((nextPoint, totalPoints) => nextPoint + totalPoints.points, 0)
  return (
    <StyledScorecard>
      <span>{pointsTotal}</span>
    </StyledScorecard>
  )
}

export default Scorecard


