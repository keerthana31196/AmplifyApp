import React, {Component} from 'react';
import { AppBar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Drawer from '@material-ui/core/Drawer';

import logo from '../Assets/img/logo.svg';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

export default function HeaderNext() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      left: false,
      right: false
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    const list = (anchor) => {
        if(anchor === "left"){
           return <List>
                {['Order', 'Starred', 'Rating', 'Sign out'].map((text, index) => (
                <ListItem button key={text}>
                    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
        }
        else{
            return <List>
                        {['Order', 'Starred', 'Rating', 'Sign out'].map((text, index) => (
                        <ListItem button key={text}>
                            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                            <ListItemText primary={text} />
                        </ListItem>
                        ))}
                    </List>
        }
      
    }
    return (
              <div className="nav">

                  <div className="nav-left">
                    <div style={{padding:"20px"}}>
                        <MenuIcon fontSize="large" onClick={toggleDrawer("left", true)}/>
                    </div>
                    <div style={{paddingBlockStart:"20px"}}>
                        <img src={logo} alt="caterxpress"></img>
                    </div>
                    <div style={{paddingBlockStart:"25px"}}>
                        <Chip label="Delivery" style={{marginRight:"10px"}} disabled />
                        <Chip icon={<LocationOnIcon fontSize="small" />} label="Apple Park Way" disabled/>
                    </div>
                  </div>

                    <div className="nav-right">
                        <Paper style={{height:"fit-content",margin:"15px"}}>
                            <IconButton type="submit" 
                            // className={classes.iconButton} 
                            aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                // className={classes.input}
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            
                        </Paper>
                        <div>
                            <Chip
                                icon={<AddShoppingCartIcon />}
                                label="Cart"
                                onClick={toggleDrawer("right", true)}
                                style={{color:"white",marginTop:"20px",width:"100px",backgroundImage: "linear-gradient(to right, #DB750A , #DB4300)"}}
                            />
                        </div>
                    </div>
                <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
                    {list("left")}
                </Drawer>
                <Drawer anchor={"right"} open={state["right"]} onClose={toggleDrawer("right", false)}>
                    {list("right")}
                </Drawer>
            </div>
        );
}

