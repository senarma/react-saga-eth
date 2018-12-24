import React  from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import classNames from 'classnames';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import DrawerListRouter from '../components/DrawerListRouter';
import ToolBarContent from '../components/ToolBarContent';
import Avatar from '@material-ui/core/Avatar';
import makeBlockie from 'ethereum-blockies-base64';



const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar:{
    backgroundColor:'#1F1F3B'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#262649',
    color:'white'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  dividor:theme.mixins.toolbar,

});

class ResponsiveDrawer extends React.Component {
    
  state = {
    mobileOpen: false,
  };

  
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const toolbar = (
        <Toolbar style={{backgroundColor:"white", color:'black' }} disableGutters={!this.state.mobileOpen}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classNames(classes.menuButton, {
                  [classes.hide]: this.state.mobileOpen,
                })}
              >
                <MenuIcon />
              </IconButton>
                <ToolBarContent/>    
                <IconButton color="inherit">  
                <Avatar style={{alignSelf: 'center'}} src={makeBlockie(this.props.userAddress)} />
            </IconButton> 
        </Toolbar>   
    )


    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          {toolbar}
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <DrawerListRouter />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
                <DrawerListRouter />
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.dividor} />
          {this.props.networkStatus}
          {this.props.component}
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);