import React from 'react'
import styled from 'styled-components'
import galaxy from './images/galaxy.jpg'
import earth from './images/earth.jpg'
import trees from './images/trees.jpg'

const makeBackgroundComponent = background => props => (
  <Background {...props} background={`${background} `}/>
)

export const Background = styled.div`
   background: url(${props => props.background}) center center;
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
   top: 200px;
   background-size: cover;
`;

export const Galaxy = makeBackgroundComponent(galaxy)
export const Earth = makeBackgroundComponent(earth)
export const Trees = makeBackgroundComponent(trees)
