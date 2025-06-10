import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';

// Mapa de imagens locais
const imageMap = {
  lasanha: require('../assets/imagens/lasanha.jpg'),
  salada: require('../assets/imagens/salada.jpg'),
  frango: require('../assets/imagens/frango.jpg'),
  macarrao: require('../assets/imagens/macarrao.jpg'),
  mousse: require('../assets/imagens/mousse.jpg'),
};

export default function RecipeCard({
  title,
  description,
  image,
  onPress,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={imageMap[image] || require('../assets/placeholder.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
      <Button
        title={isFavorite ? '★ Favorito' : '☆ Favoritar'}
        onPress={onToggleFavorite}
        color={isFavorite ? 'orange' : 'gray'}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 6,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
