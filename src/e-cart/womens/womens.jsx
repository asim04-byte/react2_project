// import React, { useState, useEffect} from 'react';
// import './womens.css';
// import { FaStar, FaRupeeSign } from 'react-icons/fa';
// import productData from '../productdetails'; 

// const Womens=()=>{
//   const [productList, setProductList] = useState([]);
 
//   useEffect(() => {
//     const offerProducts = productData.filter(item => item.category === 'womens');
//     console.log(offerProducts)
//     setProductList(offerProducts);
//   }, []);

//   return(
//     <div>
//       <div className="head">
      
//       <p>Womens Collections...!  </p>
      
//       </div>
//     <div className="product">
//       {productList.map((item,index) => (
//         <div className='cards' key={index}>
//           <img src={item.image} alt={item.name} />
//           <p className='Pname'>{item.name}</p>
//           <span className='rating'>{item.ratings}<FaStar /><p> Ratings</p></span>
//           <div className='Pr_price'>
//             <p><span><FaRupeeSign/></span>{item.offerprice}</p>
           
//             <s><span><FaRupeeSign/></span>{item.orginalPrize}</s>
//           </div>
//           <div className="cart">
//             <button className='cart_btn' >Add to cart</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
//   )
// }
// export default Womens;

import React, { useState, useEffect } from 'react';
import './womens.css';
import { FaStar, FaRupeeSign } from 'react-icons/fa';
import productData from '../productdetails';

const Womens = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const offerProducts = productData.filter((item) => item.category === 'womens');
    setProductList(offerProducts);
    setLoading(false);
  }, []);

  return (
    <div>
      <div className="head">
        <p>Womens Collections...! </p>
      </div>
      <div className="product">
        {loading ? (
          <p>Loading...</p>
        ) : (
          productList.map((item, index) => (
            <div className="cards" key={index}>
              <img src={item.image} alt={item.name} />
              <p className="Pname">{item.name}</p>
              <span className="rating">
                {item.ratings}
                <FaStar />
                <p> Ratings</p>
              </span>
              <div className="Pr_price">
                <p>
                  <span>
                    <FaRupeeSign />
                  </span>
                  {item.offerprice}
                </p>
                <s>
                  <span>
                    <FaRupeeSign />
                  </span>
                  {item.originalPrice}
                </s>
              </div>
              <div className="cart">
                <button className="cart_btn">Add to cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Womens;
