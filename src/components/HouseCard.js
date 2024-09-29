import { useState } from "react";

export default function HouseCard({img, address, city, bedrooms, bathrooms, sqft, price}){

    const [showPrice, setShowPrice] = useState(true);
    
    return (
        <section className="flex flex-col justify-center items-center shadow-md w-4/5 cursor-pointer lg:w-1/4">
            <div>
                <img src={img} alt="house-image" className="relative"></img>
                <div className="">{price}</div>
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