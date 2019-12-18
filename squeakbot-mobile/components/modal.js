import React, {Component} from 'react';
import { Dimensions, Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import Timer from './timer';

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
              backgroundColor:'rgba(211,211,211,0.5)',
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 100,
              width: Dimensions.get('window').width * 0.5,
              height: Dimensions.get('window').height * 0.5,
              }}>
            <View>
              <Text
                style={{
                  color: 'black'
                }}>Timer</Text>
            <Timer />
            
              

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text
                  style={{
                    color: 'black'
                  }}>Hide Timer</Text>
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