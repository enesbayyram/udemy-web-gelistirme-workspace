
const orders = [
    {
        orderId : 1,
        kuryeId : 5,
        customerId : 12,
        orderName : "Lahmacun",
        price : 25
    },
    {
        orderId : 2,
        kuryeId : 5,
        customerId : 12,
        orderName : "İskender",
        price : 100
    },
    {
        orderId : 3,
        kuryeId : 5,
        customerId : 12,
        orderName : "Hamburger",
        price : 50
    },{
        orderId : 4,
        kuryeId : 6,
        customerId : 13,
        orderName : "Kebap",
        price : 120
    },
    {
        orderId : 5,
        kuryeId : 7,
        customerId : 14,
        orderName : "Adana",
        price : 90
    }

]

// kuryeid 5 ve customerıd 12 olanın sipariş isimlerini göster

function getKuryeId(callback){
    setTimeout(() => {
        let kuryeId = 5;
        callback(kuryeId);
    }, 500);
}
function getCustomerId(callback){
    setTimeout(() => {
        let customerId = 12;
        callback(customerId);
    }, 1000);
}

function listOrders(kuryeId , customerId){
    orders.forEach((order)=>{
        if(order.kuryeId===kuryeId && order.customerId===customerId){
            console.log(order.orderName)
        }
    })
}

// 1. customer id al
// 2. kurye id al
// 3. listele
getCustomerId((customerId)=>{
    getKuryeId((kuryeId)=>{
        listOrders(kuryeId, customerId);
    })
})
