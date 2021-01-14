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
    
      const post = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      

      const resData = await post.json()
      return resData
  }

   // Make an HTTP PUT Request
   async put(url, data) {
      const update = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const resData = await update.json()
      return resData;
  }

  // Make an HTTP DELETE Request
  async delete(url) {
    const deleted =
      await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
    
      const resData = await 'Resource Deleted...'
      return resData
  }
 }

 