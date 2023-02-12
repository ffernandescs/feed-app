import { useState } from "react"
import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Box, Button, Flex, Link, Text, Textarea } from "@chakra-ui/react"
import { Avatar } from "../Sidebar/Avatar/Index"
import { Name } from "../Sidebar/Name/Name"
import { Comentarios } from "./Comentarios/Index"

interface Props {
    post: {
      author: {
        avatarUrl: string;
        name: string;
        role: string;
      };
      content: { type: string; content: string }[];
      publishedAt: Date;
    };
}

interface Comments {
    id: number;
    avatarUrl: string;
    name: string;
    comment: string;
    publishedAt: Date;
  }

export const Post: React.FC<Props> = ({ post }) => {

    const [comments, setComments] = useState([
        1,
        2
    ])


    
    const publishedDateRealativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBr,
        addSuffix: true
    })

    const [showButton, setShowButton] = useState(false)

    const handleTextareaClick = () => {
        console.log('pegou')
        setShowButton(true)
    }

    const handleBoxClick = () => {
        console.log('Fora')

        setShowButton(false)
    }

    function handleCreateNewComment(newComment: number) {
        setComments(comments.concat(newComment))
        
        
    }

    return (
        <Flex
            justifyContent='space-between'
            direction='column'
            p={[5, 5, 5, 10]}
            mb={[5, 5, 5, 10]}
            borderRadius={15}
            overflow='hidden'
            bg='blackAlpha.700'
        >
            <Flex
                direction={['column', 'column', 'column', 'row']}
                align='center' 
                justifyContent='space-between'
                mb={7}
            >
                <Flex
                    w={['100%', '100%', '100', 'inherit']}
                    direction={['column', 'column', 'column', 'row']}
                    align='center'    
                >
                    <Avatar src={post.author.avatarUrl} />
                    <Name
                        title={post.author.name}
                        subtitle={post.author.role}
                        color="white"
                        pl={['0', '0', '0', '7']}
                        pt={['5', '5', '0', '0']}
                        alignItems={['center', 'center', 'center', 'flex-start']}
                    />
                </Flex>
                <Text
                    w={['100%', '100%', '100', 'inherit']}
                    mt={[4, 4, 4, 0]}
                    color='whiteAlpha.600'>{publishedDateRealativeToNow}</Text>
            </Flex>
            <Flex direction='column'>
                {post.content.map(line => {
                    if(line.type === 'paragraph') {
                        return <Text
                            color='whiteAlpha.900'
                            mb={5}
                        >
                            {line.content}
                        </Text>
                    } else if (line.type === 'link') {
                        return <Text
                            cursor='pointer' 
                            color='green.400' 
                            _hover={{color: 'green.300'}}
                            fontWeight='bold'  
                            mb={8}
                        ><Link href="#">{line.content}</Link></Text>
            }
                })}
            </Flex>
            <Box pt={7} borderTop='1px solid #323238' onClick={handleBoxClick}>
                <Text 
                    fontWeight='bold' 
                    fontSize={20}
                    mb={7}>Deixe seu feedback</Text>
                
            </Box>
            <form>
                <Textarea
                    h='120px'
                    border='3px solid #2F855A' 
                    borderRadius='10px'
                    size='10px'
                    p={4}
                    mb={7}
                    placeholder="Nossa, adorei amigo! parabens!"
                    onClick={handleTextareaClick}
                />
                {showButton && (
                    <Button 
                        type="button"
                        p={7} 
                        w='8.5rem' 
                        bg='green.600'
                        _hover={{bg: 'green.500'}}
                        mb={10}
                        onClick={() => handleCreateNewComment(3)}
                    >Publicar
                    </Button>
                    )}
                    {comments.map(coment => {
                        return <Comentarios/>

                    })}
            </form>
            
        </Flex>
    )
}