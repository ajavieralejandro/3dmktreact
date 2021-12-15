import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import SingPage from "./pages/signpage/SingPage";
import Navbar from "../src/components/navbar";
import { Paper,Container } from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles';
import { createTheme, adaptV4Theme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <div className="App">
    <Navbar />
    <Container>
    <Paper>
      <SingPage />
      </Paper>
      </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;
