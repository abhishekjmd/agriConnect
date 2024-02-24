import { StyleSheet, View} from "react-native";
import {Dropdown} from "react-native-element-dropdown";
import Colors from "../../../utils/Colors";
import { SCREEN_WIDTH } from "../../../utils/Theme";

const SelectTransport = ({ transport, setTransport, transportTypes}) => {

  return (
    <View style={{justifyContent: 'center', backgroundColor: Colors.WHITE}}>
      <Dropdown
        search
        mode="modal"
        data={transportTypes}
        labelField='name'
        valueField='name'
        placeholderStyle={{
          fontSize: 15,
          color: Colors.BLACK,
          fontWeight: '600',
        }}
        iconStyle={{ marginRight: 10 }}
        placeholder='Select transport'
        containerStyle={{ marginTop: 26 }}
        activeColor={Colors.SECONDARY}
        searchPlaceholder='Search'
        style={styles.multiselect_input}
        value={transport}
        onChange={(val) => {
          setTransport(val);
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  multiselect_input: {
    width: SCREEN_WIDTH * 0.89,
    height: 40,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    backgroundColor: '#FFF8FA',
    fontSize: 13,
    borderRadius: 3,
    marginTop: 10,
    paddingHorizontal: 5,
    justifyContent: 'center',
    margin: 20
  },
});

export default SelectTransport;