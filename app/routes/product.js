import Route from '@ember/routing/route';

export default Route.extend({
    comfirmwindow:true,
    userstate:false,
    model(){
        return this.store.findAll('product')
    },
});
 