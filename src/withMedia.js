import React, { Component } from 'react'
import createMediaListener from './createMediaListener'

const withMedia = queries => Comp => {
   const media = createMediaListener(queries)

   return class WithMedia extends Component {
      state = {
         media: media.getState()
      }
      componentDidMount() {
         media.listen(media => this.setState({ media }))
      }

      componentWillUnmount() {
         media.dispose()
      }
      render(){
         return <Comp {...this.state} />
      }
   }
}

export default withMedia