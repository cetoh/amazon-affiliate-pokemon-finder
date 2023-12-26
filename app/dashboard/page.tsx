'use client'

import * as React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from '@mui/material/Typography';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

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
  createData(
    "Ivysaur", 
    2, 
    <a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=tohtaltech-20&linkCode=ur2&linkId=5c6c2e5acc9061801d9464eb0bf0f0d0&camp=1789&creative=9325&index=toys-and-games&keywords=Ivysaur">Ivysaur</a> 
  ),
  createData(
    "Venasaur", 
    3, 
    <a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=tohtaltech-20&linkCode=ur2&linkId=caef3a0297b803ea478e427191df7f1b&camp=1789&creative=9325&index=toys-and-games&keywords=Venasaur">Venasaur</a> 
  ),
  createData(
    "Charmandar", 
    4, 
    <a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=tohtaltech-20&linkCode=ur2&linkId=f904ae894ec9701d8fb396a5d4b100dd&camp=1789&creative=9325&index=toys-and-games&keywords=Charmander">Charmander</a>
  ),
  createData(
    "Charmeleon", 
    5, 
    <a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=tohtaltech-20&linkCode=ur2&linkId=ddb23c18ec5560e9bd5d51a6e961f9e1&camp=1789&creative=9325&index=toys-and-games&keywords=Charmeleon">Charmeleon</a>
  ),
  createData(
    "Charizard", 
    6, 
    <a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=tohtaltech-20&linkCode=ur2&linkId=f7d25890175c0d8bda5973bfa8c16314&camp=1789&creative=9325&index=toys-and-games&keywords=Charizard">Charizard</a>
  ),

  
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Page() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>  
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 480 }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Generation 1" {...a11yProps(0)} />
          <Tab label="Generation 2" {...a11yProps(1)} />
          <Tab label="Generation 3" {...a11yProps(2)} />
          <Tab label="Generation 4" {...a11yProps(3)} />
          <Tab label="Generation 5" {...a11yProps(4)} />
          <Tab label="Generation 6" {...a11yProps(5)} />
          <Tab label="Generation 7" {...a11yProps(6)} />
          <Tab label="Generation 8" {...a11yProps(7)} />
          <Tab label="Generation 9" {...a11yProps(8)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
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
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>
      
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" href="/"/>
        {/* <BottomNavigationAction label="Favorites" />
        <BottomNavigationAction label="Nearby" /> */}
      </BottomNavigation>
    </div>
  );
}
