import React from "react";
import { Icon, Flex, Image, Box, useColorMode, Link, Heading } from '@chakra-ui/react';
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const Header = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex
            w='100%'
            bg='blackAlpha.700'
            mb='10'
            p={5}
        >
            <Flex
                w='100%'
                align='center'
                justify='center'
                pos='relative'
            >
                <Link  href='/home' display='flex' alignItems='center'>
                    <Image 
                        w='3rem'
                        mr={5}
                        src='https://files.fm/thumb_show.php?i=h6sr7ka3z' 
                    />
                <Heading fontSize='30'>Feed App</Heading>
                </Link>
                <Box 
                    pos='absolute'
                    right={[0, 0, 5, 5]}
                    onClick={toggleColorMode} 
                    cursor='pointer'
                >
                    {colorMode === 'dark' ? 
                        <Icon 
                            fontSize='40'
                            as={MdDarkMode}
                        /> : 
                        <Icon 
                            fontSize='40'
                            as={MdLightMode}
                        />}
                </Box>
            </Flex>
        </Flex>
    )
}