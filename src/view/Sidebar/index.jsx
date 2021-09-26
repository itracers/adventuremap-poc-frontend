import { Container } from "./styled";
import { Link } from "react-router-dom";
export const Sidebar = ({ menuData }) => {
  return (
    <Container isOpen={menuData.isOpen}>
        <div variant="h3">{menuData?.data?.country || null}</div>
        <Link to="/table">Таблица</Link>
    </Container>
  );
};
