export default function( server ) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('user', 1),
  server.createList('product', 4);
}
