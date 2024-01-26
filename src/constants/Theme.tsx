import { StyleSheet } from "react-native";
import { Icons } from "../common/Icons";
import TabNavigation from "../navigation/TabNavigator";
import MyComics from "../screens/drawer/MyComics";
import ArchivedBook from "../screens/drawer/ArchivedBook";
import WishList from "../screens/drawer/WishList";

export const COLORS = {
  background: "#242323",
  white: "#FFF",
  black: "#000",
  red: "#FF0000",
  dot: "#FDBC17",
  buy: "#64FF05",
  rent: "#FE5050",
  popular: "#B5B4B4",
  seperator:"#6F7071",

};

export const CONSTANT = {
  SPACING: 16,
  borderRadius: 10,
  titleFontSize: 24,
  textFontSize: 15,
  subTextFontSize: 14,
};

export const SCREENARRAY = [
  // { route: 'Home', label: 'Home', type: Icons.Ionicons, icon: 'home', component: TabNavigation },
  // { route: 'MyComics', label: 'My Comics', type: Icons.FontAwesome6, icon: 'handshake-simple', component: MyComics },
  // { route: 'MyTanents', label: 'My Tanents', type: Icons.FontAwesome, icon: 'book', component: MyComics },
  // { route: 'ArchivedBook', label: 'Archived Book', type: Icons.MaterialIcons, icon: 'menu-book', component: ArchivedBook },
  // { route: 'WishList', label: 'Wish List', type: Icons.MaterialIcons, icon: 'format-list-bulleted-add', component: WishList },
];

export const dataOne = [
  {
    faeturedImage: require("../assets/images/p1.png"),
    superImage: require("../assets/images/bundle1.png"),
    play: require("../assets/images/play.png"),
    characterImage: require("../assets/images/character1.png"),
    teamImage: require("../assets/images/team1.png"),
    discoverImage: require("../assets/images/discover.png"),
    characterName: "Dr.Bruce",
    teamName: "Team 1",
    characterDescription: "Bruce belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    description: "Ivy belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    title: "Dr.ivy sea queen",
    name: "Wasaam, Azmat, Ali",
    price: "300",
    published: "May 25,2022",
    artist: "Noman Ali",
    book: "9 Books",
    complete: true,
  },
  {
    faeturedImage: require("../assets/images/p11.png"),
    superImage: require("../assets/images/bundle2.png"),
    play: require("../assets/images/play.png"),
    characterImage: require("../assets/images/character2.png"),
    teamImage: require("../assets/images/team2.png"),
    discoverImage: require("../assets/images/discover.png"),
    characterName: "boggy Vet",
    teamName: "Team 2",
    characterDescription: "Bruce belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    description: "boggy Vet belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    title: "Dr.Bruce The Begining",
    name: "Usman, Wasaam",
    price: "700",
    published: "June 20,2023",
    artist: "Manan",
    book: "16 Books",
    complete: false,
  },
  {
    faeturedImage: require("../assets/images/p2.png"),
    superImage: require("../assets/images/bundle3.png"),
    play: require("../assets/images/play.png"),
    characterImage: require("../assets/images/character3.png"),
    teamImage: require("../assets/images/team3.png"),
    discoverImage: require("../assets/images/discover.png"),
    characterName: "Dr.Ivy",
    teamName: "Team 3",
    characterDescription: "Dr.Ivy belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    description: "Wolf belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    title: "Dr.Wolf The Rampage",
    name: "Usman",
    price: "500",
    published: "Apr 10,2012",
    artist: "Wasaam",
    book: "8 Books",
    complete: false,
  },
  {
    faeturedImage: require("../assets/images/p3.png"),
    superImage: require("../assets/images/bundle4.png"),
    play: require("../assets/images/play.png"),
    characterImage: require("../assets/images/character4.png"),
    teamImage: require("../assets/images/team1.png"),
    discoverImage: require("../assets/images/discover.png"),
    characterName: "Dr.x",
    teamName: "Team 1",
    characterDescription: "Dr.x belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    description: "Steel belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    title: "Dr.Steel Shot The Electrifire",
    name: "Ali, Usman",
    price: "200",
    published: "May 25,2022",
    artist: "Azmat",
    book: "12 Books",
    complete: true,
  },
  {
    faeturedImage: require("../assets/images/p4.png"),
    superImage: require("../assets/images/bundle5.png"),
    play: require("../assets/images/play.png"),
    characterImage: require("../assets/images/character1.png"),
    teamImage: require("../assets/images/team2.png"),
    discoverImage: require("../assets/images/discover.png"),
    characterName: "Dr.nina",
    teamName: "Team 2",
    characterDescription: "Dr.nina belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    description: "Wolf belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    title: "Dr.Wolf The Jungle Boy",
    name: "Ali, Usman, Azmat",
    price: "400",
    published: "Aug 15,2014",
    artist: "Usman",
    book: "11 Books",
    complete: false,
  },
  {
    faeturedImage: require("../assets/images/p5.png"),
    superImage: require("../assets/images/bundle6.png"),
    play: require("../assets/images/play.png"),
    characterImage: require("../assets/images/character6.png"),
    teamImage: require("../assets/images/team3.png"),
    discoverImage: require("../assets/images/discover.png"),
    characterName: "Dr.steel shot",
    teamName: "Team 3",
    characterDescription: "Dr.steel shot belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    description: "Psycho belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    title: "Dr.Psycho Who I Psycho ?",
    name: "Wasaam, Azmat, Ali",
    price: "600",
    published: "Sep 11,2021",
    artist: "Umair",
    book: "7 Books",
    complete: false,
  },
  {
    faeturedImage: require("../assets/images/p10.png"),
    superImage: require("../assets/images/bundle1.png"),
    play: require("../assets/images/play.png"),
    characterImage: require("../assets/images/character7.png"),
    teamImage: require("../assets/images/team1.png"),
    discoverImage: require("../assets/images/discover.png"),
    characterName: "Dr.wolf",
    teamName: "Team 1",
    characterDescription: "Dr.wolf belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    description: "Gibran belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    title: "Dr.Gibran Boy Became Hero",
    name: "Usman, Wasaam",
    price: "250",
    published: "Nov 20,2020",
    artist: "Hamza",
    book: "6 Books",
    complete: false,
  },
  {
    faeturedImage: require("../assets/images/p12.png"),
    superImage: require("../assets/images/bundle2.png"),
    play: require("../assets/images/play.png"),
    characterImage: require("../assets/images/character8.png"),
    teamImage: require("../assets/images/team2.png"),
    discoverImage: require("../assets/images/discover.png"),
    characterName: "Azreal",
    teamName: "Team 2",
    characterDescription: "Azreal belongs to a well-known corrupted family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    description: "Vision belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    title: "Mr.Vision I Can See You",
    name: "Usman, Azmat",
    price: "250",
    published: "Dec 25,2019",
    artist: "Touseef",
    book: "5 Books",
    complete: true,
  },


]

