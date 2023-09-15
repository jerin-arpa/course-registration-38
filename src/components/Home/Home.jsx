import { useState } from "react";
import { useEffect } from "react";
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';

const Home = () => {

    const [allCourse, setAllCourse] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, []);



    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-5 pb-10"> Course Registration</h1>
            <hr />

            {/* Main */}
            <div className="mt-5 flex flex-col-reverse md:flex-row lg:flex-row gap-5">
                {/* card-container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:w-3/4 lg:w-3/4">
                    {/* card */}

                    {
                        allCourse.map(course => (
                            <div key={course.id} className="bg-white p-5 rounded-2xl">
                                <div>
                                    <img className="w-full" src={course.image} alt="" />
                                </div>

                                <div>
                                    <h1 className="text-xl font-bold mt-5 h-14">{course.course_name
                                    }</h1>

                                    <p className="my-3 h-28">{course.details}</p>

                                    <div className="flex justify-between">
                                        <div className="flex items-center">
                                            <p className="text-lg mr-1">
                                                <FaDollarSign></FaDollarSign>
                                            </p>
                                            <p>Price: {course.price}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <p className="text-lg mr-2">
                                                <FaBookOpen></FaBookOpen>
                                            </p>
                                            <p>Credit: {course.credit}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <button className=" btn-color w-full py-2 rounded-lg">Select</button>
                                </div>
                            </div>
                        ))
                    }
                </div>


                {/* cart-container */}
                <div className="w-full md:w-1/4 lg:w-1/4 bg-white p-5 rounded-2xl">
                    <h2 className="text-xl font-bold text-blue-500"> Credit Hour Remaining 7 hr</h2>

                    <hr className="my-3" />

                    <h2 className="text-xl font-bold mb-4">Course Name</h2>

                    <hr className="my-3" />

                    <h2 className="text-md font-bold mb-4">Total Credit Hour : 13</h2>

                </div>
            </div>


        </div>
    );
};

export default Home;