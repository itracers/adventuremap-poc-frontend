import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from "react-router-dom";
import { countries } from "./countries";
import { Container } from "./styled.js";

export function SignUp() {
    return (
        <Container >
            <CssBaseline />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }} >
                    <AccountCircle />
                </Avatar>
                <Typography component="h1" variant="h5"> Sign up </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField fullWidth id="input-with-sx" label="Email" variant="standard" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField fullWidth id="input-with-sx" label="Password" variant="standard" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <PermIdentityIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField fullWidth id="input-with-sx" label="Name" variant="standard" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <PublicIcon sx={{ color: 'action.active', mr: 1, my: 1.8 }} />
                        <Autocomplete
                            size="small"
                            id="country-select"
                            sx={{ my: 1, width: 300 }}
                            options={countries}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => (
                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                    <img
                                        loading="lazy"
                                        width="20"
                                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                        alt=""
                                    />
                                    {option.label} ({option.code}) 
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Choose a country"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                />
                            )}
                        />
                    </Box>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
                        Sign up
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/signin">
                                Sign in
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