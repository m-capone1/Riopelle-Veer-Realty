import FeaturedImg from 'next/image';

export default function Featured() {
    return (
      <section className="flex">
        <FeaturedImg
            src="/images/featured.png"
            alt="featured"
            width={200}
            height={100}
            className='w-1/2'
            priority
        />
        <div className="w-1/2">

        </div>
      </section>
    );
}