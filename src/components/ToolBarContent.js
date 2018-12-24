import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {InputBase, IconButton, Badge, Hidden  } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail';
import { fade } from '@material-ui/core/styles/colorManipulator';
import makeBlockie from 'ethereum-blockies-base64';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';


const styles = (theme) => ({

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },grow: {
    flexGrow: 1,
  },
  inputBase:{
    fontSize:'12px',
     color:'black'
  }

})

const ToolBarContent = props => {
    const { classes } = props;

    return(
        <Fragment>

        <div className={classes.grow}>
            <div style={{color:'#b2bec3'}}>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <Hidden xsDown>
                        <InputBase 
                        placeholder="Search transactions, invoices or help"
                        className={classes.inputBase}
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        />
                      </Hidden>
                </div>
            </div>
        </div>

        <div style={{color:'#b2bec3'}} >
          <Hidden only={['xs', 'sm']}>
            <div className={classes.grow}>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="primary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <Badge badgeContent={17} color="primary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>           
              </div>
            </Hidden>
            <Hidden only={["lg", "xl", "md"]}>
                <IconButton color="inherit">
                    <NotificationsIcon />
                </IconButton> 
            </Hidden>
        </div>

        </Fragment>
              
    )

}

export default withStyles(styles, { withTheme: true })(ToolBarContent);