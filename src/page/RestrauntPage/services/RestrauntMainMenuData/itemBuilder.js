

let Item =function(id,title, veg, price, desc, image, category, qty) {
    this.id=id;
    this.title = title;
    this.veg = veg;
    this.price = price;
    this.desc = desc;
    this.image = image;
    this.category = category;
    this.qty=qty;
}

// Builder class for each item

let ItemBuilder =function() {

        let id=0;
        let title = '';
        let veg = false;
        let price = 0;
        let desc = "";
        let image = "";
        let category = "";
        
        return{
            setId: function(id){
                this.id=id;
                return this;
            },

            setTitle: function(title) {
                this.title = title;
                return this;
            },
            setisVeg: function(veg) {
                this.veg = veg;
                return this;
            },
            setPrice: function(price) {
                this.price = price;
                return this;
            },
            setDesc:function(desc) {
                this.desc = desc;
                return this;
            },
        
            setImage:function(image) {
                this.image = image;
                return this;
            },
        
            setCategory:function(category) {
                this.category = category;
                return this;
            },
            setQty:function(qty){
                this.qty=qty;
                return this;
            },
            build:function() {
                return new Item(this.id,this.title, this.veg, this.price, this.desc, this.image, this.category,this.qty);
            },

        }
    
}

export default ItemBuilder ;