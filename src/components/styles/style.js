
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  body: {
    backgroundColor: '#5EC8B5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    width: '100%',
  },
  headerTitle: {
    position: "absolute",
    top: '14%',
    fontSize: 50,
    color: '#fff',
  },
});

export const cards = StyleSheet.create({
  cardsBox: {
    backgroundColor: '#fff',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: '65%',
  },
  cardTextTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20
  },
  result: {
    margin: 10,
  },
  cardInput: {
    backgroundColor: '#F3F3F3',
    position: 'relative',
    top: '5%',
    margin: 20,
    padding: 10,
    width: '60%',
    borderRadius: 10,
  },
});

export const button = StyleSheet.create({
  buttonContainer: {
    position: 'relative',
    top: 250,
  },
});