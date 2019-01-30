const white = '#ffffff'
const primary = `#3BA2BC`
const black = `#080808`
const grey = `#E7E7E7`
const greyLigher = `#F8F8F8`
const greyDarker = `#9B9B9B`

export default {
  white,
  primary,
  black,
  grey,
  greyLigher,
  greyDarker,
  main: {
    primary,
    background: white,
    foreground: black,
    border: grey,
  },
  button: {
    primary,
    secondary: greyDarker,
  },
  footer: {
    background: greyLigher,
    foreground: black,
  },
  card: {
    background: white,
    foreground: black,
    boxShadow: '0 0px 4px rgba(0,0,0,0.15)',
  },
  header: {
    background: white,
    foreground: black,
  },
}