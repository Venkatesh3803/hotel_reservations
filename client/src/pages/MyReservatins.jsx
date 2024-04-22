import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import apiRequest from "../lib/RequestMethods";


const MyReservations = () => {
    const { id } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        try {
            const fetchingReservations = async () => {
                const res = await apiRequest.get(`/reservations/user/${id}`)
                if (res) {
                    setData(res.data)
                }
            }
            fetchingReservations();
        } catch (error) {
            console.log(error.message)
        }
    }, [id])


    return (
        <>
            {data.length === 0 ?

                <div className="w-[100%] h-[80vh] flex items-center justify-center flex-col gap-5">
                    <h1 className="text-3xl font-semibold">NO Reservations Found</h1>
                    <Link to={"/rooms"}>
                        Explore more
                    </Link>
                </div>
                :
                <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                    <div className="flex justify-start item-start space-y-2 flex-col ">
                        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">My Id #13432</h1>
                        {/* <p className="text-base font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM</p> */}
                    </div>
                    <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                            <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Reservations</p>
                                {data && data.map((res) => {
                                    return (
                                        <div key={res._id} className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                            <div className="pb-4 md:pb-8 w-full md:w-40">
                                                <Link to={`/singleroom/${res.roomId}`}>
                                                    <img className="w-full hidden md:block" src={res?.images[0]} alt="dress" />
                                                </Link>
                                                <Link to={`/singleroom/${res.roomId}`}>
                                                    <img className="w-full md:hidden" src={res?.images[0]} alt="dress" />
                                                </Link>
                                            </div>
                                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                                    <Link to={`/singleroom/${res.roomId}`}>
                                                        <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{res.title}</h3>
                                                    </Link>
                                                    <div className="flex justify-start items-start flex-col space-y-2">
                                                        <p className="text-sm leading-none text-gray-800">
                                                            <span className="text-gray-800">No Of Guests: </span>{res.guests}
                                                        </p>
                                                        <p className="text-sm leading-none text-gray-800">
                                                            <span className="text-gray-800">Check In: </span> {res.check_in}
                                                        </p>
                                                        <p className="text-sm leading-none text-gray-800">
                                                            <span className="text-gray-800">Check Out: </span> {res.check_out}
                                                        </p>
                                                        <p className="text-sm leading-none text-gray-800">
                                                            <span className="text-gray-800">Address: </span> {res.address}
                                                        </p>
                                                        <p className="text-sm leading-none text-gray-800">
                                                            <span className="text-gray-800">City: </span> {res.city}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between space-x-8 items-start w-full">
                                                    <p className="text-base xl:text-lg leading-6 text-gray-800"> Days : {res.days}</p>
                                                    <p className="text-base xl:text-lg leading-6">
                                                        ₹{res.price}
                                                    </p>
                                                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800"> ₹{res.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default MyReservations;
