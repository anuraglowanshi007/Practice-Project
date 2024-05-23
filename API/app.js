// Function to make a GET request using Fetch API
async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    }
    
    // Call the function
    fetchData();

// with axios method
    import axios from 'axios';

// Function to make a GET request using Axios
async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
  } catch (error) {
    console.error('There has been a problem with your axios operation:', error);
  }
}

// Call the function
fetchData();

    