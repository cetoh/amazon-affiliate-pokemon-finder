'use client'

import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from '@mui/material/Typography';
import BottomNavBar from "../components/BottomNavBar";

import pokedex from '../data/pokedex.json';
import PokemonTable, { PokemonData } from "./components/PokemonTable";
import SearchAppBar from "../components/SearchAppBar";

const baseUrl = "https://www.amazon.com/gp/search?ie=UTF8";
const affiliateTag = "tohtaltech-20";

function createData(
  name: string,
  number: number,
  link: string,
  imagePath: string,
  pokemonType: string
) {
  return { name, number, link, imagePath, pokemonType};
}

function paddy(num: number, padlen: number, padchar: string) {
  var pad_char = typeof padchar !== 'undefined' ? padchar : '0';
  var pad = new Array(1 + padlen).join(pad_char);
  return (pad + num).slice(-pad.length);
}

function createImagePath(
  number: number
) {
  var path = "/img/" + paddy(number, 3, "0") + ".png";
  return path;
}

function convertPokemonTypeArray(
  pokemonTypes: string[]
) {
  if (pokemonTypes.length > 1) {
    var result = pokemonTypes[0];
    for (let i = 1; i < pokemonTypes.length; i++) {
      result = result + " - " + pokemonTypes[i];
    }
    return result;
  } else {
    return pokemonTypes[0];
  }
}

function createDataArr1() {
  var rows = []
  for (var i in pokedex) {
    var link = baseUrl.concat("&keywords=", pokedex[i].name.english, "&tag=", affiliateTag);
    //account for Haunter because apparently there's some random movie named "Haunter"
    if (pokedex[i].name.english == "Haunter")
      link = baseUrl.concat("&keywords=Pokemon+", pokedex[i].name.english, "&tag=", affiliateTag);

    if (pokedex[i].name.english == "Chikorita")
      break;
    rows.push(createData(pokedex[i].name.english, pokedex[i].id, link, createImagePath(pokedex[i].id), convertPokemonTypeArray(pokedex[i].type)));
  }
  return rows;
}

function createDataArr2() {
  var rows = []
  for (let i = 151; i < 251; i++) {
    var link = baseUrl.concat("&keywords=", pokedex[i].name.english, "&tag=", affiliateTag);
    rows.push(createData(pokedex[i].name.english, pokedex[i].id, link, createImagePath(pokedex[i].id), convertPokemonTypeArray(pokedex[i].type)));
  }
  return rows;
}

function createDataArr3() {
  var rows = []
  for (let i = 251; i < 386; i++) {
    var link = baseUrl.concat("&keywords=", pokedex[i].name.english, "&tag=", affiliateTag);
    rows.push(createData(pokedex[i].name.english, pokedex[i].id, link, createImagePath(pokedex[i].id), convertPokemonTypeArray(pokedex[i].type)));
  }
  return rows;
}

function createDataArr4() {
  var rows = []
  for (let i = 386; i < 493; i++) {
    var link = baseUrl.concat("&keywords=", pokedex[i].name.english, "&tag=", affiliateTag);
    rows.push(createData(pokedex[i].name.english, pokedex[i].id, link, createImagePath(pokedex[i].id),convertPokemonTypeArray(pokedex[i].type)));
  }
  return rows;
}

function createDataArr5() {
  var rows = []
  for (let i = 493; i < 649; i++) {
    var link = baseUrl.concat("&keywords=", pokedex[i].name.english, "&tag=", affiliateTag);
    rows.push(createData(pokedex[i].name.english, pokedex[i].id, link, createImagePath(pokedex[i].id), convertPokemonTypeArray(pokedex[i].type)));
  }
  return rows;
}

function createDataArr6() {
  var rows = []
  for (let i = 649; i < 721; i++) {
    var link = baseUrl.concat("&keywords=", pokedex[i].name.english, "&tag=", affiliateTag);
    rows.push(createData(pokedex[i].name.english, pokedex[i].id, link, createImagePath(pokedex[i].id), convertPokemonTypeArray(pokedex[i].type)));
  }
  return rows;
}

function createDataArr7() {
  var rows = []
  for (let i = 721; i < 809; i++) {
    var link = baseUrl.concat("&keywords=", pokedex[i].name.english, "&tag=", affiliateTag);
    rows.push(createData(pokedex[i].name.english, pokedex[i].id, link, createImagePath(pokedex[i].id), convertPokemonTypeArray(pokedex[i].type)));
  }
  return rows;
}

function createDataArr8() {
  var rows = []
  for (let i = 809; i < 898; i++) {
    var link = baseUrl.concat("&keywords=", pokedex[i].name.english, "&tag=", affiliateTag);
    rows.push(createData(pokedex[i].name.english, pokedex[i].id, link, createImagePath(pokedex[i].id), convertPokemonTypeArray(pokedex[i].type)));
  }
  return rows;
}

function createDataArr9() {
  var rows = []
  // for (let i = 905; i < 1025; i++) {
  //   var link = baseUrl.concat("&keywords=", pokedex[i].name.english, "&tag=", affiliateTag);
  //   rows.push(createData(pokedex[i].name.english, pokedex[i].id, link));
  // }
  rows.push(createData("Upcoming Pokemon NOT yet Released", 1025, baseUrl.concat("&keywords=", "pokemon", "&tag=", affiliateTag), "path", 'none'));
  return rows;
}

const data1: PokemonData[] = createDataArr1();
const data2: PokemonData[] = createDataArr2();
const data3: PokemonData[] = createDataArr3();
const data4: PokemonData[] = createDataArr4();
const data5: PokemonData[] = createDataArr5();
const data6: PokemonData[] = createDataArr6();
const data7: PokemonData[] = createDataArr7();
const data8: PokemonData[] = createDataArr8();
const data9: PokemonData[] = createDataArr9();

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
      <SearchAppBar></SearchAppBar>
      <Box
        sx={{ flexGrow: 1, bgcolor: 'darkgrey', display: 'flex'}}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' , bgcolor: 'floralwhite', maxHeight: 450}}
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
          <PokemonTable PokemonData={data1}></PokemonTable>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PokemonTable PokemonData={data2}></PokemonTable>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <PokemonTable PokemonData={data3}></PokemonTable>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <PokemonTable PokemonData={data4}></PokemonTable>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <PokemonTable PokemonData={data5}></PokemonTable>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <PokemonTable PokemonData={data6}></PokemonTable>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <PokemonTable PokemonData={data7}></PokemonTable>
        </TabPanel>
        <TabPanel value={value} index={7}>
          <PokemonTable PokemonData={data8}></PokemonTable>
        </TabPanel>
          <TabPanel value={value} index={8}>
          <PokemonTable PokemonData={data9}></PokemonTable>
        </TabPanel>
      </Box>
      <BottomNavBar></BottomNavBar>
      
    </div>
  );
}
