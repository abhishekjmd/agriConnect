import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../../../styles/globalStyles'
import NoRequirements from '../NoRequirements'
import TabFilterButtons from './TabFilterButtons'
import YourRequirements from './YourRequirements'
import AllRequirements from './AllRequirements'

const ActiveRequirementsView = () => {
  const [activeFilter, setActiveFilter] = useState('');
  return (
    <View style={styles.container}>
      <>
        <TabFilterButtons
          allRequirementsPressHandler={() => { setActiveFilter('AllRequirements'); }}
          yourRequirementsPressHandler={() => { setActiveFilter('YourRequirements'); }}
        />

        {
          activeFilter === 'YourRequirements' ? (
            <YourRequirements activeTab='YourRequirements'/>
          ) : (
            <AllRequirements activeTab='AllRequirements'/>
          )}
      </>
    </View>
  )
}

export default ActiveRequirementsView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})