export const dataTwo = [
  {
    faeturedImage: require("../assets/images/p10.png"),
    superImage: require("../assets/images/bundle4.png"),
    play: require("../assets/images/play.png"),
    characterImage: require("../assets/images/character2.png"),
    teamImage: require("../assets/images/team1.png"),
    discoverImage: require("../assets/images/discover.png"),
    characterName: "boggy Vet",
    teamName: "Team 1",
    characterDescription: "boggy Vet belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    description: "Ivy belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    title: "Dr.Steel Shot The Electrifire",
    name: "Wasaam, Azmat, Ali",
    price: "300",
    published: "May 25,2022",
    artist: "Noman Ali",
    book: "15 Books"
  },
  {
    faeturedImage: require("../assets/images/comsoon.png"),
    superImage: require("../assets/images/bundleCom.png"),
    play: require("../assets/images/play.png"),
    characterImage: require("../assets/images/character8.png"),
    teamImage: require("../assets/images/team2.png"),
    discoverImage: require("../assets/images/discover.png"),
    characterName: "azreal",
    teamName: "Team 2",
    characterDescription: "azreal belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    description: "boggy Vet belongs to a well-known reputed rich family. When he was child he had a cat who was very dear to him. One day while he was sleeping,his cat went away to a jungle and fell down an empty well.",
    title: "Dr.Bruce The Begining",
    name: "Usman, Wasaam",
    price: "700",
    published: "June 20,2023",
    artist: "Manan",
    book: "10 Books"
  },


]

