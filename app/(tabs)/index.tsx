import { StyleSheet, useColorScheme, Modal, Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import EditScreenInfo from '@/app/_components/old/EditScreenInfo';
import {View, ScrollView, Text, Separator, YGroup, ListItem, XGroup, Button, ThemeName, Theme } from 'tamagui';
import { useEffect, useState } from 'react';
import { Pill, PlusCircle, ChevronRight } from '@tamagui/lucide-icons';
import { Link } from 'expo-router';
import { CanadaDPD } from '../api/CanadaDPD';
import { allDPD } from '../api/allDPD';

export default function Home() {
  const [variant, setVariant] = useState<'outlined' | undefined>(undefined);
  const [btn1Theme, setBtn1Theme] = useState<'active' | undefined>('active');
  const [variant2, setVariant2] = useState<'outlined' | undefined>('outlined');
  const [btn2Theme, setBtn2Theme] = useState<'active' | undefined>(undefined);

  interface ButtonProps {
    currMeds: {
      theme: ThemeName | null | undefined;
      variant: 'outlined' | undefined;
      color: string | undefined;
    },
    history: {
      theme: ThemeName | null | undefined;
      variant: 'outlined' | undefined;
      color: string | undefined;
    },
  }

  const [buttonStates, setButtonStates] = useState<ButtonProps>({
    currMeds: {
      theme: 'active',
      variant: undefined,
      color: Colors.light.text
    },
    history: {
      theme: undefined,
      variant: 'outlined',
      color: Colors.dark.text
    }
  });

  const handleCurrMedsPress = () => {
    if (buttonStates.currMeds.variant === 'outlined') {
      setButtonStates({
        currMeds: {
          theme: 'active',
          variant: undefined,
          color: Colors.light.text
        },
        history: {
          theme: undefined,
          variant: 'outlined',
          color: Colors.light.text
        }
      });
    }
  }
  
  const handleHistoryPress = () => {
    if (buttonStates.history.variant === 'outlined') {
      setButtonStates({
        currMeds: {
          theme: undefined,
          variant: 'outlined',
          color: Colors.light.text
        },
        history: {
          theme: 'active',
          variant: undefined,
          color: Colors.light.text
        }
      });
    }
  }
  // gets DPD from supabase
  //allDPD();

  // gets updated information from Canada DPD
  //CanadaDPD();

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
          <Theme name="surface4">
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
          </Theme>
        ))}
      </>
    );
  };

  return (
      <View flex={1} paddingHorizontal={'$2'} paddingTop={'$2'}>
        <YGroup flexGrow={1}>
          <XGroup width='100%' alignSelf='center'>
            <Button flex={1} onPress={handleCurrMedsPress} theme={buttonStates.currMeds.theme} variant={buttonStates.currMeds.variant}>Current Meds</Button>
            <Button flex={1} onPress={handleHistoryPress} theme={buttonStates.history.theme} variant={buttonStates.history.variant}>History</Button>
          </XGroup>
          <ScrollView minHeight={'100vh'} paddingTop={10}>
          
            <YGroup gap={2} flex={1} alignItems='center'>
            
              <DrugItems items={buttonStates.history.variant == 'outlined' ? historicItems : testItems} />
              
            </YGroup>
            
          </ScrollView>
         
        </YGroup>
      
            <Link asChild 
            style={{position: 'absolute', zIndex: 10, right: 50, bottom: 50}}
            href={{
              pathname: "/AddDrugModal",
              params: { }
            }}>
              <Pressable>
                {({ pressed }) => (
                  <PlusCircle size={50}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }} />
                )}
              </Pressable>
            </Link>
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
