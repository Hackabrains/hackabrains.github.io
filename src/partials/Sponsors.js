import React, { Component } from 'react'
import styled from 'styled-components'
import { Cinzel } from '../components/Text';

const SponsorsContainer = styled.div`
    width: 100%;
    padding-top: .5em;
`

const SingleContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`

const RealizationDivider = styled.div`
  width: 5.5em;
  height: 1px;
  background: #000;
  margin-top: .5em;
`

const SupportersDivider = styled.div`
  width: 2.5em;
  height: 1px;
  background: #000;
  margin-top: .5em;
`

const SenacLogo = styled.img`
  width: 15em;
  margin: 3% 0;
`

const SponsorsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  `

const SponsorItems = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 1%;
  flex-wrap: wrap;
  `

const SponsorItem = styled.a`
  width: 155px;
  height: auto;
  cursor: pointer;
`

const SupporterItem = styled.a` 
  width: 135px;
  height: auto;
  object-fit: cover;
`

const SponsorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`


const Footer = styled.footer`
  background: purple;
  width: 100%;
`



export default class Sponsors extends Component {

  state = {
    sponsors: [
      { logo: './imgs/sponsors/cwi.png', url: 'https://cwi.com.br/' },
      { logo: './imgs/sponsors/nave.png', url: 'https://nave.rs/' },
      { logo: './imgs/sponsors/cigam.png', url: 'https://www.cigam.com.br/' },
      { logo: './imgs/sponsors/atlas.png', url: 'http://atlastechnol.com/' },
      { logo: './imgs/sponsors/nodo.svg', url: 'https://nodo.cc' },
      { logo: './imgs/sponsors/bridge.jpeg', url: 'https://www.bridge-mt.com/' },
    ],

    supporters: [
      { logo: './imgs/sponsors/cwi.png', url: 'https://cwi.com.br/' },
      { logo: './imgs/sponsors/cwi.png', url: 'https://cwi.com.br/' },
      { logo: './imgs/sponsors/cwi.png', url: 'https://cwi.com.br/' },
      { logo: './imgs/sponsors/cwi.png', url: 'https://cwi.com.br/' },
      { logo: './imgs/sponsors/cwi.png', url: 'https://cwi.com.br/' },
      { logo: './imgs/sponsors/cwi.png', url: 'https://cwi.com.br/' },
      { logo: './imgs/sponsors/cwi.png', url: 'https://cwi.com.br/' },
      { logo: './imgs/sponsors/cwi.png', url: 'https://cwi.com.br/' },
      { logo: './imgs/sponsors/cwi.png', url: 'https://cwi.com.br/' },

    ]
  }

  render() {
    const { sponsors, supporters } = this.state
    return (
      <SponsorsContainer>
        <SingleContent>
          <Cinzel fontSize={'1.6em'}> <big>R</big>ealização</Cinzel>
          <RealizationDivider />
          <SenacLogo src={'./imgs/logo-senac.png'} />
        </SingleContent>

        <SponsorsContent>
          <Cinzel fontSize={'1.6em'}> <big>P</big>atrocínio</Cinzel>
          <RealizationDivider />

          <SponsorItems>
            {
              sponsors.map((el, index) => (
                <SponsorItem href={el.url} key={index} target="_blank">
                  <SponsorImage src={el.logo} />
                </SponsorItem>
              ))
            }
          </SponsorItems>
        </SponsorsContent>


        <SponsorsContent>
          <Cinzel fontSize={'1.6em'}> <big>A</big>poio</Cinzel>
          <SupportersDivider />

          <SponsorItems>
            {
              supporters.map((el, index) => (
                <SupporterItem href={el.url} key={index} target="_blank">
                  <SponsorImage src={el.logo} />
                </SupporterItem>
              ))
            }
          </SponsorItems>
        </SponsorsContent>

      </SponsorsContainer>
    )
  }
}
