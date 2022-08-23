import React, { useState, useEffect, useRef } from 'react'
import { Camera } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'
import Background from '../components/Background'
import { Button } from 'react-native-paper'

import * as Location from 'expo-location'
import { TextInput } from 'react-native-paper'
import BackButton from '../components/BackButton'
import Header from '../components/Header'
import { PaperSelect } from 'react-native-paper-select'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  BackHandler,
  Alert,
} from 'react-native'
import Logo from '../components/Logo'

export default function FormR({ navigation }) {
  useEffect(() => {
    const backAction = () => {
      navigation.reset({
        routes: [{ name: 'Dashboard' }],
      })
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => backHandler.remove()
  }, [])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  })
  //obj
  //end-obj

  // camera
  const [pickedImagePath, setPickedImagePath] = useState('')
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync()

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!")
      return
    }

    const result = await ImagePicker.launchCameraAsync()

    // Explore the result
    console.log(result)

    if (!result.cancelled) {
      setPickedImagePath(result.uri)
      console.log(result.uri)
    }
  }
  // end-camera
  const [Description, setDescription] = React.useState('')
  const [gouve, setGouve] = useState({
    value: '',
    list: [
      { _id: '1', value: 'Ariana' },
      { _id: '2', value: 'Tunis' },
      { _id: '3', value: 'Ben Arous' },
      { _id: '4', value: 'Manouba' },
      { _id: '5', value: 'Bizerte' },
      { _id: '6', value: 'Beja' },
      { _id: '7', value: 'Jendouba' },
      { _id: '8', value: 'El kef' },
      { _id: '9', value: 'Seliana' },
      { _id: '10', value: 'Zaghouan' },
      { _id: '11', value: 'Nabeul' },
      { _id: '12', value: 'Sousse' },
      { _id: '13', value: 'kairouan' },
      { _id: '14', value: 'Sidi Bouzid' },
      { _id: '15', value: 'Kasserine' },
      { _id: '16', value: 'Gafsa' },
      { _id: '17', value: 'Sfax' },
      { _id: '18', value: 'Mahdia' },
      { _id: '19', value: 'Monastir' },
      { _id: '20', value: 'Gabes' },
      { _id: '21', value: 'Mednine' },
      { _id: '22', value: 'Tataouin' },
      { _id: '23', value: 'Touzeur' },
      { _id: '24', value: 'kebili' },
    ],
    selectedList: [],
    error: '',
  })
  const [chauss, setChauss] = useState({
    value: '',
    list: [
      { _id: '1', value: 'chaussée en béton bitumineux' },
      { _id: '2', value: 'chaussée en revêtement superficielle' },
      { _id: '3', value: 'chaussée en béton armé' },
    ],
    selectedList: [],
    error: '',
  })
  const [annom, setAnnom] = useState({
    value: '',
    list: [
      { _id: '1', value: 'chaussée' },
      { _id: '2', value: 'ralentisseur' },
      { _id: '3', value: 'signalisation & securité routière' },
      { _id: '4', value: 'danger' },
      { _id: '5', value: 'drainage' },
    ],
    selectedList: [],
    error: '',
  })

  const [li, setLi] = useState({
    value: '',
    list: [
      { _id: '1', value: 'Ornièrage à grand rayon' },
      { _id: '2', value: 'Affaissement de rive' },
      { _id: '3', value: 'Affaissement hors rive(ou flache)' },
      { _id: '4', value: 'Bourrelet transversal ' },
      { _id: '5', value: 'Gonfle' },
      { _id: '6', value: 'Fissure transversale ' },
      { _id: '7', value: 'Fissure longitudinal dans les bandes de roulement' },
      {
        _id: '8',
        value: 'Fissure longitudinal non spécifique aux bandes de roulement',
      },
      { _id: '9', value: 'Fissure d’adaptation' },
      { _id: '10', value: 'Fissure en dalles' },
      { _id: '11', value: 'Faiençage dans les bandes de roulement' },
      { _id: '12', value: 'Faïençage circulaire' },
      { _id: '13', value: 'Remontée de fines' },
      { _id: '14', value: 'Tête de chat' },
      { _id: '15', value: 'Tôle ondulée' },
      { _id: '16', value: 'Nid de Poule' },
      { _id: '17', value: 'Ressuage' },
      { _id: '18', value: 'Glaçage ou indentation' },
      { _id: '19', value: 'Peignage' },
      { _id: '20', value: 'Plumage' },
      { _id: '21', value: 'Orniérage à petit rayon' },
      { _id: '22', value: 'Fissure de joint' },
      { _id: '23', value: 'Désenrobage' },
      { _id: '24', value: 'Pelade' },
      { _id: '25', value: 'Bourrelet transversal ' },
      { _id: '26', value: 'Nid de Poule' },
      { _id: '27', value: 'Faïençage non spécifique aux bandes de roulement' },
      { _id: '28', value: 'Fissure diverses (fissure en étoile)' },
      { _id: '29', value: ' Fissure diverses (fissure parabolique)' },
      { _id: '30', value: 'Joint longitudinal dégradé' },
      { _id: '31', value: 'Ornièrage à grandd rayon' },
    ],
    selectedList: [],
    error: '',
  })
  const [lii, setLii] = useState({
    value: '',
    list: [
      { _id: '1', value: 'Fissure transversale ' },
      {
        _id: '2',
        value: 'Fissure longitudinal non spécifique aux bandes de roulement',
      },
      { _id: '3', value: 'Fissure Oblique' },
      { _id: '4', value: 'Cassure d’angle' },
      { _id: '5', value: 'Fissure en dalles' },
      { _id: '6', value: 'Faiençage non spécifique aux bandes de roulement' },
      { _id: '7', value: 'Epaufrure' },
      { _id: '8', value: 'Décalage de joint' },
      { _id: '9', value: 'Flambement' },
      { _id: '10', value: 'Fissure diverses(fissure en Y)' },
      { _id: '11', value: 'Nid de Poule' },
      { _id: '12', value: 'Ecaillage' },
      { _id: '13', value: 'Rejet de pompage' },
      { _id: '14', value: 'Découvrement d’armature' },
    ],
    selectedList: [],
    error: '',
  })
  const [lralenti, setLralenti] = useState({
    value: '',
    list: [
      { _id: '1', value: 'manque signalisation vertical' },
      { _id: '2', value: 'manque signalisation horizontal' },
      { _id: '3', value: 'mauvaise géometrie' },
      { _id: '4', value: 'manque éclairage' },
    ],
    selectedList: [],
    error: '',
  })
  const [lsigns, setLsigns] = useState({
    value: '',
    list: [
      { _id: '1', value: 'glissière de sécurité endommagée' },
      { _id: '2', value: 'absence glissière de sécurité' },
      { _id: '3', value: 'manque reflecteur glissière de sécurité' },
      { _id: '4', value: 'absence signalisation horizatanle ' },
      { _id: '5', value: 'absence signalisation vertical' },
      { _id: '6', value: 'panneau de signalisation vertical endommagée' },
      { _id: '7', value: 'reflecteur endommagée (yeux chat)' },
      { _id: '7', value: 'absence reflecteur (yeux chat)' },
    ],
    selectedList: [],
    error: '',
  })
  const [ldanger, setLDanger] = useState({
    value: '',
    list: [
      { _id: '1', value: 'point blue' },
      { _id: '2', value: 'point noir' },
    ],
    selectedList: [],
    error: '',
  })
  const [ldrenage, setLDrenage] = useState({
    value: '',
    list: [
      { _id: '1', value: 'Absence fossé longitudinal' },
      { _id: '2', value: 'Probléme végitation' },
      { _id: '3', value: 'Bouchage suite au cumule des déchets ect..' },
      { _id: '4', value: 'Dégradation du béton' },
    ],
    selectedList: [],
    error: '',
  })
  const [image, setImage] = useState(null)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }
  const [texte, setTexte] = React.useState('')

  const [location, setLocation] = useState(null)

  const locationH = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied')
      return
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    })
    setLocation(location.coords)
  }
  const [errorMsg, setErrorMsg] = useState(null)

  let text = 'Waiting..'
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = JSON.stringify(location)
  }
  console.log('first', text)
  let [abc, setAbc] = useState(null)

  let objs = {
    img: pickedImagePath,
    pos: location,
    route: texte,
    gouv: gouve.value,
    chaussee: chauss.value,
    annomalie: annom.value,
    err: abc,
    obs: Description,
  }

  return (
    <>
      <View
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'column',
          },
        ]}
      >

        
        <View style={{ flex: 1 }}>
          {/* <Logo />
          <Header style={{ marginTop: 50, textAlign: 'center' }}>Hello</Header> */}
        </View>
        <View style={{ flex: 4 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Button
              style={{ margin: 20 }}
              icon="camera"
              mode="contained"
              onPress={openCamera}
            >
              Insert photo
            </Button>

            <Button
              style={{ margin: 20 }}
              icon="crosshairs-gps"
              mode="contained"
              onPress={locationH}
            >
              Location GPS
            </Button>
          </View>

          <TextInput
            style={{ marginBottom: 20 }}
            label="Route N°"
            onChangeText={(texte) => setTexte(texte)}
          />
          <PaperSelect
            style={{ backgroundColor: 'red' }}
            label="Select Gouvernorat"
            value={gouve.value}
            onSelection={(value) => {
              setGouve({
                ...gouve,
                value: value.text,
                selectedList: value.selectedList,
                error: '',
              })
            }}
            arrayList={[...gouve.list]}
            selectedArrayList={gouve.selectedList}
            errorText={gouve.error}
            multiEnable={true}
            textInputMode="flat"
            searchStyle={{ iconColor: 'red' }}
          />

          <PaperSelect
            style={{ backgroundColor: 'red' }}
            label="Select type de chaussée"
            value={chauss.value}
            onSelection={(value) => {
              setChauss({
                ...chauss,
                value: value.text,
                selectedList: value.selectedList,
                error: '',
              })
            }}
            arrayList={[...chauss.list]}
            selectedArrayList={chauss.selectedList}
            errorText={chauss.error}
            // multiEnable={true}
            textInputMode="flat"
            searchStyle={{ iconColor: 'red' }}
          />
          <PaperSelect
            style={{ backgroundColor: 'red' }}
            label="Select niveau d'annomalie"
            value={annom.value}
            onSelection={(value) => {
              setAnnom({
                ...annom,
                value: value.text,
                selectedList: value.selectedList,
                error: '',
              })
            }}
            arrayList={[...annom.list]}
            selectedArrayList={annom.selectedList}
            errorText={annom.error}
            // multiEnable={true}
            textInputMode="flat"
            searchStyle={{ iconColor: 'red' }}
          />
          {(annom.value === 'chaussée' &&
            chauss.value === 'chaussée en béton bitumineux') ||
          (annom.value === 'chaussée' &&
            chauss.value === 'chaussée en revêtement superficielle') ? (
            <PaperSelect
              style={{ backgroundColor: 'red' }}
              label="Select annomalie"
              value={li.value}
              onSelection={(value) => {
                setLi({
                  ...li,
                  value: value.text,
                  selectedList: value.selectedList,
                  error: '',
                })
                setAbc(value.text)
              }}
              arrayList={[...li.list]}
              selectedArrayList={li.selectedList}
              errorText={li.error}
              // multiEnable={true}
              textInputMode="flat"
              searchStyle={{ iconColor: 'red' }}
            />
          ) : annom.value === 'chaussée' &&
            chauss.value === 'chaussée en béton armé' ? (
            <PaperSelect
              style={{ backgroundColor: 'red' }}
              label="Select annomalie"
              value={lii.value}
              onSelection={(value) => {
                setLii({
                  ...lii,
                  value: value.text,
                  selectedList: value.selectedList,
                  error: '',
                })
                setAbc(value.text)
              }}
              arrayList={[...lii.list]}
              selectedArrayList={li.selectedList}
              errorText={lii.error}
              // multiEnable={true}
              textInputMode="flat"
              searchStyle={{ iconColor: 'red' }}
            />
          ) : annom.value === 'ralentisseur' ? (
            <PaperSelect
              style={{ backgroundColor: 'red' }}
              label="Select Ralentisseur"
              value={lralenti.value}
              onSelection={(value) => {
                setLralenti({
                  ...lralenti,
                  value: value.text,
                  selectedList: value.selectedList,
                  error: '',
                })
                setAbc(value.text)
              }}
              arrayList={[...lralenti.list]}
              selectedArrayList={li.selectedList}
              errorText={lralenti.error}
              // multiEnable={true}
              textInputMode="flat"
              searchStyle={{ iconColor: 'red' }}
            />
          ) : annom.value === 'signalisation & securité routière' ? (
            <PaperSelect
              style={{ backgroundColor: 'red' }}
              label="Select signalisation/securité routière"
              value={lsigns.value}
              onSelection={(value) => {
                setLsigns({
                  ...lsigns,
                  value: value.text,
                  selectedList: value.selectedList,
                  error: '',
                })
                setAbc(value.text)
              }}
              arrayList={[...lsigns.list]}
              selectedArrayList={li.selectedList}
              errorText={lsigns.error}
              // multiEnable={true}
              textInputMode="flat"
              searchStyle={{ iconColor: 'red' }}
            />
          ) : annom.value === 'danger' ? (
            <PaperSelect
              style={{ backgroundColor: 'red' }}
              label="Select Danger"
              value={ldanger.value}
              onSelection={(value) => {
                setLDanger({
                  ...ldanger,
                  value: value.text,
                  selectedList: value.selectedList,
                  error: '',
                })
                setAbc(value.text)
              }}
              arrayList={[...ldanger.list]}
              selectedArrayList={li.selectedList}
              errorText={ldanger.error}
              // multiEnable={true}
              textInputMode="flat"
              searchStyle={{ iconColor: 'red' }}
            />
          ) : annom.value === 'drainage' ? (
            <PaperSelect
              style={{ backgroundColor: 'red' }}
              label="Select Drainage"
              value={ldrenage.value}
              onSelection={(value) => {
                setLDrenage({
                  ...ldrenage,
                  value: value.text,
                  selectedList: value.selectedList,
                  error: '',
                })
                setAbc(value.text)
              }}
              arrayList={[...ldrenage.list]}
              selectedArrayList={li.selectedList}
              errorText={ldrenage.error}
              // multiEnable={true}
              textInputMode="flat"
              searchStyle={{ iconColor: 'red' }}
            />
          ) : null}
        </View>
        <View style={{ flex: 2 }}>
          <TextInput
            label="Observation"
            multiline
            mode="outlined"
            numberOfLines={4}
            value={Description}
            onChangeText={(Description) => {
              setDescription(Description)
            }}
          />
        </View>
        <Button
          icon="check"
          mode="contained"
          onPress={() => console.log('Pressed', objs)}
        >
          Press me
        </Button>
      </View>
    </>
  )
}
