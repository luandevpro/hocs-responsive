import './index.css'
import React, { Component , Fragment } from 'react';
import { Galaxy, Trees, Earth } from './screens'
import withMedia from './withMedia'

class App extends Component {
  render() {
    const { media } = this.props
    return (
      <div>
        {media.big ? (
         <Galaxy key="galaxy"/>
        ) : media.tiny ? (
          <Trees key="trees"/>
        ) : (
          <Earth key="earth"/>
        )}
      </div>
    )
  }
}

const AppWithMedia = withMedia({
   big: '(min-width : 1000px)',
   tiny: '(max-width: 600px)'
})(App)

export default AppWithMedia
