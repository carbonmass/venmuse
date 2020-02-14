import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './styles'
import {withStyles, AppBar, Toolbar} from '@material-ui/core'

const NavBar = ({ classes }) => {
    return (
        <nav className={classes.root}>
        <AppBar className={classes.appbar} position="static">
        <Toolbar>
        <NavLink to="/feed" activeClassName="selected">
            <img src={'/images/logo/logo.svg'} height="100px" width="100px" alt="logo"/>
            Feed</NavLink>
        <NavLink to="/archive" activeClassName="selected">Archive</NavLink>
        <NavLink to="/account" activeClassName="selected">Account</NavLink>
        <NavLink to="/signup" activeClassName="selected">SignUp</NavLink>
        <NavLink to="/single" activeClassName="selected">Single</NavLink>
        </Toolbar>
      </AppBar>

          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button> */}

    </nav>
      ) 
}


export default withRouter(withStyles(styles)(NavBar));