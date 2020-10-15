import React from 'react'
import clsx from 'clsx';
import { Divider, List, ListItem, ListItemText, ListItemIcon, makeStyles, Drawer, Hidden } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';

export default function drawer() {

  return (
    <div role="presentation"> 
      <Hidden implementation="css">
        <Drawer anchor="left" open={true}
          BackdropProps={{ invisible: true }}  
          variant="temporary"
          style={{marginLeft: "250px"}}>
          <div>
            <List>
              {[['Home', <HomeIcon/>], ['About me', <PersonIcon />], ['Portfolio', <DashboardIcon />], ['Github Repos', <GitHubIcon />]].map((text, index) => (
                <ListItem button key={String(text[0])}>
                  <ListItemIcon>{text[1]}</ListItemIcon>
                  <ListItemText primary={text[0]} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {[['Contact me', <EmailIcon/>], ['Terms Of Service', <InfoIcon />]].map((text, index) => (
                <ListItem button key={String(text[0])}>
                  <ListItemIcon>{text[1]}</ListItemIcon>
                  <ListItemText primary={text[0]} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        </Hidden>
    </div>
  )
}
