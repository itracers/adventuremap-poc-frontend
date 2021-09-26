import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { Container } from "./styled.js";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <Container>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
          <AccountCircle />
        </Avatar>
        <Typography component="h1" variant="h5">
          {" "}
          Sign in{" "}
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              id="input-with-sx"
              label="Email"
              variant="standard"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              id="input-with-sx"
              label="Password"
              variant="standard"
            />
          </Box>
          <FormControlLabel
            sx={{ mt: 2 }}
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/signup">
                Sign Up
              </Link>
            </Grid>
            <Grid item>
              Forgot password?
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
