import {StyleSheet, FlatList, View, RefreshControl} from 'react-native';
import {useState, useEffect} from 'react';
import RequirementsInfoCard from '../../RequirementsInfoCard';
import NoRequirements from '../NoRequirements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AllRequirements = ({activeTab}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Retrieve requirements from AsyncStorage
      const requirementsString = await AsyncStorage.getItem('requirements');
      if (requirementsString) {
        const requirementsData = JSON.parse(requirementsString);
        setRequirements(requirementsData);
      }
    } catch (error) {
      console.error('Error fetching requirements:', error);
    }
  };

  const onRefresh = async () => {
    try {
      setRefreshing(true);
      await fetchData(); // Fetch data from AsyncStorage
      setRefreshing(false);
    } catch (error) {
      console.error('Error refreshing data:', error);
    }
  };

  return (
    <View style={styles.container}>
      {requirements.length === 0 ? (
        <NoRequirements />
      ) : (
        <FlatList
          data={requirements}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingTop: 15}}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({item, index}) => {
            return (
              <RequirementsInfoCard
                key={index}
                productName={item.productName}
                description={item.description}
                budget={item.budget}
                time={item.creationDateInMillis}
                category={item.category}
                contact={item.contactNumber}
              />
            );
          }}
        />
      )}
    </View>
  );
};

export default AllRequirements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
