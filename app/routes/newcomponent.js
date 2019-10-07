import Route from '@ember/routing/route';

export default Route.extend({
    setupController(){
        this._super(this.controller,this.model),
        this.controller.set('name','')
        this.controller.set('description','')
        this.controller.set('imageURL','')
        this.controller.set('price','')
    },
    actions:{
        addProduct(){
                this.store.createRecord('product',{
                name:this.get('controller').get('name'),
                description:this.get('controller').get('description'),
                image:this.get('controller').get('imageURL'),
                price:this.get('controller').get('price')
              }).save()
              console.log("Product has been added")
              console.log(this.store.findAll('product'))
              this.transitionTo('product')
        }
    }
});
