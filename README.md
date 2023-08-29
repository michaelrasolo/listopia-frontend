
# Listopia babylist

Listopia is my baby wishlist in a web application. It allows guests to book gifts for our baby and to get redirected to the vendor's website.

Feel free to participate if you feel like it !

## Deployment

The Listopia project has been deployed on Vercel:

[listopia-omega.vercel.app](https://listopia-omega.vercel.app/)

## Tech Stack

**Client:** React, Next, Redux, MaterialUI, Resend

**Server:** Node, Express, Mongoose

**Database:** MongoDB

## Backend

The application's backend is available on my Github as well [here](https://github.com/michaelrasolo/listopia-backend).

The front end uses it as an API to perform persistent actions on the MongoDB database.

{
  "_id": {
    "$oid": "64edf43c586e666848ad2e57"
  },
  "itemName": "Tire-lait",
  "image": "https://m.media-amazon.com/images/I/71bHaz0kBcL._AC_SL1500_.jpg",
  "url": "https://www.amazon.fr/gp/product/B0BWFRQSFH/ref=ox_sc_act_title_1?smid=A1X6FK5RDHNB96&th=1",
  "dealer": "amazon.fr",
  "booked": false,
  "__v": 0,
  "price": 34,
  "category": "Les indispensables",
  "desc": "Modèle SCD430/60 (moins cher et plus d'accessoires). Dites camion."
}

{
  "_id": {
    "$oid": "64bfad6ddec488444e11142b"
  },
  "itemName": "Goupillon à  biberons",
  "image": "https://babymoov.com/cdn/shop/products/a006007_4.png?v=1679913505&width=600",
  "url": "https://www.amazon.fr/gp/product/B0BZP3K5Z6/ref=ox_sc_act_title_1?smid=A2KOWIBU6HW2DA&psc=1",
  "dealer": "amazon.fr",
  "booked": false,
  "__v": 0,
  "price": 7,
  "category": "Repas"
}