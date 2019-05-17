import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ReceiptIcon from '@material-ui/icons/Receipt'
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call'
import Divider from '@material-ui/core/Divider';

import styles from './styles';

class HeaderComponent extends React.Component {
  state = {
    openMenu: false,
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  toggleDrawer = (open) => () => {
    this.setState({
      openMenu: open,
      anchorEl: null,
      mobileMoreAnchorEl: null,
    });
  };

  homeClicked = () => {
    this.props.history.push('/')
  }

  profileClicked = () => {
    this.props.history.push('/profile')
  }

  compareClicked = () => {
    this.props.history.push('/compare')
  }

  bagpackClicked = () => {
    this.props.history.push('/bagpack')
  }

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.profileClicked}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
    
    const sideList = (
      <div className={classes.list}>
        <div className={classes.toolbar}>

        </div>
        <Divider />
        <List>
          <ListItem button key="home" onClick={this.homeClicked}>
            <ListItemIcon><ReceiptIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button key="compare" onClick={this.compareClicked}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="Comparision" />
          </ListItem>
          <ListItem button key="bagpack" onClick={this.bagpackClicked}>
            <ListItemIcon><CallIcon /></ListItemIcon>
            <ListItemText primary="Bagpack" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer" onClick={this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Pokèmon
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
        <SwipeableDrawer
          open={this.state.openMenu}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(HeaderComponent));