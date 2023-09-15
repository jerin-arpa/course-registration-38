import PropTypes from 'prop-types';

const Cart = ({ selectedCourse, remaining, totalHour }) => {
    return (
        <div>
            <h2 className="text-xl font-bold text-blue-500"> Credit Hour Remaining {remaining} hr</h2>

            <hr className="my-3" />

            <h2 className="text-xl font-bold mb-4">Course Name</h2>

            <div>
                {
                    selectedCourse.map((course, idx) => (
                        <div key={idx}>
                            <li className='list-decimal'>{course.course_name}</li>
                        </div>
                    ))
                }
            </div>

            <hr className="my-3" />

            <h2 className="text-md font-bold mb-4">Total Credit Hour : {totalHour} hr</h2>
        </div>
    );
};


Cart.propTypes = {
    selectedCourse: PropTypes.array.isRequired,
    totalHour: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,
}

export default Cart;