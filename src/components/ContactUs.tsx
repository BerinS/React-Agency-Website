import {
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


export function ContactUs() {  
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
          </div>

          <div className={classes.form}>
            <TextInput
              label="Email"
              placeholder="..."
              required
              radius="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              disabled
            />
            <TextInput
              label="Ime i prezime"
              placeholder="..."
              mt="md"
              radius="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              disabled
            />
            <Textarea
              required
              label="Vaša poruka"
              placeholder="..."
              minRows={4}
              mt="md"
              radius="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              disabled
            />

            <Group justify="flex-end" mt="md">              
              <Button variant="filled" size="md" radius="xl" className={classes.control}>Pošalji</Button>
            </Group>
          </div>
        </SimpleGrid>
      </Container>
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d590.2170945687631!2d18.39487262689573!3d43.85340436864359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c9189fc1c209%3A0x6e036840a3730ac4!2sV93W%2BC2V%2C%20Vilsonovo%20%C5%A1etali%C5%A1te%2010%2C%20Sarajevo%2071000!5e1!3m2!1sen!2sba!4v1763059494750!5m2!1sen!2sba" width="100%" height="600"  loading="lazy"></iframe>
      
    </div>
  );
}

export default ContactUs;