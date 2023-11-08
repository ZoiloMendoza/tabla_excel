import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

const dataInicial = [
  { SKU: 'X010',  'Plan Ajustado':2754 },
  { SKU: 'X479', 'Plan Ajustado':1723 },
  { SKU: 'X971', 'Plan Ajustado':5821 },
];

const columns = [
  'SKU',
  'Plan Ajustado',
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#e2e2e2',
      color: '#13100c',
      fontWeight: 700,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': { //Se cambio de odd a even
      backgroundColor: 'rgba(223, 235, 237, 0.5)',
      textAlign: 'center', 
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));


function Cell({value}) {
    
    return (
      <StyledTableCell align="left">
          {value}
      </StyledTableCell>
    );
}

export default function TablaDinamica() {
    //const [data, setData] = useState(dataInicial);
    const [ocultar, setOcultar] = useState(false);
  
    const handleOcultar = () => {
      setOcultar(!ocultar);
    };
    if(ocultar){
        return <Paper><AddIcon onClick={handleOcultar}/></Paper>
    }

   console.log(ocultar, 'ocultar')
    return (
      <Paper>
      <TableContainer component={Paper}>
      <ClearIcon onClick={handleOcultar}/>
        <Table sx={{ minWidth: 180 }} aria-label="simple table"> 
        
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell align="left" key={column}>{column}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataInicial.map((row, rowIndex) => (
              <StyledTableRow key={rowIndex}>
                {columns.map((column) => (
                  <Cell
                    key={column}
                    value={row[column]}
                  />
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
    );
}
