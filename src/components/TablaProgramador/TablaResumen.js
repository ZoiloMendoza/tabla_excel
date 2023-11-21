import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const columns = [
  'Tiempo STD de Producción',
  '',
  'Resumen',
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#e2e2e2',
      color: '#13100c',
      fontWeight: 600,
      textAlign: 'center', 
      padding:'2px',
      fontSize: 12,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
      padding:'10px',
    },
}));
const StyledTableCell_1 = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: '#13100c',
    fontWeight: 600,
    textAlign: 'center', 
    padding:'2px',
    fontSize: 12,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    padding:'10px',
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': { //Se cambio de odd a even
      backgroundColor: 'rgba(223, 235, 237, 0.5)',
      textAlign: 'center', 
      padding:'2px'
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

function Cell({value}) {
    return (
      <StyledTableCell align="center">
          {value}
      </StyledTableCell>
    );
}

export default function TablaResumen({dataInicial, semana, color, extra}) {
    const [data, setData] = useState([{
      'Tiempo STD de Producción': 18,
      'Resumen': 1000,
    }]);
    
    return (
      <TableContainer
        component={Paper}
        sx={{
          overflowY: "auto",
          marginBottom: "0",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          width:'20%'
        }}
      >
        <Table sx={{ minWidth: 80}} aria-label="simple table">
          <TableHead>
          <TableRow>
                
                <StyledTableCell align="center" sx={{background:`#FFFFFF`}} colSpan={1}>Tiempo STD de Producción</StyledTableCell>
                <StyledTableCell_1 align="center" sx={{background:`#51F069`}} colSpan={1}>Resumen</StyledTableCell_1>
              </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <StyledTableRow key={rowIndex}>
                
                <Cell value={row['Tiempo STD de Producción']} />
                  <Cell value={row['Resumen']} />
                  
               

                
                
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
