import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomModal from './CustomModal';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {DEVICE_HEIGHT} from '../helpers/Dimensions';
import {COLORS} from '../theme/theme';

const CustomBottomSheet = ({children}: any) => {
  const [isModalVisible, setModalVisible] = useState(true);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <CustomModal isVisible={isModalVisible} onClose={toggleModal}>
        <View style={styles.modalContent}>{children}</View>
      </CustomModal>
    </View>
  );
};

export default CustomBottomSheet;

const styles = StyleSheet.create({
  container: {},
  modalContent: {
    padding: responsiveFontSize(0.5),
  },
});
