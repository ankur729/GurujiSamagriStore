import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomIcon, {IconSetKey} from '../helpers/CustomIcon';
import {SafeAreaView} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, FONTFAMILY} from '../theme/theme';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftWrapper}>
        <View style={styles.locationWrapper}>
          <CustomIcon
            type={IconSetKey.FontAwesome5}
            name="map-marker-alt"
            size={responsiveWidth(6)}
          />
          <View style={styles.location}>
            <Text style={styles.locationTitle}>Deliver To</Text>
            <View style={styles.locationName}>
              <Text style={styles.locationTxt}>
                55 Patpargangj, Delhi India
              </Text>
              <CustomIcon
                type={IconSetKey.MaterialIcons}
                name="arrow-drop-down"
                size={responsiveWidth(6)}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rightWrapper}>
        <CustomIcon
          type={IconSetKey.FontAwesome}
          name="user-circle"
          color={COLORS.primaryGreenHex}
          size={responsiveWidth(7)}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
    paddingTop: responsiveWidth(3),
    alignItems: 'center',
    elevation: 2,
    backgroundColor: COLORS.primaryWhiteHex,
  },
  leftWrapper: {
    // backgroundColor: 'pink',
    flexDirection: 'row',
    flexGrow: 1,
  },

  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveFontSize(2),
    //  backgroundColor: 'red',
    paddingHorizontal: responsiveFontSize(1.5),
  },
  locationTitle: {
    color: COLORS.textHex,
    fontFamily: FONTFAMILY.font_bold,
  },
  location: {
    //  backgroundColor: 'green',
    paddingVertical: responsiveHeight(0.5),
  },
  locationName: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveHeight(1),
  },
  locationTxt: {
    fontFamily: FONTFAMILY.font_medium,
  },
  rightWrapper: {
    paddingHorizontal: responsiveWidth(5),
  },
});
