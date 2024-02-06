import React, { useState } from 'react'
import { ImageBackground, SafeAreaView, FlatList, Image, StyleSheet, Text, TouchableOpacity, View, TextInput, Alert, } from 'react-native'
import DrawerHeader from '../../components/DrawerHeader'
import { COLORS, Styles, dataOne } from '../../constants/Theme'
import DropDownPicker from 'react-native-dropdown-picker';
import { IMGS, ROUTES } from '../../constants';

function ShowAlert() {
  Alert.alert('CONNECT METAMASK', 'You must be connect wallet before you can download this book.', [
    {
      text: 'CANCEL',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'METAMASK', onPress: () => console.warn('METAMASK Pressed') },
  ],
    { cancelable: false }
  );
}

const AllRentPage = ({navigation}) => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  console.log('aww', setValue);
  const [items, setItems] = useState([
    { label: 'Years', value: 'Years', },
    { label: 'Months', value: 'Months'},
    { label: 'Days', value: 'Days'},
  ]);



  return (
    <SafeAreaView style={Styles.container}>
      <DrawerHeader headerLogo={true} />
      <ImageBackground
        source={IMGS.background}
        style={Styles.container}>
        <FlatList
          data={dataOne}
          renderItem={({ item }) =>
            <View style={{ marginTop: 10, flex: 1 }}>
              <View style={{ flexDirection: "row", paddingLeft: 20, paddingRight: 20, }}>
                <Image source={item.faeturedImage} resizeMode="contain" />
                <View style={{ marginLeft: 20 }}>
                  <Text style={Styles.SecondTitle}>{item.title} (2022)</Text>
                  <Text style={Styles.published}>Published:</Text>
                  <Text style={[Styles.date, Styles.whiteColor]}>{item.published}</Text>
                  <Text style={Styles.published}>Writer:</Text>
                  <Text style={[Styles.date, Styles.whiteColor]}>{item.name}</Text>
                  <Text style={Styles.published}>Cover Artist:</Text>
                  <Text style={[Styles.date, Styles.whiteColor]}>{item.artist}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10, marginLeft: 20, marginRight: 10 }}>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  placeholder="SELECT"
                  dropDownDirection="TOP"
                  theme="LIGHT"
                  textStyle={{fontSize:10, fontWeight: "bold"}}
                  onChangeValue={text => setValue(text)}
                  containerStyle={{ height: 10, width: "25%", marginBottom: 40 }} />
                <View style={styles.emptyBtn} >
                  <TextInput placeholder='Select'  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.4}
                  onPress={() => console.warn("Clicked")}>
                  <View style={Styles.borderBtn}>
                    <Text style={[Styles.date, Styles.whiteColor]}>500 svet</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.4}
                  onPress={() => navigation.navigate(ROUTES.PURCHASE_DOWNLOAD)}>
                  <View style={[Styles.SimpleBtn, { backgroundColor: COLORS.buy }]}>
                    <Text style={[Styles.date, Styles.whiteColor]}>ON RENT</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.4}
                  onPress={() => console.warn("Clicked")}>
                  <View style={[Styles.SimpleBtn, { backgroundColor: COLORS.dot }]}>
                    <Text style={[Styles.date, Styles.whiteColor]}>METAMASK</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={Styles.seperator} />
            </View>
          } />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default AllRentPage

const styles = StyleSheet.create({
  emptyBtn: {
    height: 25,
    width: 45,
    padding: 5,
    borderColor: COLORS.dot,
    borderWidth: 1,
    marginLeft: 10,
    marginRight:10,
  },
  selectBtn: {
    height: 27,
    padding: 6,
    backgroundColor: COLORS.popular,
    borderWidth: 1,
  },

});