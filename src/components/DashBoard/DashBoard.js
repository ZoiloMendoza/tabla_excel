import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Tabla from '../Tabla/Tabla.js';
import Grid from '@mui/material/Grid';
import AppBarSideBar from '../AppBarSideBar/AppBarSideBar.js';
import BasicSpeedDial from '../BasicSpeedDial/BasicSpeedDial.js';
import TablaDinamica from '../TablaDinamica/TablaDinamica.js';
import SwipeableTemporaryDrawer from '../example.js';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function DashBoard() {
  const [openTable, setOpenTable] = useState(false)
 //"main" p: 3, background: "#f4f3f6" }}>
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarSideBar />
      {/*CONTENIDO*/}
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3, background: "#f4f3f6" }}>
          <DrawerHeader />
          <Grid container columns={12}>
            <Grid item xs={openTable ? 10 : 12}>
              <Tabla />
            </Grid>
            {openTable ? (
              <Grid item xs={2}></Grid>
            ) : (
              <Grid item xs={1}>
                <BasicSpeedDial onClick={() => setOpenTable(!openTable)} />
              </Grid>
            )}
          </Grid>
        </Box>
        {openTable ? (
          <Box sx={{ position: "fixed", mt: 3, right: "0.1rem", top: "1rem", flexBasis:2 }}>
            <Paper
              sx={{
                width: "250px",
                padding: "15px",
                height: "95vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
              }}
            >
              <Box sx={{ marginTop: "12%", textAlign: "left", width: "100%" }}>
                <CloseIcon
                  sx={{}}
                  fontSize="medium"
                  onClick={() => setOpenTable(!openTable)}
                />
              </Box>
              <Box
                sx={{
                  //height: "100vh",
                  width: "100%",
                  overflowY: "auto",
                  marginBottom: "0",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                <TablaDinamica />
              </Box>
            </Paper>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}



