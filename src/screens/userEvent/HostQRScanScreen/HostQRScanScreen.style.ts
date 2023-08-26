import { StyleSheet, TextStyle } from 'react-native';
import { colors, fonts, layouts } from 'styles/theme';

const hostQRScanScreenStyles = StyleSheet.create({
  barcodeTextURL: {
    fontFamily: fonts.bold,
    fontSize: 20,
    lineHeight: 20 * 1.4,
    color: colors.white,
    backgroundColor: 'red',
  },
  container: {
    backgroundColor: '#19191910',
    tintColor: '#000000',
    marginTop: '-10%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 42,
  },
  cameraWrapper: {
    width: 300,
    height: 300,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.main,
    justifyContent: 'center',
  },
  successCameraWrapper: {
    borderWidth: 5,
    borderColor: colors.lightGreen,
  },
  errorCameraWrapper: {
    borderWidth: 5,
    borderColor: colors.error,
  },
  mainText: {
    fontFamily: fonts.semibold,
    fontSize: 18,
    lineHeight: 18 * 1.4,
  } as TextStyle,
  subText: {
    fontFamily: fonts.regular,
    fontSize: 15,
    lineHeight: 15 * 1.4,
    textAlign: 'center',
  } as TextStyle,
  resultWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.main,
    position: 'absolute',
    bottom: 70,
    marginHorizontal: layouts.PADDING,
  },
  resultText: {
    fontFamily: fonts.semibold,
    fontSize: 15,
    lineHeight: 15 * 1.4,
    textAlign: 'center',
  } as TextStyle,
  requestCameraPermission: {
    textAlign: 'center',
  } as TextStyle,
  absoluteContainer: {
    zIndex: 9999,
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
    marginTop: -63.5,
  },
});

export default hostQRScanScreenStyles;