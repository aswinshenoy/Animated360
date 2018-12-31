import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  VrButton,
} from 'react-360';



// Spin In Animation

class SpinIn extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
         spinIn: new Animated.Value(0),
         duration: this.props.duration || 800
       }
  }

  componentDidMount() {
      this.spinIn();
  }


  spinIn = () => {

    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.spinIn, { toValue: 90, duration: this.state.duration/4 }),
      ]),
      Animated.parallel([
        Animated.timing(this.state.spinIn, { toValue: 180, duration: this.state.duration/4 }),
      ]),
      Animated.parallel([
        Animated.timing(this.state.spinIn, { toValue: 270, duration: this.state.duration/4 }),
      ]),
      Animated.parallel([
        Animated.timing(this.state.spinIn, { toValue: 360, duration: this.state.duration/4 }),
      ]),
    ]).start();

  }


  render() {
      return (
            <Animated.View style={{
              transform:[{rotate:this.state.spinIn}],
              opacity: this.state.spinIn.interpolate({
                inputRange: [0, 360],
                outputRange: [0, 1],
              }),}}>
                {this.props.children}
            </Animated.View>

      );
  }

};

SpinIn.defaultProps = {
  duaration: 360,
}


// Spin Out Animation
class SpinOut extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
       spinOut: new Animated.Value(360),
       duration: this.props.duration || 800
     }

     //initial
    if(this.props.hide == true)
    {
       this.spinOut()
    }

  }

  componentDidUpdate(prevProps) {
      if (this.props.hide !== prevProps.hide) {
        if(this.props.hide == true)
        {
           this.spinOut()
        }
      }
    }

  spinOut = () => {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(this.state.spinOut, { toValue: 270, duration: this.state.duration/4 }),
        ]),
        Animated.parallel([
          Animated.timing(this.state.spinOut, { toValue: 180,  duration: this.state.duration/4 }),
        ]),
        Animated.parallel([
          Animated.timing(this.state.spinOut, { toValue: 90,  duration: this.state.duration/4 }),
        ]),
        Animated.parallel([
          Animated.timing(this.state.spinOut, { toValue: 0, duration:  this.state.duration/4 }),
        ]),
      ]).start();
  }


  render() {
      return (
            <Animated.View style={{
              transform:[{rotate:this.state.spinOut}],
              opacity: this.state.spinOut.interpolate({
                inputRange: [0, 360],
                outputRange: [0, 1],
              }),}}>
                {this.props.children}
            </Animated.View>

      );
  }

};


// Jump Animation


class Jump extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
       jump: new Animated.Value(360),
       duration: this.props.duration || 900,
       height: this.props.height || 10,
       loop: this.props.loop || 1
     }
  }


  componentDidMount() {
      if(this.state.loop == 0)
      {
          this.jumpInfinite();
      }
      else
      {
          for (let i = 0; i < this.state.loop; i++) {
              this.jump();
          }
      }
  }



  jump = () => {
      Animated.sequence([
         Animated.parallel([
           Animated.timing(this.state.jump, { toValue: this.state.height/2, duration:  this.state.duration/6 }),
         ]),
         Animated.parallel([
           Animated.timing(this.state.jump, { toValue: this.state.height, duration: this.state.duration/6 }),
         ]),
         Animated.parallel([
           Animated.timing(this.state.jump, { toValue: 0, duration:  this.state.duration/6 }),
         ]),
         Animated.parallel([
           Animated.timing(this.state.jump, { toValue: this.state.height/2, duration:  this.state.duration/6 }),
         ]),
         Animated.parallel([
           Animated.timing(this.state.jump, { toValue: 0, duration:  this.state.duration/3 }),
         ]),
       ]).start();
  }


    jump = () => {
        Animated.sequence([
           Animated.parallel([
             Animated.timing(this.state.jump, { toValue: this.state.height/2, duration:  this.state.duration/6 }),
           ]),
           Animated.parallel([
             Animated.timing(this.state.jump, { toValue: this.state.height, duration: this.state.duration/6 }),
           ]),
           Animated.parallel([
             Animated.timing(this.state.jump, { toValue: 0, duration:  this.state.duration/6 }),
           ]),
           Animated.parallel([
             Animated.timing(this.state.jump, { toValue: this.state.height/2, duration:  this.state.duration/6 }),
           ]),
           Animated.parallel([
             Animated.timing(this.state.jump, { toValue: 0, duration:  this.state.duration/3 }),
           ]),
         ]).start(() => this.jump() );
    }


  render() {
      return (
          <Animated.View style={{transform:[{translateY:this.state.jump}],}}>
              {this.props.children}
          </Animated.View>
      );
  }

};


// Glow Animation
class Glow extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
       glow: new Animated.Value(1),
       duration: this.props.duration || 900,
       loop: this.props.loop || 1
     }
  }


  componentDidMount() {
      this.glow();
  }


  glow = () => {

    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.glow, { toValue: 0.25, duration:  this.state.duration/8 }),
      ]),
      Animated.parallel([
        Animated.timing(this.state.glow, { toValue: 0.50, duration:  this.state.duration/8 }),
      ]),
      Animated.parallel([
        Animated.timing(this.state.glow, { toValue: 0.75, duration:  this.state.duration/8 }),
      ]),
      Animated.parallel([
        Animated.timing(this.state.glow, { toValue: 1, duration:  this.state.duration/8 }),
      ]),
      Animated.parallel([
        Animated.timing(this.state.glow, { toValue: 0.75, duration:  this.state.duration/8 }),
      ]),
      Animated.parallel([
        Animated.timing(this.state.glow, { toValue: 0.50, duration:  this.state.duration/8 }),
      ]),
      Animated.parallel([
        Animated.timing(this.state.glow, { toValue: 0, duration:  this.state.duration/8 }),
      ]),
    ]).start(() => this.glow());

  }


  render() {
      return (
          <Animated.View style={{opacity:this.state.glow,}}>
              {this.props.children}
          </Animated.View>
      );
  }

};



export default class Animated360 extends React.Component {
  state = {
    hide: false,
  };

  _toggleHide = () => {
    this.setState({
      hide: true,
    });
  };

    render() {

      return (
        <View>
          <SpinIn duration={1500}>
                <Text style={{color: 'white'}}>This Spinned In</Text>
          </SpinIn>
          <SpinIn>
            <Glow>
                <Text style={{color: 'white'}}>This Glows</Text>
            </Glow>
          </SpinIn>
            <Jump loop={0}>
                <Text style={{color: 'white'}}>This Jumps & Glows</Text>
            </Jump>
            <SpinOut hide={this.state.hide}>
                    <Text style={{color: 'white'}}>Spin Out</Text>
            </SpinOut>
          <VrButton onClick={this._toggleHide}  style={{width: 120, padding: 10, margin: 10,  backgroundColor: 'white'}} >
            <Text style={{color: 'black', fontSize: 15, textAlign: 'center'}}>Click to Spin Out</Text>
          </VrButton>
        </View>
      );


    }
};



const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Animated360', () => Animated360);
