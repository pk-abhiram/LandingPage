import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Instagram, LinkedIn } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const StyledMenu = withStyles({
  paper: {
    margin: '0px',
    padding: '0px',
    background: '#CCFFCC',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))(MenuItem);
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  title: {
    color: '#00FF00',
    fontSize: '4.5rem',
  },
  brand: {
    color: '#00FF00',
    fontSize: '2rem',
  },
  container: {
    textAlign: 'center',
  },
  goDown: {
    color: '#00FF00',
    fontSize: '4rem',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id='header'>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h2 className={classes.appbarTitle}>
            My <span className={classes.brand}>Places</span>
          </h2>
          <IconButton onClick={handleClick}>
            <SortIcon className={classes.icon} />
          </IconButton>
          <StyledMenu
            id='customized-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem onClick={handleClose}>
              <a
                href='https://www.instagram.com/pk_abhiram/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <ListItemIcon>
                  <Instagram color='secondary' fontSize='large' />
                </ListItemIcon>
              </a>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>
              <a
                href='https://www.linkedin.com/in/abhiram-pk/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <ListItemIcon>
                  <LinkedIn color='primary' fontSize='large' />
                </ListItemIcon>
              </a>
            </StyledMenuItem>
          </StyledMenu>
        </Toolbar>
      </AppBar>
      <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})}>
        <div className={classes.container}>
          <h1 className={classes.title}>Welcome</h1>
          <Scroll to='place-to-visit' smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
