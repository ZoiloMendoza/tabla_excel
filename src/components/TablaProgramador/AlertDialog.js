import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TablaProgramador from '../TablaProgramador/TablaProgramador.js';
import TablaResumen from '../TablaProgramador/TablaResumen.js';
import Box from '@mui/material/Box';
import TablaTiempoSTD from './TablaTiempoSTD.js';
import TablaRes from './TablaRes.js';

export default function AlertDialog({dataInicial}) {
  const [open, setOpen] = useState(false);
  const [datosParaTablaRes, setDatosParaTablaRes] = useState(0)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: "100%", margin: "0px" }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open ejemplo
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="x1"
      >
        <DialogTitle id="alert-dialog-title">{"Revisa tus datos"}</DialogTitle>
        <DialogContent sx={{ margin: "0px", overflowY: "auto" }}>
          <TablaProgramador
            dataInicial={dataInicial}
            setDatosParaTablaRes={setDatosParaTablaRes}
          />
        </DialogContent>
        <DialogContent sx={{ display: "flex", width: "41%", gap: 1 }}>
          <TablaTiempoSTD />
          <TablaRes total={datosParaTablaRes} minutosPorDia={1080} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Recalcular</Button>
          <Button onClick={handleClose} autoFocus>
            Aplicar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
  
}