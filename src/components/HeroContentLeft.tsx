import { Button, Container, Text, Title, Image } from '@mantine/core';
import classes from '../css/HeroContentLeft.module.css';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconArrowDown,
} from '@tabler/icons-react';
import Tilty from 'react-tilty';

import bg6 from '../assets/bg6.jpg';
import bg7 from '../assets/bg7.jpg';
import bg8 from '../assets/bg8.jpg';
import bg6Small from '../assets/bg6_small_screen.jpg';
import bg7Small from '../assets/bg7_small_screen.jpg';
import bg8Small from '../assets/bg8_small_screen.jpg';

import AssetLogo from '../assets/Asset_logo_4.png';

export function HeroContentLeft() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [currentIndex, setCurrentIndex] = useState(0);

  const desktopImages = [bg8, bg6, bg7];
  const mobileImages = [bg6Small, bg7Small, bg8Small];
  const images = isMobile ? mobileImages : desktopImages;

  const gradient = isMobile 
    ? 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #00000079 80%)' 
    : 'linear-gradient(250deg, rgba(0, 0, 0, 0) 0%, #00000000 80%)';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const icon = <IconArrowDown size={20} />;

  return (
    <div className={classes.root}>
      {/* Single background container */}
      <div className={classes.backgroundContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${classes.backgroundSlide} ${
              index === currentIndex ? classes.active : ''
            }`}
            style={{
              backgroundImage: `${gradient}, url(${image})`,
            }}
          />
        ))}
      </div>

      <Container 
        size="xl" 
        py={{ base: 'md', sm: 'xl', lg: '50px' }}
        px={{ base: 'sm', md: 'xl' }}
      >
        <div className={classes.inner}>
          <Tilty max={5} speed={450} glare={true} maxGlare={0.25}>
            <div className={classes.content_border}>            
              <div className={classes.content}>
                <Image 
                  src={AssetLogo} 
                  alt="Your Logo" 
                  w="auto" 
                  h={35} 
                  style={{ marginBottom: '30px' }} 
                />

                <Title className={classes.title}>
                  Računovodstvo i poslovno savjetovanje za vaš uspjeh
                </Title>

                <Text className={classes.description} mt={30}>
                  AssetFin je firma specijalizirana za računovodstvene i knjigovodstvene usluge, kao i za poslovno i poresko savjetovanje.
                  Naš pristup temelji se na individualnom razumijevanju svakog klijenta.
                </Text>

                <Button
                  variant="gradient"
                  gradient={{ from: '#a6161a', to: '#d81010ff' }}
                  size="lg"
                  className={classes.control}
                  mt={35}
                  radius={"xl"}
                >
                  Kontaktirajte nas
                </Button>
                <Button
                  variant="outline"
                  color='#ffffffff'
                  size="lg"
                  className={classes.control}
                  mt={35}
                  ml={10}    
                  radius={"xl"}   
                  rightSection={icon}  
                >
                  Vidi više
                </Button>
              </div>
            </div>
          </Tilty>
          
        </div>
      </Container>
    </div>


  );
}

export default HeroContentLeft;