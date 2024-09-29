import { useState } from "react";

export default function HouseCard({img, address, city, bedrooms, bathrooms, sqft, price}){

    const [showPrice, setShowPrice] = useState(true);
    
    return (
        <section className="flex flex-col justify-center items-center shadow-md">
            <div>
                <img src={img} alt="house-image"></img>
                <div>{price}</div>
            </div>
            <div>
                <div>{address}</div>
                <div>{city}</div>
                <div className="flex bg:black text-white">
                    <div>{bedrooms}</div>
                    <div>{bathrooms}</div>
                    <div>{sqft}</div>
                </div>
            </div>
        </section>
    );
}