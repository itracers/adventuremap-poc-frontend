import React from "react";
import { useState } from "react";
import { Map } from "../Map";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

export const Main =  React.memo(()=>{
  const [menuData, setMenuData] = useState({ isOpen: false, data: null });
  return (
    <>
      <Header
        onMenu={() =>
          setMenuData({ isOpen: !menuData.isOpen, data: menuData.data })
        }
      />
        <Sidebar menuData={menuData} />
        <Map menuData={menuData} setMenuData={setMenuData} />
    </>
  );
});
