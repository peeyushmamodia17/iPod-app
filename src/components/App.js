import React from 'react';
import Wheel from './Wheel';
import Screen from './screen';
import ZingTouch from 'zingtouch';

class App extends React.Component {

  //initializing the state
  constructor(){
    super();

    this.state = {   
      menu : false,
      song : false,
      games : false,
      setting : false,
      profile : false,
      submenu : false,
      allsong : false,
      album : false,
      artist : false
    }
  }

  //manage how to make rotake function
  handleRotate = (props) => {
    // console.log('roate');
    const target = document.getElementById('outer-circle');
    const zt = new ZingTouch.Region(target);
    let angle = 0;
    //console.log("rotae",menu);
    zt.bind(target, 'rotate', (e) => {
      
      angle = angle + e.detail.distanceFromLast;
      //console.log(angle);

      
      //if menu and submenu id not selected then dont do rotation
      if(!this.state.menu && !this.state.submenu){
        return;
      }

      //select songs
      if(((angle <= 30 && angle >= 0)||(angle <= 0 && angle > -30)) && (this.state.menu && !this.state.submenu)){

          console.log('song selected');

          // selecting the all list element  
          let song = document.getElementById('song');
          let profile = document.getElementById('profile');
          let games = document.getElementById('games');
          let setting = document.getElementById('setting');
          
          //changing css style (select the particular element)
          song.classList='select';
          games.classList='unselect';
          setting.classList='unselect';
          profile.classList='unselect';
          
          //chaging the state
          this.setState({
            song : true,
            games : false,
            setting : false,
            profile : false,
            submenu : false
          })
      }

      //---- select games
      if(((angle <= 60 && angle>=30)||(angle <= -30 && angle > -60)) && (this.state.menu && !this.state.submenu)){
        console.log('games selected');
        //selecting the all list element
        let song = document.getElementById('song');
        let profile = document.getElementById('profile');
        let games = document.getElementById('games');
        let setting = document.getElementById('setting');
        
        //changing css style (select the particular element)
        song.classList='unselect';
        games.classList='select';
        setting.classList='unselect';
        profile.classList='unselect';
        
        //chaging the state
        this.setState({
          song : false,
          games : true,
          setting : false,
          profile : false,
          submenu : false
        })
      }

      //select setting
      if(((angle <= 90 && angle>=60)||(angle <= -60 && angle > -90)) && (this.state.menu && !this.state.submenu)){
        console.log('setting selected');
        //selecting the all list element
        let song = document.getElementById('song');
        let profile = document.getElementById('profile');
        let games = document.getElementById('games');
        let setting = document.getElementById('setting');
        
        //changing css style (select the particular element)
        song.classList='unselect';
        games.classList='unselect';
        setting.classList='select';
        profile.classList='unselect';
        
        //chaging the state
        this.setState({
          song : false,
          games : false,
          setting : true,
          profile : false,
          submenu : false
        })
      }

      // select profile
      if(((angle <= 120 && angle>=90)||(angle <= -90 && angle > -120)) && (this.state.menu && !this.state.submenu)){
        console.log('profile selected');
         // selecting the all list element
        let song = document.getElementById('song');
        let profile = document.getElementById('profile');
        let games = document.getElementById('games');
        let setting = document.getElementById('setting');
        
        //changing css style (select the particular element)
        song.classList='unselect';
        games.classList='unselect';
        setting.classList='unselect';
        profile.classList='select';
        
        //chaging the state
        this.setState({
          song : false,
          games : false,
          setting : false,
          profile : true,
          submenu : false
        })
      }

      //handling sub-menu rotation
      //console.log("show",this.state.submenu,menu);
      if(this.state.submenu){
       
        if(((angle <= 30 && angle >= 0)||(angle <= 0 && angle > -30))){
          console.log('all songs selected');
          //selecting the all list element
          let allsong = document.getElementById('allsong');
          let album = document.getElementById('album');
          let artist = document.getElementById('artist');
          
          //changing css style (select the particular element)
          allsong.classList='select';
          album.classList='unselect';
          artist.classList='unselect';
          
          //chaging the state
          this.setState({
            allsong : true,
            album : false,
            artist : false
          })
        }
        //select album
        if(((angle <= 60 && angle>=30)||(angle <= -30 && angle > -60))){
          console.log('album selected');
          //selecting the all list element
          let allsong = document.getElementById('allsong');
          let album = document.getElementById('album');
          let artist = document.getElementById('artist');
          
          //changing css style (select the particular element)
          allsong.classList='unselect';
          album.classList='select';
          artist.classList='unselect';
          
          //chaging the state
          this.setState({
            allsong : false,
            album : true,
            artist : false
          })
        }
  
        //artist
        if(((angle <= 90 && angle>=60)||(angle <= -60 && angle > -90))){
          console.log('artist selected');
          //selecting the all list element
          let allsong = document.getElementById('allsong');
          let album = document.getElementById('album');
          let artist = document.getElementById('artist');
          
          //changing css style (select the particular element)
          allsong.classList='unselect';
          album.classList='unselect';
          artist.classList='select';
          
          //chaging the state
          this.setState({
            allsong : false,
            album : false,
            artist : true
          })
        }
      }

    });
  }

