import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface HeaderBackButtonProps {
  onPress?: () => void;
}

export const HeaderBackButton: React.FC<HeaderBackButtonProps> = ({
  onPress,
}) => {
  const {goBack} = useNavigation()
  return (
    <TouchableOpacity onPress={onPress || goBack}>
      <Icon name="arrowleft" color={'white'}size={23} style={{marginLeft:10}}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    marginLeft: 0,
  },
  checkboxText: {
    marginLeft: 8,

  },
});

