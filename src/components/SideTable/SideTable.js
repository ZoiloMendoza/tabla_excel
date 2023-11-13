import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import TablaDinamica from '../TablaDinamica/TablaDinamica';
export default function BasicSpeedDial({onClick}) {
  return (
    <Box sx={{ position: "fixed", mt: 3, right: "0.1rem", top: "1rem" }}>
      <Paper sx={{ width: "320px", padding: "10px" }}>
        <CloseIcon
          fontSize="medium"
          sx={{ marginTop: "12%" }}
          onClick={() => setOpenTable(!openTable)}
        />
        <TablaDinamica />
      </Paper>
    </Box>
  );
}
