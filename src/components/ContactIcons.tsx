import { IconAt, IconMapPin, IconSun } from '@tabler/icons-react';
import { Box, Stack, Text } from '@mantine/core';
import classes from '../css/ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon size={24} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const contact_data = [
  { title: 'Email', description: 'info@asset.ba', icon: IconAt },
  { title: 'Adresa', description: 'Vilsonovo šetalište 10, Sarajevo', icon: IconMapPin },
  { title: 'Radno vrijeme', description: '09:00 – 17:00 ', icon: IconSun },
];

export function ContactIconsList() {
  const items = contact_data.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}