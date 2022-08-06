import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import NewspaperIcon  from '@mui/icons-material/Newspaper';
import Tooltip from '@mui/material/Tooltip';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';

const navItems = [
    { text: 'Beranda', link: '/' },
    { text: 'Bisnis', link: '/list/business' },
    { text: 'Olahraga', link: '/list/sports' },
    { text: 'Teknologi', link: '/list/technology' },
    { text: 'Ilmu Pengetahuan', link: '/list/science' },
    { text: 'Kesehatan', link: '/list/health' },
];
const settings = [
    { text: 'Profil', link: '/profile' },
    { text: 'Daftar Baca', link: '/readlist' },
];

const Navbar = () => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [user, loading] = useAuthState(auth);

    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/signin");
        } catch (err) {
            console.log(err);
        }
    };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <NewspaperIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BeritaKu
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navItems.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={page.link}>
                     {page.text}
                    </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <NewspaperIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 6, display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.text}
                className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
              >
                {item.text}
              </NavLink>
            ))}
          </Box>
          {loading ? null : user ? (
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting.text} onClick={handleCloseUserMenu}>

                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={setting.link}>
                        {setting.text}
                        </Link>
                    </MenuItem>
                ))}
                    <MenuItem
                        onClick={() => {
                            handleCloseUserMenu();
                            onLogout();
                        }}
                        >
                        <Typography>Keluar</Typography>
                    </MenuItem>
                </Menu>
            </Box>
          ) : (
            <NavLink
                to={'/signin'}
                key={'Sign In'}
                className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
            >
                Masuk
            </NavLink>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
