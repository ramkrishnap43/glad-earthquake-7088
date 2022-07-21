import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Avatar,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Container,
  } from '@chakra-ui/react';

  function Login(){

    return(
        <Container 
            border={"1px solid black"}
            h={"560px"}
            mt={"120px"}>
            <Heading mt={"50px"}>Welcome back!</Heading>

            <Text>Log in to continue.</Text>


            <Box>
                <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder='Enter Email'/>
                </FormControl>


            <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"  placeholder='Password' />
            </FormControl>

            </Box>

            <Stack>
                <Link 
                    textDecoration={"underline"}
                    ml={"320px"}
                    mt={"15px"}
                    fontWeight="8px"
                >Forgot your Password?</Link>
            </Stack>

            <Button 
                width={"80%"}
                backgroundColor="#e51075"
                border={"#e51075"}
                color={"white"}
                mt={"25px"}
            >
                LOG IN
            </Button>

            <Text fontSize={"18px"}
                mt={"10px"}
                color="gray"
            >OR</Text>

            <Box mt={"25px"} >
                <Button  justifyContent={"space-between"} w="80%" backgroundColor={"#405c9d"} color={"white"}>  <Avatar w={"25px"} h="25px" ml={"5px"} src="data:image/jpeg;base64,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"/> <span>CONTINUE WITH FACEBOOK</span> </Button>
            </Box>

            <Text display={"block"} color=" #949494" mt={"8px"}>No posts without your permission.</Text>

            <Text  line-height="1.5" mt={"25px"}>New to Indiegogo?{' '}<Link fontWeight={"bold"} textDecoration={"underline"}>Sign Up </Link></Text>

        </Container>
    )
}

export default Login;