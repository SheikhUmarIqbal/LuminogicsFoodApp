//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// create a component
const Skeleton = () => {
  const totalTimes = [1, 2, 3, 4, 5];

  return (
    <ScrollView>
      {totalTimes.map((e, i) => (
        <View
          key={i}
          style={{
            margin: 10,
            padding: 15,
            backgroundColor: 'rgba(0,0,0,0.1)',
            marginLeft: 16,
            marginRight: 16,
            borderRadius: 12,
          }}>
          <SkeletonPlaceholder speed={1000}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{width: 60, height: 60, borderRadius: 20}} />
              <View style={{marginLeft: 20}}>
                <View style={{width: 250, height: 20, borderRadius: 4}} />
                <View
                  style={{
                    marginTop: 6,
                    width: 140,
                    height: 20,
                    borderRadius: 4,
                  }}
                />
                <View
                  style={{
                    marginTop: 6,
                    width: 110,
                    height: 20,
                    borderRadius: 4,
                  }}
                />
              </View>
            </View>
          </SkeletonPlaceholder>
        </View>
      ))}
    </ScrollView>
  );
};

// define your styles

//make this component available to the app
export default Skeleton;
