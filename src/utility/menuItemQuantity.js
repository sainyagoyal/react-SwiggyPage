export const updateMenuItemQuantity=(menuItems,product,change)=>{
    let newMenu=[];
    newMenu=menuItems.map((item)=>{
        if(item.id===product.id){
            item.qty=Math.max(item.qty+change,0) ;
        }
        return item;
    })
    return newMenu;
}

export const vegFilterFunction=(menuItems,flag)=>{
    console.log("inside menuitem quantity");
    let filterMenuItems=[];
    if(flag){
        for( let x in menuItems){
            if(menuItems[x].veg==true){
                filterMenuItems.push(menuItems[x]);
            }
        }
    }
    else{
        for(let x in menuItems){
            filterMenuItems.push(menuItems[x]);
        }
    }
    return filterMenuItems
}

export const searchFilterFunction=(menuItems,val)=>{
    
    let filterMenuItems=[];
    for( var x in menuItems){
        if(menuItems[x].title.toLowerCase().includes(val.toLowerCase())){
            filterMenuItems.push(menuItems[x]);
        }
    }
    return filterMenuItems
}