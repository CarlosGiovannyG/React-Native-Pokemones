import React, {useContext} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageErrorEventData,
  NativeSyntheticEvent,
  View,
} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {useAnimation} from '../hooks/useAnimation';
import {PropsFadeImage} from '../interfaces/interfacesProps';
import {fadeTheme} from '../styles/fadeTheme';

export const FadeInImage = ({
  uri,
  style = {},
  finishLoading,
  isLoading,
}: PropsFadeImage) => {
  const {
    theme: {
      ownColors: {colorIndicator},
    },
  } = useContext(ThemeContext);
  const {opacity, fadeIn} = useAnimation();

  const fullLoad = () => {
    finishLoading();
    fadeIn();
  };

  const onError = (err: NativeSyntheticEvent<ImageErrorEventData>) => {
    console.log('===> INFORMATION LOG', err);
    finishLoading();
  };

  return (
    <View style={[fadeTheme.stContainer, {...(style as any)}]}>
      {isLoading && (
        <ActivityIndicator
          style={fadeTheme.stActivite}
          color={colorIndicator}
          size={30}
        />
      )}

      <Animated.Image
        source={{uri}}
        onError={onError}
        onLoad={fullLoad}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};
