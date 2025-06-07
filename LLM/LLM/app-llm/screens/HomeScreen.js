import React from 'react';
import { View, Text } from 'react-native';
import UrlInput from '../components/UrlInput';
import { fetchContextualInfo } from '../api/wikiApi';
import styles from '../styles/HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
  const handleUrlSubmit = async (url) => {
    try {
      const contextualInfo = await fetchContextualInfo(url);
      navigation.navigate('Result', { contextualInfo });
    } catch (error) {
      alert('Erro ao buscar contexto');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo WiKi</Text>
      <UrlInput onSubmit={handleUrlSubmit} />
    </View>
  );
};

export default HomeScreen;
