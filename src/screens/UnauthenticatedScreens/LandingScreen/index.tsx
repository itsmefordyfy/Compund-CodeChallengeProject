import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {UnauthenticatedStackParamsList} from '../../../types';
import {Button} from '../../../components/Button';

export const LandingScreen: React.FC = () => {
  const {navigate} =
    useNavigation<StackNavigationProp<UnauthenticatedStackParamsList>>();

  const handleOnPress = () => navigate('Projection');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.information1}>
          <Text style={styles.totalPot}>Total pot</Text>
          <Text style={styles.currency}>£656.25</Text>
        </View>
        <Button
          buttonText="Your Fund"
          type="filled"
          onPress={() => console.log('Your Fund')}
          textStyle={{color: 'white'}}
        />
        <Button
          type="filled"
          buttonText="Find & Transfer Old Pensions"
          onPress={() => console.log('Find & Transfer Old Pensions')}
          textStyle={{color: 'white'}}
        />
        <Button
          buttonText="Go to Projection Screen"
          type="filled"
          onPress={handleOnPress}
          textStyle={{color: 'white'}}
        />
        <View style={styles.information2}>
          <Text style={styles.activity}>Activity</Text>
          <View style={styles.information2content}>
            <View>
              <Text style={styles.information2text}>+ £525.00</Text>
              <Text style={styles.information2text}>+ £131.25</Text>
            </View>
            <View>
              <Text style={styles.information2text}>Personal Contribution</Text>
              <Text style={styles.information2text}>Top Up</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 20,
  },
  information1: {
    borderWidth: 1,
    paddingVertical: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  totalPot: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000000',
  },
  currency: {
    fontWeight: '600',
    fontSize: 25,
    marginTop: 10,
    color: '#000000',
  },
  information2: {
    borderWidth: 1,
    paddingVertical: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  activity: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000000',
  },
  information2text: {
    fontWeight: '400',
    fontSize: 18,
    marginTop: 10,
    color: '#000000',
  },
  information2content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
