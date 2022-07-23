import {
    Box,
    Input,
    Container,
    Stack,
    Avatar,Heading,Checkbox,Button,
    Text,
    Flex,
    Link,
   
    
  } from '@chakra-ui/react';



function Project(){
    return (
        <Box className='main'>

            <Heading>Back this project</Heading>

            <Text ml={"-300px"} mt="15px"  fontSize={"lg"}>Make a contribution</Text>
            
            <Box   w={"30%"} h={"130px"} m="auto" mt={"10px"}  border={"1px solid"}>
                <Input mt={"30px"} placeholder='$ AUD' w={"60%"} h="50px" border={"1px solid"} ml="22px"/>
                    

                
                <Button mt={"-3px"} h="50px" w={"30%"} background="white" color={"#e51075"}  ml={"10px"} border={"1px solid"} borderColor="black"> CONTINUE</Button>
                <Text fontSize={"xs"} ml={"-170px"}>Contributions are not associated with perks</Text>
            </Box>

            <Text ml={"-350px"} mt="25px"  fontSize={"lg"}>Select A Perk</Text>

            <Box w={"30%"} height="850px" border={"1px solid"} m="auto">
                <Avatar w={"100%"} h="50%" borderRadius={0}  src='https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_762,g_center,q_auto:best,dpr_1.3,f_auto,h_506/tworx1ad7j2jtylmcdu0' />
                <Text fontSize={"md"} fontWeight="bold" ml={"-210px"}>20cm Iron Dual-Handle Pan</Text>
                <Box ml={"15px"} display={"flex"}>
                    <Text>$79 AUD</Text>
                    <Text fontSize={"xs"} mt="5px" ml={"5px"} color={"red"} as='s'>$110 AUD</Text>
                    <Text fontSize={"xs"} mt="5px" ml={"5px"} color={"red"}>(28% OFF)</Text>
                    
                </Box>
                <Text color="grey" ml={"-350px"}> ₹4,371 INR</Text>
                <Text mt={"10px"} ml={"15px"} textAlign={"left"}>
                The perfect small breakfast pan, from stovetop to oven! 100% made in Australia from clean Australian iron, and naturally seasoned for you. Stamped First Edition.
                </Text>

                <Text mt={"10px"} ml="-310px" fontWeight={"bold"} fontSize={"md"}>Included Items</Text>
                
                
                    <Text mt={"15px"} ml="-220px" fontSize={"sm"}>20cm Iron Dual-Handle Pan</Text>

                    <Text mt={"10px"} ml="-280px" fontWeight={"bold"} fontSize={"md"}>Estimate Shopping</Text>
                    <Text ml={"-320"}>October 2022</Text>

                    <Text ml={"-350"} mt="20px">1 Claimed</Text>

                    <Text ml={"-310"} mt="20px">Ships worldwide.</Text>

                    <Button border={"1px solid black"} background={"none"} mt={"10px"} w="90%" color={"#e51075"}>GET THIS PERK</Button>
                
            </Box>
            
            

        </Box>
    )
}
export default Project;