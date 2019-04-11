import React, { Component } from 'react'
import styled from 'styled-components'
import { Raleway } from '../components/Text';


const Container = styled.footer`
  width: 100%;
  border-top: 1px solid #cdcdcd;
  margin-top: 3%;
  padding: 1em;
`

const Row = styled.div`
    display: flex; 
    flex-direction: row;
`

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

export default class Footer extends Component {
    render() {
        return (
            <Container>
                <MainContent>
                    <Raleway fontSize={'.8em'} color={'#777'}> © Faculdade de Tecnologia Senac Pelotas | http://hackabrains.com.br - (53) 3225-6918 </Raleway>
                    <Raleway fontSize={'.8em'} color={'#777'}>Desenvolvido por Patrick N. Porto e Miguel N. Boanova</Raleway>
                </MainContent>
            </Container>
        )
    }
}
