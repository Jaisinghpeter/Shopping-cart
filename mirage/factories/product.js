import { Factory } from 'ember-cli-mirage';
import faker from 'faker'
export default Factory.extend({
    name(){
        return faker.image.food();
    },
    description(){
        return faker.image.food();
    },
    image(){
        return faker.image.food();
    }
});
