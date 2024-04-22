import img1 from "../assets/slider1.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Home = () => {

    return (
        <div className="relative w-full h-[100vh]">
            <Swiper
                height={500}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                Autoplay={100}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <div className=" h-56 sm:h-64 xl:h-80 2xl:h-[90vh] overflow-hidden">
                    <SwiperSlide>
                        <div className="w-full h-full">
                            <div className="flex w-full h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <img src={img1} alt="" className="w-full h-full object-cover" />
                                <div className="absolute flex flex-col items-center gap-6 text-center text-white z-2">
                                    <p>INDOOR & OUTDOOR</p>
                                    <h1 className="text-[5rem] font-bold ">ENJOY A LUXURY </h1>
                                    <h1 className="text-[5rem] font-bold "> EXPERIENCE</h1>
                                    <button className="hero-btn border-white border w-fit py-2 px-10 "> <p>Explore Rooms</p></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-full">
                            <div className="flex w-full h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full h-full object-cover" />
                                <div className="absolute flex flex-col items-center gap-6 text-center text-white z-2">
                                    <p>INDOOR & OUTDOOR</p>
                                    <h1 className="text-8xl font-bold ">ENJOY A LUXURY </h1>
                                    <h1 className="text-8xl font-bold "> EXPERIENCE</h1>
                                    <button className="hero-btn border-white border w-fit py-2 px-10 "> <p>Explore Rooms</p></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-full">
                            <div className="flex w-full h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <img src="https://images.pexels.com/photos/1134175/pexels-photo-1134175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full h-full object-cover" />
                                <div className="absolute flex flex-col items-center gap-6 text-center text-white z-2">
                                    <p>INDOOR & OUTDOOR</p>
                                    <h1 className="text-8xl font-bold ">ENJOY A LUXURY </h1>
                                    <h1 className="text-8xl font-bold "> EXPERIENCE</h1>
                                    <button className="hero-btn border-white border w-fit py-2 px-10 "> <p>Explore Rooms</p></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>

            <div className="absolute -bottom-[2rem] h-[20vh] w-[60%] bg-black m-auto z-10 left-[50%] rounded-lg text-white flex items-center justify-center  gap-6" style={{ transform: "translateX(-50%)" }}>
                <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="city" className="block text-sm font-medium leading-6 ">
                        City
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="region" className="block text-sm font-medium leading-6 ">
                        Check In
                    </label>
                    <div className="mt-2">
                        <input
                            type="date"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 ">
                        Check Out
                    </label>
                    <div className="mt-2">
                        <input
                            type="date"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
                            className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 ">
                        Number Guest
                    </label>
                    <div className="mt-2">
                        <select
                            type="date"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
                            className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Search
                </button>
            </div>
        </div>

    );
}

export default Home