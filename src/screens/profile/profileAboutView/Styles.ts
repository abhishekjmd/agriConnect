import { StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

const Styles = StyleSheet.create({
    containerMain: {
      backgroundColor: "white",
      alignItems: "center",
      paddingHorizontal:'5%',
    },
    infoLabel: {
      fontSize: 15,
      paddingHorizontal: 5,
      color:'rgba(0,0,0,0.8)', 
      fontWeight:'500',
      lineHeight:17
    },
    infoIcons: {
      width: 26,
      height: 26,
      resizeMode: "contain",
    },
    infoContainer: {
      flexDirection: "row",
      paddingTop: 3
    },
    infoContainerMain: {
      flexDirection: "row",
      marginVertical: 10,
      paddingHorizontal: 23,
    },
    websiteContainerMain: {
      paddingHorizontal: 20,
    },
    viewSeparator: {
      // borderWidth: 0.6,
      // borderColor: "rgba(0,0,0,0.1)",
    },
    labelContainer: {
      maxHeight: 46,
      marginVertical: "2%",
    },
    labelText: {
      fontSize: 17,
      fontWeight: "500",
      lineHeight: 21,
      color: "#1C3144",
    },
    urlContainer: {
      flexDirection: "row",
    },
    webLogo: {},
    websiteUrlContainer: {},
    urlStyle: {
      paddingHorizontal: 5,
      fontSize: 16,
      color: "#528DF3",
    },
    actionContainer: {
      flexDirection: "row",
      paddingVertical: "3%",
      justifyContent: "space-between",
    },
    leftActionContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: "2.5%",
      borderRadius: 16,
      backgroundColor: "#D9D9D9",
    },
    copyButton: {
      paddingRight: 2,
    },
    rightActionContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: "3%",
    },
    actionLabelText: {
      fontSize: 13,
      lineHeight: 16,
      fontWeight: "500",
      color: "rgba(35,35,35,0.7)",
    },
    shareText: { color: "#8D99AE" },
    visitingCardPreview: {
      paddingHorizontal: 20,
    },
    editButton: {
      borderRadius: 16,
      backgroundColor: "#D9D9D9",
      height: "70%",
    },
    primaryColor: {
      color: Colors.PRIMARY,
    },
    downloadContainer: {
      flexDirection: "row",
      alignItems: "baseline",
      paddingHorizontal: "3%",
      justifyContent: "space-evenly",
    },
    cardPreviewContainer:{ marginLeft:'-1%'}
  });

  export default Styles;