import ProductCard from "./ProductCard";
import { AppContext } from "./AppContext";
import { useContext } from 'react';

const ShopNow = () => {

    const Products = [
        {   id: "1",
            src: "public/homepageCakes/fruityCakeLunch.png",
            name: "Fruity Cake Dessert",
            descr: "Light sponge cake with colorful fruit toppings",
            price: 8_000,
            unit: ""
        },
        {   id: "2",
            src: "public/homepageCakes/pancakeTowers.png",
            name: "Pancake Towers",
            descr: "Delicious pancakes for lunch, and some to share ",
            price: 4_000,
            unit: "/box" 
        },
        {   id: "3",
            src: "public/homepageCakes/BirthdayClassic.png",
            name: "Birthday Classic",
            descr: "Our signature birthday piece",
            price: 45_000,
            unit: ""  
        },
        {   id: "4",
            src: "public/homepageCakes/BirthdayClassic II.png",
            name: "Birthday Classic II",
            descr: "Classic birthday re-imagined",
            price: 35_000,
            unit: ""  
        },
        {   id: "5",
            src: "public/homepageCakes/Waffle-SnackPlatter.png",
            name: "Waffle platter",
            descr: "Waffles served with syrup, and the small chop combo.",
            price: 12_000,
            unit: "/box"    
        },
        {   id: "6",
            src: "public/homepageCakes/TastyBurgerDeluxe.png",
            name: "Burger deluxe",
            descr: "Pack of 3, dripping with cream",
            price: 5_000,
            unit: "/box"   
        },
        {   id: "7",
            src: "public/homepageCakes/cupcakeDelight.png",
            name: "cupcake delight",
            descr: "Assorted Cupcakes, pack of 12",
            price: 15_000,
            unit: "/box"  
        },
        {   id: "8",
            src: "public/homepageCakes/RedVelevetCups.png",
            name: "Red velvet cupcakes",
            descr: "Simply red",
            price: 1_500,
            unit: "/cupcake"   
        },
        {   id: "9",
            src: "public/homepageCakes/sweeteenedJamDoughnuts.png",
            name: "Sweetened Jam Doughnuts",
            descr: "Soft doughnuts with sweet jam and dusted sugar",
            price: 3_000,
            unit: "/pack"  
        },
        {   id: "10",
            src: "public/homepageCakes/Cake-2.png",
            name: "2-Tower Wedding maxi",
            descr: "The right amount of mimimalism, crusted with chocolate and coconut",
            price: 500_000,
            unit: ''    
        },
        {   id: "11",
            src: "public/homepageCakes/Cake-1.png",
            name: "4-tier Wedding classic I",
            descr: "Traditional four-tier cake for your Luxury weddings.",
            price: 700_000, 
            unit: ''  
        },
        {   id: "12",
            src: "public/homepageCakes/Cake-4.png",
            name: "4 tier Wedding Classic II",
            descr: "Elegant four-tier cake with classic white icing and delicate design",
            price: 650_000,
            unit: ''    
        },
        {   id: "13",
            src: "public/homepageCakes/ovenChocolateRegular.png",
            name: "Oven Chocolate Regulars",
            descr: "Naked, fresh oven baked flavor with berries and nuts",
            price: 6_000,
            unit: "/box"  
        },
        {   id: "14",
            src: "public/homepageCakes/creamyLoveDeluxe.png",
            name: "Creamy Love deluxe",
            descr: "Soft vanilla sponge with nuts and rich creamy filling",
            price: 45_000,
            unit: ''  
        },
       
    ]


    return (
        <>
            <div className="shopContainer">
                <div className=""><h1 className="pageTitle">Orders</h1></div>
                <div className="instruction">Add to your cart from our menu items and proceed to checkout</div>
                
                <div className="flexContainer">
                    {
                        Products.map((product) => {
                            return(
                                <ProductCard 
                                    key={product.id}
                                    src={product.src}
                                    name={product.name}
                                    descr={product.descr}
                                    price={product.price}
                                    product={product} //for the add to order button
                                />
                            );
                        })
                        
                    }
                </div>
            </div>
            
        </>
    );
}

export default ShopNow;