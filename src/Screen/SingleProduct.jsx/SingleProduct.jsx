import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SingleCards from '../../Components/SingleCard';


const SingleProduct = () => {

  const params = useParams()
  const [SingleProductColl , setSingleProductcoll] = useState()

  

  useEffect(() => {

    function SIngleProductGet() {

      const Api = axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then((res) => {
          console.log(res.data);
          setSingleProductcoll(res.data)
        }).catch((err) => {
          console.log(err);
        })
    }
    SIngleProductGet()

  }, [])




  return (
    <>
    {SingleProductColl ?
       <SingleCards title={SingleProductColl.title} description={SingleProductColl.description} prices={SingleProductColl.price} category={SingleProductColl
        .category} image={SingleProductColl.image} />
       : "Loading"}

    </>

  )
}

export default SingleProduct