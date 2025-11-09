import { IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube, IconMail } from '@tabler/icons-react';
import { ActionIcon, Anchor, Group, Image, Grid } from '@mantine/core';
import classes from '../css/FooterCentered.module.css';
import FooterAssetLogo from '../assets/Asset_logo_5.png';
import { useMediaQuery } from '@mantine/hooks';



const links = [
  { link: '#', label: 'Početna' },
  { link: '#', label: 'Kontakt' },
  { link: '#', label: 'Usluge' },
  { link: '#', label: 'O nama' },
];



export function FooterCentered() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Grid gutter="md" align="center" w="100%">
          {/* Logo - centered on mobile, left on desktop */}
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: isMobile ? 'center' : 'flex-start' 
            }}>
              <Image 
                src={FooterAssetLogo} 
                alt="AssetFin" 
                w="auto" 
                h={25} 
                my={10}
              />
            </div>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Group className={classes.links} justify="center" >
              {items}
            </Group>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Group gap="sm" justify={isMobile ? 'center' : 'flex-end'}>
              <a 
                href="https://www.linkedin.com/in/samirasurkovic/?originalSubdomain=ba" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ActionIcon size="lg" variant="default" radius="xl">
                  <IconBrandLinkedin size={18} stroke={1.5} />
                </ActionIcon>
              </a>
              <a href="mailto:samira.surkovic@asset.ba">
                <ActionIcon size="lg" variant="default" radius="xl">
                  <IconMail size={18} stroke={1.5} />
                </ActionIcon>
              </a>              
            </Group>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
}

export default FooterCentered;