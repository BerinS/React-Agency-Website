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
      'Pružamo sveobuhvatno vođenje finansijskih evidencija. Obuhvatamo sve poslovne događaje, od redovne knjigovodstvene administracije do sastavljanja finansijskih izvještaja za pravovremeno i precizno praćenje poslovanja. Uvijek znate gdje ste, kako poslujete i kuda idete.',
    icon: IconNotebook,
  },
  {
    id: 'savjetovanje',
    title: 'Poslovno savjetovanje',
    description:
      'Osim usluge vođenja računovodstva i knjigovodstva, područje našeg djelovanja smo proširili i na poslovno savjetovanje iz oblasti poreza, računovodstva i finansija, online poslovnu podršku i davanje stručnih savjeta za unapređenje vašeg poslovanja.',
    icon: IconUserCheck,
  },
  {
    id: 'place',
    title: 'Obračun plaća',
    description:
      'Obračun plaća uz potpunu usklađenost sa radnim i poreskim zakonodavstvom. Usluga obuhvata obračun svih doprinosa, poreza i podnošenje obrazaca nadležnim poreskim ispostavama.',
    icon: IconCashRegister,
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
      'Asistencija pri registraciji i osnivanju pravnih lica, uključujući pripremu dokumentacije i savjetovanje o optimalnom obliku poslovanja za vaše potrebe.',
    icon: IconGavel,
  },
  {
    id: 'pdv',
    title: 'PDV evidencija i obračun',
    description:
      'Priprema i podnošenje PDV prijave, uz obavezne e-KIF i e-KUF evidencije u skladu sa propisanim rokovima.',
    icon: IconFileAnalytics,
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
        Poslovne usluge koje donose sigurnost i rast
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Prepustite nam finansijsku administraciju i posvetite se onome što zaista pokreće vaš
        biznis. Naše profesionalne računovodstvene usluge štede vaše vrijeme,
        smanjuju rizik i osiguravaju potpunu usklađenost sa propisima.
        Vi gradite uspjeh, dok mi čuvamo vaše finansije.
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