import axios from "axios";
const Card = (makale) => {
//   // GÖREV 5
//   // ---------------------
//   // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
//   // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
//   // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
//   // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//   // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
//   //
//   // <div class="card">
//   //   <div class="headline">{ anabaslik }</div>
//   //   <div class="author">
//   //     <div class="img-container">
//   //       <img src={ yazarFoto }>
//   //     </div>
//   //     <span>{ yazarAdı } tarafından</span>
//   //   </div>
//   // </div>
//   //
  const card = document.createElement("div");
  card.classList.add("card");
  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = makale.anabaslik;
  card.append(headline);
  const author = document.createElement("div");
  author.classList.add("author");
  card.append(author);
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  author.append(imgContainer);
  const yazarFoto = document.createElement("img");
  yazarFoto.setAttribute("src", makale.yazarFoto);
  imgContainer.append(yazarFoto);
  const yazarAdi = document.createElement("span");
  yazarAdi.textContent = makale.yazarAdi + " tarafından";
  author.append(yazarAdi);
  card.addEventListener("click", () => console.log(makale.anabaslik));
  return card;
}

const cardEkleyici = (secici) => {
  axios.get("http://localhost:5001/api/makaleler")
    .then((res) => {
      const makaleler = res.data.makaleler;
      for(let category in makaleler) {
        makaleler[category].forEach((makale) => {
        const card = Card(makale);
        document.querySelector(secici).append(card);
      })};
    })
//   // GÖREV 6
//   // ---------------------
//   // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
//   // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
//   // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
//   // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
//   // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//   //
}
// cardEkleyici(".cards-container")

export { Card, cardEkleyici }
