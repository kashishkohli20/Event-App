import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';


class Header extends Component {
  
  state = {
    drawerOpen: false,
    headerShow: false
  }

  toggleDrawer = () => {
    this.setState((prevState) => {
      return {
        drawerOpen: !prevState.drawerOpen
      }
    });
  }

  handleScroll = () => {
    if (window.scrollY > 0) 
      this.setState(() => ({headerShow: true}));
    else 
      this.setState(() => ({headerShow: false}));
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#2f2f2f",
          padding: "10px 0",
          boxShadow: "none"
        }}
      >
        <Toolbar>
          <div className="header-logo">
            <div className="font-righteous header-logo-venue">
              The Venue
            </div>
            
            <div className="header-logo-title">
              Musical Event
            </div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={this.toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          
          <SideDrawer
            open={this.state.drawerOpen}
            onClose={this.toggleDrawer}
          />
        </Toolbar>
  
        
      </AppBar>
    );
  }
  
};

export default Header;