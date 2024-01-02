'use client'

import * as React from "react";
import { useState, useEffect } from 'react'
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
import gen1data from '../data/gen1.json';
import Link from "next/link";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

function createData(
  name: string,
  number: number,
  link: string
) {
  return { name, number, link };
}

function createDataArr() {
  var rows = []
  for (var i in gen1data) {
    rows.push(createData(gen1data[i].name, gen1data[i].number, gen1data[i].link));
  }
  return rows;
}

const data1 = createDataArr();

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  createDataArr();
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
        sx={{ flexGrow: 1, bgcolor: 'darkgrey', display: 'flex'}}
      >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' , bgcolor: 'floralwhite'}}
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
            </Grid>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
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
                      {data1.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
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
              </TabPanel>
              <TabPanel value={value} index={1}>
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
                      {data1.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
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
              </TabPanel>
              <TabPanel value={value} index={2}>
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
                      {data1.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
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
              </TabPanel>
              <TabPanel value={value} index={3}>
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
                      {data1.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
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
              </TabPanel>
              <TabPanel value={value} index={4}>
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
                      {data1.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
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
              </TabPanel>
              <TabPanel value={value} index={5}>
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
                      {data1.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
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
              </TabPanel>
              <TabPanel value={value} index={6}>
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
                      {data1.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
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
              </TabPanel>
            </Grid>
          </Grid>
          
        </Grid>
        
      </Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ bgcolor: 'black'}}
      >
        <BottomNavigationAction label="Home" href="/"/>
        {/* <BottomNavigationAction label="Favorites" />
        <BottomNavigationAction label="Nearby" /> */}
      </BottomNavigation>
    </div>
  );
}
