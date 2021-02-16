import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import menuList from './menu.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    right: "0px",
    bottom: "63px",
    maxWidth: "570px"
  },
  show: {
    visibility: "visible",
    opacity: 1,
    transition: "opacity 600ms, visibility 600ms"
  },
  hide: {
    visibility: "hidden",
    opacity: 0,
    transition: "opacity 600ms, visibility 600ms"
  },
  listItem: {
    position: "unset",
    width: "calc(50% - 16px)",
    float: "left",
    background: "white",
    border: "1px solid #ddd",
    borderRadius: "10px",
    margin: "8px",
    minWidth: "230px",
    boxShadow: "-1px 3px 8px -3px #666",
    "@media (max-width: 495px)": {
        float: "right"
    },
    '&:hover': {
        cursor: "pointer", 
        boxShadow: "-1px 11px 30px -3px #666"
    },
  },
  icon: {
      marginLeft: "8px",
      marginRight: "20px"
  },
  text: {
    '& > span': {
        fontSize: "0.9rem",
      },
  }
}));

export default function Menu ({state}) {
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${state?classes.show:classes.hide}`}>
        <List className={classes.list}>
            {
            menuList.map((item, index) => {
                return (
                <ListItem key={index} className={classes.listItem}>
                    <Avatar className={classes.icon} src={"/assets/img/" + item.icon}/>
                    <ListItemText
                    className={classes.text}
                    primary={item.name}
                    />
                </ListItem>
                )
            })
            }
        </List>
    </div>
  )
}
