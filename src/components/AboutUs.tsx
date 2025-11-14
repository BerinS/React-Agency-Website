import { Container, Grid, SimpleGrid, Skeleton, Title, Text, Image, Button } from '@mantine/core';
import image from '../assets/About image.png';
import classes from '../css/AboutUs.module.css';
import {
  IconArrowRight,
} from '@tabler/icons-react';
import Tilty from 'react-tilty';
import { useMediaQuery } from '@mantine/hooks';
import { Link } from 'react-router';


const PRIMARY_COL_HEIGHT = '350px';
  const icon = <IconArrowRight size={20} />;


export function AboutBanner() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const gradient = isMobile 
    ? 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #00000079 80%)' 
    : 'linear-gradient(250deg, rgba(0, 0, 0, 0) 0%, #00000000 80%)';


  // No tilty on phones
  let glare : boolean = isMobile ? false : true;
  let maxGlare : number = isMobile ? 0 : 0.3;
  let max : number = isMobile ? 0 : 8;
  let speed : number = isMobile ? 0 : 800;

  return (
    <div className={classes.wrapper}>
      <Container my="lg" >
      <Title order={2} className={classes.title} ta="center" mt="sm">
        O nama
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        AssetFin - Računovodstvena agencija specijalizirana za kompletne 
                  računovodstvene usluge, knjigovodstvo te poslovno i poresko savjetovanje. Vaš partner za finansijski uspjeh.
      </Text>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
           <Tilty max={max} speed={speed} glare={glare} maxGlare={maxGlare}>
            <Image 
                src={image}
                h={{ base: 350, sm: 350, md: 400, lg: 480 }}
                w={{ base: 350, sm: 350, md: 400, lg: 480 }}
                className={classes.image_logo}
            />
           </Tilty>
           
          <Grid gutter="md"className={classes.about_content} >
            <Grid.Col>         
              <Text mb="sm">
                AssetFin pristup temelji se na individualnom pristupu svakom klijentu, uzimajući u obzir specifičnosti njihove djelatnosti i poslovanja. Naš je cilj da kroz dugoročno partnerstvo doprinesemo ostvarenju vaših poslovnih ciljeva.
                Osiguravamo da naši klijenti dobiju najviše standarde usluga, u skladu s računovodstvenim standardima, zakonskim propisima i najboljim poslovnim praksama.
              </Text>

              <Text mb="sm">                
                Osobni i izravan odnos sa klijentima smatramo temeljem kvalitetne suradnje, te težimo izgradnji snažnih profesionalnih veza utemeljenih na povjerenju i razumijevanju.
                Čvrsto vjerujemo da otvorena komunikacija, te razmjena znanja i iskustava predstavljaju ključ uspješne suradnje. 
              </Text>

              <Text mb="sm">
                Naše bogato iskustvo u području poslovnih financija omogućava nam da pružimo sveobuhvatne usluge koje uključuju računovodstvene, porezne i poslovne savjete kao garanciju učinkovitog i uspješnog poslovanja.
              </Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Link to="/Kontakt">
                <Button
                    variant="outline"
                    color='#6e6e6eff'
                    size="md"
                    className={classes.control}
                    mt={0}                 
                    radius={"xl"}   
                    rightSection={icon}  
                  >
                    Zatražite ponudu
                </Button>
              </Link>
            </Grid.Col>            
          </Grid>
        </SimpleGrid>
      </Container>
    </div>
    
  );
}

export default AboutBanner;