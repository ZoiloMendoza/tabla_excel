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
import NombreFilas from './NombreFilas';

const dataInicial = [
  { '':'Plant Mty Total','Inv Inicial': '1,059.759',  'Demanda':'1,025.698', 'Plan Ajustado':'872.537', 'Prog Sem Antrior':'1,053.174', 'Inv Final':'873.404' },
  { '':'Jamo + Past','Inv Inicial': '1,059.759',  'Demanda':'1,025.698', 'Plan Ajustado':'872.537', 'Prog Sem Antrior':'1,053.174', 'Inv Final':'873.404' },
  { '':'Rebanados','Inv Inicial': '1,059.759',  'Demanda':'1,025.698', 'Plan Ajustado':'872.537', 'Prog Sem Antrior':'1,053.174', 'Inv Final':'873.404' },
  { '':'Salchichas','Inv Inicial': '1,059.759',  'Demanda':'1,025.698', 'Plan Ajustado':'872.537', 'Prog Sem Antrior':'1,053.174', 'Inv Final':'873.404' },
  { '':'Salc para Asar','Inv Inicial': '1,059.759',  'Demanda':'1,025.698', 'Plan Ajustado':'872.537', 'Prog Sem Antrior':'1,053.174', 'Inv Final':'873.404' },
  { '':'Especialidades','Inv Inicial': '1,059.759',  'Demanda':'1,025.698', 'Plan Ajustado':'872.537', 'Prog Sem Antrior':'1,053.174', 'Inv Final':'873.404' },
  
];

const columns = [
  '',
  'Inv Inicial',
  'Demanda',
  'Plan Ajustado',
  'Prog Sem Antrior', 
  'Inv Final'
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

export default function MiniTabla({semana, color, extra}) {
    const [data, setData] = useState(dataInicial);
    
    return (
      <TableContainer
        component={Paper}
        sx={{
          //width: "100%",
          overflowY: "auto",
          marginBottom: "0",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Table sx={{ minWidth: 80}} aria-label="simple table">
          <TableHead>
          <TableRow>
                
                <StyledTableCell_1 align="center" sx={{background:`#${color}`}} colSpan={6}>{semana}</StyledTableCell_1>
      
              </TableRow>
            <TableRow>
              {columns.map((column) => (
                extra ? 
                <StyledTableCell align="left" key={column}>
                  {column}
                </StyledTableCell>: 
                column !== '' && 
                <StyledTableCell align="left" key={column}>
                  {column}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <StyledTableRow key={rowIndex}>
                {columns.map((column, index) => (
                  extra ?
                  <Cell key={column} value={row[column]} />:
                  column !== '' && <Cell key={column} value={row[column]} />

                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
