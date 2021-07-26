import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    viewHeader: {
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    
    textHeader: {
        color: "white",
        fontWeight: "bold",
        fontSize: 28,
        // fontFamily: 'Roboto-Regular'
    },

    viewContent: {
        flex: 8,
        height: 600,
        backgroundColor: "#F0ADDB",
        justifyContent: "center",
        alignItems: "center",
        padding: '0 30px',
    },
    textContent: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        // fontFamily: 'Roboto-Regular'
    },

    viewContent2: {
        borderWidth: 2,
        borderColor: "white",
        padding: 30, 
        borderRadius: 50,
        display: "flex", 
        justifyContent: 'center',
        width: 300,
    },

    caixa: {
        width: 200,
        padding: 20,
        textAlign: "center",
        borderRadius: 50,
        margin: '0 auto',
        alignSelf: "center",
        marginBottom: 30,
        borderWidth: 2,
        borderColor: "white",
    },

    // textoInput: {
    //     fontSize: 20,
    //     marginBottom: 10,
    // },

    input: {
        height: 50,
        fontSize: 18,
        alignItems: "center",
        textAlign: 'center',
        marginBottom: 30,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 50,
        // fontFamily: 'Roboto-Regular'
    },

    viewFooter:{
        height: 60,
        backgroundColor: "#B76E79",
        justifyContent: "center",
        alignItems: "center"
    },
    textFooter: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        // fontFamily: 'Roboto-Regular'
    },

    viewBotoes:{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent:'space-around',
        marginBottom: 30,
    },

    viewBotoes2:{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent:'space-around',
        marginBottom: 50,
    },

    botao:{
        width: 60,
        padding: 10,
        backgroundColor: '#97D9E1',
        alignItems: 'center',
        borderRadius: 50,
        // fontFamily: 'Roboto-Regular'
    },

})