import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps as RNButtonProps,
  TextStyle,
} from 'react-native';

interface ButtonProps extends RNButtonProps {
  onPress: () => void;
  buttonText: string;
  type?: 'outlined' | 'filled';
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  type = 'outlined',
  buttonText = 'Button',
  textStyle,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles[type]} {...props}>
    <Text style={[styles.btntext, textStyle]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filled: {
    backgroundColor: '#8501EA',
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  outlined: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  btntext: {
    paddingVertical: 15,
    fontSize: 15,
    fontWeight: '600',
    color:'black'
  },
});
