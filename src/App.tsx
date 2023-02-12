import { Box, Container, Flex, Grid, GridItem, Link } from '@chakra-ui/react';
import { Header } from './components/Header/Index';
import { Post } from './components/Post/Index';
import { Sidebar } from './components/Sidebar/Index';


interface Posts {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: { type: string; content: string }[];
  publishedAt: Date;
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/83374517?v=4',
      name: 'Felipe Fernandes',
      role: 'Desenvolvedor Front-End'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-11 20:47:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/83374517?v=4',
      name: 'Thaynna Caroline',
      role: 'Enfermeira'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-11 20:47:00'),
  },
  // ...mais posts aqui
];

export const App = () => {

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
            {posts.map(post => {
              return (
                <Flex>
                  <Post key={post.id} post={post}/>
                </Flex>
              )
                
            })}
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}


