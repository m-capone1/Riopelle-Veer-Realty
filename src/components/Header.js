import Image from 'next/image';
import More from 'next/image';

export default function Header() {

    return (
      <header className="flex items-center w-full bg-blue-500 text-white p-4">
        <div className="h-auto w-1/3 md:w-1/3 lg:w-1/6">
            <Image
                src="/images/logo.png"
                alt="Logo"
                width={200}
                height={100}
                priority
            />
        </div>
        <section className='flex flex-1 justify-end'>
            <div className="lg:flex m:text-sm lg:text-sm gap-4">
                <div className='hidden lg:block text-nowrap hover:text-slate-300 cursor-pointer hover:underline'>HOME</div>
                <div className='hidden lg:block text-nowrap hover:text-slate-300 cursor-pointer hover:underline'>OUR PROPERTIES</div>
                <div className='hidden lg:block text-nowrap hover:text-slate-300 cursor-pointer hover:underline'>BUY</div>
                <div className='hidden lg:block text-nowrap hover:text-slate-300 cursor-pointer hover:underline'>SELL</div>
                <div className='hidden lg:block text-nowrap hover:text-slate-300 cursor-pointer hover:underline'>RESOURCES</div>
                <div className='hidden lg:block text-nowrap hover:text-slate-300 cursor-pointer hover:underline'>CONTACT US</div>
                <div className='hidden lg:block text-nowrap hover:text-slate-300 cursor-pointer hover:underline'>AREA GUIDE</div>
                <div className="flex w-1/2 sm:w-1/5 md:w-1/3 lg:w-1/6">
                    <button>MENU</button>
                </div>
            </div>
        </section>
      </header>
    );
  }