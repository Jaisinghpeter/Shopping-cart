import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    email(){
        return 'jaisingh@zohomail.com'
    },
    username(i){
        return '1'
    },
    password(){
        return '123'
    },
    usertype(){
        return true
    }

});
