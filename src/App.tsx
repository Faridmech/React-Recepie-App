import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ChakraProvider>
  );
}




export default App;
