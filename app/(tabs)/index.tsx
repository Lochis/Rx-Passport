import { StyleSheet, useColorScheme, Modal } from 'react-native';
import Colors from '@/constants/Colors';
import EditScreenInfo from '@/components/EditScreenInfo';
import { View, ScrollView, Text, Separator, YGroup, ListItem, XGroup, Button } from 'tamagui';
import { useEffect, useState } from 'react';
import { List, Pill, ChevronRight } from '@tamagui/lucide-icons';
import { Link } from 'expo-router';

export default function Home() {
  const colorScheme = useColorScheme();
  const currentTheme = colorScheme == 'light' ? Colors.light : Colors.dark
  const [variant, setVariant] = useState<'outlined' | 'active' | undefined>('active');
  const [variant2, setVariant2] = useState<'active' | 'outlined' | undefined>('outlined');

  const [currMedsButtonTheme, setCurrMedsButtonTheme] = useState(Colors.light);
  const [historyButtonTheme, setHistoryButtonTheme] = useState(Colors.dark);

  const handleCurrMedsPress = () => {
    if (variant === 'outlined') {
      setVariant('active');
      setCurrMedsButtonTheme(Colors.light);

      setVariant2('outlined');
      setHistoryButtonTheme(Colors.dark)
    }
  }

  const handleHistoryPress = () => {
    if (variant2 === 'outlined') {
      setVariant2('active');
      setHistoryButtonTheme(Colors.light);


      setVariant('outlined');
      setCurrMedsButtonTheme(Colors.dark);
    }
  }

  const items = [
    {
      title: 'Bubonic Plague Antidote',
      subTitle: 'idk cures bubonic plague i guess',
      inner: 'It can do more than just cure the bubonic plague, it makes u invincible',
    },
    {
      title: 'Bubonic Plague gimme',
      subTitle: 'idk cures bubonic plague i guess',
      inner: 'It can do more than just cure the bubonic plague, it makes u invincible',
    },
    {
      title: 'Bubonic Plague dont',
      subTitle: 'idk cures bubonic plague i guess',
      inner: 'It can do more than just butt',
    },
    {
      title: 'Bubonic Plague give',
      subTitle: 'idk cures bubonic plague i guess',
      inner: 'It can do more than just doo doo',
    },
    {
      title: 'Bubonic Plague me',
      subTitle: 'idk cures bubonic plague i asdf',
      inner: 'It can do more than just cure poo',
    },
  ]

  const historicItems = [
    {
      title: 'historic drug',
      subTitle: 'historical boobonis',
      inner: 'It can do more than just cure the bubonic plague, it makes u invincible',
    },
    {
      title: 'historic drug 2',
      subTitle: 'historical bubonic',
      inner: 'spiderman 3',
    },
    {
      title: 'history buffs',
      subTitle: 'borger',
      inner: 'It can do more than just butt',
    },
    {
      title: 'bistory bingusy',
      subTitle: 'tom hiddleston',
      inner: 'booger man',
    },
    {
      title: 'borgis torgis',
      subTitle: 'fun food for the whole family',
      inner: 'chicken wings',
    },
  ]
  

  const DrugItems = ({ items }) => {
    return (
      <>
        {items.map((item, index) => (
          <YGroup.Item key={index}>
            <Link asChild href={{
              pathname: "/modal",
              params: { title: item.title, subTitle: item.subTitle, inner: item.inner }
            }}>
              <ListItem
                icon={<Pill />}
                title={item.title}
                subTitle={item.subTitle}
                iconAfter={<ChevronRight />}
              >
                {item.inner}
              </ListItem>
            </Link>
          </YGroup.Item>
        ))}
      </>
    );
  };

  return (
    <View flex={1}>
      {/*<H3 color={currentTheme.text}>Rx Passport</H3>*/}
      <XGroup width='100%'>
        <Button flex={1} color={currMedsButtonTheme.text} onPress={handleCurrMedsPress} variant={variant}>Current Meds</Button>
        <Button flex={1} color={historyButtonTheme.text} onPress={handleHistoryPress} variant={variant2} >History</Button>
      </XGroup>
      <ScrollView flex={1} paddingTop={10}>
        <YGroup separator={<Separator />} gap={2} flex={1} paddingHorizontal={20} alignItems='center'>
          {}
        <DrugItems items={variant2 == 'active' ? historicItems : items} />
        </YGroup>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
