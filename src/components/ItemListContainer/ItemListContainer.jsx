import { useState, useEffect } from 'react';

import data from "../data/products.json";

import Container from 'react-bootstrap/Container';
const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(( )=> {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(data)
            }, 2000)
        })
        promesa.then(result => setProducts(result))
    }, [])

    return (
        <Container>
            <h1>{greeting}</h1>
            {products.lenght === 0 ? (
            <div><p>Loading...</p></div>
            ): (
                products.map( phone =>(
                <div key={phone.id}>{phone.phone_model}</div>
                ))
            )}
        </Container>
    )
}
export default ItemListContainer