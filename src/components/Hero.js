
export default function Hero() {
    return (
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">You’ve Earned This</h1>
          <p className="text-lg md:text-2xl mb-6">Now, Let Us Take Care Of Everything.</p>
          <button className="px-6 py-3 bg-transparent outline outline-2 font-semibold text-white rounded hover:bg-white hover:text-black hover:outline-none transition duration-300">
            FIND MY DREAM HOME
          </button>
        </div>
      </div>
    );
}