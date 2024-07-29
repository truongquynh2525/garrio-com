import React from 'react';
import {ActivityIndicator} from 'react-native';
import {spinnerColor, spinnerSize} from '../constants/Spinner';
import {pageStyles} from '../styles/PageStyle';

const Spinner = () => {
  return (
    <ActivityIndicator
      size={spinnerSize}
      color={spinnerColor}
      style={pageStyles.spinner}
    />
  );
};

export default Spinner;
