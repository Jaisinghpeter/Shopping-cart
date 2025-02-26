export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
   this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  
    this.get('/users');
    this.get('/products');
    this.post('/users');
    this.post('/products');
    this.get('/users/:id');
    this.get('/products/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
    this.del('/products/:id');

    
}
