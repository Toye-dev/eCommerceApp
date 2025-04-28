import { useContext } from "react";
import { AppContext } from "./AppContext";

const ProductCard = ({id, src, name, descr, price, product}) => {

    const { addToOrder } = useContext(AppContext); //using appcontext because both shopNow and productCard need the function. Its defined in productcard file but the ShopNow is where the productCard component is  
    
    return (
    <>  
        <div className="productCard" key={id} >
            <div className="imageContainer">
                <img src={src}/>
            </div>
            <div className="productDetails">
                <p className="productName">{name}</p>
                <p className="descr">{descr}</p>
                <p className="price">₦{price}</p>
            </div>
            <div className="border">
                <button 
                className="order"
                onClick={() => addToOrder(product)} //this is the new product whose id we are working with, so we pass it to the prop to the productCard component in ShopNow
                >
                    Add to order
                </button>
            </div>
        </div>
    </>
    );
};

export default ProductCard;