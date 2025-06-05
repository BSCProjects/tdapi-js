require('dotenv').config();
const TDAPI = require('./tdapi');

// Initialize the API client
const api = new TDAPI({
  baseUrl: 'https://td.byui.edu/TDWebAPI/api',
  credentials: {
    UserName: process.env.TD_USERNAME,
    Password: process.env.TD_PASSWORD
  }
});

async function runTests() {
  try {
    console.log('Testing API functionality...\n');

    // Test authentication
    console.log('1. Testing authentication...');
    const bearerToken = await api.login();
    console.log('✓ Authentication successful\n');

    // Test getting users
    console.log('2. Testing getUser...');
    const users = await api.getUser("ffb9cfb7-4ee5-eb11-a7ad-0050f2eef487");
    console.log(`✓ User Full Name: ${users.FullName} \n`);

    // Test getting tickets
    console.log('3. Testing getTickets...');
    const tickets = await api.getTicket(31, 8312934); // Assuming appId 1
    console.log(`✓ Ticket Title: ${tickets.Title} \n`);

    // Test getting accounts
    // console.log('4. Testing getAccounts...');
    // const accounts = await api.getAccounts();
    // console.log(`✓ Retrieved ${accounts.length} accounts\n`);

    // Test getting locations
    // console.log('5. Testing getLocations...');
    // const locations = await api.getLocations();
    // console.log(`✓ Retrieved ${locations.length} locations\n`);

    // Test getting assets
    // console.log('6. Testing getAssets...');
    // const assets = await api.getAssets();
    // console.log(`✓ Retrieved ${assets.length} assets\n`);

    console.log('All tests completed successfully!');
  } catch (error) {
    console.error('Error during testing:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
  }
}

// Run the tests
runTests(); 