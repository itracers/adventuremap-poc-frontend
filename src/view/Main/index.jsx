import React from "react";
import { useState } from "react";
import { Map } from "../Map";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Table } from "../Table";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
            <Table/>
          </Route>
          <Route from="/" exact>
            <Map menuData={menuData} setMenuData={setMenuData} />
          </Route>
        </Switch>
      </Router>
    </>
  );
});
