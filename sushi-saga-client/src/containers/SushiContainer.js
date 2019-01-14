import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {
  state = {
    offset: 0
  }

  nextOffset = () => {
    this.setState({ offset: this.state.offset + 4 })
  }
  render(){
    let shownSushi = this.props.allSushi.slice(this.state.offset, this.state.offset + 4)

    return (
    <Fragment>
      <div className="belt">
        {shownSushi.map(x => <Sushi oneSushi={x} key={x.id}/>)}
        <MoreButton increaseOffset={this.nextOffset} />
      </div>
    </Fragment>
    )
  }
}

export default SushiContainer
