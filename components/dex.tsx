import Image from "next/image";

export default function Dex() {
  const dexes = [
    {
      name: "Shadow Exchange",
      logo: "/shadow.svg",
     
    },
    {
      name: "SwapX",
      logo: "/swapx.png",
    
    },
    {
      name: "Wagmi",
      logo: "/wagmi.png",
   
    },
    {
      name: "Silver Swap",
      logo: "/silver.jpg",
     
    },
    {
      name: "Spooky Swap",
      logo: "/spooky.svg",
     
    },
    {
      name: "Sushi Swap",
      logo: "/sush.png",
    
    }
  ];

  return (
    <section className="py-16 flex flex-col items-center bg-[#212121]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Supported Exchanges
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {dexes.map((dex) => (
            <a 
              key={dex.name} 
             
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center group transition-transform duration-300 hover:scale-110"
            >
              <div className="bg-black p-1 rounded-full mb-3 w-20 h-20 flex items-center justify-center">
                <Image
                  src={dex.logo || "/placeholder.svg"}
                  alt={`${dex.name} logo`}
                  width={60}
                  height={60}
                  className="transition-all rounded-full duration-300 group-hover:brightness-125"
                />
              </div>
              <span className="text-center font-medium text-gray-200 group-hover:text-[#ed5409]">
                {dex.name}
              </span>
            </a>
            
          ))}
        
        </div>
        
      </div>
      <p className="pt-12 opacity-80 hover:scale-110 hover:opacity-100 ease-in-out duration-150 hover:cursor-pointer">Beets & Metropolis & Equalizer Coming Soon...</p>
    </section>
  );
}
