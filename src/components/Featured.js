"use client"

import FeaturedImg from 'next/image';
import Search from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';

import HouseCard from './HouseCard';

export default function Featured() {
    const locations = ["THORNBURY", "LEITH", "CLARKSBURG", "COLLINGWOOD", "CRAIGLEIGH", "THE BLUE MOUNTAINS"];
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchHouses = async () => {
            try {
              const response = await axios.get("https://66f6dc9bb5d85f31a3416723.mockapi.io/Houses");
              console.log(response.data);
              setListings(response.data);
            } catch (error) {
              console.error('Error fetching houses:', error);
            }
          };

          fetchHouses();
    },[])

    return (
    <>
        <section className="flex">
            <FeaturedImg
                src="/images/featured.png"
                alt="featured"
                width={200}
                height={100}
                className='w-1/2'
                unoptimized
            />
            <div className="flex flex-col justify-center items-center w-1/2">
                <h2 className='pt-4 pb-2 text-base lg:text-xl lg:p-8'>Find your new home by searching below.</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-4'>
                    {locations.map((item, index) => (
                        <div className='flex justify-center outline outline-2 my-2 px-2 py-2 hover:text-white hover:bg-black cursor-pointer' key={index}>{item}</div>
                    ))}
                </div>
            </div>
        </section>
        <section className='flex flex-col my-24 justify-center items-center'>
            <h2 className='text-2xl lg:text-4xl py-4 lg:py-8'>FEATURED LISTINGS</h2>
            <form className="w-full px-4 lg:px-48">
                <div className='flex gap-2 w-full'>
                    <input 
                        placeholder='Where would you like to look today?'
                        className='p-3 flex-grow w-full border border-gray-300 rounded'
                    ></input>
                    <button type="submit" className="flex-none">
                        <Search 
                            src="/images/search.png"
                            alt="featured"
                            width={40}
                            height={40}
                        />
                    </button>
                </div>
            </form>
        </section>
        <section>
            {listings.map((listing, index) =>(
                <HouseCard 
                    img = {listing.image} 
                    address={listing.address} 
                    city={listing.city} 
                    bedrooms={listing.bedrooms} 
                    bathrooms={listing.bathrooms} 
                    sqft={listing.sqft} 
                    price={listing.price}
                />
            ))}
        </section>
      </>
    );
}