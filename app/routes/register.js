import Route from '@ember/routing/route';

export default Route.extend({
    actions:{
        createUser(){
            console.log("user has been created")
        }
    }
});
