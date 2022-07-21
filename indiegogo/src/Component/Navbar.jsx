import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Avatar,
    Spacer,
  } from '@chakra-ui/react';
import { motion } from 'framer-motion';
  import {BiChevronDown } from "react-icons/bi"
  import {BsSearch} from "react-icons/bs"
  import PopUp from './PopUp';
  
  
  
  
  export default function Navbar(){
    const { isOpen, onToggle } = useDisclosure();

    const handleClick =() => {
        
    }

    return (
        <Box 
            w="100%"
            h={"60px"}
            border="1px solid black"
            
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
                onClick={handleClick}
                cursor= "pointer"
                ml={"25px"}
                mt={"15px"}
                _hover={{color : "#e51075"}}
              >Explore </Text>
             <Text cursor= "pointer"  mt={"20px"} w="35px" _hover={{color : "#e51075"}} ><  BiChevronDown /></Text> 
                
              <Text 
              cursor= "pointer"
                ml={"20px"}
                mt={"15px"}
                _hover={{color : "#e51075"}}
                >What We Do </Text>

              <Box cursor= "pointer" mt={"20px"} ml={"15px"} _hover={{color : "#e51075"}} ><BsSearch/></Box>

                <Spacer />

              <Text cursor= "pointer" mt={"15px"} mr={"35px"}  _hover={{color : "#e51075"}}>For Entrepreneurs</Text>

              <Text cursor= "pointer" mt={"15px"} mr={"35px"} _hover={{color : "#e51075"}}>Start a Campaign</Text>

              
          
              <Button 
                 
                 mt={"7px"}
                 mr={"15px"}
                 bg="none"
                 _hover={{color : "#e51075"}}
                 >Log in</Button>

              <Button
              
                mt={"7px"}
                mr={"5px"}
                bg="none"
                _hover={{color : "#e51075"}}
              >Sign up</Button>




            </Flex>




        </Box>
    )
  }
  
    