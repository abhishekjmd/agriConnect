import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React, { useContext } from 'react'
import Carousel from 'react-native-snap-carousel';
import { ObjectDataContext } from '../../../utils/ObjectDataContext';
import { globalStyles } from '../../../styles/globalStyles';
import { CameraClick, Coverphoto } from '../../../assets';
import { SCREEN_WIDTH } from '../../../utils/Theme';
import { ImageLoader } from './ImageLoader';
import Colors from '../../../utils/Colors';
import TitlesHeader from './TitlesHeader';

type CoverPictureProps = {
  type: string,
  activeIndex: number,
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
  imageSettingLoading: boolean,
  handleCoverPhoto: () => void,
}

const CoverPicture = (props: CoverPictureProps) => {
  const {
    type,
    activeIndex,
    setActiveIndex,
    handleCoverPhoto,
    imageSettingLoading,
  } = props
  const objectData = useContext(ObjectDataContext);

  return (
    <View style={[globalStyles.customContainer]}>
      <TitlesHeader text='Cover Picture' style={{ marginLeft: 10 }} />
      <TouchableOpacity
        style={styles.cover_image_container}
        onPress={handleCoverPhoto}
      >
        {imageSettingLoading && type === 'COVER' ? (
          <ImageLoader />
        ) : (
          <>
            {objectData?.coverPhotos?.length !== 0 &&
              objectData?.coverPhotos ? (
              <Carousel
                data={objectData?.coverPhotos}
                renderItem={({ item, index }) => {
                  return (
                    <View
                      style={[
                        { position: 'relative', left: 25 },
                        styles.cover_image_container,
                      ]}
                    >
                      <ImageBackground
                        style={[styles.cover_image]}
                        source={item && { uri: item }}
                        imageStyle={{ borderRadius: 4 }}
                      ></ImageBackground>
                      <View style={styles.pagination_area}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 10,
                          }}
                        >
                          {activeIndex + 1}/{objectData?.coverPhotos.length}
                        </Text>
                      </View>
                    </View>
                  );
                }}
                sliderWidth={SCREEN_WIDTH}
                itemWidth={SCREEN_WIDTH}
                autoplay={true}
                loop={true}
                autoplayInterval={4000}
                onSnapToItem={(index) => setActiveIndex(index)}
                enableMomentum={false}
              />
            ) : (
              <ImageBackground
                style={styles.cover_image}
                source={Coverphoto}
                imageStyle={{ borderRadius: 4 }}
              >
                <Image source={CameraClick} />
              </ImageBackground>
            )}
          </>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default CoverPicture

const styles = StyleSheet.create({
  cover_image_container: {
    width: 350,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cover_image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination_area: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: Colors.LIGHT_GRAY,
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },
})