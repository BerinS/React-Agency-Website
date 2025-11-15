import { 
  IconFileAnalytics,
  IconClipboardData, 
  IconUserCheck, 
  IconCashRegister, 
  IconGavel, 
  IconNotebook,
  IconChevronRight,
 } from '@tabler/icons-react';
import {
  Badge,
  Button,
  Card,
  Container,
  Flex,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Link, useNavigate } from 'react-router';

import classes from '../css/FeaturesCards.module.css';

const cardData = [
  {
    id: 'racunovodstvo',
    title: 'Računovodstvo i knjigovodstvo',
    description:
      'Kompletno vođenje finansijske evidencije. Obuhvatamo sve od redovne knjigovodstvene administracije do sastavljanja finansijskih izvještaja za pravodobno i precizno praćenje poslovanja.',
    icon: IconNotebook,
  },
  {
    id: 'savjetovanje',
    title: 'Poslovno savjetovanje',
    description:
      'Strateško planiranje i stručni savjeti za unapređenje vašeg poslovanja. Analiziramo vašu finansijsku poziciju i pružamo konkretne preporuke za ostvarenje dugoročnih ciljeva.',
    icon: IconUserCheck,
  },
  {
    id: 'pdv',
    title: 'PDV evidencija i obračun',
    description:
      'Specijalizovano upravljanje PDV obavezama kroz precizan obračun i pravovremene prijave, uz garanciju potpune zakonske usklađenosti.',
    icon: IconFileAnalytics,
  },
  {
    id: 'izvjestaji',
    title: 'Finansijski izvještaji',
    description:
      'Izrada jasnih i pouzdanih finansijskih izvještaja u skladu sa važećim regulatornim standardima. Pružamo detaljnu analizu finansijskog stanja vaše kompanije za donošenje informiranih poslovnih odluka.',
    icon: IconClipboardData,
  },
  {
    id: 'registracija',
    title: 'Registracija djelatnosti',
    description:
      'Registraciji pri osnivanju pravnih lica, uključujući pripremu dokumentacije i savjetovanje o optimalnom obliku poslovanja za vaše potrebe.',
    icon: IconGavel,
  },
  {
    id: 'place',
    title: 'Obračun plaća',
    description:
      'Stručan obračun plaća uz potpunu usklađenost sa radnim i poreskim zakonodavstvom. Usluga obuhvata obračun svih doprinosa, poreza i podnošenje izvještaja nadležnim organima.',
    icon: IconCashRegister,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const navigate = useNavigate();
  
  // 3 cards on mobile
  const displayedFeatures = isMobile ? cardData.slice(0, 3) : cardData;

  const handleCardClick = (cardId: string) => {
    navigate(`/Usluge#${cardId}`);
  };

  const features = displayedFeatures.map((feature) => (
    <Card 
      key={feature.title} 
      shadow="md" 
      radius="md" 
      className={classes.card} 
      padding="xl"
      style={{ cursor: 'pointer' }}
      onClick={() => handleCardClick(feature.id)}
    >
      <feature.icon size={50} stroke={1.5} color='#a6161a' />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="md">     
      <Group justify="center">
        <Badge size="lg" color='#a6161a' variant="outline">
          Šta nudimo?
        </Badge>
      </Group>
      
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Usluge koje vam pružaju mir i sigurnost
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Oslobodite se briga financijske administracije uz naše sveobuhvatne računovodstvene usluge. Fokusirajte se na rast svog poslovanja dok mi brinemo o vašim knjigama.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>

      <Flex
        justify={'flex-end'}
        mt={'sm'}
      >
        <Link to="/Usluge">
          <Button variant='transparent' color='#a6161a' rightSection={<IconChevronRight size={14} />}>
            Detaljan pregled
          </Button>
        </Link>
      </Flex>
    </Container>
  );
}

export default FeaturesCards;