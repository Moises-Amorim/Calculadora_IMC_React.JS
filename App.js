import React, {useState} from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('0.00');
  const [resultadoTexto, setResultadoTexto] = useState('');

  const height = parseFloat(altura) / 100;

  const calcular = function() {
    const resultadoAtualizado = ((Number(peso) / (Number(height) * (Number(height)))));
    setResultado((resultadoAtualizado).toFixed(2));

    if (resultadoAtualizado < 18.55) {
      return setResultadoTexto('Abaixo do peso')
    }

    if (resultadoAtualizado > 18.55 && resultadoAtualizado <= 24.99) {
      return setResultadoTexto('Peso Normal')
    }

    if (resultadoAtualizado > 24.99 && resultadoAtualizado <= 29.99) {
      return setResultadoTexto('Sobrepeso')
    }

    if (resultadoAtualizado > 30.00 && resultadoAtualizado <= 34.99) {
      return setResultadoTexto('Obesidade grau I')
    }

    if (resultadoAtualizado > 35.00 && resultadoAtualizado <= 39.99) {
      return setResultadoTexto('Obesidade grau II')
    }

    if (resultadoAtualizado >= 40.00) {
      return setResultadoTexto('Obesidade grau III ou mórbida')
    }
  }

  const limparTela = function() {
    setAltura('');
    setPeso('');
    setResultado('0.00');
    setResultadoTexto('')
  }


  return (
    <View style={styles.container}>
      <View style={styles.calculadora}>
        <Text style={styles.titulo}>
          Calculadora de IMC
        </Text>
        <TextInput
          style={styles.entrada}
          placeholder= 'Altura'
          value={altura}
          maxLength={3}
          keyboardType= 'number-pad'
          placeholderTextColor= '#fff'
          onChangeText = {(altura) => {setAltura(altura)}}
        />

        <TextInput
        style={styles.entrada}
        placeholder= 'Peso'
        value={peso}
        maxLength={6}
        keyboardType= 'number-pad'
        placeholderTextColor= '#fff'
        onChangeText = {(peso) => {setPeso(peso)}}
        />
        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botao} onPress={calcular}>
            <Text style={styles.textoBotao}>Calcular</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={limparTela}>
            <Text style={styles.textoBotao}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.resultado}>IMC = {resultado}</Text>
          <Text style={styles.resultado}>{resultadoTexto}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D1E18',
    alignItens: 'center',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  }, entrada: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#6B8F71',
    borderRadius: 5,
    marginBottom: 20,
    padding: 5,
  }, calculadora: {
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
  }, titulo: {
    color: '#fff',
    fontSize: 35,
    alignSelf: 'center',
    marginBottom: 40,
  }, botoes: {
    flexDirection: 'row',
    height: '20%',
    justifyContent: 'space-between',
    marginBottom: 20,
  }, botao : {
    borderRadius: 10,
    backgroundColor: '#6B8F71',
    width: '40%',
    height: '60%',
    margin: 20,
    justifyContent: 'space-around'
  }, textoBotao: {
    fontSize: 28,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  }, resultado: {
    textAlign: 'center',
    fontSize: 30,
    color: '#FFF',
  },
});
