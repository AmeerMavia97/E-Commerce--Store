import React, { useEffect, useState } from 'react'
import Navbarss from '../../Components/Navbar'
import axios from 'axios'
import Cards from '../../Components/Card'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Allproduct = () => {

  const [collection, setcollection] = useState([])
    

    const navigate = useNavigate()
    

    useEffect(() => {

        function Get() {

            const Api = axios.get('https://fakestoreapi.com/products')
                .then((res) => {
                    console.log(res.data);
                      setcollection(res.data)
                }).catch((err) => {
                    console.log(err);
                })
        }
        Get()

    }, [])

    function ShowMores(id){
        navigate(`/singleproduct/${id}`)
    }

    return (
        <>


            {collection.map((item) => {
                return (
            <Cards key={item.id} image={item.image} title={item.title} description={item.description} price={item.price} showmore={()=>{ShowMores(item.id)}} />

                )
            })}
        </>
    )
}

export default Allproduct