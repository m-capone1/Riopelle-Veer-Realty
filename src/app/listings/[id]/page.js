'use client'
import axios from "axios";

export default async function ListingDetails({ params }) {
    const { id } = params;

    const fetchListing = async () => {
        try {
            const response = await axios.get(`https://66f6dc9bb5d85f31a3416723.mockapi.io/Houses/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching listing details:', error);
            return null;
        }
    };

    const listing = await fetchListing();

    if (!listing) {
        return <p>Listing not found</p>;
    }

    return (
        <section>
            <h1>{listing.address}</h1>
            <img src={listing.image} alt={listing.address} />
            <p>City: {listing.city}</p>
            <p>Bedrooms: {listing.bedrooms}</p>
            <p>Bathrooms: {listing.bathrooms}</p>
            <p>Square Feet: {listing.sqft}</p>
            <p>Price: {listing.price}</p>
        </section>
    );
}