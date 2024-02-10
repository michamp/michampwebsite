import { Button, Paper, Text, Group, CloseButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import classes from 'src/styles/CookieBanner.module.css';
import { IconXboxX } from '@tabler/icons-react';

const CookiesBanner = () => {
  const [opened, { open, close }] = useDisclosure(true);
  return (

    <Modal opened={opened}
           onClose={close}
           title="We Use Cookies"
           centered={true}
           className={classes.highlight}
           closeButtonProps={{
            icon: <IconXboxX size={20} stroke={1.5} className={classes.highlight}/>,
          }}
    >
          {/* Modal content */}
    <div>
      <Paper withBorder p="lg" radius="md" shadow="md">
      <Group justify="space-between" mb="xs">
        <Text fz="md" fw={500}>
          Allow cookies
        </Text>
      </Group>
      <Text c="dimmed" fz="xs" data-autofocus>
      We use cookies in compliance with the
      CCPA to make the website work better
      for you and to understand your needs.
      You can read more in our Privacy Policy.

      </Text>
      <Group justify="flex-end" mt="md">
        <Button variant="default" size="xs">
          Privacy Policy
        </Button>
        <Button className={classes.highlight} variant="outline" size="xs" onClick={close}>
          Accept all
        </Button>
      </Group>
    </Paper>

    </div>
    </Modal>

  )
}

export default CookiesBanner
