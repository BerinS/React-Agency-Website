import {
  IconCashRegister,
  IconChevronDown,
  IconClipboardData,
  IconFileAnalytics,
  IconGavel,
  IconNotebook,
  IconUserCheck,
} from '@tabler/icons-react';
import {
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
  Image,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from "react-router";
import classes from '../css/HeaderMegaMenu.module.css';
import logo from '../assets/Asset_logo_3.png';

const mockdata = [
  {
    icon: IconNotebook,
    title: 'Računovodstvo',
    description: 'Kompletno vođenje finansijske evidencije',
  },
  {
    icon: IconUserCheck,
    title: 'Poslovno savjetovanje',
    description: 'Strateško planiranje za unapređenje poslovanja',
  },
  {
    icon: IconFileAnalytics,
    title: 'PDV evidencija',
    description: 'Upravljanje PDV obavezama i prijave',
  },
  {
    icon: IconClipboardData,
    title: 'Finansijski izvještaji',
    description: 'Izrada jasnih finansijskih izvještaja',
  },
  {
    icon: IconGavel,
    title: 'Registracija',
    description: 'Registracija pravnih lica i dokumentacija',
  },
  {
    icon: IconCashRegister,
    title: 'Obračun plaća',
    description: 'Obračun plaća u skladu sa zakonodavstvom',
  },
];

interface MobileDrawerLinkProps {
  to: string;
  children: React.ReactNode;
  closeDrawer: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const MobileDrawerLink: React.FC<MobileDrawerLinkProps> = ({ 
  to, 
  children, 
  closeDrawer, 
  className, 
  style,
  ...props 
}) => {
  const handleClick = () => {
    closeDrawer(); 
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </Link>
  );
};

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton 
      className={classes.subLink} 
      key={item.title}
      onClick={closeDrawer} 
    >
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={'#a6161a'} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link to="/">
            <Image 
              src={logo} 
              alt="Your Logo" 
              w="auto" 
              h={40} 
              style={{ paddingLeft: '20px' }} 
            />
          </Link>
          

          <Group h="100%" gap={0} visibleFrom="sm">           
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} className={classes.link}>
              Početna
            </Link>
            
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <Center inline>
                  <Box component="span" mr={5}>
                    <Link to="/Usluge" style={{ textDecoration: 'none', color: 'inherit' }} className={classes.link}>
                      Usluge
                    </Link>                      
                  </Box>
                  <IconChevronDown size={16} color={'#a6161a'} />
                </Center>                
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Usluge koje nudimo</Text>                  
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        AssetFin
                      </Text>
                      <Text size="xs" c="dimmed">
                        Usluge koje Vam pružaju mir i sigurnost
                      </Text>
                    </div>
                    <Link to="/Usluge">
                      <Button variant="default">Saznaj više</Button>
                    </Link>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            
            <Link to="/#O_nama" style={{ textDecoration: 'none', color: 'inherit' }} className={classes.link}>
              O nama
            </Link>              
          </Group>

          <Group visibleFrom="sm" style={{paddingRight: '15px'}}>
            <Link to="/Kontakt" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button
                variant="gradient"
                gradient={{ from: '#a6161a', to: '#d81010ff' }}  
                style={{borderRadius: '35px'}}
              >
                Kontakt
              </Button>
            </Link>            
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="lg"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />
          <div className={classes.mobileDrawer}>
            <MobileDrawerLink 
              to="/" 
              className={classes.link}
              style={{ textDecoration: 'none', color: 'inherit' }}
              closeDrawer={closeDrawer}
            >
              Početna
            </MobileDrawerLink>
            
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Usluge
                </Box>
                <IconChevronDown size={16} color={'#a6161a'} />
              </Center>
            </UnstyledButton>
            
            <Collapse in={linksOpened}>{links}</Collapse>
            
            <MobileDrawerLink 
              to="/#O_nama" 
              className={classes.link}
              style={{ textDecoration: 'none', color: 'inherit' }}
              closeDrawer={closeDrawer}
            >
              O nama
            </MobileDrawerLink>          

            <Divider my="sm" />

            <Group justify="center" pb="xl" px="md">            
              <MobileDrawerLink 
                to="/Kontakt" 
                style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
                closeDrawer={closeDrawer}
              >
                <Button 
                  radius="xl" 
                  fullWidth 
                  variant="gradient"
                  gradient={{ from: '#a6161a', to: '#d81010ff' }}  
                  style={{borderRadius: '35px'}} 
                  size='lg'
                >
                  Kontakt
                </Button>
              </MobileDrawerLink>                      
            </Group>
          </div>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default HeaderMegaMenu;