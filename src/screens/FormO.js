import React, { useState, useEffect, useRef } from 'react'
import { Camera } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'
import Background from '../components/Background'
import { Button } from 'react-native-paper'

import * as Location from 'expo-location'
import { TextInput, ToggleButton } from 'react-native-paper'
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
  Switch,
  ScrollView,
} from 'react-native'
export default function FormO({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

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
      { _id: '1', value: 'chauss??e en b??ton bitumineux' },
      { _id: '2', value: 'chauss??e en rev??tement superficielle' },
      { _id: '3', value: 'chauss??e en b??ton arm??' },
    ],
    selectedList: [],
    error: '',
  })
  const [annom, setAnnom] = useState({
    value: '',
    list: [
      { _id: '1', value: 'chauss??e' },
      { _id: '2', value: 'ralentisseur' },
      { _id: '3', value: 'signalisation & securit?? routi??re' },
      { _id: '4', value: 'danger' },
      { _id: '5', value: 'drainage' },
    ],
    selectedList: [],
    error: '',
  })

  const [li, setLi] = useState({
    value: '',
    list: [
      { _id: '1', value: 'Etanch??it??' },
      { _id: '2', value: 'Dispositifs de retenue' },
      { _id: '3', value: 'Dispositifs de potection' },
      { _id: '4', value: 'Dispositifs de drainage et ??vacuation des eaux' },
      { _id: '5', value: 'Chauss??e' },
      { _id: '6', value: 'trottoirs' },
      { _id: '7', value: 'Bordures' },
      { _id: '8', value: "Relev??es d'??tanchit??"},
      { _id: '9', value: 'Joins de chauss??e' },
      { _id: '10', value: 'Joins de trottoirs'},
      { _id: '11', value: 'Corniches' },
      { _id: '12', value: 'Remblais' },
      { _id: '13', value: 'Eclairage' },
      { _id: '14', value: 'R??seaux' },
    ],
    selectedList: [],
    error: '',
  })
  const [lii, setLii] = useState({
    value: '',
    list: [
      { _id: '1', value: 'Tablier ' },
      {
        _id: '2',
        value: 'Poutre Principale', },
      { _id: '3', value: "Appareil d'apui" },
      { _id: '4', value: 'chevetre' },
      { _id: '5', value: 'Appui' },
      { _id: '6', value: 'Cul??e' },
      { _id: '7', value: 'Semelle' },

    ],
    selectedList: [],
    error: '',
  })
  const [lralenti, setLralenti] = useState({
    value: '',
    list: [
      { _id: '1', value: 'manque signalisation vertical' },
      { _id: '2', value: 'manque signalisation horizontal' },
      { _id: '3', value: 'mauvaise g??ometrie' },
      { _id: '4', value: 'manque ??clairage' },
    ],
    selectedList: [],
    error: '',
  })
  const [lsigns, setLsigns] = useState({
    value: '',
    list: [
      { _id: '1', value: 'glissi??re de s??curit?? endommag??e' },
      { _id: '2', value: 'absence glissi??re de s??curit??' },
      { _id: '3', value: 'manque reflecteur glissi??re de s??curit??' },
      { _id: '4', value: 'absence signalisation horizatanle ' },
      { _id: '5', value: 'absence signalisation vertical' },
      { _id: '6', value: 'panneau de signalisation vertical endommag??e' },
      { _id: '7', value: 'reflecteur endommag??e (yeux chat)' },
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
      { _id: '1', value: 'Absence foss?? longitudinal' },
      { _id: '2', value: 'Probl??me v??gitation' },
      { _id: '3', value: 'Bouchage suite au cumule des d??chets ect..' },
      { _id: '4', value: 'D??gradation du b??ton' },
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
  const [texte2, setTexte2] = React.useState('')
  const [franshis, setFranshis] = React.useState('')

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
      <ScrollView
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'column',
          },
        ]}
      >
        <View style={{ flex: 1 }}>
          {/* <Header style={{ marginTop: 50, textAlign: 'center' }}>Hello</Header> */}
        </View>
        <View style={{ flex: 10 }}>
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
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <TextInput
              style={{ width: 180, marginBottom: 20 }}
              label="Route N??"
              onChangeText={(texte) => setTexte(texte)}
            />
            <TextInput
              style={{ width: 180, marginBottom: 20 }}
              label="PK N??"
              onChangeText={(texte2) => setTexte2(texte2)}
            />
          </View>
          <TextInput
            style={{ marginBottom: 20 }}
            label="Fransissement d'ouvrage"
            onChangeText={(franshis) => setFranshis(franshis)}
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
            label="Type d'ouvrage"
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
            label="Mat??riaux"
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              borderWidth: 2,
            }}
          >
            <Text>Equipement</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#767577' }}
              thumbColor={isEnabled ? '#ff0000' : '#ff0000'}
              // ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text>Structure </Text>
          </View>

          {isEnabled ? (
            <PaperSelect
              style={{ backgroundColor: 'red' }}
              label="Structure"
              value={lii.value}
              onSelection={(value) => {
                setLii({
                  ...lii,
                  value: value.text,
                  selectedList: value.selectedList,
                  error: '',
                })
              }}
              arrayList={[...lii.list]}
              selectedArrayList={lii.selectedList}
              errorText={annom.error}
              // multiEnable={true}
              textInputMode="flat"
              searchStyle={{ iconColor: 'red' }}
            />
          ) : (
            <PaperSelect
              style={{ backgroundColor: 'red' }}
              label="Equipement"
              value={li.value}
              onSelection={(value) => {
                setLi({
                  ...li,
                  value: value.text,
                  selectedList: value.selectedList,
                  error: '',
                })
              }}
              arrayList={[...li.list]}
              selectedArrayList={li.selectedList}
              errorText={li.error}
              // multiEnable={true}
              textInputMode="flat"
              searchStyle={{ iconColor: 'red' }}
            />
          )}
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
      </ScrollView>
      <Button
        style={{ margin: 20 }}
        icon="check"
        mode="contained"
        onPress={() => console.log('Pressed', objs)}
      >
        Press me
      </Button>
    </>
  )
}
