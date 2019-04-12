import styled from 'styled-components'

export const Raleway = styled.span`
  font-family: 'Raleway', sans-serif;
  font-size: ${ ({ fontSize }) => fontSize}
  color: ${ ({ color }) => color}
  margin-top: ${ ({ marginTop }) => marginTop}
  > a {
    color: #b1b1b1;
    &:hover{
      color: #cdcdcd;
      transition: .2s ease;
    }
  }
`


export const Cinzel = styled.span`
  font-family: 'Cinzel Decorative', serif;
  font-size: ${ ({ fontSize }) => fontSize}
  color: ${ ({ color }) => color}
  padding: 0 35px;
  margin-top: ${ ({ marginTop }) => marginTop}
  ${({ bold }) => bold && `
    font-weight: bold;
  `}
   ${({ letterSpacing }) => letterSpacing && `
    letter-spacing: ${letterSpacing};
  `}
`

Cinzel.defaultProps = {
  marginTop: 0,
  fontSize: '1.2em',
  color: 'rgb(35, 38, 50)'
}

Raleway.defaultProps = {
  marginTop: 0,
  fontSize: '1.2em',
  color: 'rgb(35, 38, 50)'
}