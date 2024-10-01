import { useRouter } from 'next/navigation';

export default function HouseCard({id, img, address, city, bedrooms, bathrooms, sqft, price}){
    const router = useRouter();

    const handleClick = () => {
        router.push(`/listings/${id}`);
    }

    return (
        <section onClick={handleClick} className="flex flex-col shadow-md w-4/5 cursor-pointer lg:w-1/4 rounded">
            <div>
                <img src={img} alt="house-image" className="rounded hover:opacity-95"></img>
            </div>
            <div className="flex flex-col m-2">
                <div className="font-bold text-lg">${price}</div>
                <div className="py-2 text-slate-500">{address}, {city}</div>
                <div className="flex gap-2 my-2 self-center">
                    <div className="bg-black rounded-2xl text-white px-4 py-2 text-sm hover:bg-zinc-800" >{bedrooms} bed</div>
                    <div className="font-bold text-lg self-center">·</div>
                    <div className="bg-black rounded-2xl text-white px-4 py-2 text-sm hover:bg-zinc-800">{bathrooms} bath</div>
                    <div className="font-bold text-lg self-center">·</div>
                    <div className="bg-black rounded-2xl text-white px-4 py-2 text-sm hover:bg-zinc-800">{sqft} sqft</div>
                </div>
            </div>
        </section>
    );
}