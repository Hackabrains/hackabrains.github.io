import styled from 'styled-components'

export const Raleway = styled.span`
  font-family: 'Raleway', sans-serif;
  font-size: 1.2em;
  color: rgb(35, 38, 50);
`


export const Cinzel = styled.span`
  font-family: 'Cinzel Decorative', serif;
  font-size: ${ ({ fontSize }) => fontSize}
  color: rgb(35, 38, 50);
  ${({ bold }) => bold && `
    font-weight: bold;
  `}
   ${({ letterSpacing }) => letterSpacing && `
    letter-spacing: ${letterSpacing};
  `}
`

Cinzel.defaultProps = {
  fontSize: '1.2em'
}