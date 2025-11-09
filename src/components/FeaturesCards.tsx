import { IconFileAnalytics, IconGauge, IconUserCheck, IconCashRegister } from '@tabler/icons-react';
import {
  Badge,
  Card,
  Container,
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
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    icon: IconCashRegister,
  },
  {
    title: 'Poslovno savjetovanje',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: IconUserCheck,
  },
  {
    title: 'PDV evidencija i obračun',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: IconFileAnalytics,
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
    </Container>
  );
}

export default FeaturesCards;