import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';

export const IconSetKey: {
  FontAwesome: any;
  Feather: any;
  FontAwesome5: any;
  MaterialIcons: any;
  Octicons: any;
  AntDesign: any;
  Entypo: any;
} = {
  FontAwesome: 'FontAwesome',
  FontAwesome5: 'FontAwesome5',
  Feather: 'Feather',
  MaterialIcons: 'MaterialIcons',
  Octicons: 'Octicons',
  AntDesign: 'AntDesign',
  Entypo: 'Entypo',
};

// Add all the icon sets you are using
export const IconSets: any = {
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
  Feather,
  Octicons,
  AntDesign,
  Entypo,
  // Add other icon sets here
};
interface propTypes {
  type: any;
  name: string;
  size?: number;
  color?: string;
  style?: any;
}

const defaultProps = {
  size: 24,
  color: '#000',
};

const CustomIcon: React.FC<propTypes> = ({
  type,
  name,
  size,
  color,
  style,
  ...props
}) => {
  const IconComponent = IconSets[type];

  if (!IconComponent) {
    console.warn(`Icon type "${type}" is not supported.`);
    return null;
  }
  if (!size) {
    size = defaultProps.size;
  }
  if (!color) {
    color = defaultProps.color;
  }

  return (
    <IconComponent
      name={name}
      size={size}
      color={color}
      style={style}
      {...props}
    />
  );
};

export default CustomIcon;
