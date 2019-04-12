import React, { Component } from 'react'
import styled from 'styled-components'
import { Raleway } from '../components/Text';


const Container = styled.footer`
  width: 100%;
  height: 12em;
  margin-top: 5%;
  padding: 2em 1em;
  background-image: url('./imgs/bg-footer.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  overflow: hidden;
  
`

const Row = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 3%;
    overflow: hidden;
   
    @media (max-width: 600px) {    
        justify-content: center;
        margin-top: 5%;
    }
`

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media (max-width: 600px) {    
        display: none
      }
`

const BrainnyLogoContainer = styled.a` 
    width: 95px;
    opacity: .5;
    &:hover{ 
        transform: scale(1.1);
        transition: all .3s ease-in-out;
        opacity: .7;
      }
`

const BrainyLogo = styled.img`
    width: 100%;
    height: 100%;
`

export default class Footer extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <MainContent>
                        <Raleway fontSize={'.8em'} color={'#b1b1b1'}> &copy; Faculdade de Tecnologia Senac Pelotas | http://hackabrains.com.br - (53) 3225-6918 </Raleway>
                        <Raleway fontSize={'.8em'} color={'#b1b1b1'} marginTop={'4px'}>
                            Desenvolvido por <a href="https://www.linkedin.com/in/patrick-porto-225897145/">Patrick N. Porto </a> e <a href="https://www.linkedin.com/in/miguelboanova/">Miguel N. Boanova</a>
                        </Raleway>
                    </MainContent>

                    <BrainnyLogoContainer href="https://brainny.cc" target="_blank">
                        <BrainyLogo src={'./imgs/supporters/brainny-logo.png'} />
                    </BrainnyLogoContainer> 

                </Row>
            </Container>
        )
    }
}
