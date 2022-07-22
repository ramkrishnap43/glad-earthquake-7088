import 
{ 
Heading, Box, Avatar, Link, Flex, Text, Button, Spacer

} from "@chakra-ui/react";
import { Grid, GridItem  } from '@chakra-ui/react'
import Footer from "./Footer";

let data = [
    {
        id : 1,
        images : "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658244749/flc5yf33kcubwtirrfyd.jpg",
        title : "Just Launched! Paris Rhone Laser Projector",
        head : "Bring The Cinema Home"
    },

    {
        id : 2,
        images : "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658420620/r5usabodebjlcenx6agk.jpg",
        title : "Philips Screeneo U4",
        head : "Ultra Short Throw Projector"
    },
    {
        id : 3,
        images : "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658245112/jczdjyod9b8gdujqvbym.jpg",
        title : "ENGWE X26",
        head : "All-Terrain E-Bike: 62Mile Longest Range"
    },
    {
        id : 4,
        images : "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658245274/qeg3izrxrngmn1rnhiju.jpg",
        title : "X300",
        head : "Wireless, Portable LED Projector & Speaker"
    },
]
function Home(){
    return(

         <Box>
            <Grid 
            templateColumns='repeat(2, 1fr)'
             templateRows='repeat(2, 1fr)' 
             gap={"50px"}  
             ml={"50px"}
             p="100px"
             >
                <GridItem  >
                    <Box>
                        {/* <Heading>10 Cool & Clever Finds</Heading> */}
                        <Avatar borderRadius={0} w='100%' h='400px'  src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658337097/bug9usedhjrgoor94vta.jpg" />
                        <Flex justifyContent={"space-between"}>
                            <Link fontSize={"sm"} textColor="black">Our roundup of standout projects</Link>
                            <Link fontSize={"sm"}>SEE THE COLLECTION ></Link>
                        </Flex>
                    </Box>
                </GridItem>

                <GridItem  >
                    <Box>
                        {/* <Heading>10 Cool & Clever Finds</Heading> */}
                        <Avatar borderRadius={0} w='100%' h='400px'  src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658337249/lkwj5kt668yhy2npunxi.jpg" />
                        <Flex justifyContent={"space-between"}>
                            <Link fontSize={"sm"} textColor="black">Shock Clock 3 & more team favourites</Link>
                            <Link fontSize={"sm"}>SEE THE COLLECTION ></Link>
                        </Flex>
                    </Box>
                </GridItem>

                <GridItem  >
                    <Box>
                        {/* <Heading>10 Cool & Clever Finds</Heading> */}
                        <Avatar borderRadius={0} w='100%' h='400px'  src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1655332492/xmwmdtjfvyy2mbbre4qo.png" />
                        <Flex justifyContent={"space-between"}>
                            <Link fontSize={"sm"} textColor="black">Check out these innovative steals</Link>
                            <Link fontSize={"sm"}>SEE THE COLLECTION ></Link>
                        </Flex>
                    </Box>
                </GridItem>

                <GridItem  >
                    <Box>
                        {/* <Heading>10 Cool & Clever Finds</Heading> */}
                        <Avatar borderRadius={0} w='100%' h='400px'  src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1655928312/i0uzp26kdwgeum2inbli.png" />
                        <Flex justifyContent={"space-between"}>
                            <Link fontSize={"sm"} textColor="black">Show your support in honor of pride month</Link>
                            <Link fontSize={"sm"}>SEE THE COLLECTION ></Link>
                        </Flex>
                    </Box>
                </GridItem>
            </Grid>

            <Box>
                <Text fontSize='3xl'>Which categories interest you?</Text>
                <Text fontSize='md' mt={"20px"}>Discover projects just for you and get great recommendations when you select your interests.</Text>
                <Text fontSize='md' mt={"20px"}>Or explore our top categories</Text>
            </Box>

            <Grid 
            templateColumns='repeat(6, 1fr)'
             mt={9}
             ml={"150px"}>
             
                <GridItem _hover={{
                bg:('#DCDCDC'),
                }}
                h="120px"
                p="15px">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2__OqQyD0QX69a-fpDXEoMIEoT4vd0h8EA&usqp=CAU" />
                    <Text mt={"15px"} fontSize={"xs"}>HOME</Text>
                </GridItem>

                <GridItem _hover={{
                bg:('#DCDCDC'),
                }}
                h="120px"
                p="15px">
                    <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX/////FJP/AI//Pp7/AI3/fLz/q9T/OKH/yOT/AJD/ocr/Q6L/Sqb/Uqr/Y7L/Wq7/sdf/uNv/bLb/+v3/3O7/zeb/vt7/9fv/stj/jMX/7/j/dbr/Kpv/hsL/0un/6/b/ns7/Hpj/ptL/2+7/5PH/lMn/isP/crj/YLD/mszHreylAAAEVElEQVR4nO3d63qbOBSFYaMKsOIz+BRCqPGhae//BgfcedpxQNN0e0mi7vr+V+HFYIQgzWgkrFhXm/F2tVouk+8dn45tT52ONz0lv2j5rtX39mvploraJROj9DXlOv1v6rXwB9yW2kTeU/XRF/AlhK9NL3Ifvnyhw/ia1HTnQZipYMCGuHAP3If7BNv0s2tgEegU/EmsHAvjkMdom5m5Ba5DA5sP8eRU+BJeqNyeiVno07A5TKePLow+UUghhcGjkMK/XTinkEIKKaSQQgopfFChcdkQhHXqsjK80MROf2DSXdzzLVSOhd2HCBTeF4XwKIS3oBAdhfAohEchPArhUQiPQngUwqMQHoXwKIRHIbzHF84oREchPArhUQiPQngUwqMQHoXwKIRHITwK4VEIb0ohOgrhUQiPQngUwqMQHoXwKIRHITwK4VEIj0J4jy+cUIiOQngUwqMQHoXwKIRHITwK4VEIj0J4FMKjEB6F8LwLP3V+HoV3RiE8CuFRCI9CeBTCoxAehfAohEchPArhUQiPQngUwqMQHoXwKIRHITwK4VEIj0J4FMJ7/GfAFMKjEB6F8CiERyE8CuFRCI9CeBTCoxDe4/8uN4XwBiA0883YXZtX339LtiuMjHZZF+hf6D0KKaQwtM///7JLIYUUUkjh79b9q2QU3mRU2517abhCo6LF6yE5XrLyLuRghWox/jFMlRn5QG6FX6UbZqLVzUCbUkx0K5wLt8vU63cj7WY9N7d/rtCUnztD5dJZ/CCFatMz1udaNJaZDFBoWY/rWUcLL8xEQtM9Rq+lktGGKDRvltEOki8bM3UqfJEI9coy2lm0vwYoNGfLaLt0eMJYclyVO9twkimSmQ1OaCa5bTjJae1Y2PMY4debNLUK3yTChVPhM/YzlFxeHQsvkvOwLiyjiSZuZu5UKLqC6coyWlELRjOZU+FSIlQXy2hjybTN8SPZk2gqWVpGE82QVOJUOJIAI73vHWstukPUJ7dC2dS77r3my5ZEbAcEqq3oMFV93/AX2VC2kxpVXko2K9IvnWviUbaKoWyTXFgH0Z6P1PT2HjGPhePY7sRw7YSLZKY+/OdkXKXCdSjzfkXLQSvZzm92f5TtT8WuWG9j8ZKw+uIe2HydSpcBr6/eqP6XZD44QGqd4iKTHqeAfByjbesoEFFt/QBHo00Yolr6Ao5GVe2faIxtQctJZ+m3vThV962bO2yXSS8asvTMsqrssFXt72NU5ujd11TExo/RqMz5ZNTSOpNfvD/u0zPbKogX45u598WD/0+pryF9bcW31BlSqfI51PF5U/Wc3v0KSSejdBmPvUxDP1K+Ps4jrVHKRqcml8r6uCNQ+Sl5S9tXgu54kaSZuDT/vp5exrZF5OAV1fLLfFI3t0m/J21lzTFQTrPL1tP9wz3lxbnaf4vn07S+brhW9q67ok5nWXzYns6D/eRs5a11s90nT/0dk/12U52L3OUXyj+d1H9T7L3KVgAAAABJRU5ErkJggg==" />
                    <Text mt={"15px"} fontSize={"xs"}>PHONES AND ACCESSORIES</Text>
                </GridItem>

                <GridItem _hover={{
                bg:('#DCDCDC'),
                }}
                h="120px"
                p="15px">
                    <Avatar src="data:image/png;base64,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" />
                    <Text mt={"15px"} fontSize={"xs"}>TRAVEL & OUTDOOR</Text>
                </GridItem>
                <GridItem _hover={{
                bg:('#DCDCDC'),
                }}
                h="120px"
                p="15px">
                    <Avatar src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBEREQ4ODg4RDg4OEQ4RDg4OEREODhAOFxMaGBcTFxccICwkGx0pHhcVKTYyKS8wMzMzGiI5PjkxPSwyMzABCwsLEA4QHRISHTIgICAyNDIyNDIwMjQyMjIyMjAyMjIyMjIwMjIyMjIwMDIyMjIyMDIyMjIwMDAyMDAwMjIwMv/AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAAAQYCBAUD/8QASBAAAgIAAgUFCQ0HAwUAAAAAAAECAwQRBQYSITFBUWFzsRMiNFNxcoGRshUWIyQyNZKTobPB0dIUM0JDUsLwgoPxYmOiw+H/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAMxEAAgIBAQUFBgYDAQAAAAAAAAECAxEhBBIxUXETMkGxwQVhcoGR0RQiM1Ji8DRCUyT/2gAMAwEAAhEDEQA/ANsAEH0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJIJJAGCAABgAAAAAEAAAAAAAAkEkAAEAAAAAAAAAAAAAAAAAAnAJBiRk0jHIAIINVUSCACXUZkEAnJjKOCQCCTMkAAAEmJBdRyZEEAZL9mzIggDJVwBJJBJRoAAFQAAAAAAASCcAxAKmsYAgEWSyRB111kSmkYO5c5p22NvZR1sDq3fYlKezUnvW25KTXkXD05Gm4sZbwdU411R3rJJGvGxGakdP3q2LhdB9D21+BoYzR91DXdId69ynF7UG+bPk9JXC8GZRtpseISTf8AeeDzJMYskqZWQJJIBJySiZAxAIjEEAiTIOuusOWRg7URXh7LZbNcJSfNHkXO3wS8p0Y6rYhrNzqi+Zyk39iL7q8Wby7GvvySZoRtRmmeuI1dxMFmoxtS49zbnL1NJv0GlXNrc+K3PPimHHkyFCuxZrkpGyDGLMipyTrMiCDIkwcSAASUAABBJiZGJDNoRBjOeRLZoYu18EIrLwd9FO88HvLEo87bs0bug9AzxHwkpbFaeW1lnJvlUV+J3fe9g33kbpd0XJ3SqUs+mORZ7sWXs2nZ6ZbreWuOFnBpaqaPi9rE2JbNbyhnwUks3N+RZHhpPT9tspKmUq602o7D2bJL+pvivQd1YR4fB31bSbjXiO+SyzTW7d5FkUqjeyc5zIxoUNossul+bDxHkl09/H5s93pTExe7EXbv+7Nr1Nli0Fpf9pUsNiEpylF7LaSU0lvi1z8u78DgWVrIy0FuxVGXjIL0N5EaST0NtopruqlphpZT6anvpDD9xtnXxSeab5YPev8AOg8Uzpa2brquqj95M5kHuKy4Jla251Rk+LRkSQCpnKskEAFY1kNnnXnOca473OSjFdLeSMp8D10BHPF1eWT9UG/wLx5nSluwlLkm/omyw4zE16PpjCtKVs+Gf8TXGyXRzIrb03ipN/DTXRF7KXoRva2vPERWe5VQy6N8jm11rIJpLPMx2WmEa1OS3pS1bevE3MHrFfXJd0l3WH8UZ/Ky6Jc/lOlp/CV21RxtPFqLm0stqD4Sa/qTyX/BW8RWWzQtTngZ18ZTWIhBN5b3Hdnzd8yW13kV2mEKXC6H5XlJ+Caeft6+BVq7D2U0dynVTd39zzfJCOcU/K3v+w5ulNC24dOzPulfLKKecfORGIt6Mur6LZbsZa/P1wa6ZJr1WZnuV4FLKsGZBBkSjjlHBAJBJTBiQSQVOuqJEjQth33pN9nhYt/rLVvU9Gh4kWfTtrw+DqrqbipbEHJbnsqDb9LfaymKyWaaeWWWTW5p865i4a3+D0+f/YyoQW4vW8RyYezNKN7xbefeXanEu3R9k7HnPuNqlL+pxTWfqyKfhlvLXo35us6vEdjKtRxI/cZbNiCuS4b7NmfAaF8Lo6yHaTPgNC+F0dbDtKw8ehvCWa59H5M6Ot376vql95M5lb3HS1wfwtWS/kr7yZwozf8AjJUG4obLXKWzwxyN3MZmp3R/4x3RkdmzbsJcjbzGZqd0f+Md1Y7NjsJcjZte49tXPC6vLP7uRz5TZ0NWY/G6s1yW5eXYZZRaTIthKNM8r/V+TNjWnwp+bX2GlXwNzWl/Gn5tfYadfArLuo563iiHRHneWnQNnc8FKeWbr7vPLn2Yp5fYVe8smjnlo+7prxP2xyIfd+ZjteJUxT8ZL1Kni8bZbNznJyeee97o9CXIi06r4x2wsoubnGMck5724Pc4vn/+lSrW8s2qEe/v81e0aWcGjo9oxj2EljG7jHu1XA4OIr7ndZXnmq5zjnz7La/A2Is8NLP41iOuv+8Z7VvcVn4M1tWYp8zMEIkoedbEyABOTnwYkEkSKnbUhXXKclCEXKUuEY72zZegcTyVr6yH5m7qtvtt6Knl9ZA8dIafxFd11UHBRhZOKzhFvJTaRpDOcIvv3dtuVKOiT1z6G5revgKVzT/tZUK+Bb9b3nh6XzzXssqFfAmHdLezv8ZdWXLRvzdZ5mJ7GVbD8S06M+brOqxPYyrYfiR+4yr4XfGzZnwMdC+F0dZDtMrOBGhfC6Oth2iPB9DSn9OfR+TLZpPS9NE4wsrm5OCkmlCS4tZb2uZmp75MN4q36Ff6jQ1w/fVdUvvJnEhFZEbscZMNn2KmVMZSTy1zZavfJhvE2fQr/UPfJhvFWfQr/UVfZQ2ERiJr+A2f9r+rLR75MN4qz6Ff6h75MN4qz6Ff6ir7KGwicRH4HZ+T+rLR75MN4q36Ff6j3wGm6LrIV11TjJ55OUa0lubfB58hTpRR0dV18ar6I2+wxuxw2Z27DQq5SSeUm+L5GetHhUvNq9lGrXwNjWbwqfmVeyjWr4B8F0L5xRX8K8jG8seA+bberxH4lbuLJgfm63q7w+78zG15rgv5x9SoU8WWjVSOU7n/ANMe0q9D3ls1Vebt8lfay0/E6vaP6M+i80cPSOisTK66aoualZZJNVyaac209yPCEZRbjOLi1xjJOMl6Gd6zWaxWyrVVTSnKCff55KWWfyj01uik6JZd89uLfK0ssl9r9Ybbwmisb7d6NdkUt5PGHngsnERJjWzIzMrjIGIByghkkA6apHY1aaVtnPKtpdPfxZhj9XLrLrbVOpKdlkltOxNJybWfenNhY45NNpremnk0+g9LNK4hfz7F/rZaDedDRV3drv1SSbSWqydXW9ZUUrmnl/4sqFfAt+t7+L0+evYZUK+BaHdNPZv+Mur8y5aN+brOrxPYyrYfiWjRvzdZ1WI7GVejiR+4zpWe2+NmzPgY6F8Lo6yHaTPgRoXwujrIdoh49DatYrn0fky2aU0VTfOM7bXCUYKKSlBLc28966WavuBhvHy+sq/I52uefdacnl8FH25leUZdJMY6LU59l2eyVMWrXFY4YX3Ll7gYbx8vrKvyHuBhvHy+sq/Ip2xLpGxLp9Q3f5HR+Ft/7v6L7lx9wMN4+X1lX5D3Aw3j5fWVfkU7Yl0+obEun1Dd/kR+Ft/7v6L7lx9wMN4+X1lX5Hvo/Q9FNkbK7ZSklJKO1W1vWXIijuEuk7Wqaf7THfwhb2ZBrR6mW0bNbGqT7ZtYemF9yNZX8bn5tfso16+B7ay+F2eSHsI8K+BWXBdDRRzTX8K8kY3Fjw3zZPq7vbZXLix0fNkvMu+8kPBdTnuWIQ+OPqU+t72WjU577/8Ab7WVSL4lr1L/AJ76pfbIvPgzr9or/wA83080atug8Q75WKvODtlJPbh8nbzz48xva4PwddNj7DQt0/iY2TipxaU5JJwhyNpGnfdO2W3bNylllm8skuZJbkQ85TfgYxhc7ITt3cRT4Z8VjxMa0ZkRRJmY3PUyBALHNkgGRiVLQkQzxs/M9jXu4otDij0tnf5kWTW/wenz/wD1sp1c1wLtpCj9swdbq3zhsz2c+MlHZnHy8PUVGrRdznsKqxyzy2diSa8ufD0l6+7jkV9nTiqHCTScW8rlqWvRvzdZ1WI7GVajiXJYR04GypvOUabdtrhtSTbS6OT0FNo4leKbM9kkpq2S4Oba+ZtT4DQvhdHWQ7SJ8CNC+F0dZX2kQ4PodK/Tn0fkzp63fv6+qX3kzl1xWR1Nb/39fVL7yZzK+BD7qMdn02eHT1ZlsobKJBUOZGyiNlGWQBKmYTjuN3VZfGV5lnYadnA3dVfCf9uf4Fl3WTa80T6M8NZPC7f9HsI8K+B7axP43b5Y+wjxr4Ez4IvH9Gv4V5Ii0sUd2jH1c/tuK5ay04LD910eq1uc67VHPhtd0k19qI8F1ObamoQg3w316lFT4lt1K4Yjy1f3FUuw04zcJRcWnk4yWTTLlqxhnh6bbrk4qWU0pbn3OCe9rkzzZrasRfvOn2nJLZ3/ACxj36rgVm797Z50vaZ7xR4RTlJvlbbflbzNhGc+IveCQDIqeZNgEAsZEgxJICZB5W15nqQQdlM8GejMbbh5Nwfev5UJb4SfP0PyHXt1najuqW1zubcc/Jl+JxMjwxEdxbKk9Ubyoqulmccv5+jLbTipXYG+ybTlKvEZ7KySXIsvJkU2qWTLDqrjIuNmFsyyltOKfCSaylD1b/WcrS+hLaZyajKdeecZxTktnmllwZZJZa5kbNuV22Uv8uXlcmny6cPryPOdiyGgXni6Oth2mkq5y3JSbfBJPNlo1c0M63+03ruezFuEZ7mt3y5c27Mnd3E8nRtM4UVS3nq00lzyjw1wfw1XVL7yZzauBlpjE/tF8rF8hd7Xnx2Ivc/TvfpFayRWSwkjBJ10Qg+KWpkAZFDjlMxBkYgRmYzW439VF8Zl1U+2JoyRno2/uN1dj+SnlLzXuf5+gmPBo7GnOqUVxaZ56ySyxdvlj7CPCq5ZHe1o0Q7WsRSttSS24w77NJfLjz7svUio7E1u3+TmNFFTSwdGyON9Ed16xST9zSwbl1qzyRbsHiZU6Prtgk5QjmlLg87fyZUtFaLtvnFRi8s++nLPYiudvn6Cz6xWwrorwkOOUN3Kq47k30tr7GRJJYic22qEp10rV5y+i5/30MqtZKpJOdElNczhJJ9DeTOdpTS08R3mXc6s89lPNya4OT5Tm11npkU0T0IjstNct6MdSIRMgSQVtmCSCSUcUmAASZgkgAkkxJJIZpGWDAiUczIEHTC3Br9zyaa3NNNNbmmuVHcwmsVsUo2wVuX8SbjP0vLJnKyDiTnPHU0scLViayd2etS5KJ59Niy7DkaQ0xdiO8eVdXLCGaT858vYa7rRKggmlwRFcKK3vQjr835nnXXkewBBlba5MyIJIJOVsEEkgtFmBi0ZkFTtqmb+j9LWULZ3WV/0yfyfNfIdN6eoe+VE2+XdXL7WV3IjIltPiJ7LVY96S1+h3MTrF3uzRXs8zsaeXkivzOFNynKU5tylJ5yk97bJyJyCeFhFoV10r8ixkhIkkEFZWAAyJOWc8ggEFjFkgAEAAAEEgAkEkAglMgEgYLb5AMiBgbxIIBJVsAAFQSQQCUAZGJU2hPBAJAN1aQSACkrQZAgnBg5ZJIAJKZAABAAAAAAAAAAAAAAAAAAAAAAAAAAABBIAJJBAIJyAASRkgkAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=" />
                    <Text mt={"15px"} fontSize={"xs"}> HEALTH & FITNESS</Text>
                </GridItem>
                <GridItem _hover={{
                bg:('#DCDCDC'),
                }}
                h="120px"
                p="15px">
                    <Avatar src="data:image/png;base64,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" />
                    <Text mt={"15px"} fontSize={"xs"}>AUDIO</Text>
                </GridItem>

                <GridItem _hover={{
                bg:('#DCDCDC'),
                }}
                h="120px"
                p="15px">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfZaLQ4EVbdgMVDlWPb7HQG_kNGrAkcsdkw&usqp=CAU" />
                    <Text mt={"15px"} fontSize={"xs"}>FILM</Text>
                </GridItem>

            </Grid>

            <Flex>
                <Text fontSize={"3xl"} mt="15px" ml="180px">Recently Viewed</Text>
                 <Spacer />
                <Box mt="15px" mr={"80px"}>
                    <Button mr={5}></Button>

                    <Button></Button>
                </Box>






            </Flex>

                <Footer />



         </Box> 
         



    )
}
export default Home;