  //handle click on menu button
  handleMenuClick = (props) => {
    console.log("handleMenu Click");
    //console.log("menu before",this.state.menu);
    const { menu } = this.state;
    this.setState({
      menu : !menu,
      submenu: false
    })
    let display = document.getElementById('screen-container');
    display.style.backgroundImage="url('https://images.axios.com/TJZo5yqHzpf3CX8_A4ah21Hy3UM=/0x0:5000x2813/1920x1080/2018/04/11/1523479224025.jpg')";
  }

  //to hide menu when select the particular list item
  handlechangestate = () =>{
    const { menu } = this.state;
    this.setState({
      menu : !menu
    })
  }

  // handle state of submenu 
  handleSubMenuState = () => {
    this.setState({
      submenu: false
    })
  }


  // handle click on inner circle (selecting list items)
  handleInnerCirlceClick = (props) =>{
    
    // stop propagation to outer div
    props.stopPropagation(onclick);
    
    const { menu, song, games, setting, profile, submenu, allsong, album, artist } = this.state;
    console.log(this.state);
    let display = document.getElementById('screen-container');

    //if MENU is open
    if(menu){
      if(song){
        display.style.backgroundImage="url('https://lestimes.com/wp-content/uploads/2016/11/Microphone.jpg')";
        this.handlechangestate();
        this.setState({
          submenu : !submenu
        })
      }
      else if(games){
        display.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuo-onvQeWMvriGrsqeQalJRRlYs9zl3JPoA&usqp=CAU')";
        this.handlechangestate();
      }
      else if(setting){
        display.style.backgroundImage="url('https://previews.123rf.com/images/vastard/vastard1809/vastard180900274/107802088-gear-setting-logo-icon-vector.jpg')";
        this.handlechangestate();
      }
      else if(profile){
        display.style.backgroundImage="url('https://ninjasfiles.s3.amazonaws.com/profile385725a9f501fce9840833ff4bbf2ec26cbdbf.jpeg')";
        this.handlechangestate();
      }
    }

    //if SUB-MENU is open
    if(submenu){
      if(allsong){
        display.style.backgroundImage="url('https://apk.gold/icons:bz1nZnY2ejgmbD0xZ2w5Jmg9cG5nJmY9Z2xtJmk9MzA3')";
        this.handleSubMenuState();
      }
      if(album){
        display.style.backgroundImage="url('data:image/jpeg;base64,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')";
        this.handleSubMenuState();
      }
      if(artist){
        display.style.backgroundImage="url('data:image/jpeg;base64,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')";
        this.handleSubMenuState();
      }
    }
  
  }

  render(){
    const { menu, submenu } = this.state;
    return (
      <div className="App">
        < Screen menu ={ menu} submenu= { submenu } />
        < Wheel 
          onMenuClick = {this.handleMenuClick}
          onhandleRotate = {this.handleRotate}
          handleInnerCirlceClick = {this.handleInnerCirlceClick}
        />
      </div>
    );
  }
}

export default App;
