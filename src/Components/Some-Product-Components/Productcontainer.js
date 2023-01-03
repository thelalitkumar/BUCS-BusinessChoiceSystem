import React from 'react'
import './Productcontainer.css'
import { Link } from 'react-router-dom';
const Productcontainer = (product) => {
    // console.log(p)
    let p = product.product

    let mrp = parseInt(p.price)
    const saleprice = mrp - 10/100*mrp


    return (
        <div className='product-container'>
            <img src={p.prodimage}></img>
            <div className='product-details'>
                <a href={`/product/${p.producttype}/${p.id}`}>
                    <button className='producttitle'>{p.producttitle}</button>
                </a>

                <div className='price-container'>
                    <p className='mrp'>MRP: <p className='rate'>₹{mrp}</p></p>
                    <p className='saleprice'>Discount Price: <p className='rate'>₹{saleprice}</p></p>
                    <p className='yousave'>You Save: ₹{mrp - saleprice}</p>
                </div>
                <Link to={`/product/${p.producttype}/${p.id}`}><button className='showmore-btn'>Explore &gt;</button></Link>

            </div>
        </div >
    )
}

export default Productcontainer