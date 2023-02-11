import { Center, Text } from '@chakra-ui/react';

interface Props {
    title: string;
    subtitle: string;
    color?: string;
    pl?: string;
    alignItems?: string

  }

export const Name: React.FC<Props> = ({ title, subtitle, color, pl, alignItems }) => {
    return (
        <Center
        flexDirection='column'
        alignItems={alignItems}
        >

            <Text             
                cursor='pointer'
                _hover={{color: 'gray.300'}}
                fontSize={20} fontWeight='bold'
                color={color}
                pl={pl}
                as='h1'
            >{title}
            </Text>
            <Text 
                fontSize={15} 
                color='whiteAlpha.600'
                pl={pl}
            >{subtitle}</Text>
        </Center>
    )
}