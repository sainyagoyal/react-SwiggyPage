export const restrauntData=[
    {
    restraunt1 :{
        id:1,
        restrauntDetails:
            {
                image:"",
                restrauntName:"Kitchens of Punjab",
                restrauntType:"North Indian",
                restrauntAddress:"Bilekahalli,BTM-Bangalore",
                restrauntRating:4.1,
                restrauntTime:36,
                restrauntPrice:300,
                restrauntOffers:[
                     "20% off | Use code PARTY",
                     "30% off up to Rs. 150 on orders above 400 | Use code JUMBO"
                ]

            }
        ,
        sideMenu:[
            {
                id:1,
                name:'Recommended'
            },
            {
                id:2,
                name:"Thali"
            } ,
            {
                id:3,
                name:'Platter'
            },
            {
                id:4,
                name:'Starters'
            },
            {
                id:5,
                name:'Rice Bowl'
            },
            {
                id:6,
                name:'Drinks'
            }
        ],
        mainMenu:[
            {
                id:1,
                veg:true,
                price:399,
                title:"Veg Platter",
                desc:"Feel like a Nawab with this one, soft cubes of paneer cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzR3YadgMaJgWRO6NdElEYgdvdLJDPLzaD8Q&usqp=CAU",
                category:"Recommended"
            },
            {
                id:2,
                veg:false,
                price:699,
                title:"Non-Veg Platter",
                desc:"Feel like a Nawab with this one, soft cubes of chicken cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzR3YadgMaJgWRO6NdElEYgdvdLJDPLzaD8Q&usqp=CAU",
                category:"Recommended"
            },
            {
                id:3,
                veg:false,
                price:699,
                title:"chinese Platter",
                desc:"Feel like a Nawab with this one, soft cubes of chicken cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzR3YadgMaJgWRO6NdElEYgdvdLJDPLzaD8Q&usqp=CAU",
                category:"Recommended"
            },
            {
                id:4,
                veg:true,
                price:69,
                title:"ice-cream",
                desc:"Feel like a Nawab with this one, soft cubes of chicken cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzR3YadgMaJgWRO6NdElEYgdvdLJDPLzaD8Q&usqp=CAU",
                category:"Sides"
            },
            {
                id:5,
                veg:true,
                price:99,
                title:"waffles",
                desc:"Feel like a Nawab with this one, soft cubes of chicken cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzR3YadgMaJgWRO6NdElEYgdvdLJDPLzaD8Q&usqp=CAU",
                category:"Sides"
            },
            {
                id:6,
                veg:false,
                price:799,
                title:"Bowl",
                desc:"Feel like a Nawab with this one, soft cubes of chicken cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzR3YadgMaJgWRO6NdElEYgdvdLJDPLzaD8Q&usqp=CAU",
                category:"Recommended"
            },
            {
                id:7,
                veg:false,
                price:699,
                title:"shakes",
                desc:"Feel like a Nawab with this one, soft cubes of chicken cooked in a flavourful in-house Chef special gravy, served along with aromatic matar pulao. Contains Milk, Nuts.",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzR3YadgMaJgWRO6NdElEYgdvdLJDPLzaD8Q&usqp=CAU",
                category:"Drinks"
            }
        ]
        
    }
    }
]
export const restDetails=restrauntData[0].restraunt1.restrauntDetails;
export const side_menu_arr=restrauntData[0].restraunt1.sideMenu;
export const main_menu=restrauntData[0].restraunt1.mainMenu;