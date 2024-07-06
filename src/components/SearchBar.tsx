import {StyleSheet, Text, View, Animated, Button, Alert} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import CustomIcon, {IconSetKey} from '../helpers/CustomIcon';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, FONTFAMILY} from '../theme/theme';

const SearchBar = () => {
  const placeholderData = [
    '"guruji brancelet1"',
    '"jap mala"',
    '"photo frame"',
    '"guruji swaroop"',
  ];
  let translateY = useRef(new Animated.Value(0)).current;
  const [placeholder, setPlaceholder] = useState(placeholderData);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [timeOutDuration, setTimeOutDuration] = useState(1500);
  // Step 2: Create a function to start the animation
  const moveTextUp = (value: number) => {
    console.log(Date.now());
    return;
    Animated.timing(translateY, {
      toValue: value, // Move 50 units upwards
      duration: 500, // Duration of the animation
      useNativeDriver: true, // Use native driver for better performance
    }).start();
    setTimeout(() => {
      if (value === -50) {
        setPlaceholderIdx(prev =>
          prev === placeholder.length - 1 ? 0 : prev + 1,
        );
      }
    }, 500);

    const timeoutId = setTimeout(() => {
      console.log(translateY);
      //  debugger;
      if (value === -50) {
        translateY.setValue(50);
        console.log('Ok');
        setTimeOutDuration(0);
        moveTextUp(0);
      } else if (value === 0) {
        // translateY.setValue(-50);

        // setTimeOutDuration(0);
        moveTextUp(-50);
      }
      clearTimeout(timeoutId);
    }, timeOutDuration);
  };

  useEffect(() => {
    setTimeout(() => {
      console.log('I AM CALLING');
      moveTextUp(-50);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchIconWrapper}>
        <CustomIcon
          type={IconSetKey.Octicons}
          name="search"
          size={responsiveWidth(6)}
          style={styles.searchIcon}
        />
      </View>
      <Animated.View style={styles.inputContainer}>
        <Text>Search for {timeOutDuration}</Text>
        <Animated.Text
          style={[styles.txtInput, {transform: [{translateY: translateY}]}]}>
          {placeholder[placeholderIdx]}
        </Animated.Text>
      </Animated.View>
      {/* <Button title="Move Text Up" onPress={moveTextUp} /> */}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveWidth(2),
    borderRadius: responsiveWidth(3),
    backgroundColor: COLORS.secondaryLightGreyHex,
    marginHorizontal: 10,
  },
  searchIconWrapper: {
    width: responsiveWidth(15),
    //    height: '100%',
  },
  inputContainer: {
    flexGrow: 1,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
    //overflow: 'hidden',
  },
  searchIcon: {
    alignSelf: 'center',
    color: COLORS.textHex,
    fontSize: responsiveWidth(6.2),
  },
  txtInput: {
    backgroundColor: 'pink',
    fontFamily: FONTFAMILY.font_medium,
    fontSize: responsiveFontSize(1.8),
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveWidth(3),
  },
  text: {
    fontSize: 24,
  },
});
