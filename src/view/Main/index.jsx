import { useState } from "react";
import { Map } from "../Map";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Container } from "./styled";
export function Main() {
  const [menuData, setMenuData] = useState({ isOpen: false, data: null });
  return (
    <>
      <Header
        onMenu={() =>
          setMenuData({ isOpen: !menuData.isOpen, data: menuData.data })
        }
      />
      <Container isOpen = {!menuData.isOpen}>
        <Sidebar menuData={menuData} />
        <Map menuData={menuData} setMenuData={setMenuData} />
      </Container>
    </>
  );
}
