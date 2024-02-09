import { Container, Text, Button, Group,useMantineTheme } from '@mantine/core';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react';

import classes from 'src/styles/HeroTitle.module.css';

const HeroTitle = () => {
  const theme = useMantineTheme();
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>MICHAMP</h1>
        <h1 className={classes.title}>
          Building{' '}

          <Text component="span" className={classes.highlight} inherit>
            Technology for Your future
          </Text>{' '}
          Your Way
        </h1>

        <Text className={classes.description} color="dimmed">
          We invite our users to participate in the technology build process of our future products.
        </Text>

        {/*<Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<IconFingerprint size={20} />}
          >
            GitHub
          </Button>
  </Group>*/}

      </Container>
    </div>
  )
}

export default HeroTitle
