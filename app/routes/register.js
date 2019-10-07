import Route from '@ember/routing/route';

export default Route.extend({
  cbState:false,
  setupController(){
    this._super(this.controller,this.model),
    this.controller.set('emailAddress','')
    this.controller.set('userName','')
    this.controller.set('password','')
    this.controller.set('checkbox',false)
},
    actions:{
        myChangeAction(){

        },
        createUser(){ 
          if(this.get('controller').get('cbState')){
            this.cbState=true
          }
          this.store.createRecord('user',{
            email:this.get('controller').get('emailAddress'),
            username:this.get('controller').get('userName'),
            password:this.get('controller').get('password'),
            usertype:this.cbState
          }).save()
          console.log("user ha been created")
          console.log(this.store.findAll('user'))
          this.transitionTo('index')

        }
    }
});
