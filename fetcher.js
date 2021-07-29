//Use process.argv for each CLI
//Start with npm init and downloading the request library
//send request and retrieve index.html from the server
// figure out how to create a file in the directory and add index.html to it

const fs = require('fs');
const request = require('request');

const servUrl = process.argv[2];
const localFilePath = process.argv[3];

function getFilesizeInBytes(filename) {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
}
request(servUrl, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(err)
    }
    const bytes =  getFilesizeInBytes(localFilePath);
    console.log(`Downloaded and saved ${bytes} bytes to ${localFilePath}`);
  });

});

//This will write the content retrieved from the request which is held in the content variable, within the fetcherExample.txt file

