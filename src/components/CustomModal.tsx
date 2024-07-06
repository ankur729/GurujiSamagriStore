import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../helpers/Dimensions';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {COLORS, FONTFAMILY} from '../theme/theme';

const CustomModal = ({isVisible, onClose, children}: any) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      backdropOpacity={0.8}
      style={styles.modal}>
      <View style={styles.closeButtonContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>{children}</View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    maxHeight: DEVICE_HEIGHT * 0.9,
    // backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.secondaryLightGreyHex,
  },
  closeButtonContainer: {
    width: DEVICE_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
    marginVertical: responsiveHeight(1.5),
  },
  closeButton: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(5),

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  closeButtonText: {
    fontFamily: FONTFAMILY.font_black,
    fontSize: responsiveFontSize(2),
    color: COLORS.primaryWhiteHex,
  },
});
