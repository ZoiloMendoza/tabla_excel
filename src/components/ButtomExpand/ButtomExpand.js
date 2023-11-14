import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import SpeedIcon from '@mui/icons-material/Speed';
import TimelineIcon from '@mui/icons-material/Timeline';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

export default function ButtomExpand({text, open, openExpant, index, onClick}){

    return (
        <>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: open ? 1 : 2.5//2.5
          }}
          onClick={onClick}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            {index === 0 ? (
              <SpeedIcon />
            ) : index === 1 ? (
              <TimelineIcon />
            ) : index === 2 ? (
              <LeaderboardOutlinedIcon />
            ) : index === 3 ? (
              <GroupOutlinedIcon />
            ) : null}
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
          {open && (openExpant ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        <Collapse in={openExpant} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Plan Producción" />
          </ListItemButton>
        </List>
      </Collapse>
      </>
        )
} 
