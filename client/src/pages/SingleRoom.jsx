import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import apiRequest from '../lib/RequestMethods'
import { AuthContext } from "../ContextApi/AuthContext"
import { toast } from "react-toastify"



const SingleRoom = () => {
    const { id } = useParams()
    const { currUser , updateUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [room, setRoom] = useState("")
    const [guests, setGuests] = useState(1)
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [daysDifference, setDaysDifference] = useState(null);

    // Event handler for start date change
    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
        calculateDaysDifference(event.target.value, endDate);
    };

    // Event handler for end date change
    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
        calculateDaysDifference(startDate, event.target.value);
    };

    // Function to calculate the difference in days
    const calculateDaysDifference = (start, end) => {
        if (start && end) {
            const startDateObj = new Date(start);
            const endDateObj = new Date(end);
            const differenceInTime = endDateObj.getTime() - startDateObj.getTime();
            const differenceInDays = differenceInTime / (1000 * 3600 * 24);
            setDaysDifference(Math.round(differenceInDays));
        } else {
            setDaysDifference(null);
        }
    };


    useEffect(() => {
        try {
            const fetchingRooms = async () => {
                const res = await apiRequest.get(`/rooms/singleroom/${id}`);
                setRoom(res.data)
            }
            fetchingRooms()
        } catch (error) {
            console.log(error)
        }
    }, [id])

    const handleReservation = async (e) => {
        e.preventDefault();
        if (!currUser) return navigate("/login")
        if (currUser.gender !== "Female") return toast.error("Sorry you cannot reserve only Female can reserve ")
        const data = {
            userId: currUser?._id,
            roomId: id,
            title: room.title,
            images: room.images,
            city: room.city,
            address: room.address,
            check_in: startDate,
            check_out: endDate,
            days: daysDifference,
            guests: guests,
            price: daysDifference * room.price * guests
        }

        try {
            const res = await apiRequest.post("/reservations", data)
            if (res.data) {
                toast.success("Reservation Sucessfull")
            }
        } catch (error) {
            toast.warn("Session Expire Please login")
            updateUser(null);
        }
    }


    return (
        <div className="bg-white">
            <div className="pt-6">

                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        {room &&
                            <img
                                src={room?.images[0]}
                                alt={room?.images[0]}
                                className="h-full w-full object-cover object-center"
                            />
                        }
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            {room &&
                                <img
                                    src={room?.images[3]}
                                    alt={room?.images[3]}
                                    className="h-full w-full object-cover object-center"
                                />
                            }
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            {room &&
                                <img
                                    src={room?.images[1]}
                                    alt={room?.images[1]}
                                    className="h-full w-full object-cover object-center"
                                />
                            }
                        </div>
                    </div>
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        {room &&
                            <img
                                src={room?.images[2]}
                                alt={room?.images[2]}
                                className="h-full w-full object-cover object-center"
                            />
                        }
                    </div>
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{room.title}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0 shadow-lg p-10 border border-gray-300 rounded-xl">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900"> ₹{room.price}</p>

                        {/* Reviews */}
                        <div className="my-6 ">
                            {/* <h3 className="sr-only">Reviews</h3> */}
                            <div className="flex items-center">
                                <div className="flex items-center flex-col gap-5">
                                    <div className="border border-gray-300 rounded-md overflow-hidden">
                                        <div className="flex">
                                            <div className="border border-gray-300 ">
                                                <label htmlFor="checkin" className='text-xs px-4 font-semibold'>CHECK-IN</label>
                                                <div className="mt-2">
                                                    <input
                                                        type="date"
                                                        name="checkin"
                                                        id="checkin"
                                                        value={startDate}
                                                        onChange={handleStartDateChange}
                                                        className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-transparent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-transparent sm:text-sm sm:leading-6 text-black"
                                                    />
                                                </div>
                                            </div>
                                            <div className="border border-gray-5300 ">
                                                <label htmlFor="checkout" className='text-xs px-4 font-semibold'>CHECK-IN</label>
                                                <div className="mt-2">
                                                    <input
                                                        type="date"
                                                        name="checkout"
                                                        id="checkout"
                                                        value={endDate}
                                                        onChange={handleEndDateChange}
                                                        className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-transparent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-transparent sm:text-sm sm:leading-6 text-black"
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="border border-gray-300 flex flex-col">
                                            <label htmlFor="" className='text-xs px-4 font-semibold'>GUSETS</label>
                                            <select
                                                type="date"
                                                name="postal-code"
                                                id="postal-code"
                                                autoComplete="postal-code"
                                                onChange={(e) => setGuests(e.currentTarget.value)}
                                                className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-transparent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-transparent sm:text-sm sm:leading-6 text-black"
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={handleReservation}
                                        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Reserve
                                    </button>
                                    <p className="text-sm text-gray-600"> You won't be charged yet</p>
                                    <div className="flex items-center justify-between w-full">

                                        <p className="text-sm text-gray-600">{daysDifference} Night x {guests} Guests</p>
                                        <h3 className="text-sm font-medium text-gray-900">₹ {!daysDifference !== null && daysDifference * room.price * guests}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-0">
                            <hr />
                            <div className='flex items-center justify-between mt-5'>
                                <h3 className="text-sm font-medium text-gray-900">Total before taxes</h3>
                                <h3 className="text-sm font-medium text-gray-900">₹{!daysDifference !== null && daysDifference * room.price * guests} </h3>
                            </div>

                        </div>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{room.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">

                                    <li className="text-gray-400 flex flex-col gap-1">
                                        <span className="text-gray-600">Distance From Bustand : {room?.distance_bus}Km </span>
                                        <span className="text-gray-600">Distance From Airport : {room?.distance_airport}Km </span>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Details</h2>

                            <div className="mt-4 space-y-3">
                                <p className="text-sm text-gray-600">Free Wifi : {room.wifi === true && "Avaliable"}</p>
                                <p className="text-sm text-gray-600"> Daily Cleaing : {room.daily_cleaning === true && "Avaliable"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleRoom
