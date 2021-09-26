import React from "react";
import { useState } from "react";
import { Map } from "../Map";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Table } from "../Table";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from "react-router-dom";


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
            "Средняя стоимость недельного отдыха",
            "Плотность населения",
            "Экологическая обстановка",
            "Туристская привлекательность",
            "Средняя ЗП",
            "Прожиточный минимум",
            "Средняя стоимость отелей",
            "Средний чек ресторанов",
            "Органичения для въезда",
            "Визовый режим",
            "Ограничения по сроку прибывания",
            "Политическая обстановка",
            "Военная обстановка",
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
