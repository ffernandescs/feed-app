import { Button, Flex, Image, Icon, } from '@chakra-ui/react';
import { MdBorderColor } from "react-icons/md";
import { Avatar } from './Avatar/Index';
import { Name } from './Name/Name';



export const Sidebar = () => {
    return (
        <Flex
            h='24rem'
            align='center'
            justifyContent='space-between'
            direction='column'
            borderRadius={15}
            overflow='hidden'
            bg='blackAlpha.700'
            pos='relative'
        >
            <Image
                pos='absolute'
                top='0'
                left='0'
                w='100%'
                h='6rem'
                objectFit='cover'
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            
            />
            <Flex
                w='100%'
                h='100%'
                align='center'
                justifyContent='space-between'
                direction='column'
                pt='3.5rem'
                pb='1.5rem'
                zIndex='1'
            >
                <Avatar />
                <Name 
                    title="Felipe Fernandes"
                    subtitle="Desenvolvedor Front End"
                    color="White"
                />
                
            </Flex>
            <Flex
                w='100%'
                justifyContent='center'
                borderTop='1px solid #323238'
                p={10}
            >
                <Button
                    w='100%'
                    p={7}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    bg='transparent'
                    border='2px solid #2F855A'
                    color='green.600'
                    _hover={{bg: 'green.600', color: 'white'}}
                >
                    <Icon 
                            fontSize='30'
                            paddingRight={2}
                            as={MdBorderColor}
                        />
                    Editar seu perfil
                </Button>
            </Flex>
            
        </Flex>
    )
}