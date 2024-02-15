import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SingleCards from '../../Components/SingleCard';
import { ShowMore } from '../../Config/Redux/Reducers/productSlice';
// import Swal from 'sweetalert2'

const SingleProduct = () => {


  const params = useParams()
  const dispatch = useDispatch();
  const [SingleProductColl, setSingleProductcoll] = useState()


  const [CardItemExisted , setCardItemExisted] = useState(false)

  const [id , setid] = useState()


  useEffect(() => {

    function SIngleProductGet() {

      const Api = axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then((res) => {
          setSingleProductcoll(res.data)
          setid(res.data.id)
        }).catch((err) => {
          console.log(err);
        })
    }
    SIngleProductGet()

  }, [])


  


  function AddtoCard(item) {

    if(id === item.id){
      console.log("already exist");
      setCardItemExisted(true)

    }else{      
      console.log("id nahi hai bhai");
    }
    

    if(CardItemExisted){
      console.log('Already Exist');
      alert('Product Already Exist')

    }else{
      console.log("lay bhai kardeya");
      dispatch(
        ShowMore({
          title: item.title,
          description: item.description ,
          image: item.image,
          price: item.price,
        })
      );
    }
    
  }




  return (
    <>
      {SingleProductColl ?
        <SingleCards title={SingleProductColl.title} description={SingleProductColl.description} prices={SingleProductColl.price} category={SingleProductColl
          .category} image={SingleProductColl.image} Addtocard={() => { AddtoCard(SingleProductColl) }} />
        : "Loading"}

    </>

  )
}

export default SingleProduct