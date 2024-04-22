import React from 'react'
import { Link } from "react-router-dom"

const RoomCard = ({ rooms }) => {
    return (
        <>
            <Link to={`/singleroom/${rooms?._id}`} key={rooms.id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                        src={rooms?.images[0]}
                        alt={rooms?.title}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                </div>
                <p className="text-base font-semibold text-gray-900">{rooms.name}</p>
                <h3 className="mt-4 text-sm text-gray-700">{rooms.description?.slice(0,50)}...</h3>
                <p className="mt-1 text-lg font-medium text-gray-900"> ₹{rooms.price}</p>
            </Link>
        </>
    )
}

export default RoomCard
