import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Tabla from '../Tabla/Tabla.js';
import TablaInteractiva from '../TablaInteractiva/TablaInteractiva.js';
import Grid from '@mui/material/Grid';
import AppBarSideBar from '../AppBarSideBar/AppBarSideBar.js';
import BasicSpeedDial from '../BasicSpeedDial/BasicSpeedDial.js';
import TablaDinamica from '../TablaDinamica/TablaDinamica.js';
import SwipeableTemporaryDrawer from '../example.js';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import Barra from '../MiniTabla/Barra.js';
import MiniTabla from '../MiniTabla/MiniTabla.js';
import TablaProgramador from '../TablaProgramador/TablaProgramador.js';
import TablaResumen from '../TablaProgramador/TablaResumen.js';
import AlertDialog from '../TablaProgramador/AlertDialog.js';
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const dataInicial = [
  { 'SKU':'11060','KG PLAN': 3000,  'Break MIN':2600, 'Comida MIN':0},
  { 'SKU':'X050B','KG PLAN': 5400,  'Break MIN':30, 'Comida MIN':30},
  { 'SKU':'X210','KG PLAN': 10000,  'Break MIN':0, 'Comida MIN':0},
  { 'SKU':'10155','KG PLAN': 5580,  'Break MIN':30, 'Comida MIN':0},
  { 'SKU':'X450','KG PLAN': 870,  'Break MIN':0, 'Comida MIN':30}
];

export default function DashBoard() {
  const [openTable, setOpenTable] = useState(false)
 //"main" p: 3, background: "#f4f3f6" }}>
  return (
    <Box sx={{ display: "flex", background: "#f4f3f6" }}>
      <CssBaseline />
      <AppBarSideBar />
      {/*CONTENIDO*/}
      <Box sx={{ display: "flex", width: "100%", }}>
      
        <Box component="main" sx={{ p: 3, background: "#f4f3f6",width: "100%" }}>
        
          <DrawerHeader />
          <AlertDialog dataInicial={dataInicial}/>
          <Grid container columns={80}>
            <Grid item xs={openTable ? 64 : 80}>
              
            </Grid>
            {openTable ? (
              <Grid item xs={16}>
              <Paper
              sx={{
                //width: "100%",
                padding: "15px",
                paddingBottom:'20px',
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                position: "fixed",
                //mt: 3,
                right: "0rem",
                top: "1rem",
              }}
            >
              <CloseIcon
                sx={{ marginTop: "25%", float:'left'}}
                fontSize="medium"
                onClick={() => setOpenTable(!openTable)}
              />
  
              <TablaDinamica />
            </Paper>
            </Grid>
            )
            : (
              <Grid item xs={1} >
                <BasicSpeedDial onClick={() => setOpenTable(!openTable)} />
              </Grid>
            )}
          </Grid>
        </Box>
        
      </Box>
    </Box>
  );
}



