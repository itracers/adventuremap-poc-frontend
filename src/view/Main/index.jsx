import React, { useEffect } from "react";
import { useState } from "react";
import { Map } from "../Map";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Table } from "../Table";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {fetchJson} from "../../utils";
import { API_URL } from "../../consts";

export const Main = React.memo(() => {
	const [menuData, setMenuData] = useState({ isOpen: false, data: null });
	const [listFeatures, setListFeatures] = useState([]);
  const namesFeatures = listFeatures?.map((feature)=>{
    return {
      label: feature.name,
      id: feature.id,
    }
  });
	useEffect(() => {
		fetchJson(`${API_URL}/features`).then((features) => {
			setListFeatures(features);
		});
	}, []);
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
			<Box
				sx={{
					display: "flex",
					alignItems: "flex-end",
					position: "absolute",
					top: "70px",
					right: "50px",
				}}
			>
				<Autocomplete
          onChange = {(...allo)=>console.log(...allo)}
					size="small"
					id="country-select"
					sx={{ my: 1, width: 300 }}
					options={namesFeatures}
					autoHighlight
					getOptionLabel={(option) => option.label}
					renderOption={(props, option) => (
						<div
              {...props}
              key = {option.id}
						>
							{option.label}
						</div>
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
