import Controller from '@ember/controller';


export default Controller.extend({
    comfirmwindow:false,
    actions:{
        deleteProduct(product){
            product.destroyRecord();
            console.log(product)
            console.log("Delete Product");
            this.toggleProperty('comfirmwindow')
        }
    }
});
