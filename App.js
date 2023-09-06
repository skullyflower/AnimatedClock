import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, useTheme } from 'react-native-paper';
import ClockWorks from './ClockWorks';

export default function App() {
  const theme = useTheme();
  return (
    <PaperProvider>
      <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
        <ClockWorks character={'cat'} />
        <StatusBar style='auto' />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
