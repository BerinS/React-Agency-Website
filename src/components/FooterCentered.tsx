import { IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { ActionIcon, Group, Image, Grid } from '@mantine/core';
import classes from '../css/FooterCentered.module.css';
import FooterAssetLogo from '../assets/Asset_logo_5.png';
import { useMediaQuery } from '@mantine/hooks';
import { Link } from 'react-router';



const links = [
  { link: '/', label: 'Početna' },
  { link: '/Kontakt', label: 'Kontakt' },
  { link: '/Usluge', label: 'Usluge' },
  { link: '/#O_nama', label: 'O nama' },
];



export function FooterCentered() {
  const items = links.map((link) => (
    <Link
    to={link.link}
    key={link.label}
    className={classes.links}
    style={{ 
      color: 'dimmed', 
      textDecoration: 'none',
      fontSize: 'sm',
      lineHeight: 1
    }}
  >
    {link.label}
  </Link>
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
              <a href="mailto:info@asset.ba">
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