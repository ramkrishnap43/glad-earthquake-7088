import {
    Box,
    Avatar,
    Flex,
    Text,
    Link,
    Grid,
    GridItem,
    Heading,
  } from '@chakra-ui/react';
  import { Input } from '@chakra-ui/react'
  import Navbar from "./Navbar"
  import Footer from "./Footer"
  import {Link as NavLink} from "react-router-dom"

function HomePage(){


    return (
        <Box>
            <Navbar />
            <Heading>HOME</Heading>
            <Avatar mt={"20px"} w={"100%"} h="250px" borderRadius={0} src='https://g1.iggcdn.com/assets/explore/desktop/home-feb7cf4955b32ce64fbb5843004170aa1d9349ad962007c2f29158aa33b79b99.jpg' /> 
            <Input mt={"30px"} w={"50%"} placeholder='Search for Campaigns' />

             <Box w={"80%"} display="flex"  m={"auto"} mt={"30px"}>
                
             <Box   w="25%" h={"560px"} m="auto"  >

                <Avatar borderRadius={0}  w={"100%"} h="53%" 
                        src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/vtefomnglnucb68o0s0e.jpg" /> 

                <Box display={"flex"} justifyContent="space-between">
                    <Text mt={"10px"} ml="10px" color={"green"}>FUNDING</Text>
                    <Avatar  cursor="pointer"  background={"none"} src="https://t4.ftcdn.net/jpg/02/96/25/19/240_F_296251945_NxHb4ZVdBzinGRjBEAjSlzKHGFuaHbDV.jpg" />
                </Box>

                <NavLink to="/project"><Box>
                        <Text textAlign={"left"} ml="10px" fontWeight={"medium"}> <Link   fontSize={"lg"} >Australian Made Light Iron Cookware</Link></Text>
                    </Box></NavLink>

                    <Box mt={"5px"}>
                        <Text ml="10px" textAlign={"left"} fontSize='xs'>Much lighter than cast iron and</Text>
                        <Text ml="10px" textAlign={"left"} fontSize='xs'>seasoned for you. No toxic coatings,</Text>
                        <Text ml="10px" textAlign={"left"} fontSize='xs'>buit to last for generations.</Text>
                    </Box>

                    <Box mt={"10px"}>
                        <Text  ml="10px" textAlign={"left"} fontSize='sm'>HOME</Text>
                    </Box>

                    <Box display={"flex"} justifyContent="space-between">
                        <Text ml="10px" textAlign={"left"} fontSize='sm' fontWeight={"bold"}>$6,438 AUD Raised</Text>
                        <Text fontSize='sm' mr={"10px"}>1,288%</Text>
                    </Box>
                    <Box borderRadius={"5px"} backgroundColor={"#34ca96"} mt={"5px"} ml={"10px"} w={"90%"} h="10px" border={"1px solid black"} borderColor="green">

                    </Box>

                    <Box>
                        <Avatar mt={"8px"} ml={"-220px"} w={"25px"} h="25px" backgroundColor={"none"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBgmaYg9OLkQTO2wDNSpZv_wXPesZxHiiVpg&usqp=CAU' />
                        <Text fontSize={"xs"} ml="-120px" mt={"-22px"} color={"grey"}>9 days left</Text>
                    </Box>


                </Box>

                {/* 2 */}

                <Box   w="25%" h={"560px"} m="auto"  >

                <Avatar borderRadius={0}  w={"100%"} h="53%" 
                        src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/yww5jf2adyhrfyc4harg.jpg" /> 

                <Box display={"flex"} justifyContent="space-between">
                    <Text mt={"10px"} ml="10px" color={"green"}>FUNDING</Text>
                    <Avatar  cursor="pointer"  background={"none"} src="https://t4.ftcdn.net/jpg/02/96/25/19/240_F_296251945_NxHb4ZVdBzinGRjBEAjSlzKHGFuaHbDV.jpg" />
                </Box>

                    <Box>
                        <Text textAlign={"left"} ml="10px" fontWeight={"medium"}> <Link   fontSize={"lg"} >Paris Rhone Laser Projector - Bring The Cinema Home</Link></Text>
                    </Box>

                    <Box mt={"5px"}>
                        <Text ml="10px" textAlign={"left"} fontSize='xs'>4K UHD | 80" - 150 Display| Ultra Short</Text>
                        <Text ml="10px" textAlign={"left"} fontSize='xs'>Throw | 3000:1 Contrast | Dolby Audio &</Text>
                        <Text ml="10px" textAlign={"left"} fontSize='xs'>DTS Decoding | MEMC</Text>
                    </Box>

                    <Box mt={"10px"}>
                        <Text  ml="10px" textAlign={"left"} fontSize='sm'>HOME</Text>
                    </Box>

                    <Box display={"flex"} justifyContent="space-between">
                        <Text ml="10px" textAlign={"left"} fontSize='sm' fontWeight={"bold"}>$42,884 USD Raised</Text>
                        <Text fontSize='sm' mr={"10px"}>1,288%</Text>
                    </Box>
                    <Box borderRadius={"5px"} backgroundColor={"#34ca96"} mt={"5px"} ml={"10px"} w={"90%"} h="10px" border={"1px solid black"} borderColor="green">

                    </Box>

                    <Box>
                        <Avatar mt={"8px"} ml={"-220px"} w={"25px"} h="25px" backgroundColor={"none"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBgmaYg9OLkQTO2wDNSpZv_wXPesZxHiiVpg&usqp=CAU' />
                        <Text fontSize={"xs"} ml="-120px" mt={"-22px"} color={"grey"}>27days left</Text>
                    </Box>


                </Box>

                {/* 3 */}

                
                <Box  w="25%" h={"560px"} m="auto"  >

                <Avatar borderRadius={0}  w={"100%"} h="53%" 
                        src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/cfzfdnmbzgkazlo7nxd2.jpg" /> 

                <Box display={"flex"} justifyContent="space-between">
                    <Text mt={"10px"} ml="10px" color={"green"}>FUNDING</Text>
                    <Avatar  cursor="pointer"  background={"none"} src="https://t4.ftcdn.net/jpg/02/96/25/19/240_F_296251945_NxHb4ZVdBzinGRjBEAjSlzKHGFuaHbDV.jpg" />
                </Box>

                    <Box>
                        <Text textAlign={"left"} ml="10px" fontWeight={"medium"}> <Link   fontSize={"lg"} >The Space Safe - The First Real Smart Safe</Link></Text>
                    </Box>

                    <Box mt={"5px"}>
                        <Text ml="10px" textAlign={"left"} fontSize='xs'>The most advanced safe that doesnt</Text>
                        <Text ml="10px" textAlign={"left"} fontSize='xs'>look like safe; WiFi, Apps, Cameras,</Text>
                        <Text ml="10px" textAlign={"left"} fontSize='xs'>Display , Guest acc, & more</Text>
                    </Box>

                    <Box mt={"10px"}>
                        <Text  ml="10px" textAlign={"left"} fontSize='sm'>HOME</Text>
                    </Box>

                    <Box display={"flex"} justifyContent="space-between">
                        <Text ml="10px" textAlign={"left"} fontSize='sm' fontWeight={"bold"}>$891,261 USD Raised</Text>
                        <Text fontSize='sm' mr={"10px"}>1,742%</Text>
                    </Box>
                    <Box borderRadius={"5px"} backgroundColor={"#34ca96"} mt={"5px"} ml={"10px"} w={"90%"} h="10px" border={"1px solid black"} borderColor="green">

                    </Box>

                    <Box>
                        <Avatar mt={"8px"} ml={"-220px"} w={"25px"} h="25px" backgroundColor={"none"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBgmaYg9OLkQTO2wDNSpZv_wXPesZxHiiVpg&usqp=CAU' />
                        <Text fontSize={"xs"} ml="-10px" mt={"-22px"} color={"grey"}>Now Funding through InDemand</Text>
                    </Box>


                </Box>

            </Box>







            {/* 4 */}

            <Box w={"80%"} display="flex"    m={"auto"} mt={"30px"} mb="20px">
                
            <Box   w="25%" h={"560px"} m="auto"  >

                <Avatar borderRadius={0}  w={"100%"} h="53%" 
                        src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/kwhypbftozuv90ikhrrs.jpg" /> 

                <Box display={"flex"} justifyContent="space-between">
                    <Text mt={"10px"} ml="10px" color={"green"}>FUNDING</Text>
                    <Avatar  cursor="pointer"  background={"none"} src="https://t4.ftcdn.net/jpg/02/96/25/19/240_F_296251945_NxHb4ZVdBzinGRjBEAjSlzKHGFuaHbDV.jpg" />
                </Box>

                    <Box>
                        <Text textAlign={"left"} ml="10px" fontWeight={"medium"}> <Link   fontSize={"lg"} >Navabot - Revolutionary Autonomous Lawn Care Robot</Link></Text>
                    </Box>

                    <Box mt={"5px"}>
                        <Text ml="10px" textAlign={"left"} fontSize='xs'>No perimeter cable | Visual Detection</Text>
                        <Text ml="10px" textAlign={"left"} fontSize='xs'>| Multi-zone cut | Mow upto 1/2 acre</Text>
                        <Text ml="10px" textAlign={"left"} fontSize='xs'>| 45% Slope | Security Monitor</Text>
                    </Box>

                    <Box mt={"10px"}>
                        <Text  ml="10px" textAlign={"left"} fontSize='sm'>HOME</Text>
                    </Box>

                    <Box display={"flex"} justifyContent="space-between">
                        <Text ml="10px" textAlign={"left"} fontSize='sm' fontWeight={"bold"}>$1,720,965 USD Raised</Text>
                        <Text fontSize='sm' mr={"10px"}>7,199%</Text>
                    </Box>
                    <Box borderRadius={"5px"} backgroundColor={"#34ca96"} mt={"5px"} ml={"10px"} w={"90%"} h="10px" border={"1px solid black"} borderColor="green">

                    </Box>

                    <Box>
                        <Avatar mt={"8px"} ml={"-220px"} w={"25px"} h="25px" backgroundColor={"none"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBgmaYg9OLkQTO2wDNSpZv_wXPesZxHiiVpg&usqp=CAU' />
                        <Text fontSize={"xs"} ml="-10px" mt={"-22px"} color={"grey"}>Now Funding through InDemand</Text>
                    </Box>


                </Box>

                {/* 5 */}

                <Box   w="25%" h={"560px"} m="auto"  >

                <Avatar borderRadius={0}  w={"100%"} h="53%" 
                        src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/yvhlgwolmic6tszckrah.jpg" /> 

                <Box display={"flex"} justifyContent="space-between">
                    <Text mt={"10px"} ml="10px" color={"green"}>FUNDING</Text>
                    <Avatar  cursor="pointer"  background={"none"} src="https://t4.ftcdn.net/jpg/02/96/25/19/240_F_296251945_NxHb4ZVdBzinGRjBEAjSlzKHGFuaHbDV.jpg" />
                </Box>

                    <Box>
                        <Text textAlign={"left"} ml="10px" fontWeight={"medium"}> <Link   fontSize={"lg"} >frescopod - Singlr serve Coffee's New</Link></Text>
                    </Box>

                    <Box mt={"5px"}>
                        <Text ml="10px" textAlign={"left"} fontSize='xs'>4K UHD | 80" - 150 Display| Ultra Short</Text>
                        <Text ml="10px" textAlign={"left"} fontSize='xs'>Throw | 3000:1 Contrast | Dolby Audio &</Text>
                        <Text ml="10px" textAlign={"left"} fontSize='xs'>DTS Decoding | MEMC</Text>
                    </Box>

                    <Box mt={"10px"}>
                        <Text  ml="10px" textAlign={"left"} fontSize='sm'>HOME</Text>
                    </Box>

                    <Box display={"flex"} justifyContent="space-between">
                        <Text ml="10px" textAlign={"left"} fontSize='sm' fontWeight={"bold"}>$221,785 USD Raised</Text>
                        <Text fontSize='sm' mr={"10px"}>1,288%</Text>
                    </Box>
                    <Box borderRadius={"5px"} backgroundColor={"#34ca96"} mt={"5px"} ml={"10px"} w={"90%"} h="10px" border={"1px solid black"} borderColor="green">

                    </Box>

                    <Box>
                        <Avatar mt={"8px"} ml={"-220px"} w={"25px"} h="25px" backgroundColor={"none"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBgmaYg9OLkQTO2wDNSpZv_wXPesZxHiiVpg&usqp=CAU' />
                        <Text fontSize={"xs"} ml="-10px" mt={"-22px"} color={"grey"}>Now Funding through InDemand</Text>
                    </Box>


                </Box>

                {/* 6 */}

                
                <Box   w="25%" h={"560px"} m="auto"  >

                <Avatar borderRadius={0}  w={"100%"} h="53%" 
                        src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/aorjahukf8mztjt7z5vn.jpg" /> 

                <Box display={"flex"} justifyContent="space-between">
                    <Text mt={"10px"} ml="10px" color={"green"}>FUNDING</Text>
                    <Avatar  cursor="pointer"  background={"none"} src="https://t4.ftcdn.net/jpg/02/96/25/19/240_F_296251945_NxHb4ZVdBzinGRjBEAjSlzKHGFuaHbDV.jpg" />
                </Box>

                    <Box>
                        <Text textAlign={"left"} ml="10px" fontWeight={"medium"}> <Link   fontSize={"lg"} >The Space Safe - The First Real Smart Safe</Link></Text>
                    </Box>

                    <Box mt={"5px"}>
                        <Text ml="10px" textAlign={"left"} fontSize='xs'>The most advanced safe that doesnt</Text>
                        <Text ml="10px" textAlign={"left"} fontSize='xs'>look like safe; WiFi, Apps, Cameras,</Text>
                        <Text ml="10px" textAlign={"left"} fontSize='xs'>Display , Guest acc, & more</Text>
                    </Box>

                    <Box mt={"10px"}>
                        <Text  ml="10px" textAlign={"left"} fontSize='sm'>HOME</Text>
                    </Box>

                    <Box display={"flex"} justifyContent="space-between">
                        <Text ml="10px" textAlign={"left"} fontSize='sm' fontWeight={"bold"}>$10,204 USD Raised</Text>
                        <Text fontSize='sm' mr={"10px"}>128%</Text>
                    </Box>
                    <Box borderRadius={"5px"} backgroundColor={"#34ca96"} mt={"5px"} ml={"10px"} w={"90%"} h="10px" border={"1px solid black"} borderColor="green">

                    </Box>

                    <Box>
                        <Avatar mt={"8px"} ml={"-220px"} w={"25px"} h="25px" backgroundColor={"none"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBgmaYg9OLkQTO2wDNSpZv_wXPesZxHiiVpg&usqp=CAU' />
                        <Text fontSize={"xs"} ml="-10px" mt={"-22px"} color={"grey"}>Now Funding through InDemand</Text>
                    </Box>


                </Box>




















            </Box>

            <Footer />





        </Box>
    )
}
export default HomePage;