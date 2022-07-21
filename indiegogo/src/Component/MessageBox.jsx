import {Avatar, Box, Heading,Text, Input, Checkbox,span, Button,Link} from '@chakra-ui/react';
function MessageBox() {

    return (
        <Box h={"380px"} w="25%"  m="auto">
            <Avatar mt={5} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPO6sOEM1c3LS43q6qBqLa2bG3vfnZm3ViSA&usqp=CAU" />
            <Heading mt={2} size={"sm"}>Find it first on Indiegogo</Heading>
            <Box w={280} ml="55px" mt={1}>
                <Text>Discover new and clever products in the Indiegogo newsletter</Text>
            </Box>
             <Box w="80%" ml={10} mt={8} borderColor={"#e21941"} >
                <Input placeholder='Your Email Address' />
             </Box>

            <Box w="75%" ml={5} mt={2}>
                <Checkbox borderColor={"black"} color={"#e21941"} textAlign="left">I agree to the <Text as='u'>Terms of Use</Text> and have read and understand the <Text as='u' textAlign={"left"}>Privacy Policy</Text> </Checkbox>
                
            </Box>

            <Button mt={8}  w="80%" backgroundColor={"#e51075"} color="white" >SIGN ME UP</Button>
        </Box>
    )
}
export default MessageBox;