export const dataThree = [
  {
    image: require("../assets/images/p1.png"),
    name: "Dr.X :",
    title: "The Out Sider (2022)",
    date: "May 25, 2022",
    writer: "Wasaam, Azmat, Ali, Usman",
    rating: "(222)",
  },
  {
    image: require("../assets/images/p2.png"),
    name: "Sister Nina :",
    title: "The Saviour (2021)",
    date: "Jul 16, 2021",
    writer: "Azmat, Ali, Usman, Wasaam",
    rating: "(94)",
  },
  {
    image: require("../assets/images/p3.png"),
    name: "Dr.Wolf :",
    title: "The Jungle Boy (2020)",
    date: "Mar 20, 2020",
    writer: " Ali, Usman",
    rating: "(150)",
  },
  {
    image: require("../assets/images/p4.png"),
    name: "Dr.Psycho :",
    title: "Who I Psycho ? (2022)",
    date: "Sep 16, 2022",
    writer: "Ali, Usman, Wasaam, Azmat",
    rating: "(88)",
  },
  {
    image: require("../assets/images/p5.png"),
    name: "Dr.X :",
    title: "The Out Sider (2022)",
    date: "Dec 10, 2022",
    writer: "Azmat, Ali, Usman",
    rating: "(100)",
  },
  {
    image: require("../assets/images/p1.png"),
    name: "Dr.X :",
    title: "The Out Sider (2022)",
    date: "May 25, 2022",
    writer: "Wasaam, Azmat, Ali, Usman",
    rating: "(222)",
  },
  {
    image: require("../assets/images/p2.png"),
    name: "Sister Nina :",
    title: "The Saviour (2021)",
    date: "Jul 16, 2021",
    writer: "Azmat, Ali, Usman, Wasaam",
    rating: "(94)",
  },


]

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
    textTransform: "uppercase",
    lineHeight: 16,
    letterSpacing: 0.834,
  },
  featuredImg: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:10,
  },
  seeAll: {
    color: COLORS.white,
    marginRight: 15,
    fontSize: 16,
    fontWeight: "400",
    textTransform: "uppercase",
    lineHeight: 16,
    letterSpacing: 0.834,
  },
  description: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: "500",
    textAlign: "justify"
  },
  longDesc: {
    color: COLORS.white,
    fontSize: 8,
    fontWeight: "700",
    marginTop: 5,
    textAlign: "justify",
    width: "40%"
  },
  title: {
    color: COLORS.white,
    width: 80,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    fontSize: 8,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  SecondTitle: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "700",
  },
  published: {
    color: COLORS.popular,
    fontSize: 10,
    fontWeight: "700",
    marginTop: 5

  },
  date: {
    color: COLORS.popular,
    fontSize: 8,
    fontWeight: "700",
  },
  name: {
    color: COLORS.white,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 6,
    fontWeight: "400",
    textTransform: "uppercase",
  },
  price: {
    color: COLORS.white,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 6,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  margin5: {
    marginLeft: 5,
    marginRight: 5,
  },
  newBadge:{
    width:30, 
    height:18, 
    position:"absolute",  
    top:0 ,
    left:5,
    backgroundColor:"red", 
    borderBottomLeftRadius: 5, 
    borderBottomRightRadius: 5, 
    alignItems:"center", 
    justifyContent:"center"
  },
  characterImages: {
    height: 100,
    width: 100,
    marginLeft: 5,
    marginRight: 5,
  },
  charTeamText:{
    textAlign:"center", 
    alignSelf:"center", 
    marginTop: 5
  },
  borderBtn: {
    padding: 5,
    borderColor: COLORS.dot,
    borderWidth: 1,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10
  },
  btnView: {
    alignSelf: "flex-end",
    left: -30,
    bottom: "20%"
  },
  btnVie: {
    flexDirection: "row",
    flex:1,
    marginBottom: 15,
    justifyContent:"flex-end",
  },
  SimpleBtn: {
    padding: 6,
    backgroundColor: COLORS.red,
    marginLeft: 10, 
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  seperator: {
    borderColor: COLORS.seperator, borderWidth: 1
  },
  uppercase: {
    textTransform: "uppercase",
  },
  dotColor: {
    color: COLORS.dot,
  },
  greenColor: {
    color: COLORS.buy,
  },
  redColor: {
    color: COLORS.red,
  },
  whiteColor: {
    color: COLORS.white,
  },
  blackColor: {
    color: COLORS.black,
  },
  lightWhiteColor: {
    color: COLORS.popular,
  },

});


