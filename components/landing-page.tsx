import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const LandingPage = () => {
  return (
    <View style={styles.container}>
      {/* Part 1: Top Heading */}
      <View style={styles.topPart}>
        <Text style={styles.heading}>OneVote</Text>
        <Text style={styles.subheading}>Be a delegate, show your strength</Text>
      </View>

      {/* Part 2: Image */}
      <View style={styles.imagePart}>
        <Image
          source={require('../assets/background.png')} // Replace with the actual path to your image
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Part 3: Login Button */}
      <View style={styles.buttonPart}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topPart: {
    paddingTop: 50,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  imagePart: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: undefined, // This allows the image height to be determined based on the aspect ratio
  },
  buttonPart: {
    paddingBottom: 50,
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LandingPage;
