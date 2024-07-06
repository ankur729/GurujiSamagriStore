import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RupeeSymbol = ({color, size}: any) => {
  return (
    <View>
      <Text style={{color: color, fontSize: size}}>{'\u20B9'}</Text>
    </View>
  );
};

export default RupeeSymbol;

const styles = StyleSheet.create({});
