import { Factory } from 'ember-cli-mirage';
import faker from 'faker'
export default Factory.extend({
    name(){
        return faker.commerce.product();
    }, 
    description(){
        return faker.commerce.productName();
    }, 
    image(){
        return 'http://localhost:4200/1.jpg';
    } ,
    price(){
        return faker.commerce.price();
    } 
});
