const form = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const imageWrapper = document.querySelector(".image-wrapper");
const clearButton = document.querySelector("#clearButton");

// searchButton.addEventListener("click", search);
runEventListener();
function runEventListener() {
  form.addEventListener("submit", search);
  clearButton.addEventListener("click", clearUI);
}

function clearUI(e) {
  searchInput.value = "";
  Array.from(imageWrapper.children).forEach((child) => child.remove());
  e.preventDefault();
}

// async function getToken(e){
//   e.preventDefault();
//    const response=  await fetch("http://localhost:8080/jsure/api/auth/authenticate",{
//       headers: new Headers({'content-type' : 'application/json'}),
//       method:'POST',
//       body : JSON.stringify({username : "ebayram" , password:"2"})
//     })

//     const data = await response.json();
//     console.log(data)
// }

// async function getHistoryPrice(e){
//   const myHeaders = new Headers({
//     'Content-Type': 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlYmF5cmFtIiwiaWF0IjoxNjgwNDUyOTE3LCJleHAiOjE2ODA1MzkzMTd9.Q-0Bgyl_8a2qW7iLxlPYErIX4ef4mtCU61Pg_o4UUx4',
//     'Access-Control-Allow-Origin': '*'
// });
//   e.preventDefault();
//   const response = await fetch("http://localhost:8080/jsure/api/history-price",{
//     headers : myHeaders ,
//     method : 'POST',
//     body : JSON.stringify({
//       barkod : '8681429550424',
//       bslTrh : 20221215
//     })
//   })

//   const data = await response.json();
//   console.log(data);
// }

async function search(e) {
  //Submit olduğu için sayfa refresh oluyordu. Hatam oymuş bende neden data gelmiyor diyordum :)
  e.preventDefault();
  const res = await fetch(`https://api.unsplash.com/search/photos?query=${searchInput.value.trim()}`, { 
    headers: {
        method : 'GET',
        Authorization: 'Client-ID IoTZD6GBW9rdV2WLH2BE21ddDHM-hrERuoeXMyy-7rs'
    }

});

/*
useParams /id
useSearchParams  ?active=true&pageSize=10
useNavigate : yönlendirmek için kullanılır.

*/

  const data = await res.json();
  addImageToUI(data.results);
}

function addImageToUI(imageList) {
  if (imageList != null && imageList.length > 0) {
    imageList.forEach((image) => {
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.setAttribute("src", image.urls.small);
      img.style.width = "400px";
      img.style.height = "400px";

      card.append(img);
      imageWrapper.append(card);
    });
  }
}
