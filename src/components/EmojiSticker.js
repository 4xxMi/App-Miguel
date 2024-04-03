import { View, Image } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native' 
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const scaleImage = useSharedValue(imageSize);

const doubleTap = Gesture.Tap()
.numberOfTaps(2)
.onStart(() => {
    if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
    }
});

export default function EmojiSticker({ imageSize, stickerSoure }) {
    return (
        <View style={{ top: -350 }}>
            <Animated.Image
            source={stickerSoure}
            resizeMode="contain"
            style={{ width: imageSize, height: imageSize }} />
            </View>
    );
}