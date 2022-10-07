import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../components/layouts';
import { initialData } from '../database/faciales';
import { ProductList } from '../components/products';


const Faciales = () => {
  return (
    <ShopLayout title={'Belle Siluet - Inicio'} pageDescription={'Bella silueta'}>

        <ProductList 
          products={ initialData.products as any }
        />
    

    </ShopLayout>
  )
}

export default Faciales
