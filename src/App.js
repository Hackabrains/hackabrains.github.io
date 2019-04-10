import React, {useEffect} from 'react'
import Header from './partials/Header'
import { createGlobalStyle } from 'styled-components'
import Sponsors from './partials/Sponsors';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    box-sizing: border-box;
  }
` 

export default function App () {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Sponsors />
    </>
  )
}
