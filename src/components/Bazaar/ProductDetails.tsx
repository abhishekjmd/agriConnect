import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../utils/Colors';
import { SCREEN_WIDTH } from '../../utils/Theme';

const ProductDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params;
  // const ProductDetails = route.params.ProductDetails;
  const variant = product.variants[0]; // Assuming there's only one variant for simplicity
  const MAX_LENGTH = 150;
  const [isFullTextShown, setIsFullTextShown] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(variant);

  const toggleNumberOfLines = () => {
    setIsFullTextShown(!isFullTextShown);
  };

  const variantDescription = selectedVariant.description;

  const displayText =
    variantDescription?.length > MAX_LENGTH
      ? isFullTextShown
        ? variantDescription
        : variantDescription?.slice(0, MAX_LENGTH) + ' ...'
      : variantDescription;

  const handleSelectVariant = (variant) => {
    setSelectedVariant(variant);
  };

  const isSelectedVariant = (variant) => {
    return selectedVariant === variant;
  };

  return (
    <>
      <ScrollView style={styles.wrapper}>
        <Pressable style={styles.container} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color={Colors.SECONDARY_BLACK} />
        </Pressable>
        {/* Implement your carousel component here */}
        <View style={{ padding: 20 }}>
          {/* Render your product images here */}
        </View>
        <View style={styles.productRow}>
          <View>
            <Text style={styles.titleText}>{ProductDetails.product.productName}</Text>
            <Text style={styles.brandText}>{product.brand}</Text>
          </View>
          <View style={styles.priceRow}>
            <FontAwesome name="rupee" size={16} color={Colors.BLACK} style={{ paddingRight: 2, paddingTop: 2 }} />
            <Text style={styles.rupeeText}>{variant.price}</Text>
          </View>
        </View>
        <Divider style={styles.divider} />
        <View style={{ padding: 15 }}>
          <Text style={styles.descHeadingText}>Product Description</Text>
          <Text style={styles.descText}>
            {displayText}
            {variantDescription?.length > MAX_LENGTH && (
              <TouchableOpacity onPress={toggleNumberOfLines}>
                <Text style={[styles.readText, { top: 4 }]}>{isFullTextShown ? ' Read less' : ' Read more'}</Text>
              </TouchableOpacity>
            )}
          </Text>
          <Text style={styles.descText}>{`${variant.quantity} ${product.unit}`}</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={{ padding: 15 }}>
          <Text style={styles.descHeadingText}>Size</Text>
        </View>
        <View style={{ marginBottom: 90, marginHorizontal: 20 }}>
          <FlatList
            data={product.variants}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => handleSelectVariant(item)}
                style={[styles.card, isSelectedVariant(item) && styles.cardSelected]}
              >
                <View>
                  <View style={styles.sizeCard}>
                    <Text style={[styles.sizeText, isSelectedVariant(item) && styles.sizeTextSelected]}>
                      {item.variantName}
                    </Text>
                    <View style={styles.priceContainer}>
                      <FontAwesome
                        name="rupee"
                        size={13}
                        color={isSelectedVariant(item) ? Colors.BLACK : Colors.SEMI_TRANSPARENT_BLACK}
                        style={{ paddingRight: 2, paddingTop: 2 }}
                      />
                      <Text style={[styles.priceText, isSelectedVariant(item) && styles.priceTextSelected]}>
                        {item.price}
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
        <Divider style={styles.divider} />
      </ScrollView>
      {/* Implement your footer cart component here */}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  container: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.BLACK,
    lineHeight: 24,
    width: SCREEN_WIDTH * 0.65,
  },
  rupeeText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.BLACK,
    lineHeight: 21,
    textAlign: 'right',
  },
  brandText: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.PRIMARY,
    lineHeight: 19,
  },
  descHeadingText: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.BLACK,
    lineHeight: 22,
  },
  descText: {
    fontSize: 13,
    fontWeight: '500',
    color: 'rgba(17, 17, 17, 0.75)',
    lineHeight: 19,
  },
  readText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.BLACK,
    lineHeight: 19,
  },
  card: {
    width: SCREEN_WIDTH * 0.25,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 20,
    marginRight: 20,
    justifyContent: 'space-between',
    height: 90,
  },
  cardSelected: {
    backgroundColor: Colors.SECONDARY,
    borderColor: Colors.PRIMARY,
  },
  sizeCard: {
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    borderRadius: 10,
    paddingVertical: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 90,
    width: SCREEN_WIDTH * 0.25,
  },
  sizeText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.SEMI_TRANSPARENT_BLACK,
    lineHeight: 16,
    textAlign: 'center',
  },
  sizeTextSelected: {
    color: Colors.BLACK,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  priceText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.SEMI_TRANSPARENT_BLACK,
    lineHeight: 16,
    textAlign: 'center',
  },
  priceTextSelected: {
    color: Colors.BLACK,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.BORDER,
    marginHorizontal: 15,
  },
});

export default ProductDetails;
