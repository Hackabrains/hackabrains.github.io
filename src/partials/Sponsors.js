import React, { Component } from 'react'
import styled from 'styled-components'
import { Cinzel, Raleway } from '../components/Text';

const SponsorsContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 2em 1.2em 0 1.2em;
    background: blue;
`

const SingleContent = styled.div`
  width: 100%;
  height 48%;
  background: red;
  display: flex;
  justify-content: center;
`

const SponsorsContent = styled.div`
  background: green;
  width: 100%;
  height: 48%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const Supporters = styled.div`

`

const Footer = styled.footer`
  background: purple;
  width: 100%;
  height: 4%;
`



export default class Sponsors extends Component {
  render() {
    return (
      <SponsorsContainer>
        <SingleContent>
          <Cinzel>Realização</Cinzel>
        </SingleContent>

        <SponsorsContent>
          <Cinzel>Apoio</Cinzel>
          <Cinzel>Patrocinio</Cinzel>
        </SponsorsContent>

        <Footer>
          Oi
        </Footer>
      </SponsorsContainer>
    )
  }
}
