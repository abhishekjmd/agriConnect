import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import TopHeader from '../../components/Requirement/header/TopHeader';
import AllActiveFilterButtons from '../../components/Requirement/header/TabFilterButtons';
import CreateRequirementsButton from '../../components/Requirement/footer/CreateRequirementsButton';
import FulfilledRequirements from '../../components/Requirement/requirementTypes/FulfilledRequirements';
import ActiveRequirementsView from '../../components/Requirement/requirementTypes/ActiveRequirements/ActiveRequirementsView';
import {globalStyles} from '../../styles/globalStyles';
import Colors from '../../utils/Colors';

const RequirementsView = () => {
  const [activeFilter, setActiveFilter] = useState('');

  return (
    <View style={styles.container}>
      <TopHeader />
      <>
        <AllActiveFilterButtons
          fulfilledPressHandler={() => {
            setActiveFilter('Fulfilled');
          }}
          activePressHandler={() => {
            setActiveFilter('Active');
          }}
        />
        {activeFilter === 'Fulfilled' ? (
          <FulfilledRequirements />
        ) : (
          <ActiveRequirementsView />
        )}
        <CreateRequirementsButton />
      </>
    </View>
  );
};

export default RequirementsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
