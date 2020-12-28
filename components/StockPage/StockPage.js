import * as React from 'react';
import { Image, StyleSheet, Alert, Text, View, Button, ActivityIndicator} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const [isLoading, setLoading] = React.useState(false);
  const [data, setData] = React.useState('');
  const fetchData = () => {
    setLoading(true);
    fetch("https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=TSLA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "6344837b96msh4dd4d2909be9cbbp1320a9jsn673352df54c6",
		"x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
	}
})
      .then((response) => response.json())
      .then(data => {         
        console.log(data);
        console.log(Object.values(data)[0]);
        
        })
      .catch(() => Alert.alert('Something went wrong..', 'There was an error fetching coin flip.'))
      .finally(() => {
        setLoading(false)
        
      });
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.flipContainer}>

          <Text style={styles.flipTitle}>Flip On It!</Text>
          <Text style={styles.basicText}>An app to help you achieve even odds in the digital age!</Text>
          <View style={styles.buttonContainer}>
            <Button
                title="Flip Coin"
                onPress={() => fetchData()}
                color="#FFFFFF"
                accessibilityLabel="Fetch heads or tails"
            />
        </View>
        <View style={{ padding: 24 }}>
            {isLoading ? <ActivityIndicator /> :
                <Text style={styles.flipResultText}>{Object.values(data)[0]}</Text>
            }
        </View>

        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  coinImageContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 150,
    height: 124,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  flipContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  flipTitle: {
    fontSize: 25,
    color: '#000',
    marginVertical: 8,
    paddingTop: 10,
    paddingHorizontal: 10,
    lineHeight: 24,
    textAlign: 'center',
  },
  basicText: {
    fontSize: 15,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 18,
    textAlign: 'center',
  },
  flipResultText: {
    fontSize: 35,
    color: '#FF0000',
    textAlign: 'center',
    fontWeight: "700"
  },
  buttonContainer: {
    backgroundColor: "#1a1aff",
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 5,
  }
});