import PropTypes from 'prop-types';

const Cart = ({ selectedCourse, remaining, totalHour, totalPrice }) => {
    return (
        <div className=' bg-white p-5 rounded-2xl'>
            <h2 className="text-xl font-bold text-blue-500 mt-3"> Credit Hour Remaining {remaining} hr</h2>

            <hr className="my-3" />

            <h2 className="text-xl font-bold">Course Name</h2>

            <div className='p-5'>
                <ul>
                    {selectedCourse.map((course, idx) => (
                        <li key={idx} className='list-decimal'>{course.course_name}</li>
                    ))}
                </ul>
            </div>

            <hr className="my-3" />

            <h2 className="text-md font-bold mb-4">Total Credit Hour : {totalHour} Hour</h2>

            <hr className="my-3" />

            <h2 className="text-md font-bold mb-4">Total Price: {totalPrice} USD</h2>
        </div>
    );
};


Cart.propTypes = {
    selectedCourse: PropTypes.array.isRequired,
    totalHour: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,
}

export default Cart;