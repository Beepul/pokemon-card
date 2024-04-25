import { Image, Platform, StyleSheet, Text, View } from "react-native";

const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿" };
      default:
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }
  };

const Card = ({name, image, type, hp, moves, weaknesses}) => {

    const {borderColor, emoji} = getTypeDetails(type)

    return(
        <View style={style.card}>
            <View style={style.cardTop}>
                <Text style={style.name}>{name}</Text>
                <Text style={style.hp}>❤️HP: {hp}</Text>
            </View>
            <Image source={image} style={style.image} accessibilityLabel={`${name} pokemon`} resizeMode="contain" />
            <View style={style.typeWrapper}>
                <Text style={[style.type, {borderColor}]}>{emoji} {type}</Text>
            </View>
            <Text style={style.moves}>Moves: {moves.join(", ")}</Text>
            <Text style={style.weaknesses}>Weaknesses: {weaknesses.join(", ")}</Text>
        </View>
    )
}

export default Card;

const style = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowColor: "#333",
                shadowOffset: {
                    width: 2,
                    height: 2
                },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5
            }
        })
    },
    cardTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24
    },
    name: {
        fontSize: 24,
        fontWeight: "bold"
    },
    hp: {
        fontSize: 18,
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 24,
    },
    typeWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 16,
    },
    type: {
        padding: 8,
        borderRadius: 16,
        borderWidth: 2,
    },
    moves: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16
    },
    weaknesses: {
        fontSize: 20,
        fontWeight: "bold"
    }
})