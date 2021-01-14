/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author  Brad Traversy - David Steel
 * @license MIT
 *
 **/

// Convert to async/await

 class EasyHTTP {
   
  // Make an HTTP GET Request 
  async get(url) {
      const response = await fetch(url)
      const resData = await response.json()
      return resData
    };

  // Make an HTTP POST Request
  async post(url, data) {
    
      const response = fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      

      const resData = await (await response).json()
      return resData
  }

   // Make an HTTP PUT Request
   put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make an HTTP DELETE Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(() => resolve('Resource Deleted...'))
      .catch(err => reject(err));
    });
  }

 }

 