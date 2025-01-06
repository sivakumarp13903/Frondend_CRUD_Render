import axios from 'axios';

async function getFetchFun() {
  try {

    const newUser = {
        name: 'John Doe',
        email: 'john.doe@example.com',
      };
      
      axios.post('https://jsonplaceholder.typicode.com/users', newUser)
        .then(response => {
          console.log('POST Response:', response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    // Making the GET request using Axios
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

    // No need to use .json() as Axios automatically parses the JSON response
    const data = response.data; // This is already the parsed JSON

    // Map through the users and extract company name
    const companyNames = data.map(user => user.name);

    console.log(companyNames); // Logs an array of company names

  } catch (error) {
    // If there's an error, catch it and log it
    console.error('Error fetching data:', error);
  }
}

getFetchFun();
