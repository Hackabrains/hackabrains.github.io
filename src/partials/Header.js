import React, { useState } from 'react'
import styled from 'styled-components'
import { throttle, } from 'lodash'
import { Cinzel } from '../components/Text';
const HeaderContainer = styled.div`
  /* background: #faebe8; */
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  position: relative;
  text-align: center;
  padding-top: 100px;
`
const CinzelTitle = styled(Cinzel)`
  font-size: 3em;
  z-index: 99;
  big {
    font-size: 2em;
  }
`

const HeaderTop = styled.div`
  background-image: url(imgs/bg-1.png);
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: -1;
  transform: scale(1.2);
  transition: .2s;

`

const HeaderBottom = styled.div`
  background-image: url(imgs/bg-3.png);
  background-size: cover;
  background-position: center center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-repeat: no-repeat;
  z-index: -2;
  transform: scale(1.15);
  transform-origin: center;
  transition: .1s;
`

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this._throttledMouseMove = throttle(this._throttledMouseMove.bind(this), 50);
  }
  state = {
    mouseXY: {x: 0, y: 0}
  }

  _throttledMouseMove = ({ screenX: x, screenY: y }) => {
    console.log(this.state.mouseXY)
    this.setState({ mouseXY: { x, y } })
  }

  _onMouseMove = (e) => {
    e.persist();
    this._throttledMouseMove(e);

  }
  render() {
    const { mouseXY } = this.state
    return (
      <>
        <HeaderContainer onMouseMove={this._onMouseMove}>
          <HeaderTop style={{ transform: `scale(1.15) translateX(${mouseXY.x * 0.015}px) translateY(${mouseXY.y * 0.07}px)` }} />
          <HeaderBottom style={{ transform: `scale(1.15) translateX(${mouseXY.x * 0.010}px) translateY(${mouseXY.y * 0.010}px)` }} />
          <CinzelTitle><big>G</big>ame of <big>C</big>odes</CinzelTitle><br/>
          <Cinzel>The winter is here</Cinzel>
        </HeaderContainer>
      </>
    )
  }
}
