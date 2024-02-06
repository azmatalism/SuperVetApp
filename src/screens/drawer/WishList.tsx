import React from 'react'
import { View, Text, ImageBackground, FlatList, Image,  } from 'react-native'
import { COLORS, Styles, dataOne } from '../../constants/Theme'
import DrawerHeader from '../../components/DrawerHeader'
import { IMGS } from '../../constants'

export default function WishList() {

  return (
    <View style={Styles.container}>
      <DrawerHeader headerLogo={true} downIcon={true} />
      <ImageBackground
        source={IMGS.background}
        style={Styles.container}>
        <FlatList
          data={dataOne}
          renderItem={({ item }) =>
            <View style={{  marginTop: 20, }}>
              <View style={{ flexDirection: "row", paddingLeft: 20, paddingRight: 20, }}>
                <Image source={item.faeturedImage} resizeMode="contain" />
                <View style={{ marginLeft: 20 }}>
                  <Text style={Styles.SecondTitle}>{item.title}</Text>
                  <Text style={Styles.date}>Published: {item.published}</Text>
                  <Text style={Styles.longDesc}>{item.description}<Text style={[Styles.description, Styles.redColor]}>Read More</Text></Text>
                  <Text style={[Styles.date, Styles.greenColor]}>{item.time}</Text>

                </View>
              </View>
              <View style={Styles.btnView}>
                <Text style={[Styles.date,]}>{item.date}</Text>
              </View>
              <View style={Styles.seperator} />
            </View>
          } />
      </ImageBackground>

    </View>
  )
}
