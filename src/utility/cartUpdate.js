export const updateCart=(cartItems,product,change)=>{
    let itemAlreadyPresent=false;
    let newCart=[];
    newCart=cartItems.map((item)=>{
        if(item.id===product.id){
            item.qty=item.qty+change;
            itemAlreadyPresent=true;
        }
        return item;
    })
    if(!itemAlreadyPresent){
        newCart.push({...product,qty:1})
    }
    if(change===-1){
        newCart=newCart.filter(x=>x.qty!=0);
    }
    return newCart;
}

export const totalCount=(cartItems)=>{
    var totalCartCount=0;
    for(var x in cartItems){
        totalCartCount+=cartItems[x].qty;
    }
    return totalCartCount;
    
}

export const totalBill=(cartItems)=>{
    var bill=0;
    for(var x in cartItems){
        bill+=cartItems[x].price*cartItems[x].qty;
    }
    return bill;
}