import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const constituencyData = {
  name: 'Your Constituency',
  numberOfVoters: 10000, // Replace with actual number
};

const candidatesData = Array.from({length: 6}, (_, index) => ({
  id: index.toString(),
  name: `Candidate ${index + 1}`,
  votes: Math.floor(Math.random() * 1000),
  image: 'https://via.placeholder.com/150', // Replace with actual image URL
}));

const ElectionCardView = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearchIconPress = () => {
    setSearchExpanded(!searchExpanded);
    setSearchText(''); // Clear search text when expanding/collapsing
  };

  const handleContainerPress = () => {
    setSearchExpanded(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleContainerPress}>
      <View style={styles.container}>
        {/* Top Section */}
        <View style={styles.topSection}>
          {/* Left Section */}
          <View style={styles.constituencyInfo}>
            <Text style={styles.constituencyName}>{constituencyData.name}</Text>
            <Text
              style={
                styles.numberOfVoters
              }>{`(${constituencyData.numberOfVoters} voters)`}</Text>
          </View>

          {/* Right Section */}
          <View style={styles.searchAndProfile}>
            {!searchExpanded ? (
              <TouchableOpacity onPress={handleSearchIconPress}>
                <Text>&#128269;</Text>
              </TouchableOpacity>
            ) : (
              <TextInput
                style={styles.searchBoxExpanded}
                placeholder="Search Candidate"
                value={searchText}
                onChangeText={text => setSearchText(text)}
              />
            )}
            <Image
              source={{uri: 'https://via.placeholder.com/40'}}
              style={styles.profileImage}
            />
          </View>
        </View>

        {/* Card Section */}
        <View style={styles.cardContainer}>
          {candidatesData
            .filter(candidate =>
              candidate.name.toLowerCase().includes(searchText.toLowerCase()),
            )
            .map(candidate => (
              <View key={candidate.id} style={styles.card}>
                <Image
                  source={{uri: candidate.image}}
                  style={styles.cardImage}
                />
                <View style={styles.cardBottom}>
                  <Text style={styles.cardName}>{candidate.name}</Text>
                  <Text
                    style={
                      styles.cardVotes
                    }>{`Votes: ${candidate.votes}`}</Text>
                </View>
              </View>
            ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  constituencyInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  constituencyName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  numberOfVoters: {
    fontSize: 14,
  },
  searchAndProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '20px',
    gap: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchBoxExpanded: {
    flex: 1,
    height: 32,
    borderWidth: 1,
    borderRadius: 4,
    maxWidth: 100,
    borderColor: 'gray',
    marginRight: 10,
    paddingLeft: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%', // Adjust the width as needed based on your design
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardBottom: {
    padding: 5,
  },
  cardName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardVotes: {
    fontSize: 12,
  },
});

export default ElectionCardView;
