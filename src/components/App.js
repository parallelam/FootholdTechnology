import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

import '../styles/global.css';

import Menu from "components/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  btnFab: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  origin: {
    color: "#020e15",
    backgroundColor: "#53c0d2",
    '&:hover': {
      color: "#020e15",
      backgroundColor: "#53c0d2"
    }
  },
  active: {
    color: "#53c0d2",
    backgroundColor: "#020e15",
    '&:hover': {
      color: "#53c0d2",
      backgroundColor: "#020e15"
    }
  },
}));

export default function App () {

  const classes = useStyles();

  const [menuState, setMenuState] = useState(false);

  return (
    <div className={classes.root}>
      <Fab onClick={()=>{setMenuState(!menuState)}} className={`${classes.btnFab} ${menuState?classes.active:classes.origin}`} color="primary" aria-label="add">
        {
          menuState ?
          <CloseIcon fontSize="large" />
          :
          <AddIcon className="" fontSize="large"/>
        }
      </Fab>
      <Menu state={menuState} />
    </div>
  );

}

