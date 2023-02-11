import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import { Header } from './components/Header/Index';
import { Post } from './components/Post/Index';
import { Sidebar } from './components/Sidebar/Index';

function App() {

  return (
    <Container
      w='100%'
      maxW='100%'
      h='100vh'
      display='flex'
      alignContent='center'
      flexDirection='column'
      p='0'
      m='0'
      colorScheme='blackAlpha'
    >
      <Header/>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        maxWidth="1200px"
        mx="auto"
        px={[3, 3, 3, 5]}
      >
        <Grid 
          w='70rem'
          templateColumns={['1fr', '1fr', '310px 1fr', '310px 1fr' ]}
          gap={[5, 5, 5, 10]}
        >
          <GridItem  >
            <Sidebar/>
          </GridItem>
          <GridItem >
            <Post/>
            <Post/>
          </GridItem>
        </Grid>
      </Box>

      
    </Container>
  );
}

export default App;
