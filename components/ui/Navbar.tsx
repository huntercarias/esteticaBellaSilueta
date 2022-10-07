import NextLink from 'next/link';

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <NextLink href='/' passHref >
                <Link display='flex' alignItems='center'>
                    <Typography variant='h5'  sx={ { ml: 0.5} }>Estetica Bella Silueta</Typography>
                </Link>  
            </NextLink>

            <Box flex={ 1 } />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <NextLink href='/Masajes' passHref>
                    <Link>
                        <Button>Masajes</Button>
                    </Link>
                </NextLink>
                <NextLink href='/Faciales' passHref>
                    <Link>
                        <Button>Faciales</Button>
                    </Link>
                </NextLink>
                <NextLink href='/PesoMedidas' passHref>
                    <Link>
                        <Button>Peso y Medidas</Button>
                    </Link>
                </NextLink>
            </Box>


            <Box flex={ 1 } />


            <NextLink href='/' passHref>
                <Link display='flex' alignItems='center'>
                    <Typography variant='h5'  sx={{  ml: 0.5  }}>Estetica Bella Silueta</Typography>
                </Link>  
            </NextLink>

            <IconButton>
                <SearchOutlined />
            </IconButton>




            <Button>
                Login
            </Button>

        </Toolbar>
    </AppBar>
  )
}
