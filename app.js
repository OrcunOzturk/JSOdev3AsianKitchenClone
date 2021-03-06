const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


const filterButtonDOM = document.querySelector(".btn-container")  //filtre butonlar??n??n yeri olu??turuldu
const menuItemsDOM = document.querySelector(".section-center")   //Menu maddelerinin yeri olu??turuldu
//menuItemsDOM.classList.add("col-sm-6")

// burada categories de??i??kenine All ile beraber di??er ??lkeleri de alan bir array olu??turmu?? orjinal sayfadan. alternatif yol
// const categories = menu.reduce( 
//   (values, item) => {
//     if (!values.includes(item.category)) {
//       values.push(item.category);
//     }
//     return values;
//   },
//   ["All"]
// );


let ulkearray = menu.map(farketmez => farketmez.category)  //farketmez ge??ici de??i??ken, sadece katalizor g??revi g??r??yor
console.log(ulkearray)  //array olarak her elemandaki ??lke bilgisini ??ekti 
ulkekategori = ["All", ...new Set(ulkearray)]   // arrayin en ba????na "All" bilgisini ekledi ve arraydaki ayn?? olan elemanlar?? Set() kullanarak eledi
console.log(ulkekategori)  // 4 elemanl?? diziyi konsoldan teyit ettik. ??imdi bunlar?? butonlara yazal??m


//ulkekategorideki her eleman i??in bir buton yarat ve ismine de o eleman??n ismini ver 
// ve olu??turdu??un bu objeyi de buton i??in yaratt??????n DOm i??ine append et yani ekle
//className k??sm??nda bootstrapden bak??p class eklemece
//ayr??ca yarat??lan bu eleman??n ??zerine t??land??????nda filtrele fonksiyonunu ??al????t??r
ulkekategori.forEach(ulke => {
let filterButton = document.createElement("button")
filterButton.innerText = ulke
filterButton.className="btn-item  btn-success btn-lg"
filterButtonDOM.appendChild(filterButton)
filterButton.onclick = filtrele
});


//filtrele fonksiyonunu olu??tural??m
//t??klan??lan eleman??n ad?? ALL ise ulkearray'in tamam??n?? g??ster,
//de??ilse t??klan??lan eleman??n ismindeki grubu g??ster

function filtrele(o) { 
  if (o.target.innerText == "All"){showItems(ulkearray)}
  else {showItems([o.target.innerText])}
}


//filtrelenmi?? elemanlar?? g??stermek i??in showitems fonksiyonu tan??ml??yoruz
//

function showItems(filtrele){
  menuItemsDOM.innerHTML = ""
  let filteredMenu = menu.filter(item => filtrele.includes(item.category) ? true : false) 
  filteredMenu.forEach(item => {
    let itemContainer = document.createElement("div")  // her menu eleman?? i??in menu eleman?? konteyn??r??
    let infoContainer = document.createElement("div")  //info i??in yer
    let titleContainer = document.createElement("div") // ba??l??k i??in yer
    let photo = document.createElement("img")          //photo de??i??keni olu??turuldu
    let title = document.createElement("h4")           // ba??l??k i??in metin kutusu olu??turuldu
    let price = document.createElement("h4")           //price i??in metin kutusu olu??turuldu
    let text = document.createElement("p")             // ileride bu paragraf kutusu desc i??in kullan??lacak
    itemContainer.className="menu-items col-lg-6 col-sm-12" //className ile ilgili de??i??kenlere class atand??
    infoContainer.className="menu-info"
    photo.srcset = item.img      //photo de??i??keninin source bilgisini menu arrayinin o indeksindeki img sinden al
    photo.className = "photo"   
    title.innerText = item.title  // title de??i??keninin metnini menu arrayinin o indeksindeki title ??ndan al
    titleContainer.className = "menu-title"
    price.innerText = item.price    // price de??i??keninin bilgisini menu arrayinin o indeksindeki price ??ndan al
    text.innerText = item.desc      // text de??i??keninin bilgisini menu arrayinin o indeksindeki desc inden al
    text.className = "menu-text"
    titleContainer.appendChild(title)  //append ile divleri i?? i??e ge??irdik
    titleContainer.appendChild(price)
    infoContainer.appendChild(titleContainer)
    infoContainer.appendChild(text)
    itemContainer.appendChild(photo)
    itemContainer.appendChild(infoContainer)
    menuItemsDOM.appendChild(itemContainer)
  })
}

showItems(ulkearray);  //bunu yazmassak sayfa bo?? geliyor, 