import ItemBuilder from "./itemBuilder";
import {main_menu} from "../restrauntsData";

const main_menu_arr=[];

for(let i=0;i<main_menu.length;i++){
    main_menu_arr.push(new ItemBuilder().setTitle(main_menu[i].title)
        .setPrice(main_menu[i].price)
        .setisVeg(main_menu[i].veg)
        .setDesc(main_menu[i].desc)
        .setImage(main_menu[i].image)
        .setId(main_menu[i].id)
        .setCategory(main_menu[i].category)
        .setQty(main_menu[i].qty)
        .build());
}

export default main_menu_arr;