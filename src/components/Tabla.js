import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CreateIcon from '@mui/icons-material/Create';
import SaveIcon from '@mui/icons-material/Save';
const dataInicial = [
  { SKU: 'X010', MinimoKgsCarga: 1615, 'Inv.BPT + CEDIS dia 5 am': 4077, 'WIP + Programa hoy': 0, '07-nov': 849, 'Inv. Final 1': 3228, '08-nov': 474, 'Inv Final 2': 2754, Tiendita: 2630, Programar: -125, 'Ajuste Cargas': 0, Pedido: 2754, 'Inv final 3': 125, 'Dif Inv final':2754 },
  { SKU: 'X479', MinimoKgsCarga: 1164, 'Inv.BPT + CEDIS dia 5 am': 559, 'WIP + Programa hoy': 0, '07-nov': 0, 'Inv. Final 1': 559, '08-nov': 0, 'Inv Final 2': 559, Tiendita: 700, Programar: 141, 'Ajuste Cargas': 1, Pedido: 1164, 'Inv final 3': 1723, 'Dif Inv final':1723 },
  { SKU: 'X971', MinimoKgsCarga: 2568, 'Inv.BPT + CEDIS dia 5 am': 2299, 'WIP + Programa hoy': 0, '07-nov': 854, 'Inv. Final 1': 1445, '08-nov': 760, 'Inv Final 2': 685, Tiendita: 3792, Programar: 3107, 'Ajuste Cargas': 2, Pedido: 5136, 'Inv final 3': 5821, 'Dif Inv final':5821 },
];

const columns = [
  'SKU',
  'Minimo Kgs/carga',
  'Inv.BPT + CEDIS dia 5 am',
  'WIP + Programa hoy',
  '07-nov',
  'Inv. Final 1',
  '08-nov',
  'Inv Final 2',
  'Tiendita',
  'Programar',
  'Ajuste Cargas',
  'Pedido',
  'Inv final 3',
  'Dif Inv final',
];

function Cell({ column, value, isEditing, handleChange, handleEdit, handleSave }) {
    return (
      <TableCell>
        {column === 'Ajuste Cargas' ? (
          isEditing ? (
            <div>
              <input type="text" value={value} onChange={handleChange} />
              <SaveIcon onClick={handleSave} />
            </div>
          ) : (
            <div>
              {value} <CreateIcon onClick={handleEdit} />
            </div>
          )
        ) : (
          value
        )}
      </TableCell>
    );
  }
  
  export default function BasicTable() {
    const [data, setData] = useState(dataInicial);
    const [editingCell, setEditingCell] = useState(null);
  
    const handleEditClick = (rowIndex) => {
      setEditingCell(rowIndex);
    };
  
    const handleSaveClick = (rowIndex) => {
      // Guardar los cambios en la celda de la fila rowIndex
      setEditingCell(null);
    };
  
    const handleChange = (e, rowIndex) => {
      // Actualizar el valor de la celda en la fila rowIndex
      const newValue = e.target.value;
      const updatedData = data.map((row, index) =>
        index === rowIndex ? { ...row, 'Ajuste Cargas': newValue } : row
      );
  
      setData(updatedData);
    };
   console.log(data)
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column) => (
                  <Cell
                    key={column}
                    column={column}
                    value={row[column]}
                    isEditing={rowIndex === editingCell && column === 'Ajuste Cargas'}
                    handleChange={(e) => handleChange(e, rowIndex)}
                    handleEdit={() => handleEditClick(rowIndex)}
                    handleSave={() => handleSaveClick(rowIndex)}
                  />
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }



