import React from 'react'
import { useSelector } from 'react-redux';
import AddtoCard from '../../Components/Card2';
import { Typography } from '@mui/material';

const CardProduct = () => {

  const selector = useSelector((state) => state.Product.Products);
  console.log("data from redux===>", selector.length)


  return (
    <>
     {selector.length > 0 ? selector.map((item)=>{
      return(
        <AddtoCard title={item.title} description={item.description} prices={item.price} image={item.image} key={item.id} />

      )

     }) : <Typography sx={{textAlign: 'center' , marginTop: 8 , fontSize: 30}}>No Item Found</Typography> }

    </>


  )
}

export default CardProduct