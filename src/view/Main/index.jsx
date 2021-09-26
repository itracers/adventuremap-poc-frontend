import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export function Main() {
  return (
    <Link to="/signin">
      <Button variant="contained">Test</Button>
    </Link>
  );
}
