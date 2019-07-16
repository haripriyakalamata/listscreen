import React from 'react';
import { Button, View, Text,TextInput,StyleSheet,Alert,ScrollView,ListView,ActivityIndicator,TouchableOpacity,Image,Dimensions,ImageBackground } from 'react-native';

const { width, height } = Dimensions.get('window');
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
     this.background_image_url = this.props.background_image_url;
     this.logo_source = this.props.logo_source;
     this.name = this.props.name;
     this.backend_fetch_link = this.props.backend_fetch_link;
  }
 isValid() {
    const { username, password } = this.state;
    let valid= false;

    if (username.length>0 && password.length>0) {
      valid=true;
    }
    if(username.length=== 0) {
      alert('please fill the username');}

    else if(password.length===0){
      alert('please fill the password');
    }
      return valid; 
  }

UserLoginFunction = () =>{
if(this.isValid()){
 const { username }  = this.state ;
 const { password }  = this.state ; 

fetch(this.backend_fetch_link, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: username,
    password: password
  })
 
}).then((response) => response.json())
      .then((responseJson) => {

       if(responseJson === 'Data Matched')
        {
             Alert.alert('Data Matched');      
        }
        else{
          Alert.alert(responseJson);
        }
      }).catch((error) => {
        console.error(error);
         });
}
}
  render() {
    return (
      <View style={styles.container}>
     <ImageBackground
        style={{ flex: 1, width: 400, height: 1000, }} 
        source={this.background_image_url}
        >
      </ImageBackground>
      
     <Image style={styles.image1} source={this.logo_source}/>

      <Text style = {styles.text1}>
       {this.props.name}
  </Text>
   <View style={styles.inputContainer}>
   <View>
       <Image style={styles.image2} source={require("../assets/user2.png")}/>
       </View>
        <TextInput style={styles.inputs}
           placeholder= "Enter Username"
            placeholderTextColor={'black'}
          onChangeText={username => this.setState({username})}
          underlineColorAndroid='transparent'
        />
    </View>
      <View style={styles.inputContainer}>
       <View>
       <Image style={styles.image} source={require("../assets/password.png")}/>
       </View>
        <TextInput style={styles.inputs}
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter  Password"
           placeholderTextColor={'black'}
          onChangeText={password => this.setState({password})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
       secureTextEntry={true}
        />
          </View>
  <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}  
         onPress={this.UserLoginFunction} color="#2196F3" >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

      <Text style = {styles.text}>
   
        ---------Or--------
     </Text>
       
        <TouchableOpacity  style={[styles.textContainer, styles.text2]}>
            <Text style={styles.text2}>Sign Up</Text>
        </TouchableOpacity>

</View>
            
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 backgroundColor:'white',
  marginBottom:160,
  },
  inputContainer: {
    
      //backgroundColor: '#FFFFFF',
      borderBottomWidth: 1,
      width:'70%',
      //borderRadius:5,
      marginBottom:10,
      flexDirection: 'row',
      alignItems:'center'
  },
 
inputs:{
      height:45,
      marginLeft:16,
      //border: '#090202',
      flex:1,
      borderRadius:10,
      color:'black'
  },
  
  buttonContainer: {
    height:40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:'70%',
    borderRadius:10,
  },
  loginButton: {
    backgroundColor: "#11CBFB",
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  },
image:{
    width:30,
    height:30,
    justifyContent: 'flex-end',
  },
 
  image2:{
    width:30,
    height:30,
    justifyContent: 'flex-end',   
  },
  image1:{
    width:180,
    height:80,

    marginLeft:5,
    justifyContent: 'center',
    bottom:50
  },
text:{
 color: 'black',
 fontSize: 22,
 position: 'relative', 
top:-10,
},

text1:{
 color: 'black',
 fontSize: 40,
 position: 'relative', 
top:-50,
},

text2:{
 color: 'black',
 fontSize: 20,
 position: 'relative', 
top:-3,

},
});