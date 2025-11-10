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
} from '@mantine/core';

import classes from '../css/FeaturesCards.module.css';

const mockdata = [
  {
    title: 'Računovodstvo i knjigovodstvo',
    description:
      'Kompletno vođenje finansijske evidencije. Obuhvatamo sve od redovne knjigovodstvene administracije do sastavljanja finansijskih izvještaja za pravodobno i precizno praćenje poslovanja.',
    icon: IconNotebook,
  },
  {
    title: 'Poslovno savjetovanje',
    description:
      'Strateško planiranje i stručni savjeti za unapređenje vašeg poslovanja. Analiziramo vašu finansijsku poziciju i pružamo konkretne preporuke za ostvarenje dugoročnih ciljeva.',
    icon: IconUserCheck,
  },
  {
    title: 'PDV evidencija i obračun',
    description:
      'Specijalizovano upravljanje PDV obavezama kroz precizan obračun i pravovremene prijave, uz garanciju potpune zakonske usklađenosti.',
    icon: IconFileAnalytics,
  },
  {
    title: 'Finansijski izvještaji',
    description:
      'Izrada jasnih i pouzdanih finansijskih izvještaja u skladu sa važećim regulatornim standardima. Pružamo detaljnu analizu finansijskog stanja vaše kompanije za donošenje informiranih poslovnih odluka.',
    icon: IconClipboardData,
  },
  {
    title: 'Registracija djelatnosti',
    description:
      'Registraciji pri osnivanju pravnih lica, uključujući pripremu dokumentacije i savjetovanje o optimalnom obliku poslovanja za vaše potrebe.',
    icon: IconGavel,
  },
  {
    title: 'Obračun plaća',
    description:
      'Stručan obračun plaća uz potpunu usklađenost sa radnim i poreskim zakonodavstvom. Usluga obuhvata obračun svih doprinosa, poreza i podnošenje izvještaja nadležnim organima.',
    icon: IconCashRegister,
  },
];

export function FeaturesCards() {
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
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
        Usluge koje Vam pružaju mir i sigurnost
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Oslobodite se briga financijske administracije uz naše sveobuhvatne računovodstvene usluge. Fokusirajte se na rast svog poslovanja dok mi brinemo o vašim knjigama.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>

      <Flex
        justify={'flex-end'}
      >
        <Button variant='transparent' color='#a6161a' rightSection={<IconChevronRight size={14}/>}>Detaljan pregled</Button>
      </Flex>
      

    </Container>
  );
}

export default FeaturesCards;