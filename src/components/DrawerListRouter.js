import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Divider, List, ListItem, ListItemIcon, ListItemText  } from '@material-ui/core'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const styles = () => ({
    drawerItemBox:{
        paddingTop:5,
        paddingBottom:5,
      },
      drawerItemIcon:{
        paddingLeft:3
      },
      drawerListText:{
        fontSize:12,
        color:'white',
        padding:0
      },
       grow: {
        flexGrow: 1,
      }
})

const DrawerList = props => {
    const { classes } = props;

    const menuOpstions = [
        'Home',
        'Back',
        'Dashboard',
        'Inbox', 
        'Financial Contracts',
        'Trade Contracts',
        'Invoices',
        'Payments',
        'Chat Room',
        'Calendar'
    ]
    return(
        <Fragment>
            <p align="center">Few Nickels</p>     
            <Divider />
            <List>
            {menuOpstions.map((text, index) => (
                <ListItem className={classes.drawerItemBox} button key={text}>
                <ListItemIcon style={{color:'#b2bec3'}}>{index % 2 === 0 ? <InboxIcon color='inherit' /> : <MailIcon color='inherit' />}</ListItemIcon >
                <ListItemText className={classes.drawerListText}  classes={{primary:classes.drawerListText}} primary={text} />
                </ListItem>
            ))}
            </List>
            <Divider />
            <List>
            {['Help Center', 'Settings'].map((text, index) => (
                <ListItem className={classes.drawerItemBox} button key={text}>
                <ListItemIcon style={{color:'#b2bec3'}}  size={5}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText className={classes.drawerListText} classes={{primary:classes.drawerListText}} primary={text} />
                </ListItem>
            ))}
            </List>
        </Fragment>
    )
}

export default withStyles(styles)(DrawerList);