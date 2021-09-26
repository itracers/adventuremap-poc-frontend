import { Container } from "./styled";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = ({ menuData }) => {
    const location = useLocation()
  return (
    <Container isOpen={menuData.isOpen}>
      <div variant="h3">{menuData?.data?.country || null}</div>
      {location.pathname == "/" && <Link to="/table">Таблица</Link>}
      {location.pathname == "/table" && <Link to="/">Карта</Link>}
    </Container>
  );
};
