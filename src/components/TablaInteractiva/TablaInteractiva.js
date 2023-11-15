import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from '@mui/material';

const dataInicial = [
  {
    Sec:'1',
    'Secuencia a Real': 1,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 0,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 1,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 0,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 1,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 0,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 1,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 0,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 1,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 0,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 1,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 0,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 1,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 0,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 1,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 0,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 1,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 0,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 1,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 0,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 1,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  {
    Sec:'1',
    'Secuencia a Real': 0,
    Destino: 'MVC10',
    SKU: '11060B',
    Rack: '11 x 16',
    KgLote: 3.600,
    Racks: '3,0',
    TIPO: 'MOL',
    Plan1: '4:00 a. m.',
    Plan2: '5:40 a. m.',
    Plan3: '6:01 a. m.',
    Plan4: '7:31 a. m.',
    Plan5: '7:31 a. m.',
    Plan6: '12:01 p. m.',
    Plan7: '12:01 p. m.',
    Plan8: '4:11 p. m.',
    Plan9: '4:00 a. m.',
    Plan10: '5:40 a. m.',
    Plan11: '6:01 a. m.',
    Plan12: '7:31 a. m.',
    Plan13: '7:31 a. m.',
    Plan14: '12:01 p. m.',
    Plan15: '12:01 p. m.',
    Plan16: '4:11 p. m.',
  },
  ]

const columns = [
  'Sec',
  'Secuencia a Real',
  'Destino',
  'SKU',
  'Rack',
  'kgLote',
  'Racks',
  'TIPO',
  'Plan1',
  'Plan2',
  'Plan3',
  'Plan4',
  'Plan5',
  'Plan6',
  'Plan7',
  'Plan8',
  'Plan9',
  'Plan10',
  'Plan11',
  'Plan12',
  'Plan13',
  'Plan14',
  'Plan15',
  'Plan16',
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#e2e2e2',
      color: '#13100c',
      fontWeight: 700,
      fontSize: 14,
      textAlign: 'center', 
      padding:'0 0 7px 0'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

const StyledTableCell_1 = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F3B3B2',
    color: '#13100c',
    fontWeight: 700,
    fontSize: 14,
    textAlign: 'center', 
    padding:'0 0 7px 0'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableCell_2 = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#DFDC78',
    color: '#13100c',
    fontWeight: 700,
    fontSize: 14,
    textAlign: 'center', 
    padding:'0 0 7px 0'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableCell_3 = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#C7F3B2',
    color: '#13100c',
    fontWeight: 700,
    fontSize: 14,
    textAlign: 'center', 
    padding:'0 0 7px 0'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': { //Se cambio de odd a even
      backgroundColor: 'rgba(223, 235, 237, 0.5)',
      textAlign: 'center', 
      padding:'5px'
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));


function Cell({ column, value}) {
    
    let textColor = "inherit";

    if (column === "Minimo Kgs/carga") {
      textColor = value > 1000 ? "green" : "red";
    }

    return (
      <StyledTableCell align="center" style={{ color: textColor }}>
          {value}
      </StyledTableCell>
    );
}

export default function TablaInteractiva() {
  const [columnaOriginal, setColumnaOriginal] = useState(columns);
  const [columnsVisible, setColumnsVisible] = useState(columnaOriginal.slice(0, 14));

  const moverColumnas = (direction) => {
    // Mapeo de relaciones entre la columna actual y las nuevas columnas según la dirección.
    const mapping = {
      derecha: {
        'Plan1': 10,
        'Plan3': 12,
        'Plan5': 14,
        'Plan7': 16,
        'Plan9': 18,
      },
      izquierda: {
        'Plan3': 8,
        'Plan5': 10,
        'Plan7': 12,
        'Plan9': 14,
        'Plan11': 16,
      },
    };
    // Obtenemos la columna actual.
    const currentIndex = columnsVisible[8];

    // Obtenemos el nuevo índice según el mapeo y la dirección.
    const newIndex = mapping[direction][currentIndex];
  
    if (newIndex !== undefined) {
      // Construimos las nuevas columnas concatenando las columnas originales.
      const nuevasColumnas = columnaOriginal.slice(0, 8).concat(columnaOriginal.slice(newIndex, newIndex + 6));
      setColumnsVisible(nuevasColumnas);
    }
  };
  
  return (
    <Card sx={{ minWidth: 275, padding: "10px" }}>
      <CardContent>
        <CardActions></CardActions>
        <IconButton size="small">Grafica Interactiva</IconButton>
        <IconButton
          size="small"
          sx={{ float: "right" }}
          onClick={() => moverColumnas("derecha")}
        >
          <ArrowForwardIcon>Derecha</ArrowForwardIcon>
        </IconButton>
        <IconButton
          size="small"
          sx={{ float: "right" }}
          onClick={() => moverColumnas("izquierda")}
        >
          <ArrowBackIcon>Izquierda</ArrowBackIcon>
        </IconButton>

        <TableContainer
          component={Paper}
          sx={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                
                <StyledTableCell align="center" colSpan={8}>Celda 2</StyledTableCell>
                <StyledTableCell_1 align="center" colSpan={2}>Mez</StyledTableCell_1>
                <StyledTableCell_2 align="center" colSpan={2}>Embutido</StyledTableCell_2>
                <StyledTableCell_3 align="center" colSpan={2}>Cocimiento</StyledTableCell_3>
              </TableRow>
              <TableRow>
                {columnsVisible.map((column, index) => (
                  <StyledTableCell align="center" key={column}>
                   
                     {column}
                        
                    
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataInicial.map((row, rowIndex) => (
                <StyledTableRow key={rowIndex}>
                  {columnsVisible.map((column) => (
                    <Cell key={column} column={column} value={row[column]} />
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}



