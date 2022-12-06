import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {InputBase, IconButton} from "@material-ui/core";
import {Badge,makeStyles} from "@material-ui/core";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Grid from "@material-ui/core/Grid";
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor: '#fff',
        
    },
    searchInput:{
      opacity:'0.6',
      padding:`0px ${theme.spacing(1)}px`,
      fontSize:'0.8rem',
      '&:hover':{
        backgroundColor:'#eeeeee'
      },
      '& .MuiSvgIcon-root':{
        marginRight:theme.spacing(1)
      }
    }
}))
export const Header = () => {
    const classes = useStyles()
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase className={classes.searchInput} placeholder="Search topics" startAdornment={ <SearchIcon fontSize="small"/>
            }/>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>  
            <Badge badgeContent={4} color='secondary'><NotificationsNoneIcon fontSize="small"/></Badge>
            </IconButton>
            <IconButton>
            <Badge badgeContent={3} color='primary'><ChatBubbleOutlineIcon fontSize="small"/></Badge>
            </IconButton>
            <IconButton>
                <PowerSettingsNewIcon fontSize="small"/>
            </IconButton>
            
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
