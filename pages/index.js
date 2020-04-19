import React from 'react'
const cookies = require('fortune-cookie')
const shuffle = require('knuth-shuffle').knuthShuffle

function getCookie () {
  const cookie = shuffle(cookies.slice(0))
  return cookie[0]
}

const Index = class extends React.Component {
  constructor () {
    super()
    this.state = {
      fortune: 'My wisdom is limitless. Sharing is caring.'
    }
    this.tellFortune = this.tellFortune.bind(this)
  }

  tellFortune () {
    const cookie = getCookie()
    this.setState({ fortune: cookie })
  }

  render () {
    return (
      <div className={'wrapper'}>
        <h1>The wisdom of Maccyber</h1>
        <img src={'/maccyber.png'} />
        <div className='fortune-box'>
          {this.state.fortune}
        </div>
        <p>
          <button onClick={this.tellFortune}>Give me more wisdom</button>
        </p>
        <style jsx global>
          {`
            body {
              background-color: pink;
              padding: 20px;
            }
            img {
              border-radius: 25px;
            }
            button {
              font-weight: 500;
              width: 400px;
              height: 60px;
              font-size: 30px
              border-radius: 25px;
              border: 1px solid black;
              cursor: pointer;
              display: inline-block;
              text-decoration: none;
              background-color: lime;
              outline: 0;
            }
            button:focus {
              outline:0;
            }
            button:active {
              outline: 0;
              background-color: yellow;
            }
            .fortune-box {
              font-size: 36px;
              padding: 15px;
            }
            .wrapper {
              text-align: center;
            }
          `}
        </style>
      </div>
    )
  }
}

export default Index
