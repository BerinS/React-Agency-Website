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
import emailjs from '@emailjs/browser';
import { useState, type ChangeEvent } from 'react';


export function ContactUs() {  
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        name: formData.name,      
        email: formData.email,     
        message: formData.message, 
        time: new Date().toLocaleString() 
      };

      await emailjs.send(
        'service_opm5ka3', 
        'template_h1d6d2h', 
        templateParams,
      );

      setFormData({
        email: '',
        name: '',
        message: ''
      });

      alert('Poruka je uspješno poslana.');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Došlo je do greške.');
    } finally {
      setIsLoading(false);
    }
  };
  
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

          <form onSubmit={handleSubmit} className={classes.form} id='form'>
            <TextInput
              label="Email"
              placeholder="..."
              required
              radius="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              id='email'
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextInput
              label="Ime i prezime"
              placeholder="..."
              mt="md"
              radius="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              id='name'
              value={formData.name}
              onChange={handleInputChange}
            />
            <Textarea
              required
              label="Vaša poruka"
              placeholder="..."
              minRows={4}
              mt="md"
              radius="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              id='message'
              value={formData.message}
              onChange={handleInputChange}
            />

            <Group justify="flex-end" mt="md">              
              <Button 
                type="submit"
                variant="filled" 
                size="md" 
                radius="xl" 
                className={classes.control}
                loading={isLoading}
                disabled={isLoading}
              >
                Pošalji
              </Button>
            </Group>
          </form>
        </SimpleGrid>
      </Container>
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d590.2170945687631!2d18.39487262689573!3d43.85340436864359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c9189fc1c209%3A0x6e036840a3730ac4!2sV93W%2BC2V%2C%20Vilsonovo%20%C5%A1etali%C5%A1te%2010%2C%20Sarajevo%2071000!5e1!3m2!1sen!2sba!4v1763059494750!5m2!1sen!2sba" width="100%" height="600"  loading="lazy"></iframe>
    </div>
  );
}

export default ContactUs;