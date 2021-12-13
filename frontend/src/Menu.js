import styled from "styled-components"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar';
// import { FileDownload } from "@mui/icons-material";
import Paper from '@material-ui/core/Paper';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const Menu_header = styled.section`
  display: flex;
  align-items: center;
  justify-content: left;
  height: 10vh;
  background: #d1cfce;
  & Button {
    margin-left: 2em;
  }
`;

const Menu_body = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75vh;
`
const Menu_footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    height: 15vh;
    background-color: #838180;
`
const theme = createTheme();

function Menu() {

    
    return (
        <>
            <Menu_header>
                <Grid container item xs={4} spacing={30}>
                    <Typography variant="h2" color="text.primary"> {'NTU JOBS'}</Typography>
                </Grid>
                <Grid container item xs={10} spacing={0}>
                    <Typography variant="h5" color="text.primary"> {'job matching platform'} </Typography>
                </Grid>
                <Grid container item xs={3}>
                    <Button variant="contained" color="secondary" > Sign in </Button>
                    <Button variant="contained" color="primary" > Register </Button>
                </Grid>
                
            </Menu_header>
            <Menu_body>
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                {/* <WorkIcon /> */}
                            </Avatar>
                            <Typography component="h1" variant="h5">Sign in</Typography>
                            <Box component="form" noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                    />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                Sign In
                                </Button>
                            </Box>
                        </Box> 
                    </Container>
                </ThemeProvider>
            </Menu_body>
            <Menu_footer>

            </Menu_footer>  
        </>
        
        
    )
}

export default Menu
