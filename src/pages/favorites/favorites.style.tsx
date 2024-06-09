import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#f8f9fa",
        padding: 15,
        margin: 10,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 1,
        borderColor: "#ddd",
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    text: {
        fontSize: 18,
        color: "#555",
        marginBottom: 5,
    },
    locationContainer: {
        alignSelf: 'flex-start',
        backgroundColor: "red",
        borderRadius: 50,
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    location: {
        color: "#fff",
        fontSize: 16,
    },
    levels: {
        color: "red",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "right",
        marginTop: 10,
    },
    emptyContainer: {
        padding: 20,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 18,
        color: '#999',
    },
});