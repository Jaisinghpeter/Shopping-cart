import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    email(){
        return 'jaisingh@zohomail.com'
    },
    username(i){
        return 'Jaisingh'+i
    },
    password(){
        return '123'
    }

});
