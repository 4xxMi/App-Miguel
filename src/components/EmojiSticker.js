import { View } from "react-native";


export default function EmojiSticker({ imageSize, stickerSoure }) {
    return (
        <View style={{ top: -350 }}>
            <Image
            source={stickerSoure}
            resizeMode="contain"
            style={{ width: imageSize, height: imageSize }} />
            </View>
    );
}