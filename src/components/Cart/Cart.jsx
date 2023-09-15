import PropTypes from 'prop-types';

const Cart = ({ selectedCourse }) => {
    return (
        <div>
            <h2 className="text-xl font-bold text-blue-500"> Credit Hour Remaining 7 hr</h2>

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

            <h2 className="text-md font-bold mb-4">Total Credit Hour : 13</h2>


            <hr className="my-3" />

            <h2 className="text-md font-bold mb-4">Total Price : 13 USD</h2>
        </div>
    );
};


Cart.propTypes = {
    selectedCourse: PropTypes.array.isRequired,
}

export default Cart;