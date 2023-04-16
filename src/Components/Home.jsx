import { Avatar, Box, Button, Container, HStack, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import imgSrc from '../Assets/img.jpg'
import { BiCode } from 'react-icons/bi'
import { useState } from 'react'
import { useEffect } from 'react'
import details from './data'
import Work from './Work'

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        setData(details);

    }, [data])



    return (
        <>
            <Container
                id='home'
                bgColor={'ButtonShadow'}
                h={['120vh', '100vh']}
                // h={'full'}
                maxW={'full'}
            >
                <HStack
                    justifyContent={'center'}
                    alignItems={'center'}
                    h={'100%'}
                    flexDirection={['column', 'row']}
                >
                    <Avatar
                        p={'4'} m={'4'}
                        boxSize={['40', '80']}
                        src={imgSrc}
                    />

                    <VStack alignItems={'flex-start'}>
                        <Text
                            textTransform={'uppercase'}
                            fontSize={'28'}
                            fontWeight={'extrabold'}
                        >Hi! i am <span >Mujahid hussain</span></Text>

                        <Text
                            textTransform={'uppercase'}
                            fontWeight={'extrabold'}
                            fontSize={'28'}
                        ><span>front end</span> web developer</Text>

                        <Text color={'#07bc5c'} fontWeight={'bold'}> <BiCode /> Strong knowledge of UI/UX Design.</Text>
                        <Text color={'#07bc5c'} fontWeight={'bold'}> <BiCode /> Core Knowledge of Javascript and React JS.</Text>
                        <Text color={'#07bc5c'} fontWeight={'bold'}> <BiCode /> Can Create Responsive Website Layout.</Text>
                        <Text color={'#07bc5c'} fontWeight={'bold'}> <BiCode /> Passion for Web Development And Willingness to learn new Skills..</Text>

                    </VStack>

                </HStack>
            </Container>


            <Container
                id='about'
                h={['120vh', '100vh']}
                bgColor={'ButtonShadow'}
                maxW={'full'}
                boxShadow={'0px -15px 30px rgba(0, 0, 0, 0.06)'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Text
                    fontSize={'28'}
                    borderBottom={'2px solid'}
                    fontWeight={'extrabold'}
                    w={'28'}
                    m={'auto'}
                    textAlign={'center'}
                    pt={['4', '8']}
                >
                    About
                </Text>

                <VStack
                    justifyContent={'center'}
                    alignItems={'center'}
                    mt={['4', '8']}
                    color={'green.500'}
                >

                    <Text
                        w={['100%', '70%']}
                        m={'auto'}
                        fontSize={['12', '18']}
                        fontWeight={'bold'}
                    >
                        Hello, I'm a front-end web developer from Karachi, Pakistan. I build websites that people can use and enjoy.
                    </Text>

                    <Text
                        w={['100%', '70%']}
                        m={'auto'}
                        fontSize={['12', '18']}
                        fontWeight={'bold'}
                    >
                        I specialize in making sure websites look great and work well for users. I have experience working on different projects, from small sites to big web applications.

                        I'm always learning new skills and keeping up with the latest trends in my field. I like to work closely with clients and team members to make sure everyone is happy with the project.
                    </Text>

                    <Text
                        w={['100%', '70%']}
                        m={'auto'}
                        fontSize={['12', '18']}
                        fontWeight={'bold'}
                    >
                        I'm excited about the future of web development and the opportunities it holds. If you have any questions or would like to work together, feel free to get in touch.
                    </Text>

                    <Text
                        w={['100%', '70%']}
                        m={'auto'}
                        fontSize={['12', '18']}
                        fontWeight={'bold'}
                    >
                        My approach to my work is very collaborative. I believe in working closely with clients and team members to ensure that everyone's needs are being met and that the project is progressing smoothly. I'm always looking for ways to improve my skills and stay up-to-date with the latest trends and technologies in my field.
                    </Text>

                    <Text
                        w={['100%', '70%']}
                        m={'auto'}
                        fontSize={['12', '18']}
                        fontWeight={'bold'}
                    >
                        One thing that sets me apart from others in my field is my attention to detail. I believe that the small things can make a big difference, and I always strive to ensure that every aspect of a website is polished and well-executed.
                    </Text>

                    <Text
                        w={['100%', '70%']}
                        m={'auto'}
                        fontSize={['12', '18']}
                        fontWeight={'bold'}
                    >
                        Thanks for taking the time to learn more about me and my work! If you have any questions or would like to work together, please don't hesitate to get in touch.
                    </Text>
                </VStack>


            </Container>

            <Container
                id='work'
                bgColor={'ButtonShadow'}
                boxShadow={'0px -15px 30px rgba(0, 0, 0, 0.06)'}
                alignItems={'center'}
                justifyContent={'center'}
                h={'full'}
                maxW={'full'}
                p={['4', '8']}
            >

                <Text
                    fontSize={'28'}
                    borderBottom={'2px solid'}
                    fontWeight={'extrabold'}
                    w={'60'}
                    m={'auto'}
                    textAlign={'center'}
                    pt={['4', '8']}>
                    Work Summary
                </Text>

                {
                    data.map((index, item)=>(
                        <Work
                        key={item.id}
                        title={index.Title}
                        description={index.Description}
                        url={index.url}     
                        video={index.vid}                   
                        />
                    ))
                }

            </Container>

            <Container
                id="contact"
                h={['80vh','95vh']}
                bgColor={'ButtonShadow'}
                maxW={'full'}
                boxShadow={'0px -15px 30px rgba(0, 0, 0, 0.06)'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Text
                    fontSize={'28'}
                    borderBottom={'2px solid'}
                    fontWeight={'extrabold'}
                    w={'44'}
                    m={'auto'}
                    textAlign={'center'}
                    pt={['4', '8']}>
                    Contact Us
                </Text>

                <Box
                    w={['100%', '70%']}
                    p={['4', '12']}
                    border={'1px solid'}
                    borderColor={'current'}
                    borderRadius={'12'}
                    m={'auto'}
                    mt={['4', '8']}
                    textAlign={'center'}
                >
                    <VStack
                        w={['100%', '80%']}
                        m={'auto'}
                    >

                        <HStack
                            w={'100%'}
                            mb={'2'}
                        >
                            <Input
                                type='text'
                                placeholder='First Name'
                                border={'1px solid'}
                                borderColor={'current'}
                            />

                            <Input
                                type='text'
                                placeholder='Last Name'
                                border={'1px solid'}
                                borderColor={'current'}
                            />
                        </HStack>

                        <Input
                            type='email'
                            placeholder='Enter Your Email!'
                            border={'1px solid'}
                            borderColor={'current'}
                        />

                        <Input
                            type='number'
                            placeholder='Contact No'
                            border={'1px solid'}
                            borderColor={'current'}
                        />

                        <Input
                            type='text'
                            placeholder='Company Name'
                            border={'1px solid'}
                            borderColor={'current'}
                        />

                        <Textarea
                            type='text'
                            placeholder='Enter your message'
                            border={'1px solid'}
                            borderColor={'current'}
                        />
                        <br />

                        <Button
                            type='submit'
                            bgColor={'#07bc5c'}
                            fontWeight={'bold'}
                            fontSize={'16'}
                        >
                            Submit
                        </Button>

                    </VStack>
                </Box>

            </Container>
        </>
    )
}

export default Home