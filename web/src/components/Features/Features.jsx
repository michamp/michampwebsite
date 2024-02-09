import featureClasses from 'src/styles/FeaturesCards.module.css';

import {
  Card,
  UnstyledButton,
  Anchor,
  Badge,
  Grid,
  SimpleGrid,
  Skeleton,
  Container,
  useMantineTheme,
  Text,
  Space,
  Group,
  Title,
  rem,
} from '@mantine/core';

import {
  IconApps,
  IconNetwork,
  IconCodeOff,
  IconApi,
  IconApiApp,
  IconBrain,
  IconFileDatabase,
  IconActivity,
  IconFlask,
  IconAsset,
} from '@tabler/icons-react';


const featuresMockdata = [
  {
    title: 'Web Apps',
    description:
      'We build elegantly designed web applications to solve our customers problems quickly and accurately.',
    icon: IconApps,
  },
  {
    title: 'MICHAMP Web3',
    description:
      'Blockchain being new technology, we aim to enter the market by providing well researched customer features. We are building MVPs (Minimum Viable Products) and then engaging the end user for new feature recommendations.',
    icon: IconNetwork,
  },
  {
    title: 'Digital Transformation',
    description:
      'We plan to build no code tools to enable the end user to develop solutions quickly and then engage their customers to review and provide feedback for improvements and new feature requests, then rinse and repeat.',
    icon: IconFileDatabase,
  },
];

const Features = () => {
  const theme = useMantineTheme();

  const features = featuresMockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={featureClasses.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.red[6]}
      />
      <Text fz="lg" fw={500} className={featureClasses.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <div>
      <Container size="lg" py="xl">
      <Space h="xl" />
      <Group justify="center">
        <Badge variant="filled" size="lg"  className={featureClasses.badge}>
			Make Technology Work For You
        </Badge>
      </Group>

      <Title order={2} className={featureClasses.title} ta="center" mt="sm">
			Web Technology Built To Your Requested Specs
      </Title>

      <Text c="dimmed" className={featureClasses.description} ta="center" mt="md">
        Incrementing product features based on end user input. Build MVPs (Minimum Viable Products) and engage the end user to review and provide feedback for new product features.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
    </div>
  )
}

export default Features
