import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CreateIcon from '@mui/icons-material/Create';
import SaveIcon from '@mui/icons-material/Save';
import TablePagination from '@mui/material/TablePagination';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import { NewspaperSharp } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const dataInicial = [
  {
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
  },
  {
    Destino: 'MVC10',
    SKU: '11060',
    Rack: '11 x 16',
    KgLote: 2.210,
    Racks: '2,0',
    TIPO: 'MOL',
    Plan1: '5:40 a. m.',
    Plan2: '7:20 a. m.',
    Plan3: '7:32 a. m.',
    Plan4: '9:02 a. m.',
    Plan5: '9:02 a. m.',
    Plan6: '1:32 p. m.',
    Plan7: '1:32 p. m.',
    Plan8: '5:42 p. m.',
  },
  {
    Destino: 'MVC10',
    SKU: '11060',
    Rack: '11 x 16',
    KgLote: 2.210,
    Racks: '2,0',
    TIPO: 'MOL',
    Plan1: '5:40 a. m.',
    Plan2: '7:20 a. m.',
    Plan3: '7:32 a. m.',
    Plan4: '9:02 a. m.',
    Plan5: '9:02 a. m.',
    Plan6: '1:32 p. m.',
    Plan7: '1:32 p. m.',
    Plan8: '5:42 p. m.',
  },
  {
    Destino: 'MVC10',
    SKU: '11060',
    Rack: '11 x 16',
    KgLote: 2.210,
    Racks: '2,0',
    TIPO: 'MOL',
    Plan1: '5:40 a. m.',
    Plan2: '7:20 a. m.',
    Plan3: '7:32 a. m.',
    Plan4: '9:02 a. m.',
    Plan5: '9:02 a. m.',
    Plan6: '1:32 p. m.',
    Plan7: '1:32 p. m.',
    Plan8: '5:42 p. m.',
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  }]

const columns = [
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
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#e2e2e2',
      color: '#13100c',
      fontWeight: 700,
      fontSize: 14,
      textAlign: 'center', 
      padding:'7px'
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
  const [columnaOriginal, setColumnaOriginal] = useState(columns) 
  const [columnsIterable, setColumnsIterable] = useState(columns.slice(0, columns.length - 3))
  const [rowsPerPage, setRowsPerPage] = React.useState(11);
  const [page, setPage] = React.useState(0);
  const derechadaColumns = () => {
    const derecha = columnaOriginal.slice(columnaOriginal.length - 3, columnaOriginal.length )
    const ajusteArray = columnsIterable.slice(0, columnsIterable.length - 3)
    const newArray = [...ajusteArray, ...derecha]
    setColumnsIterable(newArray)
  }
  const izquierdaColumns = () => {
    const izquierda = columnaOriginal.slice(columnaOriginal.length - 6, columnaOriginal.length - 3)
    const ajusteArray = columnsIterable.slice(0, columnsIterable.length - 3)
    const newArray = [...ajusteArray, ...izquierda]
    setColumnsIterable(newArray)
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    const derecha = columnaOriginal.slice(columnaOriginal.length - 3, columnaOriginal.length )
    const ajusteArray = columnsIterable.slice(0, columnsIterable.length - 3)
    const newArray = [...ajusteArray, ...derecha]
    setColumnsIterable(newArray)
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 1));
    setPage(0);
  };

  return (
    <Card sx={{ minWidth: 275, padding:'10px' }}>
      <CardContent>
      <CardActions>
      </CardActions>
      <IconButton size="small">Grafica Interactiva</IconButton>
      <IconButton size="small" sx={{float:'right'}} onClick={derechadaColumns}><ArrowForwardIcon>Derecha</ArrowForwardIcon></IconButton>
      <IconButton size="small" sx={{float:'right'}} onClick={izquierdaColumns}><ArrowBackIcon >Izquierda</ArrowBackIcon></IconButton>
        
          <TableContainer component={Paper} sx={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {columnsIterable.map((column) => (
                    <StyledTableCell align="center" key={column}>
                      {column}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {dataInicial.map((row, rowIndex) => (
                  <StyledTableRow key={rowIndex}>
                    {columnsIterable.map((column) => (
                      <Cell
                        key={column}
                        column={column}
                        value={row[column]}
                      />
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



