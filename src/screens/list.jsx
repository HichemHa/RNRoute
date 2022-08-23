import React from 'react'

function list() {
  return (
    <div>
          <Header style={{ marginTop: 50, textAlign: 'center' }}>Hello</Header>
      <View style={{ flex: 1, top: 50 }}>
        {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}

        <Button
          style={{ margin: 20 }}
          icon="camera"
          mode="contained"
          onPress={pickImage}
        >
          Insert photo
        </Button>

        <Button
          style={{ margin: 20 }}
          icon="crosshairs-gps"
          mode="contained"
          onPress={locationH}
        >
          Insert location
        </Button>

        <TextInput
          style={{ margin: 20 }}
          label="Route N°"
          onChangeText={(texte) => setTexte(texte)}
        />
        <View
          style={{
            margin: 20,
            borderRadius: 5,
            backgroundColor: '#49454f',
            placeholderTextColor: 'red',
          }}
        >
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
        </View>
        <View
          style={{
            margin: 20,
            borderRadius: 5,
            backgroundColor: '#49454f',
            placeholderTextColor: 'red',
          }}
        >
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
        </View>
        <View
          style={{
            margin: 20,
            borderRadius: 5,
            backgroundColor: '#49454f',
            placeholderTextColor: 'red',
          }}
        >
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
        </View>
        {console.log('akremkh', chauss.value)}
        {(annom.value === 'chaussée' &&
          chauss.value === 'chaussée en béton bitumineux') ||
        chauss.value === 'chaussée en revêtement superficielle' ? (
          <View
            style={{
              margin: 20,
              borderRadius: 5,
              backgroundColor: '#49454f',
              placeholderTextColor: 'red',
            }}
          >
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
              }}
              arrayList={[...li.list]}
              selectedArrayList={li.selectedList}
              errorText={li.error}
              // multiEnable={true}
              textInputMode="flat"
              searchStyle={{ iconColor: 'red' }}
            />
          </View>
        ) : annom.value === 'chaussée' &&
          chauss.value === 'chaussée en béton armé' ? (
          <View
            style={{
              margin: 20,
              borderRadius: 5,
              backgroundColor: '#49454f',
              placeholderTextColor: 'red',
            }}
          >
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
              }}
              arrayList={[...lii.list]}
              selectedArrayList={li.selectedList}
              errorText={lii.error}
              // multiEnable={true}
              textInputMode="flat"
              searchStyle={{ iconColor: 'red' }}
            />
          </View>
        ) : annom.value === 'ralentisseur' ? (
          <View
            style={{
              margin: 20,
              borderRadius: 5,
              backgroundColor: '#49454f',
              placeholderTextColor: 'red',
            }}
          >
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
              }}
              arrayList={[...lralenti.list]}
              selectedArrayList={li.selectedList}
              errorText={lralenti.error}
              // multiEnable={true}
              textInputMode="flat"
              searchStyle={{ iconColor: 'red' }}
            />
          </View>
        ) : annom.value === 'signalisation & securité routière' ? (
          <View
            style={{
              margin: 20,
              borderRadius: 5,
              backgroundColor: '#49454f',
              placeholderTextColor: 'red',
            }}
          >
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
              }}
              arrayList={[...lsigns.list]}
              selectedArrayList={li.selectedList}
              errorText={lsigns.error}
              // multiEnable={true}
              textInputMode="flat"
              searchStyle={{ iconColor: 'red' }}
            />
          </View>
        ) : annom.value === 'danger' ? (
          <View
            style={{
              margin: 20,
              borderRadius: 5,
              backgroundColor: '#49454f',
              placeholderTextColor: 'red',
            }}
          >
            <PaperSelect
              style={{ backgroundColor: 'red' }}
              label="Select Danger"
              value={ldanger.value}
              onSelection={(value) => {
                setLdanger({
                  ...ldanger,
                  value: value.text,
                  selectedList: value.selectedList,
                  error: '',
                })
              }}
              arrayList={[...ldanger.list]}
              selectedArrayList={li.selectedList}
              errorText={ldanger.error}
              // multiEnable={true}
              textInputMode="flat"
              searchStyle={{ iconColor: 'red' }}
            />
          </View>
        ) : annom.value === 'drainage' ? (
          <View
            style={{
              margin: 20,
              borderRadius: 5,
              backgroundColor: '#49454f',
              placeholderTextColor: 'red',
            }}
          >
            <PaperSelect
              style={{ backgroundColor: 'red' }}
              label="Select Drainage"
              value={ldrenage.value}
              onSelection={(value) => {
                setLdrenage({
                  ...ldrenage,
                  value: value.text,
                  selectedList: value.selectedList,
                  error: '',
                })
              }}
              arrayList={[...ldrenage.list]}
              selectedArrayList={li.selectedList}
              errorText={ldrenage.error}
              // multiEnable={true}
              textInputMode="flat"
              searchStyle={{ iconColor: 'red' }}
            />
          </View>
        ) : null}
         <View style={{  borderRadius: 5,margin:20,textAlign:'center',flex:1 }}>
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
      </View>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
    </div>
  )
}

export default list