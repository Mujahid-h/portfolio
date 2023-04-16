import { Box, Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    return (
        <Box
            bgColor={'ButtonShadow'}
            w={'100%'}
            boxShadow={'0px 5px 15px rgba(0, 0, 0, 0.06)'}
            pos={'fixed'}
            top={'0'}
            left={'0'}
            zIndex={'999'}
        >

            <HStack
                p={['2', '4']}
                justifyContent={"center"}
                w={'90%'}
            >
                <Button
                    variant={'outline'}
                    colorScheme='whatsapp'
                    fontSize={'14'}
                    ml={['0', '16']}
                >
                    <HashLink to="/#home">Home</HashLink>
                </Button>
                <Button
                    variant={"outline"}
                    colorScheme='whatsapp'
                    fontSize={'14'}
                >
                    <HashLink to="/#about">About</HashLink>
                </Button>
                <Button
                    variant={"outline"}
                    fontSize={'14'}
                    colorScheme='whatsapp'
                >
                    <HashLink to="/#work">Projects</HashLink>
                </Button>
                <Button
                    variant={"outline"}
                    fontSize={'14'}
                    colorScheme='whatsapp'
                >
                    <HashLink to="/#contact">Contact</HashLink>
                </Button>
            </HStack>

        </Box>
    )
}

export default Header