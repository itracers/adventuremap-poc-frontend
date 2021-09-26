import { Container } from "./styled";

export const Sidebar = ({ menuData }) => {
  return (
    <Container isOpen={menuData.isOpen}>
      <div variant="h3">{menuData?.data?.country || null}</div>
    </Container>
  );
};
