import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import NavigationHeader from '../components/NavigationHeader'

export default function Dashboard({ navigation }) {
  return (<>
      {/* <NavigationHeader/> */}
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      {/* <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph> */}
      <Button
        mode="outlined"
        onPress={() =>
          navigation.navigate('FormR')
        }
      >
        Insert data route
      </Button>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.navigate('FormO')
        }
      >
        Insert data Ouvrage d'Art
      </Button>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Maps
      </Button>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Résultat
      </Button>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Voir profile
      </Button>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
    </>
  )
}
