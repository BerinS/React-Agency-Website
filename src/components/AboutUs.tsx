import { Container, Grid, SimpleGrid, Skeleton, Title, Text, Image } from '@mantine/core';
import image from '../assets/About image.png';
import classes from '../css/AboutUs.module.css';

const PRIMARY_COL_HEIGHT = '350px';

export function AboutBanner() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

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
           <Image 
            src={image}
            h={{ base: 350, sm: 350, md: 400, lg: 480 }}
            w={{ base: 350, sm: 350, md: 400, lg: 480 }}
            className={classes.image_logo}
          />
          <Grid gutter="md">
            <Grid.Col>         
              <Text mb="sm">
                AssetFin je vodeća računovodstvena agencija specijalizirana za kompletne 
                računovodstvene usluge, knjigovodstvo te poslovno i poresko savjetovanje.
              </Text>
              
              <Text mb="sm">
                Naš pristup je personaliziran i prilagođen jedinstvenim potrebama svakog klijenta, 
                uzimajući u obzir specifičnosti vaše djelatnosti i poslovne modele.
              </Text>
              
              <Text mb="sm">
                Kroz direktnu i osobnu saradnju, gradimo snažne profesionalne odnose temeljene 
                na povjerenju, transparentnosti i razmjeni iskustava.
              </Text>
              
              <Text>
                Naše bogato iskustvo u poslovnim finansijama čini nas pouzdanim partnerom 
                koji osigurava usklađenost sa računovodstvenim standardima, zakonskim propisima 
                i najboljim poslovnim praksama, pružajući vam prvorazredne usluge koje doprinose 
                ostvarenju vaših poslovnih ciljeva.
              </Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
    </div>
    
  );
}

export default AboutBanner;