import { Container } from "./styled";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import TableInline from "./TableInline";

export const Sidebar = ({ menuData }) => {
  const location = useLocation();
  return (
    <Container isOpen={menuData.isOpen}>
      {["/", "/map"].includes(location.pathname) ? (
        <>
          <TableInline country={menuData?.data?.country} />
          <br />
          <Button href="/table">Full table</Button>
        </>
      ) : null}
      {location.pathname === "/table" && <Button href="/">Map</Button>}
    </Container>
  );
};
