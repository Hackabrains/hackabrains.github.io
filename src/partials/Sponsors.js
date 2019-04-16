import React, { Component } from 'react'
import styled from 'styled-components'
import { Cinzel } from '../components/Text';
import Footer from './Footer';

const SponsorsContainer = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 2%;
    margin-top: -20%;
    z-index: 0;
    background-image: url('./imgs/westeros-light.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    z-index: -10;
    
    @media (max-width: 450px) {    
      margin-top: -45%;  
    }
`


const SingleContent = styled.div`
  width: 100%;
  margin-top: 20%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  @media (max-width: 450px) {    
    margin-top: 45%;  
  }
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

  @media (max-width: 900px) {    
    width: 12em;
  }
`

const SponsorsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  `

const SponsorItems = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 1%;
  flex-wrap: wrap;
  padding: 0 20vw;
  @media (max-width: 1200px) {    

  }
 
  @media (max-width: 900px) {    

  }

  @media (max-width: 660px) {    

  }

  `

const SponsorItem = styled.a`
  width: 220px;
  height: auto;
  cursor: pointer;
  transition: all .3s ease-in-out;
  padding: 15px;
  &:hover{ 
    transform: scale(1.1);
  }
  
  @media (max-width: 900px) {    
    width: 180px;
  }

  @media (max-width: 450px) {    
    width: 170px;
    margin-top: 5%;
  }

  @media (max-width: 330px) {    
    width: 140px;
    margin-top: 5%;
  }
`

const SupporterItem = styled.a` 
  width: 145px;
  object-fit: cover;
  transition: all .3s ease-in-out;
  
  &:hover{ 
    transform: scale(1.1);  
  }

  @media (max-width: 900px) {    
    width: 125px;
  }
  
  @media (max-width: 900px) {    
    width: 100px;
  }
`

const SponsorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default class Sponsors extends Component {

  state = {
    sponsors: [
      { logo: './imgs/sponsors/nave.png', url: 'https://nave.rs/' },
      { logo: './imgs/sponsors/cigam.png', url: 'https://www.cigam.com.br/' },
      { logo: './imgs/sponsors/cwi.png', url: 'https://cwi.com.br/' },
      { logo: './imgs/sponsors/prodigious.png', url: 'https://www.prodigious.com/' },
      { logo: './imgs/sponsors/atlas.png', url: 'http://atlastechnol.com/' },
      { logo: './imgs/sponsors/nodo.svg', url: 'https://nodo.cc' },
      { logo: './imgs/sponsors/bridge.png', url: 'https://www.bridge-mt.com/' },
      { logo: './imgs/supporters/brainny.png', url: 'https://brainny.cc' },
      { logo: './imgs/sponsors/bemobile.png', url: 'https://bemobile.tech' },
    ],

    supporters: [
      { logo: './imgs/supporters/senatec.png', url: 'https://web.facebook.com/senatecjr/' },
    ]
  }

  render() {
    const { sponsors, supporters } = this.state
    console.log(this.props);
    
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
        <Footer />
      </SponsorsContainer>
    )
  }
}
