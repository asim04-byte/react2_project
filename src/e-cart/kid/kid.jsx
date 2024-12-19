import React, { useState, useEffect} from 'react';
import './kid.css';
import { FaStar, FaRupeeSign } from 'react-icons/fa';
import productData from '../productdetails'; 

const Kid=()=>{
  const [productList, setProductList] = useState([]);
 
  useEffect(() => {
    const offerProducts = productData.filter(item => item.category === 'kids');
    console.log(offerProducts)
    setProductList(offerProducts);
  }, []);

  return(
    <div>
      <div className="head">
      
      <p>Kids Collections...!  </p>
      
      </div>
    <div className="product">
      {productList.map((item,index) => (
        <div className='cards' key={index}>
          <img src={item.image} alt={item.name} />
          <p className='Pname'>{item.name}</p>
          <span className='rating'>{item.ratings}<FaStar /><p> Ratings</p></span>
          <div className='Pr_price'>
            <p><span><FaRupeeSign/></span>{item.offerprice}</p>
           
            <s><span><FaRupeeSign/></span>{item.orginalPrize}</s>
          </div>
          <div className="cart">
            <button className='cart_btn' >Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
export default Kid;