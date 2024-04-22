import React from 'react'

const AboutUs = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>

            <p className="mt-4 text-gray-600 text-lg">
              Welcome to our women-centric room reservation platform, where comfort, safety, and empowerment intertwine seamlessly.
            </p>
            <p className="mt-4 text-gray-600 text-lg">

              At our core, we prioritize providing a secure and welcoming environment tailored specifically to the needs and preferences of women travelers. Whether you're embarking on a solo adventure, planning a girls' getaway, or seeking a peaceful retreat, our platform offers a curated selection of accommodations designed with your comfort and security in mind.
            </p>
            <p className="mt-4 text-gray-600 text-lg">
              We understand the importance of feeling at ease during your travels, which is why we go above and beyond to ensure that every listing meets our rigorous standards for safety, cleanliness, and inclusivity. From cozy bed and breakfasts to luxurious boutique hotels, each property featured on our platform is vetted to ensure that you can relax and unwind with peace of mind.
            </p>

            <p className="mt-4 text-gray-600 text-lg">
              Join us on your next adventure and experience the difference of booking with a platform that truly understands and caters to the unique needs of women travelers. Your journey starts here."</p>
            <div className="mt-8">
              <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                <span className="ml-2">&#8594;</span></a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img src="https://images.pexels.com/photos/1488515/pexels-photo-1488515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section >
  )
}

export default AboutUs