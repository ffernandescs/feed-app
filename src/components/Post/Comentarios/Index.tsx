import { Box, Flex, Text, Icon, Grid, GridItem } from "@chakra-ui/react"
import { AiTwotoneLike } from "react-icons/ai";
import { Avatar } from "../../Sidebar/Avatar/Index"
import { Name } from "../../Sidebar/Name/Name"


export const Comentarios = () => {
    return (
        <Box>
            <Flex>
                <Grid 
                    w='100%'    
                    templateColumns={['4rem 1fr','4rem 1fr', '4rem 1fr', '5rem 1fr']}
                    gap={2}
                    >
                    <GridItem  >
                        <Avatar
                            boxSize={['55px','55px','55px','70px']}
                            border='3px solid #2F855A'
                            ml={0}
                            p={[0, 0, 0, 1, 1]}
                        />  
                    </GridItem>
                    <GridItem>
                        <Box 
                            bg='gray.900'
                            borderRadius={8}
                            p={5}
                            mb={5}
                        >
                            <Name
                                title="Felipe Fernandes"
                                subtitle="Desenvolvedor Front-End"
                                color="white"
                                alignItems={['flex-start']}
                                />
                            <Text
                                mt={5}
                            >Adorei seu novo portifolio Felipe!</Text>
                        </Box>
                        <Flex align='center' cursor='pointer' _hover={{color: 'gray.300'}}> 
                            <Icon 
                                fontSize='20'
                                as={AiTwotoneLike}
                                mr={2}
                            />
                            <Text>Aplaudir.33</Text>
                        </Flex>
                    </GridItem>
                </Grid>
            </Flex>
            
        </Box>
    )
}