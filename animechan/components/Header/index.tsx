import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from '../../styles/Home.module.css';


const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" className={styles.title}>
              <a href={"https://github.com/ike-kazu/AnimeChan"}>Watch the code</a>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;