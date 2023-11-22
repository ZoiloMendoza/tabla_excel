import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment';
import { styled } from '@mui/material/styles';

const tiempos_de_rebanado = [
  { SKU: 'X198', KgPorHora: 1620 },
  { SKU: 'X168', KgPorHora: 1620 },
  { SKU: 'X169', KgPorHora: 1620 },
  { SKU: 'X396', KgPorHora: 1512 },
  { SKU: '71033', KgPorHora: 1398.6 },
  { SKU: '51793', KgPorHora: 1296 },
  { SKU: '10902', KgPorHora: 1512 },
  { SKU: 'X210', KgPorHora: 1620 },
  { SKU: 'X220', KgPorHora: 1620 },
  { SKU: 'X328', KgPorHora: 680.4 },
  { SKU: 'X329', KgPorHora: 680.4 },
  { SKU: '10155', KgPorHora: 1215 },
  { SKU: '11121', KgPorHora: 1409.4 },
  { SKU: '11022', KgPorHora: 1296 },
  { SKU: '10407', KgPorHora: 1215 },
  { SKU: 'X519', KgPorHora: 1215 },
  { SKU: 'X450', KgPorHora: 1215 },
  { SKU: 'X450RG', KgPorHora: 1080 },
  { SKU: 'X135', KgPorHora: 594 },
  { SKU: 'X050B', KgPorHora: 1620 },
  { SKU: '11060', KgPorHora: 1152 },
  { SKU: '11039', KgPorHora: 1152 },
  { SKU: 'X444', KgPorHora: 1296 },
  { SKU: 'X452', KgPorHora: 1296 },
  { SKU: 'X460', KgPorHora: 1296 },
  { SKU: '53858', KgPorHora: 1296 }
];
const datosParaTiempoDeCambio = [
  { SKU: '11060', cantidad: 0 },
  { SKU: 'X050B', cantidad: 10 },
  { SKU: 'X050B', cantidad: 0 },
  { SKU: 'X210', cantidad: 70 },
  { SKU: 'X210', cantidad: 0 },
  { SKU: '10155', cantidad: 15 },
  { SKU: '10155', cantidad: 0 },
  { SKU: 'X450', cantidad: 10 },
  { SKU: 'X450', cantidad: 0 },
];
const datosLeadTime = [
  { SKU: '10155', tiempoTotalHrs: 17.4 },
  { SKU: '11022', tiempoTotalHrs: 17.4 },
  { SKU: 'X450', tiempoTotalHrs: 17.6 },
  { SKU: 'X519', tiempoTotalHrs: 17.6 },
  { SKU: '10407', tiempoTotalHrs: 16.0 },
  { SKU: '51793', tiempoTotalHrs: 14.2 },
  { SKU: 'X135', tiempoTotalHrs: 15.2 },
  { SKU: 'X050B', tiempoTotalHrs: 14.1 },
  { SKU: 'X444', tiempoTotalHrs: 28.2 },
  { SKU: '53858', tiempoTotalHrs: 20.2 },
  { SKU: '11060', tiempoTotalHrs: 27.9 },
  { SKU: '11039', tiempoTotalHrs: 22.0 },
  { SKU: 'X460', tiempoTotalHrs: 20.2 },
  { SKU: 'X452', tiempoTotalHrs: 20.2 },
  { SKU: 'X168', tiempoTotalHrs: 14.7 },
  { SKU: 'X198', tiempoTotalHrs: 14.7 },
  { SKU: 'X169', tiempoTotalHrs: 12.5 },
  { SKU: 'X328', tiempoTotalHrs: 14.7 },
  { SKU: 'X329', tiempoTotalHrs: 16.6 },
  { SKU: 'X220', tiempoTotalHrs: 14.1 },
  { SKU: 'X210', tiempoTotalHrs: 12.0 },
  { SKU: '71033', tiempoTotalHrs: 13.6 },
];
const columns = [
  'Hra de Formulación',
  'Hora Rebanado inicio',
  'Hora Rebanado final',
  'PRIORIDAD',
  'SKU', 
  'KG PLAN',
  'KG/HR',
  'HR UTILIZADA',
  'Tiempos STD de producción',
  'Tiempo de cambio',
  'MIN UTILIZADOS',
  'Break MIN',
  'Comida MIN',
  'Lead Time'
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

function obtenerKgHr(skuBuscado){
  if(!skuBuscado) return 0;
  const resultado = tiempos_de_rebanado.filter(dato => dato.SKU === skuBuscado);
  return resultado.length > 0 ? resultado[0].KgPorHora : 0;
}
function obtenerTiempodeCambio(skuBuscado){
  if(!skuBuscado) return 0;
  const resultado = datosParaTiempoDeCambio.filter(dato => dato.SKU === skuBuscado);
  return resultado.length > 0 ? resultado[0].cantidad : 0;
}
function obtenerLeadTime(skuBuscado){
  if(!skuBuscado) return 0;
  const resultado = datosLeadTime.filter(dato => dato.SKU === skuBuscado);
  return resultado.length > 0 ? resultado[0].tiempoTotalHrs : 0;
}


export default function TablaProgramador({dataInicial, setDatosParaTablaRes}) {
    const [data, setData] = useState(dataInicial);
 
    useEffect(() => {
      let anterior = [];
      let sumaMinUtilizados = 0;
      const newData = data.map((obj, index) => {
        let kgHr = obtenerKgHr(obj["SKU"]);
        let hrUtilizada = kgHr === 0 ? 0 : obj["KG PLAN"] / kgHr; //hras
        let tiemSTDdeProduccion =
          obj["SKU"] !== ""
            ? moment.duration(7, "minutes")
            : moment.duration(0, "minutes");
        let tiempoDeCambio = moment.duration(
          obtenerTiempodeCambio(obj["SKU"]),
          "minutes"
        );
        let minUtilizados = moment
          .duration(hrUtilizada, "hours")
          .add(tiempoDeCambio)
          .add(tiemSTDdeProduccion);
        let leadTime = obtenerLeadTime(obj["SKU"]);
        let hraRebadoInicio =
          index === 0
            ? moment("1900-01-01T06:00:00")
            : anterior[index - 1].clone().add(tiempoDeCambio);
        let hraRebadoFinal = hraRebadoInicio
          .clone()
          .add(moment.duration(hrUtilizada, "hours"))
          .add(tiemSTDdeProduccion)
          .add(moment.duration(obj["Break MIN"], "minutes"))
          .add(moment.duration(obj["Comida MIN"], "minutes"));
          anterior.push(hraRebadoFinal.clone());
          let hraFormulacion = hraRebadoInicio.clone().subtract(moment.duration(leadTime, "hours")).add(24, 'hours');
          sumaMinUtilizados += minUtilizados.asMinutes()
        return {
          ...obj,
          "Hora Rebanado inicio": hraRebadoInicio.format("HH:mm"),
          "Hora Rebanado final": hraRebadoFinal.format("HH:mm"),
          PRIORIDAD: index + 1,
          "KG/HR": kgHr,
          "HR UTILIZADA": hrUtilizada.toFixed(1), 
          "Tiempos STD de producción": tiemSTDdeProduccion.asMinutes(), 
          "Tiempo de cambio": tiempoDeCambio.asMinutes(), 
          "MIN UTILIZADOS": minUtilizados.asMinutes().toFixed(1),
          "Lead Time": leadTime,
          "Hra de Formulación": hraFormulacion.format("HH:mm")
        };
      });
      setData(newData);
      setDatosParaTablaRes(sumaMinUtilizados)
    }, []);

    return (
      <TableContainer
        component={Paper}
        sx={{
          overflowY: "auto",
          marginBottom: "0",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Table sx={{ minWidth: 80}} aria-label="simple table">
          <TableHead>
          <TableRow>
                <StyledTableCell_1 align="center" sx={{background:`#FFFFFF`}} colSpan={1}>Dia de la Semana:</StyledTableCell_1>
                <StyledTableCell_1 align="center" sx={{background:`#FFC300`}} colSpan={1}>Viernes</StyledTableCell_1>
                <StyledTableCell_1 align="center" sx={{background:`#FFFFFF`}} colSpan={1}></StyledTableCell_1>
                <StyledTableCell_1 align="center" sx={{background:`#FFFFFF`}} colSpan={1}></StyledTableCell_1>
                <StyledTableCell_1 align="center" sx={{background:`#F8ED10`}} colSpan={7}>CAPTURA SKU Y KGS</StyledTableCell_1>
                <StyledTableCell_1 align="center" sx={{background:`#FFFFFF`}} colSpan={1}></StyledTableCell_1>
                <StyledTableCell_1 align="center" sx={{background:`#FFFFFF`}} colSpan={1}></StyledTableCell_1>
                <StyledTableCell_1 align="center" sx={{background:`#FFFFFF`}} colSpan={1}></StyledTableCell_1>
              </TableRow>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell align="left" key={column}>
                  {`${column}`}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <StyledTableRow key={rowIndex}>
                {columns.map((column) => (
                  <Cell key={column} value={row[column]} />

                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
