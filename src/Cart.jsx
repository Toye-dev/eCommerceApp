import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcPaypal, faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons';
;

const Cart = () => {
    
    const { cart, addToOrder, reduceOrder } = useContext(AppContext);
    
    return (
        <>
            <div className="cartPage">

                <div className="cartHeader">
                    <h1 className="cartTitle">Cart</h1>
                    <Link to="/shopnow"><span className="back">←</span></Link>
                </div>

                <div className="cartContent">

                    <div className="cartandCheckout">
                        {cart.length !== 0 && <div className="line"></div>}
                    
                        {cart.length === 0 
                        ? 
                        <div className='oops'>
                            <h2>Oops, you have no shopping in your cart</h2>
                            <p>Please go back to the menu page and fill it up!</p>
                        </div>
                        : 
                        <div className="firstRow">
                            <div className="leftSide">Order Item(s)</div>
                            <div className="rightSide">
                                <p style={{ width: '80px', textAlign: 'center' }}>Price</p>
                                <p style={{ width: '100px', textAlign: 'center' }}>Quantity</p>
                                <p style={{ width: '100px', textAlign: 'center' }}>Sub-total</p>
                            </div>
                        </div>}

                        {cart.length !== 0 && <div className="line"></div>}

                        {cart.map((order) => {
                            return (
                                <>
                                    <div className="otherRows">
                                        <div className="leftSideItem">
                                            <img src={order.src}/>
                                            <p>{order.name}</p>
                                        </div>
                                        <div className="rightSideItem">
                                            <p style={{ width: '80px', textAlign: 'center' }}>₦{order.price} {order.unit}</p>
                                            <div className="qtyDiv">
                                                <div className="qty">{order.quantity}</div>
                                                
                                                <div className="changeqty">
                                                    <div className="plusDiv" onClick={() => addToOrder(order)}>+</div>
                                                    <div className="minusDiv" onClick={() => reduceOrder(order.id)}>-</div>
                                                </div>
                                            </div>
                                            <p style={{ width: '100px', textAlign: 'center', fontWeight: 'bold' }}>₦{order.price * order.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="bottomline"></div>
                                </>
                            );

                        })}
                    </div>

                    <div className="checkoutSect">
                        {cart.length > 0 
                        ? 
                        <div className="checkoutSection">
                            <div className='checkOut'>
                                <div className="line"></div>
                                <div className="sectionItems">
                                    <p>Sub-total:</p> <span>₦{cart.reduce((total, item) => total + item.quantity * item.price, 0)}</span>
                                </div> 

                                <div className="sectionItems">
                                    <p>Delivery: </p><span>-</span>
                                </div>
                                
                                <div className="line"></div>

                                <div className="sectionItems">
                                    <p>Grand-total: </p><span>₦{cart.reduce((total, item) => total + item.quantity * item.price, 0)}</span>
                                </div>
                                
                                <Link to="/finalpage"><button className='checkoutButton'>Proceed to checkout</button></Link>
                                
                                <p className='paymethods'>Accepted Payment Methods</p>
                                <div className="payment"> 
                                    <img className="visacard" src="/homepageCakes/visa-svgrepo-com.svg" />
                                    <div className="mCard"> <img className="mastercard" src="/homepageCakes/mastercard-2-logo-svgrepo-com.svg" /></div>
                                    <img className="paypal" src="/homepageCakes/paypal-3-svgrepo-com (1).svg" />
                                </div>
                                <div className="line"></div>
                            </div>
                        </div>
                        : 
                        ""}
                    </div>
                </div>

            </div>
           
        </>
    );
};

export default Cart;

