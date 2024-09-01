import { Text, ThemeIcon, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <ThemeIcon size={40} radius="md" className={classes.icon}>
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </ThemeIcon>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'ALBASHIRWELFARE@GMAIL.COM', icon: IconAt },
  { title: 'Phone', description: '+92 333 5593694', icon: IconPhone },
  // { title: 'Address', description: '844 Morris Park avenue', icon: IconMapPin },
  { title: 'Working hours', description: '24 Hours', icon: IconSun },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}