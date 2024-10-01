import { useState } from "react";

export default function HouseCard({img, address, city, bedrooms, bathrooms, sqft, price}){

    const [showPrice, setShowPrice] = useState(true);
    
    return (
        <section className="flex flex-col shadow-md w-4/5 cursor-pointer lg:w-1/4 rounded">
            <div>
                <img src={img} alt="house-image" className="rounded hover:opacity-95"></img>
            </div>
            <div className="flex flex-col m-2">
                <div className="font-bold text-lg">${price}</div>
                <div className="py-2 text-slate-500">{address}, {city}</div>
                <div className="flex gap-4 my-2 self-center">
                    <div className="bg-black rounded-2xl text-white px-4 py-1 text-sm" >{bedrooms} bed</div>
                    <div className="font-bold text-lg">·</div>
                    <div className="bg-black rounded-2xl text-white px-4 py-1 text-sm">{bathrooms} bath</div>
                    <div className="font-bold text-lg">·</div>
                    <div className="bg-black rounded-2xl text-white px-4 py-1 text-sm">{sqft} sqft</div>
                </div>
            </div>
        </section>
    );
}