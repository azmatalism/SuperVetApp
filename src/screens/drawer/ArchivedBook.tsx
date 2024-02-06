import React from 'react'
import { View, Text, ImageBackground, FlatList, Image, TouchableOpacity, } from 'react-native'
import { Styles, dataOne } from '../../constants/Theme'
import DrawerHeader from '../../components/DrawerHeader'
import { IMGS, ROUTES } from '../../constants'

export default function ArchivedBook({navigation}) {

  return (
    <View style={Styles.container}>
      <DrawerHeader headerLogo={true} downIcon={true} />
      <ImageBackground
        source={IMGS.background}
        style={Styles.container}>
        <FlatList
          data={dataOne}
          renderItem={({ item }) =>
            <View style={{ marginTop: 20, }}>
              <View style={{ flexDirection: "row", paddingLeft: 20, paddingRight: 20, }}>
                <TouchableOpacity
                onPress={()=>navigation.navigate(ROUTES.PURSHACE_PAGE, { dataOne: item})}
                activeOpacity={0.7}>
                <Image source={item.faeturedImage} resizeMode="contain" />
                </TouchableOpacity>
                <View style={{ marginLeft: 20 }}>
                  <Text style={Styles.SecondTitle}>{item.name}</Text>
                  <Text style={Styles.date}>Published: {item.published}</Text>
                  <Text style={Styles.longDesc}>{item.description}<Text style={[Styles.description, Styles.redColor]}>Read More</Text></Text>
                  <Text style={[Styles.date, Styles.greenColor]}>{item.time}</Text>

                </View>
              </View>
              <View style={Styles.btnView}>
                <View style={{alignItems: "flex-end",}}>
                  <Text style={[Styles.date, Styles.greenColor]}>Complete</Text>
                  <Text style={[Styles.date, ]}>{item.date}</Text>
                </View>
              </View>
              <View style={Styles.seperator} />
            </View>
          } />
      </ImageBackground>

    </View>
  )
}
