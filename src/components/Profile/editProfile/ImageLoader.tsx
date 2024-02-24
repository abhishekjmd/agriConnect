import { ActivityIndicator } from 'react-native';
import Colors from '../../../utils/Colors';

export const ImageLoader = () => {
  return (
    <>
      <ActivityIndicator size={'large'} color={Colors.PRIMARY} />
    </>
  )
};