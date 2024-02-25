// Example function that returns a Promise
// In JavaScript, a Promise is an object representing the eventual completion or failure of an asynchronous operation. It provides a cleaner and more structured way to handle asynchronous code compared to traditional callback functions. A Promise can be in one of three states:

// Pending: The initial state; the promise is neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully, and the promise has a resulting value.
// Rejected: The operation failed, and the promise has a reason for the failure.
function fetchData() {
    // Creating a new Promise
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation, like fetching data from an API
      setTimeout(() => {
        const success = true; // Simulating a successful operation
  
        if (success) {
          resolve("Data fetched successfully");
        } else {
          reject("Error fetching data");
        }
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  // Using the Promise
  fetchData()
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  