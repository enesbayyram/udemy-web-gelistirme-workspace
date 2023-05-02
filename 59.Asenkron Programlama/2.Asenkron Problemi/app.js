//ASENKRON PROBLEMİ

//http istekleri

const users = [
    {
        userId : 5,
        post : "Enes Post 1"
    },
    {
        userId : 5,
        post : "Enes Post 2"
    },
    {
        userId : 5,
        post : "Enes Post 3"
    },
    {
        userId : 6,
        post : "Ali Post 1"
    }
    , {
        userId : 7,
        post : "Betül Post 1"
    }
]

// user id 
// post by user id

//Senkrona çevireceğiz.
//callback - promise - async await
function getUserId(callback){
    setTimeout(() => {
        //Servise gittik ve cevabı aldık.
        // return 5;
        let userId = 5;
       callback(userId);
    }, 1000);
}

function getPostByUserId(userId){
    //Gerçek bir rest api ya istek atacaksınız.
    setTimeout(() => {
        users.forEach((user)=>{
            if(user.userId===userId){
                console.log(user.post);
            }
        })
    }, 500);

}
getUserId(getPostByUserId);
// let userId = getUserId();
// getPostByUserId(userId);






