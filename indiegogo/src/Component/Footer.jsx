
import {
  Box,
  Input,
  Container,
  Stack,
  Avatar,Heading,Checkbox,Button,
  SimpleGrid,
  Text,
  Flex,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import MessageBox from "./MessageBox"


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

 function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>

            <Stack align={'flex-start'}>
                <ListHeader>EXPLORE</ListHeader>
                <Link href={'#'}>What We Do</Link>
                <Link href={'#'}>Funding</Link>


            </Stack>


          <Stack align={'flex-start'}>
            <ListHeader>ABOUT</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Trust & Safety</Link>
            <Link href={'#'}>Help & Support</Link>
            <Link href={'#'}>Press</Link>
            <Link href={'#'}>Career</Link>
            <Link href={'#'}>Contact</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>ENTREPRENEURS</ListHeader>
            <Link href={'#'}>How it Works</Link>
            <Link href={'#'}>Indiegogo vs. Kickstarter</Link>
            <Link href={'#'}>Education Center</Link>
            <Link href={'#'}>Expert Directory</Link>
            <Link href={'#'}>Fees</Link>
            <Link href={'#'}>Enterprise</Link>
            <Link href={'#'}>China</Link>
          </Stack>

          

        </SimpleGrid>
        <Flex >
         <Input mt={"150px"} w={"220px"} border={"1px"} borderColor="black"  placeholder="₹ Indian Rupee(INR)"/>

        <Stack mt={"150px"} ml={"20px"} direction={'row'} spacing={6}>
            <SocialButton label={'Facebook'} href={'#'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Linkedin'} href={'#'}>
              <FaLinkedin />
            </SocialButton>
            
          </Stack>
          <Box h={"380px"} w="30%"  mt="-250px" ml="380px">
            <Avatar mt={5} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPO6sOEM1c3LS43q6qBqLa2bG3vfnZm3ViSA&usqp=CAU" />
            <Heading mt={2} size={"sm"}>Find it first on Indiegogo</Heading>
            <Box w={280} ml="10px" mt={1}>
                <Text >Discover new and clever products in the Indiegogo newsletter</Text>
            </Box>
             <Box w="80%" ml={10} mt={8} borderColor={"#e21941"} >
                <Input placeholder='Your Email Address' />
             </Box>

            <Box w="95%" ml={5} mt={2}>
                <Checkbox borderColor={"black"} color={"#e21941"} textAlign="left">I agree to the <Text as='u'>Terms of Use</Text> and have read and understand the <Text as='u' textAlign={"left"}>Privacy Policy</Text> </Checkbox>
                
            </Box>

            <Button mt={8}  w="80%" backgroundColor={"#e51075"} color="white" >SIGN ME UP</Button>
        </Box>
          
          </Flex>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'4xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
          fontSize={"11.5px"}>
            <Link>Terms of Use</Link>
            <Link>Privacy Policy</Link>
            <Link>Cookie Policy</Link>
            <Link>Do Not Sell My Personal Information</Link>
            <Link>Accessibility</Link>
          <Text>© 2022 Indiegogo, Inc. All Rights Reserved</Text>
          
        </Container>
      </Box>
    </Box>
  );
}
export default Footer;




