import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const Footer = () => {
    return (

        <Box
            bgColor={'ButtonShadow'}
            boxShadow={'0px -15px 30px rgba(0, 0, 0, 0.06)'}
            p={['2', '4']}
            w={'100%'}
        >
            <HStack
                w={['100%', '60%']}
                m={'auto'}
                justifyContent={'space-evenly'}
                alignContent={'space-between'}
                alignItems={'center'}
                flexDirection={['column', 'row']}
            >

                <VStack
                    borderBottom={['1px solid', 'none']}
                >
                    <FaWhatsapp size={'28'} />
                    <Text fontWeight={'bold'}>0319-3506026</Text>
                </VStack>
                <br />

                <VStack
                    borderBottom={['1px solid', 'none']}
                >
                    <a href="https://www.linkedin.com/in/mujahid-hussain-4b3b84254/" target='blank'> <FaLinkedin size={'28'} /> </a>
                    <Text fontWeight={'bold'}>LinkedIn</Text>
                </VStack>
                <br />

                <VStack
                    borderBottom={['1px solid', 'none']}
                >
                    <a href="https://www.instagram.com/h_mujahid123/" target='blank'> <FaInstagram size={'28'} /> </a>
                    <Text fontWeight={'bold'}>Instagram</Text>
                </VStack>
                <br />

                <VStack
                    borderBottom={['1px solid', 'none']}
                >
                    <a href="hmujahid08@gmail.com" target='blank'> <FcGoogle size={'28'} /> </a>
                    <Text fontWeight={'bold'}>Google</Text>
                </VStack>
                <br />

                <VStack>
                    <a href="https://github.com/Mujahid-h" target='blank'> <FaGithub size={'28'} /> </a>
                    <Text fontWeight={'bold'}>Github</Text>
                </VStack>
            </HStack>

        </Box>

    )
}

export default Footer