import React from 'react';
import { Box, IconButton, useBreakpointValue,Container,Text, Heading,Stack } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  
  const [slider, setSlider] = React.useState(1);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '70%' });
  const side = useBreakpointValue({ base: '40%', md: '200px' });
  const best = useBreakpointValue({ base: '40%', md: '1200px' });

  // These are the images used in the slide
  const cards = [
    'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658420620/r5usabodebjlcenx6agk.jpg',
    'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658245112/jczdjyod9b8gdujqvbym.jpg',
    
  ];

  const data = [
    {
        title : "FEATURED",
        name : "Philips screeneo U4",
        vishay : "Ultra Short Throw Projector",
        button : "SEE CAMPAIGN"
    },
    {
        title : "GOGOPICKS",
        name : "ENGWE X26",
        vishay : "All-Terrain E-Bike:62Mile Longest Range",
        button : "SEE CAMPAIGN"
    }
  ]

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>

      
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={best}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            mt={"20px"}
            key={index}
            height={'lg'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}

        
          />
        ))}
         </Slider>
         
    </Box>
  );
}