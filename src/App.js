import './assets/css/App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Box, ThemeProvider } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './containers/Home';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import CateNews from './containers/CateNews';
import theme from './themes/theme';
import ProtectedComponent from "./components/ProtectedComponent";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list/:cateId" element={<CateNews />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="*"
              element={
                <Box sx={{
                  display: 'flex', 
                  margin: 10, 
                  justifyContent: 'center',
                  alignItems: 'center', 
                  flexDirection: 'column',
                }}>
                  <img
                    src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=996&t=st=1659760169~exp=1659760769~hmac=d7219a8edb6db0c2aa262d19b80da4227bf0e49ead75e05ff770377a5c84b214"
                    alt="404"
                    height="430px"
                  />
                  <p>Halaman Tidak ditemukan!!!</p>
                  <Link to="/">Beranda</Link>
                </Box>
              }
            />
          </Routes>
        </ScrollToTop>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
