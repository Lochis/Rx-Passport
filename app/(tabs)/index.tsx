import { StyleSheet, useColorScheme, Modal, Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import EditScreenInfo from '@/app/_components/EditScreenInfo';
import { View, ScrollView, Text, Separator, YGroup, ListItem, XGroup, Button } from 'tamagui';
import { useEffect, useState } from 'react';
import { Pill, PlusCircle, ChevronRight } from '@tamagui/lucide-icons';
import { Link } from 'expo-router';
import { getDPD } from '../api/CanadaDPD';

export default function Home() {
  const colorScheme = useColorScheme();
  const currentTheme = colorScheme == 'light' ? Colors.light : Colors.dark
  const [variant, setVariant] = useState<'outlined' | undefined>(undefined);
  const [btn1Theme, setBtn1Theme] = useState<'active' | undefined>('active');
  const [variant2, setVariant2] = useState<'outlined' | undefined>('outlined');
  const [btn2Theme, setBtn2Theme] = useState<'active' | undefined>(undefined);

  const [currMedsButtonTheme, setCurrMedsButtonTheme] = useState(Colors.light);
  const [historyButtonTheme, setHistoryButtonTheme] = useState(Colors.dark);

  const handleCurrMedsPress = () => {
    if (variant === 'outlined') {
      setBtn1Theme('active');
      setVariant(undefined);
      setCurrMedsButtonTheme(Colors.light);

      setBtn2Theme(undefined);
      setVariant2('outlined');
      setHistoryButtonTheme(Colors.dark)
    }
  }

  const handleHistoryPress = () => {
    if (variant2 === 'outlined') {
      setBtn2Theme('active');
      setVariant2(undefined);
      setHistoryButtonTheme(Colors.light);


      setVariant('outlined');
      setBtn1Theme('active');
      setCurrMedsButtonTheme(Colors.dark);
    }
  }


  // gets updated information from Canada DPD
  //getDPD();

  const testItems: item[] = [
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

  const historicItems: item[] = [
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

  interface item {
    title: string,
    subTitle: string,
    inner: string,
  }


  const DrugItems = ({ items }) => {
    return (
      <>
        {items.map((item: item, index: number) => (
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
    <div>
      <View flex={1}>
        <YGroup>
          <XGroup width='100%'>
            <Button flex={1} color={currMedsButtonTheme.text} onPress={handleCurrMedsPress} theme={btn1Theme} variant={variant}>Current Meds</Button>
            <Button flex={1} color={historyButtonTheme.text} onPress={handleHistoryPress} theme={btn2Theme} variant={variant2} >History</Button>
          </XGroup>
          <ScrollView flex={1} paddingTop={10}>
            <YGroup separator={<Separator />} gap={2} flex={1} paddingHorizontal={20} alignItems='center'>
              { }
              <DrugItems items={variant2 == undefined ? historicItems : testItems} />
            </YGroup>
          </ScrollView>
        </YGroup>
      </View>
      <div>
            <Link asChild 
            style={{position: 'absolute', zIndex: 10, right: 50, bottom: 50}}
            href={{
              pathname: "/AddDrugModal",
              /*params: { type: 'addDrug'  }*/
            }}>
              <Pressable>
                {({ pressed }) => (
                  <PlusCircle size={50} color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }} />
                )}
              </Pressable>
            </Link>
          </div>
    </div>
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
