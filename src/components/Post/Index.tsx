import { useState } from "react"
import { Box, Button, Flex, Text, Textarea } from "@chakra-ui/react"
import { Avatar } from "../Sidebar/Avatar/Index"
import { Name } from "../Sidebar/Name/Name"
import { Comentarios } from "./Comentarios/Index"

export const Post = () => {

    const [showButton, setShowButton] = useState(false)

    const handleTextareaClick = () => {
        console.log('pegou')
        setShowButton(true)
    }

    const handleBoxClick = () => {
        console.log('Fora')

        setShowButton(false)
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
                    <Avatar />
                    <Name
                        title="Felipe Fernandes"
                        subtitle="Desenvolvedor Front-End"
                        color="white"
                        pl={['0', '0', '0', '7']}
                        pt={['5', '5', '0', '0']}
                        alignItems={['center', 'center', 'center', 'flex-start']}
                    />
                </Flex>
                <Text 
                    w={['100%', '100%', '100', 'inherit']}
                    mt={[4, 4, 4, 0]}
                    color='whiteAlpha.600'>Publicado há 1h</Text>
            </Flex>
            <Flex>
                <Text color='whiteAlpha.900'>
                    Fala galeraa 👋

                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀

                    <Text 
                        cursor='pointer' 
                        color='green.400' 
                        _hover={{color: 'green.300'}}
                        fontWeight='bold' 
                        mt={8} 
                        mb={8}
                    >👉 jane.design/doctorcare
                    </Text>
                   
                    <Text 
                        cursor='pointer' 
                        color='green.400' 
                        _hover={{color: 'green.300'}}
                        fontWeight='bold'  
                        mb={8}
                    >#novoprojeto #nlw #rocketseat
                    </Text>
                </Text>
            </Flex>
            <Box pt={7} borderTop='1px solid #323238' onClick={handleBoxClick}>
                <Text 
                    fontWeight='bold' 
                    fontSize={20}
                    mb={7}>Deixe seu feedback</Text>
                
            </Box>
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
                        p={7} 
                        w='8.5rem' 
                        bg='green.600'
                        _hover={{bg: 'green.500'}}
                        mb={10}
                    >Publicar
                    </Button>
                )}
                <Comentarios />
        </Flex>
    )
}