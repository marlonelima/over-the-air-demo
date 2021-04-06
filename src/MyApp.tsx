import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
// @ts-ignore
import * as Updates from "expo-updates";
import { styles } from "./styles";

export const MyApp = () => {
  const checkForUpdate = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable)
        Alert.alert(
          `New version`,
          `A new version is available. Do you want to update now?`,
          [
            {
              text: `Cancel`,
              onPress: () => {
                return;
              },
              style: `cancel`,
            },
            { text: `OK`, onPress: () => updateApplication() },
          ]
        );
      else Alert.alert(`No updates`, `The app is up-to-date!`);
    } catch (e) {
      Alert.alert(
        `Error`,
        `An error occurred during trying to find a new version!`
      );
    }
  };

  const updateApplication = async () => {
    try {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    } catch (e) {
      Alert.alert(`Error`, `An error occurred! Cannot update.`);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => checkForUpdate()}
        style={styles.checkVersionButton}
      >
        <Text style={styles.checkVersionText}>
          Check for new version available
        </Text>
      </TouchableOpacity>
      <Text style={styles.actualVersionText}>Actual version: 2.0</Text>
    </View>
  );
};
