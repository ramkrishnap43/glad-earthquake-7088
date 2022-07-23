import {
    Box,
    Flex,
    Text,
    Button,
    useDisclosure,
    Spacer
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';

  import {BiChevronDown } from "react-icons/bi"
  import {BsSearch} from "react-icons/bs"
 
 
  
  
  
  
  export default function Navbar(){
    const { isOpen, onToggle } = useDisclosure();
    

    return (
        <Box 
            w="100%"
            h={"60px"}
            
            
        >

            <Flex>
              
              <Text 
              
                fontSize={"27px"}
                ml="10px"
                mt={"8px"}
                fontWeight="bold"
                color={"#e51075"}
                cursor= "pointer"
                

              >INDIEGOGO</Text>

              <Text 
                
                cursor= "pointer"
                ml={"25px"}
                mt={"15px"}
                _hover={{color : "#e51075"}}
                fontWeight="bold"
              >Explore </Text>
             <Text cursor= "pointer" fontWeight="bold" mt={"20px"} w="35px" _hover={{color : "#e51075"}} ><  BiChevronDown /></Text> 
                
              <Text 
              cursor= "pointer"
                ml={"20px"}
                mt={"15px"}
                _hover={{color : "#e51075"}}
                fontWeight="bold"
                >What We Do </Text>

              <Box cursor= "pointer" mt={"20px"} ml={"15px"} _hover={{color : "#e51075"}} ><BsSearch/></Box>

                <Spacer />

              <Text cursor= "pointer" mt={"15px"} mr={"35px"} fontWeight="bold" _hover={{color : "#e51075"}}>For Entrepreneurs</Text>

              <Text cursor= "pointer" mt={"15px"} fontWeight="bold" mr={"35px"} _hover={{color : "#e51075"}}>Start a Campaign</Text>

              
          <Link to="/login" >
                <Button 
                  
                  mt={"7px"}
                  mr={"15px"}
                  bg="none"
                  _hover={{color : "#e51075"}}
                  fontWeight="bold"
                  
                  >Log in</Button>
                </Link>

                <Link to="/signup" >
                      <Button
              
                        mt={"7px"}
                        mr={"5px"}
                        bg="none"
                        fontWeight="bold"
                        _hover={{color : "#e51075"}}
              >Sign up</Button>
             </Link>




            </Flex>




        </Box>
    )
  }
  
    