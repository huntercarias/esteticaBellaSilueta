import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../components/layouts';
import { initialData } from '../database/Masajes';
import { ProductList } from '../components/products';


const Masajes = () => {
  return (
    <ShopLayout title={'Belle Siluet - Inicio'} pageDescription={'Bella silueta'}>

        <ProductList 
          products={ initialData.products as any }
        />
    

    </ShopLayout>
  )
}

export default Masajes
