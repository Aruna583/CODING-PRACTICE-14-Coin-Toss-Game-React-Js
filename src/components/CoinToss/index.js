// Write your code here

import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossImage: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)

    let latestTossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      latestTossImage = HEADS_IMG_URL
      latestHeadsCount += 1
    } else {
      latestTossImage = TAILS_IMG_URL
      latestTailsCount += 1
    }

    this.setState({
      tossImage: latestTossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="coins-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>

          <img src={tossImage} alt="toss Result" className="image-container" />

          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total:{totalCount} </p>
            <p className="count">Heads:{headsCount} </p>
            <p className="count">Tails:{tailsCount} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
