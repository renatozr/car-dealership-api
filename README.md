<!-- PROJECT LOGO -->
<div align="center">
  <h3 align="center">Car Dealership API</h3>

  <p align="center">
    A REST API that handles vehicle data from a car dealership
    <br />
    <br />
    <a href="https://car-dealership-api-qqe5.onrender.com/documentation">View Demo</a>
    <p>(The free deploy will spin down with inactivity, which can delay requests by 50 seconds or more)</p>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

To exercise back-end development and it's tools.

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- NPM
- MongoDB

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:renatozr/car-dealership-api.git
   ```
2. Enter the directory
   ```sh
   cd car-dealership-api
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Rename .env.example file to .env
5. Fill in the environment variables (example below)
   ```sh
    PORT=3001
    MONGODB_URI=mongodb://localhost:27017/CarDealership
    SERVER_URL=http://localhost:3001
   ```
6. Run the project
   ```sh
   npm run dev
   ```
7. Run the project tests
   ```sh
   npm run test
   ```
