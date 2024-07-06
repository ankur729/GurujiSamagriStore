import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RupeeSymbol from './RupeeSymbol';
import {COLORS, FONTFAMILY} from '../../theme/theme';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Price = ({discountedPrice, mrpPrice}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <RupeeSymbol
          color={COLORS.primaryBlack}
          size={responsiveFontSize(1.8)}
        />
        <Text style={styles.discountedPrice}>{discountedPrice}</Text>
      </View>
      <View style={styles.bottom}>
        <RupeeSymbol color={COLORS.darkGray} size={responsiveFontSize(1.4)} />
        <Text style={styles.mrpPrice}>{mrpPrice}</Text>
      </View>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'lightgray',
    // opacity: 0.5,
    justifyContent: 'center',
  },
  top: {
    flexDirection: 'row',
    gap: 2,
  },
  bottom: {
    gap: 2,
    flexDirection: 'row',
  },
  discountedPrice: {
    color: COLORS.primaryBlack,
    fontFamily: FONTFAMILY.font_black,
    textAlignVertical: 'center',
    fontSize: responsiveFontSize(1.8),
  },
  mrpPrice: {
    fontFamily: FONTFAMILY.font_regular,
    fontSize: responsiveFontSize(1.4),
    textDecorationLine: 'line-through',
    textAlignVertical: 'center',
    color: COLORS.darkGray,
  },
});
