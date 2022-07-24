import {
    Box,
    Avatar,
    Text,
    Link,
    Grid,
    GridItem,
  } from '@chakra-ui/react';
  import Footer from "./Footer"
  import Block from "./Block"
  import Navbar from "./Navbar"
  import Corousel from "./Corousel"
  import Project from './Project';
import {Link as NavLink } from 'react-router-dom';

function Home(){

    return(
        <Box>
            <Navbar />
            <Corousel />
        <Box  w="80%" h={"800px"} m="auto">
            <Grid templateColumns='repeat(2, 1fr)' gap={"60px"}  p="10px">
                <GridItem > 
                    <NavLink to="/"><Avatar  w={"100%"} h="350px" borderRadius={0} src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658337097/bug9usedhjrgoor94vta.jpg" /></NavLink>
                    <Box display={"flex"} justifyContent="space-between">
                        <Text >Our roundup of standout projects</Text>
                        <Text ><Link  >SEE THE COLLECTION</Link></Text>
                    </Box>
                </GridItem>


                <GridItem>
                    <Avatar  w={"100%"} h="350px" borderRadius={0} src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658337249/lkwj5kt668yhy2npunxi.jpg" />
                    <Box display={"flex"} justifyContent="space-between">
                        <Text >Shock Clock 3 & more team Favourites</Text>
                        <Text ><Link  >SEE THE COLLECTION</Link></Text>
                    </Box>
                </GridItem>


                <GridItem>
                    <Avatar  w={"100%"} h="350px" borderRadius={0} src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1655332492/xmwmdtjfvyy2mbbre4qo.png" />
                    <Box display={"flex"} justifyContent="space-between">
                        <Text >Check out these innovative steals </Text>
                        <Text ><Link  >SEE THE COLLECTION</Link></Text>
                    </Box>
                </GridItem>


                <GridItem>
                    <Avatar  w={"100%"} h="350px" borderRadius={0} src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1655928312/i0uzp26kdwgeum2inbli.png" />
                    <Box display={"flex"} justifyContent="space-between">
                        <Text >Show your support in honor of pride month</Text>
                        <Text ><Link  >SEE THE COLLECTION</Link></Text>
                    </Box>
                </GridItem>




            </Grid>


            

        </Box>

            <Box mt={"60px"}>
                <Text fontSize={"3xl"}>Which categories interest you?</Text>
                <Text fontSize={"md"} mt={"20px"}>Discover projects just for you and get great recommendations when you select your interests.</Text>
                <Text fontSize={"md"} mt={"20px"}>Or explore our top categories</Text>
            </Box>

            <Box w={"80%"} m="auto">

            <Grid templateColumns='repeat(6, 1fr)' gap={-15} mt={"30px"}>
                <GridItem  >
                   <NavLink to="/homepage"> <Box  _hover={{backgroundColor : "#E8E8E8"}} w={"89%"} h="120px"  p="20px">
                        <Avatar borderRadius={0} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbLEjlsIt1U30C_uvR5V_bl9i7Brk6fhFg-w&usqp=CAU" />
                        <Text mt={"8px"} fontSize={"xs"}>HOME</Text>
                    </Box>
                    </NavLink>
                    
                </GridItem>


                <GridItem >
                    <Box  _hover={{backgroundColor : "#E8E8E8"}} w={"89%"} h="120px"  p="20px">
                        <Avatar borderRadius={0} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIDzjYA5uEEVprlgtBAoQAjkwDPd3xjh_DHA&usqp=CAU" />
                        <Text mt={"8px"} fontSize={"xs"}>PHONE & ACCESSORIES</Text>
                    </Box>
                </GridItem>


                <GridItem >
                    <Box  _hover={{backgroundColor : "#E8E8E8"}} w={"89%"} h="120px"  p="20px">
                        <Avatar borderRadius={0} src="data:image/jpeg;base64,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" />
                        <Text mt={"8px"} fontSize={"xs"}>TRAVEL & OUTDOORS</Text>
                    </Box>
                </GridItem>


                <GridItem >
                    <Box  _hover={{backgroundColor : "#E8E8E8"}} w={"89%"} h="120px"  p="20px"> 
                        <Avatar borderRadius={0} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHoFoQDe4nW9IK6pISWTo5je-1mqUr1RQgFQ&usqp=CAU" />
                        <Text mt={"8px"} fontSize={"xs"}>HEALTH & FITNESS</Text>
                    </Box>
                </GridItem>


                <GridItem >
                    <Box  _hover={{backgroundColor : "#E8E8E8"}} w={"89%"} h="120px"  p="20px">
                        <Avatar borderRadius={0} src="data:image/png;base64,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" />
                        <Text mt={"8px"} fontSize={"xs"}>AUDIO</Text>
                    </Box>
                </GridItem>


                <GridItem >
                    <Box  _hover={{backgroundColor : "#E8E8E8"}} w={"89%"} h="120px"  p="20px">
                        <Avatar borderRadius={0} src="data:image/png;base64,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" />
                        <Text mt={"8px"} fontSize={"xs"}>FILM</Text>
                    </Box>
                </GridItem>

               </Grid>
            </Box>

            <Box>
                <Text mt={"15px"} ml={"140px"} textAlign={"left"} fontSize={"3xl"}>Recently Viewed</Text>
            </Box>

            <Block />

            <Footer />


        </Box>
    )
}

export default Home;