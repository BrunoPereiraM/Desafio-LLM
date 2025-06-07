import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from '../styles/UrlInputStyles';

const UrlInput = ({ onSubmit }) => {
  const [url, setUrl] = useState('');

  const handlePress = () => {
    if (url) {
      onSubmit(url);
      setUrl('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite a URL da Wikipédia"
        value={url}
        onChangeText={setUrl}
      />
      <Button title="Buscar" onPress={handlePress} />
    </View>
  );
};

export default UrlInput;
