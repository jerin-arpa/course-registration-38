# Course Registration

## 1 Project features

Here are three key features of my project:

1. Course Selection and Cart Management:

    * Users can browse a list of available courses and select the ones they want to add to their cart.
    * When a user clicks the "Select" button for a course, the course name is added to the cart.
    * Implement a check to ensure that the same course cannot be added to the cart multiple times to avoid redundancy.

2. Credit Hour Calculation and Limit Handling:

    * Users can view the total credit hours accumulated in their cart by clicking a button.
    * Implement logic to calculate and display the total credit hours based on the selected courses.
    * Enforce a credit hour limit and display a "Sweet Alert" when the user attempts to add courses that exceed this limit.

3. Price Calculation and Confirmation:

    * Users can see the total price of the courses in their cart.
    * Implement a pricing mechanism based on the selected courses, and update the total price dynamically.
    * Display a "Sweet Alert" to confirm the selection when the user clicks the "Total Credit Hours" button, providing a summary of selected courses, credit hours, and the total price.

These features ensure that users can efficiently select courses, manage their cart, keep track of their credit hours, and receive alerts for common user actions such as exceeding the credit hour limit or confirming their course selections. The "Sweet Alerts" enhance the user experience by providing clear feedback and confirmation dialogs.


2. How i manage the state in my project
---

In my course registration project, i manage state using React's built-in state management, primarily with the useState hook. Here's how state is managed:

1. Component State:
    * allCourse: Holds an array of all available courses fetched from a JSON file.
    * selectedCourse: Stores the selected courses chosen by the user.
    * remaining: Tracks the remaining credit hours users can select.
    * totalHour: Keeps the total number of credit hours of selected courses.
    * totalPrice: Holds the total price of selected courses.

2. Updating State:
    * Use set functions provided by the useState hook to update state variables when a user interacts with the UI. For instance, when a course is selected, state variables like totalHour, totalPrice, remaining, and selectedCourse are updated based on the selected course and the current state.

3. Rendering Based on State:
    * Display information in the UI based on the values of state variables. Show the total credit hours, remaining credit hours, and total price in the UI using values from totalHour, remaining, and totalPrice.

4. Handling User Interactions:
    * Use event handlers like onClick to trigger functions (handleSelectButton) that update state when a user interacts with the UI, such as selecting a course.

5. Reacting to State Changes:
    * React automatically re-renders the component when state variables change. Whenever you call a state-setting function (e.g., setTotalHour), React re-renders the component with the updated state, ensuring the UI reflects the latest data.


In summary, my project effectively manages state using React's useState hook to track and update information related to selected courses, remaining credit hours, total credit hours, and total prices, providing a dynamic and responsive user experience.