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

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
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
          <Image 
                src={logo} 
                alt="Your Logo" 
                w="auto" 
                h={40} 
                style={{ paddingLeft: '20px' }} 
              />

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Početna
            </a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Usluge
                    </Box>
                    <IconChevronDown size={16} color={'#a6161a'} />
                  </Center>
                </a>
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
                    <Button variant="default">Saznaj više</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>
              O nama
            </a>            
          </Group>

          <Group visibleFrom="sm" style={{paddingRight: '15px'}}>
            <Button
                variant="gradient"
                gradient={{ from: '#a6161a', to: '#d81010ff' }}  
                style={{borderRadius: '35px'}}
              >
                Kontakt
              </Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Početna
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Usluge
              </Box>
              <IconChevronDown size={16} color={'#a6161a'} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            O nama
          </a>          

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Kontakt</Button>            
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default HeaderMegaMenu;