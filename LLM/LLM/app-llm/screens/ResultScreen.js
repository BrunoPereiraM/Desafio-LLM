import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/ResultScreenStyles';

const ResultScreen = ({ route }) => {
  const { contextualInfo } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Aqui está o seu resumo:</Text>
      <Text style={styles.content}>{contextualInfo}</Text>
    </ScrollView>
  );
};

export default ResultScreen;
