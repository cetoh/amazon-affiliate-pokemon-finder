import React from "react";

const data1 = [
  { 
    name: "Bulbasaur", 
    number: 1, 
    link: <a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=tohtaltech-20&linkCode=ur2&linkId=53ac1624cd8f27e5fc927368a07aff1c&camp=1789&creative=9325&index=toys-and-games&keywords=Bulbasaur">Bulbasaur</a> 
  },
  { 
    name: "Ivysaur", 
    number: 2, 
    link: <a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=tohtaltech-20&linkCode=ur2&linkId=5c6c2e5acc9061801d9464eb0bf0f0d0&camp=1789&creative=9325&index=toys-and-games&keywords=Ivysaur">Ivysaur</a> 
  },
  { 
    name: "Venasaur", 
    number: 3, 
    link: <a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=tohtaltech-20&linkCode=ur2&linkId=caef3a0297b803ea478e427191df7f1b&camp=1789&creative=9325&index=toys-and-games&keywords=Venasaur">Venasaur</a>
  },
  { 
    name: "Charmander", 
    number: 4, 
    link: <a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=tohtaltech-20&linkCode=ur2&linkId=4c0f3d5e629376718fa2d442233db2f4&camp=1789&creative=9325&index=toys-and-games&keywords=Charmander">Charmander</a>
  },
]
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  number: number,
  link: React.JSX.Element
) {
  return { name, number, link};
}

const rows = [
  createData(
    "Bulbasaur", 
    1, 
    <a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=tohtaltech-20&linkCode=ur2&linkId=53ac1624cd8f27e5fc927368a07aff1c&camp=1789&creative=9325&index=toys-and-games&keywords=Bulbasaur">Bulbasaur</a> 
  ),
  createData('Ice cream sandwich', 237, <a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=tohtaltech-20&linkCode=ur2&linkId=5c6c2e5acc9061801d9464eb0bf0f0d0&camp=1789&creative=9325&index=toys-and-games&keywords=Ivysaur">Ivysaur</a> ),
  createData('Eclair', 262, <a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=tohtaltech-20&linkCode=ur2&linkId=caef3a0297b803ea478e427191df7f1b&camp=1789&creative=9325&index=toys-and-games&keywords=Venasaur">Venasaur</a> )
];

export default function Page() {
  return (
    <div>
      <h1>Generation 1</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Pokemon</TableCell>
              <TableCell align="right">Number</TableCell>
              <TableCell align="right">Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.number}</TableCell>
                <TableCell align="right">{row.link}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

// export default function Page() {
//     return (
//       <div className="App">
//         <h1>Generation 1</h1>
//           <table>
//               <tr>
//                   <th>Pokemon</th>
//                   <th>Number</th>
//                   <th>Amazon Products</th>
//               </tr>
//               {data1.map((val, key) => {
//                   return (
//                       <tr key={key}>
//                           <td>{val.name}</td>
//                           <td>{val.number}</td>
//                           <td>{val.link}</td>
//                       </tr>
//                   )
//               })}
//           </table>
//       </div>
//     )
//   }