import React, {Component} from 'react';
import { Dimensions, Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
// import CountDown from 'react-native-countdown';


class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginButtom: 22}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View 
            style={{
              backgroundColor:'#00000080',
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 100,
              width: Dimensions.get('window').width * 0.5,
              height: Dimensions.get('window').height * 0.5,
              }}>
            <View>
              <Text>Timer</Text>
              {/* <CountDown
                until={60 * 10 + 30}
                size={30}
                onFinish={() => alert('Finished')}
                digitStyle={{backgroundColor: '#FFF'}}
                digitTxtStyle={{color: '#1CC625'}}
                timeToShow={['M', 'S']}
                timeLabels={{m: 'MM', s: 'SS'}}
              /> */}

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Timer</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Timer</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ModalExample;