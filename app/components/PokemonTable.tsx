
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from "next/link";
import Avatar from "@mui/material/Avatar";


export interface PokemonData {
    name: string,
    number: number,
    link: string,
    imagePath: string
}

const PokemonTable = ({PokemonData}: {PokemonData: PokemonData[]}) => {
  return (
    <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell></TableCell>
                <TableCell>Pokemon</TableCell>
                <TableCell align="right">Number</TableCell>
                <TableCell align="right">Link</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {PokemonData.map((row) => (
                <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    <Avatar alt={row.name} src={row.imagePath} />
                    </TableCell>
                    <TableCell>
                    {row.name}
                    </TableCell>
                    <TableCell align="right">{row.number}</TableCell>
                    <TableCell align="right">
                    <Link href={`${row.link}`}>Top {row.name} Amazon Products</Link>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default PokemonTable