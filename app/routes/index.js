import Route from '@ember/routing/route';
import { isEqual } from '@ember/utils';
export default Route.extend({
    model(){
        return this.store.findAll('user')
    },
    setupController(){
        this._super(this.controller,this.model),
        this.controller.set('userName','')
        this.controller.set('password','')
    },
    isLoggedIn:false,
    actions:{
        checklogin(){
            
            var mut=this.store.peekAll('user').length
            var i;
            for (i = 1; i <= mut; i++) {
                if(isEqual(this.store.peekRecord('user', i).username,this.get('controller').get('userName'))){
                   // console.log("Logged in Successfully"),
                    this.isLoggedIn=true
                }
            }
            this.isLoggedIn?this.transitionTo('product'):alert("Incorrect Login")
        }
    }
});
