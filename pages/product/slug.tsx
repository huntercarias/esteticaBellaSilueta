import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { ShopLayout } from '../../components/layouts';
import { ProductSlideshow, SizeSelector } from '../../components/products';
import { initialData } from '../../database/products';
import { ItemCounter } from '../../components/ui/ItemCounter';

const product = initialData.products[0];


const ProductPage = () => {
  return (
    <ShopLayout title={ product.title } pageDescription={ product.description }>
    
      <Grid container spacing={3}>

        <Grid item xs={12} sm={ 7 }>
          <ProductSlideshow 
            images={ product.images }
          />
        </Grid>

        <Grid item xs={ 12 } sm={ 5 }>
          <Box display='flex' flexDirection='column'>

            {/* titulos */}
            <Typography variant='h1' component='h1'>{ product.title }</Typography>
  



            {/* Agregar al carrito */}
            <Button color="secondary" className='circular-btn'>
              Agregar cita
            </Button>

            {/* <Chip label="No hay disponibles" color="error" variant='outlined' /> */}

            {/* Descripción */}
            <Box sx={{ mt:3 }}>
              <Typography variant='subtitle2'>Descripción</Typography>
              <Typography variant='body2'>{ product.description }</Typography>
            </Box>

          </Box>
        </Grid>


      </Grid>

    </ShopLayout>
  )
}

export default ProductPage