let prodactsByComments = [
    {id: 1 , title: "قهوه برزیلی بن مانو مقدار 800 گرم خط دوم اسم ..." , "shopingCart": "#shopping-cart" ,"status-type" : "all",  offer:null , price: 129000 , img : "../../public/products/p1.png",
        comment : [
            {id :1 , creator : "مهدی پور" , body: "سلام این کامنت تست میباشد"  , time : " 1403/1/21" , role : "USER" ,  answers : 
                {id : 1 , creator : "مبین محمدی"  , body : "حله "},
                },
            {id :2 , creator : "محمد حسینی" , body: "سلام.من سفارش دادم کی به دستم میرسه؟"  , time : " 1403/2/16" , role : "USER" , 
                answers : 
                    {id : 1 , creator : "مبین محمدی"  , body : ".لطفا کد پیگیریتون رو از طریق پنل کاربری >  قسمت تیک به پشتیبانی بفرستین"},
                    
            },
            {id :3 , creator : "رضا بایرامی" , body: "سلام محصولاتتون بی نظیرند"  , time : " 1403/2/12" , role : "USER" },
            {id :4 , creator : "محسن حریری" , body: "سلام از این 1 کیلویی هم دارید؟!"  , time : " 1403/4/20" , role : "USER"  ,
                answers:{id : 1 , creator : "مبین محمدی"  , body : "سلام.بله از 250 گرم تا 5 کیلویی موجود داریم"}

             },
            {id :5 , creator : "رضا عمری" , body: "پیشنهاد میکنم بخرین 👌"  , time : " 1403/6/18" , role : "USER"},
        ]
    },

    {id: 2 , title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم ..." , "shopingCart": "#shopping-cart" ,"status-type" : "best-selling-prudacts",offer:null,  price: 265000 , img : "../../public/products/p2.png" , 
        comment : [
            {id :1 , creator : "رضا گلزار" , body: "سلام این کامنت تست میباشد"  , time : " 1403/1/21" , role : "USER" },
        ]
    },
    {id: 3 , title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم ..." , "shopingCart": "#shopping-cart" ,"status-type" : "prudacts-offer", offer:null, price: 638000 , img : "../../public/products/p3.png" , 
        comment : []
    },
    {id: 4 , title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم ..." , "shopingCart": "#shopping-cart" ,"status-type" :  "cafe", offer:null , price: 98500 , img : "../../public/products/p4.png" , 
        comment : []
    },
    {id: 5 , title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم ..." , "shopingCart": "#shopping-cart" ,"status-type" :  "cafe", offer:"20%" ,  price: 200000 , img : "../../public/products/p5.png" , 
        comment : []
    },
    {id: 6 , title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم ..." , "shopingCart": "#shopping-cart" ,"status-type" :  "cafe", offer:"20%" ,  price: 60000 , img : "../../public/products/p5.png" , 
        comment : []
    },
    {id: 7 , title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم ..." , "shopingCart": "#shopping-cart" ,"status-type" :  "cafe", offer:"20%" ,  price: 850000 , img : "../../public/products/p5.png" , 
        comment : []
    },
    {id: 8 , title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم ..." , "shopingCart": "#shopping-cart" ,"status-type" :  "cafe", offer:"20%" ,  price: 198000 , img : "../../public/products/p5.png" , 
        comment: [] 
    },
]

let prodacts = [
    {id: 1 , name : "cafe1" ,title: "قهوه برزیلی بن مانو مقدار 800 گرم خط دوم اسم ..." , "shopingCart": "#shopping-cart" ,"status-type" : "all",  offer:null , price: 129000 ,seller : "دیجی کالا",status : "Available" , img : "../../public/products/p1.png"},
    {id: 2 , name : "cafe2" ,title: "قهوه ایسلندی مقدار 250 گرم خط دوم اسم ..." , "shopingCart": "#shopping-cart" ,"status-type" : "best-selling-prudacts",offer:null,seller : "ترب",status : "Non-existent" , price: 265000 , img : "../../public/products/p2.png"},
    {id: 3 , name : "cafe3" ,title: "قهوه ایرانی مقدار 280 گرم خط دوم اسم ..." , "shopingCart": "#shopping-cart" ,"status-type" : "prudacts-offer", offer:null,seller : "مجموعه کافه لاین" ,status : "Available" , price: 638000 , img : "../../public/products/p3.png"},
    {id: 4 , name : "cafe4" ,title: "قهوه ترکی مقدار 362 گرم خط دوم اسم ..." , "shopingCart": "#shopping-cart" ,"status-type" :  "cafe", offer:null , price: 98500 ,seller : "مجموعه کافه لاین" ,status : "Available" , img : "../../public/products/p4.png"},
    {id: 5 , name : "cafe5" ,title: "قهوه برزیلی مقدار 500 گرم خط دوم اسم ..." , "shopingCart": "#shopping-cart" ,"status-type" :  "cafe", offer:"20%" ,seller : "مجموعه کافه لاین" ,status : "Available" ,  price: 200000 , img : "../../public/products/p5.png"},
    {id: 6 , name : "cafe6" ,title: "قهوه مصری مقدار 429 گرم خط دوم اسم ..." , "shopingCart": "#shopping-cart" ,"status-type" :  "cafe", offer:"20%" ,seller : "مجموعه کافه لاین" ,  price: 60000 , img : "../../public/products/p5.png"},
    {id: 7 , name : "cafe7" ,title: "قهوه نیوزلندی مقدار 201 گرم خط دوم اسم ..." , "shopingCart": "#shopping-cart" ,"status-type" :  "cafe", offer:"20%" ,seller : "مجموعه کافه لاین" ,  price: 850000 , img : "../../public/products/p5.png"},
    {id: 8 , name : "cafe8" ,title: "قهوه فرانسه مقدار 600 گرم خط دوم اسم ..." , "shopingCart": "#shopping-cart" ,"status-type" :  "cafe", offer:"20%" ,seller : "مجموعه کافه لاین" ,  price: 198000 , img : "../../public/products/p5.png"},
]

const menus = [
    {id: "1" , title : "فروشگاه " ,href : "/shop" , submenus : [
        {id : 1 , title : "قهوه ویژه" , href : "/vipCofee" },
        {id : 2 , title : "ویژه در سطح جهانی" , href : "/vipfortheworld"},
        {id : 3 , title : "قهوه درجه یک" , href : "/coffeeEvereons"},
        {id : 4 , title : "ترکیبات تجاری" , href : "/"},
        {id : 5 , title : "کپسول قهوه" , href : "/tabletCoffe"},
    ]},
    {id: "2" , title : "لوازم جانبی " ,href : "/accessories" ,submenus : [
        {id : "1" , title : "دسته قهوه ساز"},
        {id : "2" , title : "قهوه ساز صنعتی"},
    ]},
    {id: "3" , title : "دستگاه اسپرسو ساز" ,href : "/espressomakers"},
    {id: "4" , title : "بلاگ " ,href : "/blog"},
    {id: "5" , title : "درباره ما " ,href : "/about"}
]

export { 
    prodactsByComments, 
    prodacts,
    menus
}
