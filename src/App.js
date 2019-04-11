import React from 'react'
import Header from './partials/Header'
import { createGlobalStyle } from 'styled-components'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-br';
import Sponsors from './partials/Sponsors';
import Footer from './partials/Footer'
dayjs.locale('pt-br');
dayjs.extend(relativeTime);

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
      {/* <Footer /> */}
    </>
  )
}
