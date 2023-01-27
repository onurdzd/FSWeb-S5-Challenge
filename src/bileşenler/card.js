import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "card");

  const div2 = document.createElement("div");
  div2.setAttribute("class", "headline");
  div2.textContent = makale.anabaslik;

  const div3 = document.createElement("div");
  div3.setAttribute("class", "author");

  const div4 = document.createElement("div");
  div4.setAttribute("class", "img-container");

  const img = document.createElement("img");
  img.setAttribute("src", makale.yazarFoto);

  const span = document.createElement("span");
  span.textContent = makale.yazarAdi;

  div4.appendChild(img);
  div3.appendChild(div4);
  div3.appendChild(span);
  mainDiv.appendChild(div2);
  mainDiv.appendChild(div3);

  mainDiv.addEventListener("click", () => {
    console.log(makale.anabaslik);
  });

  return mainDiv;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const dataAl = async () => {
    await axios.get("http://localhost:5001/api/makaleler").then((response) => {
      Object.values(response.data.makaleler).forEach((item) =>
        item.forEach((son) => {
          document.querySelector(secici).appendChild(Card(son));
        })
      );
    });
  };

  dataAl();
};

export { Card, cardEkleyici };
