
import { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { type Dish } from '../interface/Dish';

export default function DishTable({ data }: { data: Dish[] }) {
  const [rows, setRows] = useState<Dish[]>([])

  const toText = (v: string[] | string | undefined) =>
    Array.isArray(v) ? v.join(', ') : (v ?? '');

  const getRows = () => {
    if (rows.length) {
      return rows.slice(0, 10).map((row) => (
        <TableRow key={row.position} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">{row.position}</TableCell>
          <TableCell align="right">{row.title} ({row.subtitle})</TableCell>

          <TableCell align="center">{row.country}</TableCell>
          <TableCell align="center">{row.rating}</TableCell>

          <TableCell align="left">{toText(row.iconic_restaurants)}</TableCell>
          <TableCell align="left">{toText(row.ingredients)}</TableCell>
        </TableRow>
      ))
    }

    return (
      <TableRow>
        <TableCell colSpan={6} align="center">No data</TableCell>
      </TableRow>
    )
  }

  useEffect(() => {
    setRows(data)
  }, [data])



  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Puesto</TableCell>
            <TableCell align="center">Plato</TableCell>
            <TableCell align="center">País</TableCell>
            <TableCell align="center">Rating</TableCell>
            <TableCell align="center">Restaurantes icónicos</TableCell>
            <TableCell align="center">Ingredientes</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>{getRows()}</TableBody>
      </Table>
    </TableContainer>
  );
}
