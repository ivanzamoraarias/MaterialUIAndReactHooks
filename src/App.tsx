import React, { useState } from 'react';
import titleIcon from './titleIcon.png';
import './App.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Badge, Button, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MasterDetail from './Containers/MasterDetail/MasterDetail';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    abRoot:{
        textAlign: "center",
      backgroundColor: "white"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

function App() {
  const [currentCount, setCurrentCount] = useState(0);

  const classes = useStyles();
  
  return (
    <div>
      <Grid container>
        <AppBar position={"static"} className={classes.abRoot}>
          <Toolbar>
            <img src={titleIcon} />
          <Button color="inherit">Login</Button>
            <Typography variant="h6" className={classes.title}>
              
            </Typography>
            
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Badge badgeContent={currentCount} color="error">
                <ShoppingCartOutlinedIcon style={{color:"black"}} />
              </Badge>
            </IconButton>

          </Toolbar>
        </AppBar>
        <MasterDetail updateCount={setCurrentCount} />
        
      </Grid>
    </div>
  );
}

export default App;
