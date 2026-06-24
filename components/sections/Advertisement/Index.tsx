import Image from "next/image";
import bg from "@/app/assets/advertisement/adv.png";
import bg2 from "@/app/assets/advertisement/advmobile.png";

export default function Index() {
    return (
        <div className="relative w-[85%] h-[100vh] md:h-[70vh] overflow-hidden mx-auto font-aeonik">

            {/* Desktop Background */}
            <Image
                src={bg}
                alt="background"
                fill
                className="object-cover hidden md:block"
                priority
            />
 

            {/* Content */}
            <div className="absolute inset-0 flex items-center md:items-center justify-center md:justify-start">

                {/* Desktop Layout */}
                <div className="hidden md:block ml-[7.5%] max-w-xl text-white text-left">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Make Every Day A Win with Dooyt
                    </h1>

                    <p className="mt-4 text-sm md:text-base text-gray-200">
                        Are you looking to boost your business productivity? Replace all those multiple apps with a single powerful solution, Dooyt.
                    </p>

                    <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-md font-medium">
                        Request a Demo
                    </button>
                </div>

                {/* Mobile Layout (column + image at bottom) */}
                <div className="flex flex-col md:hidden items-center text-center  px-6  ">

                    <h1 className="text-3xl font-bold leading-tight text-primary">
                        Make Every Day A Win with Dooyt
                    </h1>

                    <p className="mt-4 text-sm text-secondary">
                        Are you looking to boost your business productivity? Replace all those multiple apps with a single powerful solution, Dooyt.
                    </p>

                    <button className="mt-5 px-6 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-md font-medium text-white">
                        Request a Demo
                    </button>

                    {/* image after content */}
                    <div className="mt-6 w-full">
                        <Image
                            src={bg2}
                            alt="mobile visual"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                </div>

            </div>
        </div>
    );
}