import React from "react";
import { useState } from "react";
import { Map } from "../Map";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Table } from "../Table";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export const Main = React.memo(() => {
  const [menuData, setMenuData] = useState({ isOpen: false, data: null });
  return (
    <>
      <Header
        onMenu={() =>
          setMenuData({ isOpen: !menuData.isOpen, data: menuData.data })
        }
      />
      <Router>
        <Sidebar menuData={menuData} />
        <Switch>
          <Route from="/table" exact>
            <Table />
          </Route>
          <Route from="/" exact>
            <Map menuData={menuData} setMenuData={setMenuData} />
          </Route>
        </Switch>
      </Router>
      <Box sx={{ display: "flex", alignItems: "flex-end", position: "absolute", top: "70px", right: "50px" }}>
        <Autocomplete
          size="small"
          id="country-select"
          sx={{ my: 1, width: 300 }}
          options={[
            "Average one week rest price",
            "Population density",
            "Ecology situation",
            "Tourist attraction",
            "Middle wage",
            "Living wage",
            "Average hotel price",
            "Average bill of restoraints",
            "Entry restrictions",
            "Visa regime/Visa situation",
            "Restriction on length of stay",
            "Political situation",
            "Military situation",
          ]}
          autoHighlight
          getOptionLabel={(option) => option}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              {option}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Sort params"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />
      </Box>
    </>
  );
});
