import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import { IconHexagon1Filled,IconHexagon2Filled,IconHexagon3Filled,IconHexagon4Filled,IconHexagon5Filled } from '@tabler/icons-react';
import classes from 'src/styles/WebAppsDev.module.css';

const features = [
  {
    icon: IconHexagon1Filled,
    title: 'Choose a dashboard template',
    description: 'Choose a dashboard template to base your new web app on.',
  },
  {
    icon: IconHexagon2Filled,
    title: 'Create Github Repository',
    description: 'Use the create template button to clone the choosen dashboard template.',
  },
  {
    icon: IconHexagon3Filled,
    title: 'Add Github SSH Key',
    description:
      'Add the SSH key provided to the repository so MICHAMP developers can pull the newly created dashboard template, begin development on requested features and commit changes.',
  },
  {
    icon: IconHexagon4Filled,
    title: 'Request Features',
    description:
      'Request new features for your new dashboard web app.',
  },
  {
    icon: IconHexagon5Filled,
    title: 'Review New Features',
    description:
      'Review new features as developers complete them and provide feedback for improvements.',
  },
];

const WebAppsDev = () => {
	const items = features.map((feature) => (
	    <div key={feature.title} >
	      <ThemeIcon
		size={44}
		radius="md"
		className={classes.features}
	      >
		<feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
	      </ThemeIcon>
	      <Text fz="lg" mt="sm" fw={500}>
		{feature.title}
	      </Text>
	      <Text c="dimmed" fz="sm">
		{feature.description}
	      </Text>
	    </div>
	  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
 	    Web App Development
          </Title>
          <Text c="dimmed">
            Web apps built on top of React Redwood JS framework. Currently we are only building dashboard (user and admin) web apps. If you are in need of a Redwood JS dashboard web app you've come to the right place. 
          </Text>

          
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  )
}

export default WebAppsDev
