/**
 * Created by ywu on 15/7/24.
 */

const React = require('react-native');
const appStyles = require('./styles');

const {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

import {
  MKIconToggle,
  MKSwitch,
  MKRadioButton,
  MKCheckbox,
  MKColor,
  getTheme,
  setTheme,
} from 'react-native-material-kit';
//
//// customize the material design theme
// setTheme({
//   primaryColor: MKColor.Purple,
//   primaryColorRGB: MKColor.RGBPurple,
//   accentColor: MKColor.Amber,
// });

//setTheme({radioStyle: {
//  fillColor: `rgba(${MKColor.RGBTeal},.8)`,
//  borderOnColor: `rgba(${MKColor.RGBTeal},.6)`,
//  borderOffColor: `rgba(${MKColor.RGBTeal},.3)`,
//  rippleColor: `rgba(${MKColor.RGBTeal},.15)`,
//}});
//
//setTheme({checkboxStyle: {
//  fillColor: MKColor.Teal,
//  borderOnColor: MKColor.Teal,
//  borderOffColor: MKColor.Teal,
//  rippleColor: `rgba(${MKColor.RGBTeal},.15)`,
//}});

const styles = Object.assign({}, appStyles, StyleSheet.create({
  toggleText: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#616161',
  },
  toggleOnText: {
    color: getTheme().primaryColor,
  },
  switch: {
    marginTop: 2,
    // marginBottom: 5,
  },
  appleSwitch: {
    marginTop: 7,
    marginBottom: 7,
  },
}));

const CheckedIconToggle = MKIconToggle.builder()
  .withChecked(true)
  .withOnCheckedChange(this._onChecked)
  .withOnPress(this._onToggleClicked)
  .build();

class Toggles extends Component {
  constructor() {
    super();
    this.radioGroup = new MKRadioButton.Group();
  }

  _onChecked(event) {
    console.log(`icon toggle is checked? ${event.checked}`);
  }

  _onToggleClicked() {
    console.log('you clicked a toggle');
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}
                  contentContainerStyle={styles.container}>
        <View style={styles.row}>
          <View style={styles.col}>
            <CheckedIconToggle>
              <Text state_checked={true}
                    style={[styles.toggleText, styles.toggleOnText]}>T</Text>
              <Text style={styles.toggleText}>T</Text>
            </CheckedIconToggle>
            <Text style={styles.legendLabel}>Icon on</Text>
          </View>
          <View style={styles.col}>
            <MKIconToggle>
              <Text state_checked={true}
                    style={[styles.toggleText, styles.toggleOnText]}>B</Text>
              <Text style={styles.toggleText}>B</Text>
            </MKIconToggle>
            <Text style={styles.legendLabel}>Icon off</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <MKSwitch checked={true}
                        style={styles.switch}
            />
            <Text style={styles.legendLabel}>Switch on</Text>
          </View>
          <View style={styles.col}>
            <MKSwitch style={styles.appleSwitch}
                        trackSize={30}
                        trackLength={52}
                        onColor="rgba(255,152,0,.3)"
                        thumbOnColor={MKColor.Orange}
                        rippleColor="rgba(255,152,0,.2)"
                        onPress={() => console.log('orange switch pressed')}
                        onCheckedChange={(e) => console.log('orange switch checked', e)}
              />
            <Text style={styles.legendLabel}>Switch off</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <MKRadioButton
              checked={true}
              group={this.radioGroup}
              />
            <Text style={styles.legendLabel}>First</Text>
          </View>
          <View style={styles.col}>
            <MKRadioButton group={this.radioGroup}/>
            <Text style={styles.legendLabel}>Second</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <MKCheckbox checked={true} />
            <Text style={styles.legendLabel}>Checked</Text>
          </View>
          <View style={styles.col}>
            <MKCheckbox />
            <Text style={styles.legendLabel}>Unchecked</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

module.exports = Toggles;
