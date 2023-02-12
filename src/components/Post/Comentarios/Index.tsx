import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Box, Flex, Text, Icon, Grid, GridItem } from "@chakra-ui/react"
import { AiTwotoneLike } from "react-icons/ai";
import { Avatar } from "../../Sidebar/Avatar/Index"
import { Name } from "../../Sidebar/Name/Name"

interface Comments {
    comment: {
        id: Number;
        avatarUrl: string;
        name: string;
        comment: string;
        publishedAt: Date;
    };
}

export const Comentarios: React.FC<Comments> = ( {comment} ) => {

    const publishedDateRealativeToNow = formatDistanceToNow(comment.publishedAt, {
        locale: ptBr,
        addSuffix: true
    })


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
                            ml={0}
                            p={[0, 0, 0, 1, 1]}
                            src={comment.avatarUrl}
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
                                title={comment.name}
                                subtitle={publishedDateRealativeToNow}
                                color="white"
                                alignItems={['flex-start']}
                                mb={['2']}
                                />
                            <Text
                                mt={5}
                            >{comment.comment}</Text>
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