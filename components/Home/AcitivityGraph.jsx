import { ContributionGraph } from "react-native-chart-kit";
import { View, Text } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import styles from "../../assets/styles";

const ActivityGraph = () => {
  const commitsData = [
    { date: "2024-05-02", count: 1 },
    { date: "2024-05-03", count: 1 },
    { date: "2024-05-04", count: 1 },
    { date: "2024-05-05", count: 1 },
    { date: "2024-05-06", count: 1 },
    { date: "2024-05-30", count: 1 },
    { date: "2024-05-31", count: 1 },
    { date: "2024-05-01", count: 1 },
    { date: "2024-05-02", count: 1 },
    { date: "2024-05-05", count: 1 },
    { date: "2024-05-30", count: 1 },
  ];

  return (
    <View style={[styles.loadingContainer, styles.graphBG]}>
      <View>
        <Text style={styles.activityGraphHeaderText}>Heat Map</Text>
      </View>
      <ContributionGraph
        values={commitsData}
        endDate={new Date()}
        numDays={90}
        width={responsiveWidth(100)}
        height={responsiveHeight(30)}
        gutterSize={2}
        chartConfig={{
          backgroundGradientFrom: "#FFFFFF",
          backgroundGradientFromOpacity: 1,
          backgroundGradientTo: "#FFFFFF",
          backgroundGradientToOpacity: 1,
          color: (opacity) => `rgba(0, 0, 0, ${opacity})`,
          propsForLabels: {
            fill: "#000000",
            fontWeight: "bold",
          },
        }}
      />
    </View>
  );
};

export default ActivityGraph;
