
export default function Hero() {
    return (
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Optional overlay */}
  
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Site</h1>
          <p className="text-lg md:text-2xl mb-6">Explore our services and offerings</p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    );
  }