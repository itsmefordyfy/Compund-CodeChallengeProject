import React from 'react';
import {View, StyleSheet, Dimensions, useWindowDimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {LineChartData} from 'react-native-chart-kit/dist/line-chart/LineChart';
import {ScrollView} from 'react-native-gesture-handler';

export const lineChartData: LineChartData = {
  labels: [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
  ],
  datasets: [
    {
      data: [
        1000, 3450, 6022.5, 8723.63, 11559.81, 14537.8, 17664.69, 20947.92,
        24395.32, 28015.08,31815.84,35806.63,39996.96,44396.81,49016.65,53867.48,58960.85,64308.9,69924.34,75820.56,82011.59,88512.17,95337.78,102504.66,110029.9,117931.39
      ],
      color: () => 'black',
    },
  ],
};

export const ProjectionScreen: React.FC = () => {
  const {width} = useWindowDimensions();
  return (
    <View >
      <ScrollView
        horizontal
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}>
        <LineChart
          data={lineChartData}
          yAxisLabel=""
          yAxisSuffix=""
          width={width * 1.5} 
          height={Dimensions.get('window').height / 2}
          yLabelsOffset={6}
          chartConfig={{
            backgroundGradientFrom: '#8501EA',
            backgroundGradientFromOpacity: 0.5,
            backgroundGradientTo: 'lightgreen',
            backgroundGradientToOpacity: 1,
            color: () => 'white',
            barPercentage: 0.6,
            propsForDots: {
              r: '5',
              strokeWidth: '3',
              stroke: 'black',
            },
          }}
          style={{borderColor: 'black', borderWidth: 1, marginTop: 20}}
          withInnerLines={false}
          withShadow={false}
          getDotColor={() => 'red'}
          bezier
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20, paddingRight: '10%'
  },
});
