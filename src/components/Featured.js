import FeaturedImg from 'next/image';

export default function Featured() {
    const locations = ["THORNBURY", "LEITH", "CLARKSBURG", "COLLINGWOOD", "CRAIGLEIGH", "THE BLUE MOUNTAINS"];
    
    return (
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
    );
}