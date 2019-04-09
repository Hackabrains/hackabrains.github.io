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

const Nav = styled.nav`
  a {
    padding: 30px 30px;
    display: inline-block;
    transition: .5s;
    text-decoration: none;
    ${Cinzel} {
      border-bottom: 1px solid rgba(35, 38, 50, .3);
      transition: .5s;
    }
    &:hover ${Cinzel} {
      border-bottom: 1px solid rgba(35, 38, 50, .3);
      border-radius: 10px;
      padding: 0 10px;

    }
    &:active {
      opacity: .5;
    }
  }
`

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this._throttledMouseMove = throttle(this._throttledMouseMove.bind(this), 50);
  }
  state = {
    mouseXY: {x: 0, y: 0}
  }
  componentDidMount() {
    window.addEventListener('deviceorientation', ({ alpha, gamma, beta}) => {
      this.setState({ mouseXY: { x: alpha + beta * 5 , y: gamma + beta * 5  } })
    })
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
          <Nav>
            <a href="javascript:;"><Cinzel>INSCRIÇÔES</Cinzel></a>
            <a href="javascript:;"><Cinzel>PATROCINADORES</Cinzel></a>
          </Nav>
          <CinzelTitle><big>G</big>ame of <big>C</big>odes</CinzelTitle><br/>
          <Cinzel>The winter is here</Cinzel>
        </HeaderContainer>
      </>
    )
  }
}
