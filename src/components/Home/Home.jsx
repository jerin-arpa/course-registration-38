import { useState } from "react";
import { useEffect } from "react";
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';
import Cart from "../Cart/Cart";
import Swal from 'sweetalert2'


const Home = () => {

    const [allCourse, setAllCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalHour, setTotalHour] = useState(0);


    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, []);



    const handleSelectButton = (course) => {
        const isExist = selectedCourse.find(courseName => courseName.id === course.id);
        let count = course.credit;


        if (isExist) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An item can only be added to the cart once!',
                footer: '<a href="">Please Select another one</a>'
            })
        }
        else {

            selectedCourse.forEach(courseName => {
                count += courseName.credit;
            })

            const totalRemaining = 20 - count;

            if (count > 20) {
                return Swal.fire({
                    title: 'Oops...',
                    text: 'You Reach your limits!!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            }
            else {
                setTotalHour(count);
                setRemaining(totalRemaining);
                const newSelectedCourse = [...selectedCourse, course];
                setSelectedCourse(newSelectedCourse);
            }
        }
    }



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
                                    <button onClick={() => handleSelectButton(course)} className=" btn-color w-full py-2 rounded-lg">Select</button>
                                </div>
                            </div>
                        ))
                    }
                </div>


                {/* cart-container */}
                <div className="w-full md:w-1/4 lg:w-1/4 bg-white p-5 rounded-2xl">
                    <Cart selectedCourse={selectedCourse} remaining={remaining} totalHour={totalHour}></Cart>
                </div>
            </div>


        </div>
    );
};

export default Home;