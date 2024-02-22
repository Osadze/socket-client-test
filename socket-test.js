const io = require('socket.io-client');

// Connect to the WebSocket server
const socket = io('http://localhost:3003');

socket.on('connect', () => {
   console.log('Connected to the server');

   // Data to send for creating a location
   const createLocationData = {
      id: 2,
      updateLocation: {
         lat: 40.7128, // Valid latitude for New York
         long: -74.006, // Valid longitude for New York
      },
   };
   const getNearbyDriver = {
      lat: 41.6935,
      long: 44.8016,
      radius: 3,
      unit: 'km',
   };
   const requestRide = {
      riderId: 2,
      pickUp: {
         Lat: 41.7151,
         Lng: 44.7547,
      },
      dropOff: {
         Lat: 41.713749,
         Lng: 44.780459,
      },
   };
   // Emit the createLocation event with the data
   // socket.emit('createPickUpLocation', createLocationData);
   // socket.emit('createDropOffLocation', createLocationData);
   // socket.emit('sendCurrentLocation', createLocationData);
   // socket.emit('getCurrentLocation', getNearbyDriver);
   socket.emit('getRequestRideDetails', requestRide);

   // socket.emit('findPickUpLocation');
   // Listen for the location event (response from the server for createLocation)
   // socket.on('PickUpLocation', (locationData) => {
   //    console.log('Pick Up Location Created:', locationData);
   // });
   // socket.on('DropOffLocation', (locationData) => {
   //    console.log('Drop Off Location Created:', locationData);
   // });
   // socket.on('CurrentLocation', (locationData) => {
   //    console.log('Drivers Current Location is:', locationData);
   // });
   // socket.on('sentCurrentLocation', (drivers) => {
   //    console.log('Nearby Drivers', drivers);
   // });
   socket.on('returnRideDetails', (data) => {
      console.log('Your Ride will be', data);
   });

   // Listen for the response event from the server for findAllLocations
   // socket.on('location', (locations) => {
   //    console.log('', locations);
   // });
});

socket.on('disconnect', () => {
   console.log('Disconnected from the server');
});
