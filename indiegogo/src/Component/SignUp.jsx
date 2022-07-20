import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Container,
    Checkbox,
    Avatar,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  
  

function SignUp(){
    const [showPassword, setShowPassword] = useState(false);

    return (
       <Container 
           border={"1px solid gray"}
           mt={"50px"}
           >
             
        <Stack ></Stack>

            <Stack>
                <Heading>Welcome!</Heading>
                <Text>Sign up to join Indiegogo.</Text>
            </Stack>
            
            <Box>
                
                    <Box>
                        <FormControl id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input  type="text" placeholder='Your First Name'/>
                        </FormControl>
                    </Box>
                    <br />

                    <Box>
                        <FormControl id="lastName">
                            <FormLabel>Last Name</FormLabel>
                            <Input type="text" placeholder='Your Last Name'/>
                        </FormControl>
                    </Box>
                    <br />

                    <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" placeholder='Your Email'/>
                    </FormControl>
                    <br />

                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder='Password'/>
                    </FormControl>
                    <br />

               
                <Stack   align={'start'}>
                    <Checkbox  >Sign me up for the Indiegogo newsletter</Checkbox>
                </Stack>
                <br />

                <Box 
                align={'start'}
                w="70%"
                spacing={[1, 5]}
                >
                    <Checkbox size='md'>I agree to the <span Color='pink'>Terms of Use </span> and have read and understand the <span>Privacy Policy</span></Checkbox>
                </Box>


                <Box 
                    display={"flex"} 
                    mt="20px" h="60px" 
                    border={"1px solid grey"} 
                    w="60%" 
                    backgroundColor={"#C0C0C0"}
                    ml="110px">

                    <Checkbox ml={"10px"} size='md' >I'm not a Robot</Checkbox>
                     <Avatar ml={"80px"} w={"50px"} src="data:image/png;base64,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"/>
                
                </Box>
                <Box mt={"15px"} >
                    <Button backgroundColor={"#dc143c"} color={"white"} w="80%">CREATE ACCOUNT</Button>
                </Box>
                <Text mt={"15px"}>OR</Text>
                <Box>
                    <Button  w="80%" backgroundColor={"#405c9d"} color={"white"}>  <Avatar w={"25px"} h="25px" ml={"5px"} src="data:image/jpeg;base64,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"/> CONTINUE WITH FACEBOOK</Button>
                </Box>
                <Text display={"block"} color=" #949494" mt={"8px"}>No posts without your permission.</Text>

                <Text  line-height="1.5" mt={"15px"}>Already have an account?{' '}<Link fontWeight={"bold"} textDecoration={"underline"}>Log In </Link></Text>
    
            </Box>
        </Container>
    )
}

export default SignUp;