import { ChakraProvider, extendTheme } from '../node_modules/@chakra-ui/react/dist/chakra-ui-react.cjs';
import 'reset-css';

const spotTheme = extendTheme({
  colors: {
    gray: {
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    }
  },
  components: {
    // Button: {
    //   variants: {
    //     link: {
    //       ':focus': {
    //         outline: "none",
    //         boxShadow: "none",
    //       }
    //     }
    //   }
    // }
  }
});

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={spotTheme}>
    <Component {...pageProps} />
    </ChakraProvider>
}

export default MyApp
