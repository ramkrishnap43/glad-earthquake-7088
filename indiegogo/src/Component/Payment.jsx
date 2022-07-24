import { Select ,Text, Box,  Heading ,Input, Button } from "@chakra-ui/react";
import {Link} from "react-router-dom"

function Payment(){
    return (
        <Box m={"auto"} mt="60px" w="50%" h="500px "  boxShadow='xl'>
            <Heading>Confirm Your Payment</Heading>
            <Text textAlign={"left"} mt="20px" ml={"40px"} fontWeight="bold">Your Name</Text>
            <Input ml={"-300px"} mt="10px" w={"50%"} placeholder="Your Name" />
            <Text textAlign={"left"} mt="20px" ml={"40px"} fontWeight="bold">Card Number</Text>
            <Input ml={"-300px"} mt="10px" w={"50%"} placeholder="Enter Your Card Number " />
            <Text textAlign={"right"} fontWeight="bold" mt={"-70px"} mr="170px">CVV</Text>
            <Input w={"20%"} ml="500px" mt={"6px"} placeholder="cvv" />

            <Text textAlign={"left"} mt="20px" ml={"40px"} fontWeight="bold">Expiry Date</Text>
            <Select mt={"20px"} ml={"40px"} w={"15%"}>
                <option  value='Jan'>Jan</option>
                <option value='Feb'>Feb</option>
                <option value='Mar'>Mar</option>
                <option  value='Apr'>Apr</option>
                <option value='May'>May</option>
                <option value='Jun'>Jun</option>
                <option  value='Jul'>Jul</option>
                <option value='Aug'>Aug</option>
                <option value='Sep'>Sep</option>
                <option  value='Oct'>Oct</option>
                <option value='Nov'>Nov</option>
                <option value='Dec'>Dec</option>
            </Select>


            <Select mt={"-40px"} ml={"180px"} w={"15%"}>
                <option>Select Year</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
                <option>2030</option>
                <option>2031</option>
                <option>2032</option>
                <option>2033</option>
                <option>2034</option>
                <option>2035</option>
                <option>2036</option>
                <option>2037</option>
                <option>2038</option>
                <option>2039</option>
                <option>2040</option>
                <option>2041</option>
                <option>2042</option>
                <option>2043</option>
                <option>2044</option>
                <option>2045</option>
            </Select>
 
             <Link to="/order"><Button  backgroundColor={"teal"} color="white" w={"60%"} mt={"50px"}>CONFIRM</Button></Link>






        </Box>
    )
}
export default Payment;