import React from 'react';
// import ground from '../assets/images (2).jpg'; // Import the image correctly
import teamMember2 from '../assets/bas.jpg'; // Example of other images
import teamMember3 from '../assets/foot.jpg'; // Example of other images

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* obj 1 */}
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <img src={teamMember2} alt="Ground Management" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800">Efficient Ground Management</h3>
                    <p className="text-gray-600 mt-2">Our platform simplifies the process of managing and booking various sports grounds, ensuring easy access and availability for users.</p>
                </div>

                {/* obj 2 */}
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <img src={teamMember2} alt="Easy Cancellations" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800">Easy Cancellations</h3>
                    <p className="text-gray-600 mt-2">We offer flexible cancellation and modification policies, ensuring that users have full control over their bookings in case of changes or emergencies.</p>
                </div>

                {/* obj 3 */}
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <img src={teamMember3} alt="Customizable Options" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800">Customizable Options</h3>
                    <p className="text-gray-600 mt-2">Our system allows users to choose from different types of grounds (e.g., football, volleyball) and book them according to their preferences for time and availability.</p>
                </div>
            </div>

            <div className="mt-12 text-center">
                <h2 className="text-3xl font-bold text-gray-800">About Our Page</h2>
                <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                    Welcome to our Sports Ground Booking System! We provide a platform for sports enthusiasts to reserve and enjoy various sports facilities, including football grounds, volleyball courts, and basketball courts. Our mission is to promote physical activity and community engagement through sports. Whether you're looking to play for fun or to practice your skills, we have the right space for you!

                    Join us today and experience the joy of sports!
                </p>
            </div>
        </div>
    );
};

export default AboutUs