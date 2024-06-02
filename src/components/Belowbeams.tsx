'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const belowbeams = [
    {
      quote:
        'Outstanding performance! Our new Xerox machine has significantly improved our office efficiency. Highly recommended!',
      name: 'Imran Siddiqui',
      title: 'Creative Solutions LLC',
    },
    {
      quote:
        "Extremely satisfied with our Xerox machine. It consistently delivers high-quality prints with remarkable speed and reliability, making it an essential addition to our office.",
      name: 'Omar Farooq',
      title: 'Precision Print Services',
    },
    {
      quote:
        "The Xerox machine we purchased has been a game-changer for our business. Excellent print quality and very user-friendly.",
      name: 'Hassan Mustafa',
      title: 'Dynamic Printing Co.',
    },
    {
      quote:
        'Fantastic product! The Xerox machine is incredibly efficient and has saved us a lot of time on our printing tasks.',
      name: 'Tariq Javed',
      title: 'Smart Office Hub',
    },
    {
      quote:
        'Top-quality Xerox machine! It’s efficient, easy to operate, and the print quality is exceptional. Very pleased with our purchase.',
      name: 'Zaid Iqbal',
      title: 'Elite Business Solutions',
    },
  ];

function Belowbeams() {
  return (
    // <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        {/* <h2 className="text-4xl font-bold text-center mb-8 z-10 font-sans">Hear our Customers</h2> */}
        <h2 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-green-600  text-center font-serif">Hear our Customers</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={belowbeams}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default Belowbeams