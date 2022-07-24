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
                <option>1999</option>
                <option>2000</option>
                <option>2001</option>
                <option>2002</option>
                <option>2003</option>
                <option>2004</option>
                <option>2005</option>
                <option>2006</option>
                <option>2007</option>
                <option>2008</option>
                <option>2009</option>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
            </Select>
 
             <Link to="/order"><Button  backgroundColor={"teal"} color="white" w={"60%"} mt={"50px"}>CONFIRM</Button></Link>






        </Box>
    )
}
export default Payment;