import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, inputAccessoryViewID } from 'react-native';
import { color } from 'react-native-reanimated';
import { styles } from "./styles";

export default function Content() {
    const [calcular, setCalcular] = useState({
        A: 0,
        B: 0
    });

    const [resul, setResul] = useState(0);

    // const soma =() => {
    //     setResul(calcular.A + calcular.B)
    // }

    const calculos = (op) => {
        switch (op) {
            case 'soma':
                setResul(calcular.A + calcular.B);
                break;
            case 'diminuir':
                setResul(calcular.A - calcular.B);
                break;
            case 'multiplicar':
                setResul(calcular.A * calcular.B);
                break;
            case 'dividir':
                setResul(calcular.A / calcular.B);
                break;
            case 'mod':
                setResul(calcular.A % calcular.B);
                break;
            case 'elevado':
                setResul(Math.pow(calcular.A, calcular.B));
                break;
        }
    }

    return (
        <View style={styles.viewContent}>
            <View style={styles.viewContent2}>
                <Text style={styles.caixa}>
                    {resul}
                </Text>

                <View style={styles.viewContext}>
                    <View>
                        {/* <Text style={styles.textoInput}>
                            {`Digite o valor de A`}
                            ${calcular.A}
                        </Text> */}
                        <TextInput style={styles.input}
                            placeholder="Digite o valor de A"
                            keyboardType='numbers-and-punctuation'
                            onChangeText={
                                (A) => {
                                    setCalcular({ ...calcular, A: Number(A) })
                                }
                            }
                        />
                    </View>

                    <View>
                        {/* <Text style={styles.textoInput}>
                            {`Digite o valor de B `} 
                            ${calcular.B}
                        </Text> */}
                        <TextInput style={styles.input}
                            placeholder="Digite o valor de B"
                            keyboardType='numbers-and-punctuation'
                            onChangeText={
                                (B) => {
                                    setCalcular({ ...calcular, B: Number(B) })
                                }
                            }
                        />
                    </View>
                </View>

                <View style={styles.viewBotoes}>
                    <TouchableOpacity style={styles.botao}
                        onPress={() => calculos('soma')}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}
                        onPress={() => calculos('diminuir')}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao}
                        onPress={() => calculos('multiplicar')}
                    >
                        <Text>*</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.viewBotoes2}>
                    <TouchableOpacity style={styles.botao}
                        onPress={() => calculos('dividir')}
                    >
                        <Text>/</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao}
                        onPress={() => calculos('mod')}
                    >
                        <Text>MOD</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao}
                        onPress={() => calculos('elevado')}
                    >
                        <Text>A^B</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}



// operações: soma, subtração, multiplicação, divisão, resto da divisão, exponencial de dois valores lidos nos campos ( a e b )