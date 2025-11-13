import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Container,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import classes from '../css/ContactUs.module.css';

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function ContactUs() {
  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper}>
      <Container size={'xl'}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Kontaktirajte nas</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Pošaljite nam upit i potrudit ćemo se da odgovorimo u najkraćem mogućem roku.
            </Text>
            <ContactIconsList />

            <Group mt="xl">{icons}</Group>
          </div>

          <div className={classes.form}>
            <TextInput
              label="Email"
              placeholder="..."
              required
              radius="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Ime i prezime"
              placeholder="..."
              mt="md"
              radius="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Vaša poruka"
              placeholder="..."
              minRows={4}
              mt="md"
              radius="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group justify="flex-end" mt="md">
              <Button className={classes.control} radius="xl" size='md'>
                Pošalji
              </Button>
            </Group>
          </div>
        </SimpleGrid>
      </Container>
      
    </div>
  );
}

export default ContactUs;