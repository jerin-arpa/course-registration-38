import { useState } from "react";
import { useEffect } from "react";
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {

    const [allCourse, setAllCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalHour, setTotalHour] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, []);



    const handleSelectButton = (course) => {
        const isExist = selectedCourse.find(courseName => courseName.id === course.id);
        let count = course.credit;
        let prices = course.price;


        if (isExist) {
            return toast.warn("Item can only be added once!", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else {
            selectedCourse.forEach(courseName => {
                count += courseName.credit;
                prices += courseName.price;
            })

            const totalRemaining = 20 - count;

            if (count > 20) {
                return toast.error("OPS! You reach your limits", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            else {
                setTotalHour(count);
                setTotalPrice(prices);
                setRemaining(totalRemaining);
                const newSelectedCourse = [...selectedCourse, course];
                setSelectedCourse(newSelectedCourse);
            }
        }
    }



    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-5"> Course Registration</h1>
            <hr className="mb-5" />

            {/* Main */}
            <div className="mt-5 flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-5">
                {/* card-container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:w-full lg:w-3/4">
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
                                            <p>Credit: {course.credit}hr</p>
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
                <div className="w-full md:w-full lg:w-1/4">
                    <Cart selectedCourse={selectedCourse} remaining={remaining} totalHour={totalHour} totalPrice={totalPrice}></Cart>
                    <ToastContainer></ToastContainer>
                </div>
            </div>


        </div>
    );
};

export default Home;