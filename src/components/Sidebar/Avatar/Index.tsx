import { Image, WrapItem } from "@chakra-ui/react"

export const Avatar = (props:any) => {
    return (
        <WrapItem
            border='3px solid #2F855A'
            borderRadius='10px'
            overflow='hidden'
            bg='black'
            cursor='pointer'
            p={1}
            {...props}
        >
            <Image
                borderRadius='2px'
                boxSize='4rem'
                objectFit='cover'
                src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=40" 
                
            />
        </WrapItem>
    )
}