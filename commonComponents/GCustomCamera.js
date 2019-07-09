//React Native Library for capturing images from iOS and Android devices
import { Platform, NativeModules } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
const { CustomCamera } = NativeModules
/* **************************\
  Function: openCamera.
  Explanation:
  This method will be used to open the camera based on the platform
  The capture callback will return the URL of the image
\************************** */

export function openCamera(callBack) {
  if (Platform.OS === 'ios') {
    CustomCamera.openCamera((successResponse) => {
      if (successResponse && successResponse.url) {
        callBack(url)
      }
    })
  } else {
    ImagePicker.openCamera({
      cropping: true,
      freeStyleCropEnabled: true,
      writeTempFile: true
    }).then(images => {
      callBack(images.path)
    });
  }
}

export default openCamera;
