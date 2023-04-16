import { Box, Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Work = ({ title, video, description, url }) => {

    return (
        <VStack
            w={['100%', '60%']}
            borderRadius={'2xl'}
            p={['4', '8']}
            m={'auto'}
            mt={['4', '8']}
            bgColor={'blue.900'}
            textAlign={'center'}

        >
            <Box
            w={['100%', '80%']}
            bgColor={'blue.700'}
            p={['4', '6']}
            borderRadius={'xl'}            
            >
            <video
                src={video}
                controls
                controlsList='nodownload'
                autoPlay
                loop
                autoFocus
                muted
                style={{
                    borderRadius: '10px'
                }}                
            ></video>
            </Box>

            <Text
                fontSize={['24', '32']}
                color={'whiteAlpha.900'}
                fontWeight={'bold'}
            >
                {title}
            </Text>

            <Text
                fontSize={['16', '24']}
                color={'whiteAlpha.600'}
                fontWeight={'semibold'}
            >
                {description}
            </Text>

            <Button
                variant={'solid'}
                bgColor={'#07bc5c'}
                fontWeight={'bold'}
                fontSize={'16'}
                w={['auto', '24']}
            >
                <a href={url}>Visit</a>
            </Button>



        </VStack>
    )
}

export default Work