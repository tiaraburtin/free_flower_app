import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#F5EFE6' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#4A235A', marginBottom: 20 }}>
        Welcome To: ReMatriated Realms
      </Text>
      <Button
        title="Register / RSVP"
        onPress={() => Linking.openURL('https://freeflowerlove.org')}
      />
    </View>
  );
}
