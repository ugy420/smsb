import React from 'react';
import teamMember2 from '../assets/bas.jpg'; // Example image
import teamMember3 from '../assets/foot.jpg'; // Example image

const About = () => {
    return (
        <div id="about" className="bg-gray-100 min-h-screen py-10 px-4"> {/* Added id="about" here */}
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">About Us</h1>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Efficient Ground Management */}
                <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300 ease-in-out">
                    <img src={teamMember2} alt="Ground Management" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800">Efficient Ground Management</h3>
                    <p className="text-gray-600 mt-2">Our platform simplifies the process of managing and booking various sports grounds, ensuring easy access and availability for users.</p>
                </div>

                {/* Easy Cancellations */}
                <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300 ease-in-out">
                    <img src={teamMember2} alt="Easy Cancellations" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800">Easy Cancellations</h3>
                    <p className="text-gray-600 mt-2">We offer flexible cancellation and modification policies, ensuring that users have full control over their bookings in case of changes or emergencies.</p>
                </div>

                {/* Customizable Options */}
                <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300 ease-in-out">
                    <img src={teamMember3} alt="Customizable Options" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800">Customizable Options</h3>
                    <p className="text-gray-600 mt-2">Our system allows users to choose from different types of grounds (e.g., football, volleyball) and book them according to their preferences for time and availability.</p>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                    Welcome to our Sports Ground Booking System! We provide a platform for sports enthusiasts to reserve and enjoy various sports facilities, including football grounds, volleyball courts, and basketball courts. Our mission is to promote physical activity and community engagement through sports. Whether you're looking to play for fun or to practice your skills, we have the right space for you!
                    <br />
                    Join us today and experience the joy of sports!
                </p>
            </div>

            {/* Link to About Us section in Home page (optional, if needed) */}
            <div className="text-center mt-8">
                <a href="#about" className="text-blue-600 hover:text-blue-800 text-lg">
                    Go to About Us
                </a>
            </div>
        </div>
    );
};

export default About;
