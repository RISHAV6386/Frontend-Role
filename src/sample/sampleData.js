 const sampleData = [
  {
    "badge": true,
    "image": "https://tse4.mm.bing.net/th/id/OIP.KXCqKBV807x-KeAxEUCtRwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Nike Air Max",
    "starRating": 4.7,
    "price": 8999,
    "priceAfterOff": 7499,
    "offPercentage": 17
  },
  {
    "badge": false,
    "image": "https://tse4.mm.bing.net/th/id/OIP.mrQRTI-lj0rYIxPpX5iRYQHaEu?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Adidas Ultraboost",
    "starRating": 3,
    "price": 11999,
    "priceAfterOff": 8999,
    "offPercentage": 25
  },
  {
    "badge": true,
    "image": "https://www.bing.com/th?id=OPAC.Ka8teDSVfpCpVw474C474&o=5&pid=21.1&w=140&h=140&rs=1&qlt=100&dpr=0.8&o=2",
    "brandName": "Puma RS-X",
    "starRating": 5,
    "price": 7999,
    "priceAfterOff": 5599,
    "offPercentage": 30
  },
  {
    "badge": false,
    "image": "https://tse3.mm.bing.net/th/id/OIP.p6q-ZvGWTtDteofTigUQLgHaJT?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Reebok Classic",
    "starRating": 4.0,
    "price": 6999,
    "priceAfterOff": 5599,
    "offPercentage": 20
  },
  {
    "badge": true,
    "image": "https://tse3.mm.bing.net/th/id/OIP.bivf6G3LE27LW08Xh2yyegAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Under Armour Curry",
    "starRating": 4.6,
    "price": 10999,
    "priceAfterOff": 8799,
    "offPercentage": 20
  },
  {
    "badge": false,
    "image": "https://th.bing.com/th/id/OIP.ybUCjrfMeOM_jLT2RlXecQHaFP?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "New Balance 574",
    "starRating": 4.3,
    "price": 8499,
    "priceAfterOff": 6799,
    "offPercentage": 20
  },
  {
    "badge": true,
    "image": "https://tse4.mm.bing.net/th/id/OIP.pnYmOvyiZtUFk81TZ-bt2gHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Converse Chuck Taylor",
    "starRating": 4.4,
    "price": 4999,
    "priceAfterOff": 3999,
    "offPercentage": 20
  },
  {
    "badge": false,
    "image": "https://th.bing.com/th/id/OIP.Cr9BjTs48axUhMBpblLcvAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Vans Old Skool",
    "starRating": 4.1,
    "price": 5999,
    "priceAfterOff": 4499,
    "offPercentage": 25
  },
  {
    "badge": true,
    "image": "https://tse2.mm.bing.net/th/id/OIP.vLjpa_x6RiovbcRoBiL7dwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Fila Disruptor",
    "starRating": 3.9,
    "price": 6999,
    "priceAfterOff": 4899,
    "offPercentage": 30
  },
  {
    "badge": true,
    "image": "https://tse2.mm.bing.net/th/id/OIP.D7S9mmvoqUnAwQGycUSUeAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Asics Gel Lyte",
    "starRating": 4.5,
    "price": 8999,
    "priceAfterOff": 7199,
    "offPercentage": 20
  },
  {
    "badge": true,
    "image": "https://tse1.mm.bing.net/th/id/OIP.LqH-XmfffwM7qTLHNUY_OwHaFM?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Nike Air Force 1",
    "starRating": 4.8,
    "price": 9999,
    "priceAfterOff": 7999,
    "offPercentage": 20
  },
  {
    "badge": false,
    "image": "https://th.bing.com/th/id/OIP.Xi6OXCFM6a3up7XVs8H91wHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Adidas Stan Smith",
    "starRating": 4.6,
    "price": 8999,
    "priceAfterOff": 6749,
    "offPercentage": 25
  },
  {
    "badge": true,
    "image": "https://tse2.mm.bing.net/th/id/OIP.RuXq_kDAeyVIMWsVNkLYeQHaH9?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Puma Cali",
    "starRating": 4.2,
    "price": 7499,
    "priceAfterOff": 5249,
    "offPercentage": 30
  },
  {
    "badge": false,
    "image": "https://th.bing.com/th/id/OIP.efKOvEbjMJ7xAKvAfgWzlAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Reebok Nano",
    "starRating": 4.1,
    "price": 7999,
    "priceAfterOff": 6399,
    "offPercentage": 20
  },
  {
    "badge": true,
    "image": "https://tse3.mm.bing.net/th/id/OIP.pwjyxNWhuMLjK8eV-bA1UwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Under Armour HOVR",
    "starRating": 4.5,
    "price": 10999,
    "priceAfterOff": 7699,
    "offPercentage": 30
  },
  {
    "badge": false,
    "image": "https://tse4.mm.bing.net/th/id/OIP.krzlbudC-kMR7umf8IEdugHaDi?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "New Balance 990",
    "starRating": 4.4,
    "price": 11999,
    "priceAfterOff": 9599,
    "offPercentage": 20
  },
  {
    "badge": true,
    "image": "https://tse2.mm.bing.net/th/id/OIP.Y0p4QR-oSlt2F46B91aG8QHaDv?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Converse One Star",
    "starRating": 4.0,
    "price": 6499,
    "priceAfterOff": 4549,
    "offPercentage": 30
  },
  {
    "badge": true,
    "image": "https://tse1.mm.bing.net/th/id/OIP.SPSNpi60pK7S7ZwIAZ2fMgHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Vans Sk8-Hi",
    "starRating": 4.3,
    "price": 6999,
    "priceAfterOff": 5599,
    "offPercentage": 20
  },
  {
    "badge": false,
    "image": "https://tse4.mm.bing.net/th/id/OIP.-nwmfM9MQbvgKwgiSgzMogHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Fila Ray Tracer",
    "starRating": 3.8,
    "price": 5999,
    "priceAfterOff": 4499,
    "offPercentage": 25
  },
  {
    "badge": true,
    "image": "https://images.asics.com/is/image/asics/1011B861_400_SR_RT_GLB?$zoom$",
    "brandName": "Asics GT-2000",
    "starRating": 4.5,
    "price": 9999,
    "priceAfterOff": 7999,
    "offPercentage": 20
  },
  {
    "badge": false,
    "image": "https://tse1.mm.bing.net/th/id/OIP.ZMpcdql8SHTr9edPnHYw7QHaGj?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Skechers D'Lites",
    "starRating": 4.1,
    "price": 6999,
    "priceAfterOff": 4899,
    "offPercentage": 30
  },
  {
    "badge": true,
    "image": "https://th.bing.com/th/id/OIP.PLQx3Bf9D4k14bhq-wjGfQHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Nike React Infinity",
    "starRating": 4.7,
    "price": 12999,
    "priceAfterOff": 9099,
    "offPercentage": 30
  },
  {
    "badge": true,
    "image": "https://tse2.mm.bing.net/th/id/OIP.XrcO_V1lh2l2mOiDtUusPAHaFS?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Adidas NMD",
    "starRating": 4.6,
    "price": 11999,
    "priceAfterOff": 8999,
    "offPercentage": 25
  },
  {
    "badge": false,
    "image": "https://tse2.mm.bing.net/th/id/OIP.WVaQel7_1DhOGO9KIgjO9wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Puma Future Rider",
    "starRating": 4.2,
    "price": 7499,
    "priceAfterOff": 5249,
    "offPercentage": 30
  },
  {
    "badge": true,
    "image": "https://tse3.mm.bing.net/th/id/OIP.LOrtAcNyfdd_2u19lgjapQHaFB?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Reebok Floatride",
    "starRating": 4.3,
    "price": 8499,
    "priceAfterOff": 6799,
    "offPercentage": 20
  },
  {
    "badge": false,
    "image": "https://tse1.mm.bing.net/th/id/OIP.vSB2GuzimokHRUB5fGQG1AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Under Armour Charged",
    "starRating": 4.2,
    "price": 8999,
    "priceAfterOff": 6299,
    "offPercentage": 30
  },
  {
    "badge": true,
    "image": "https://images.journeys.com/images/products/1_703457_ZM_SSHERO.JPG",
    "brandName": "New Balance 327",
    "starRating": 4.4,
    "price": 9999,
    "priceAfterOff": 7499,
    "offPercentage": 25
  },
  {
    "badge": false,
    "image": "https://th.bing.com/th/id/OIP.ll9VF2SO9bnN8v3YoEl4EAHaG5?w=213&h=198&c=7&r=0&o=7&pid=1.7&rm=3",
    "brandName": "Converse Run Star",
    "starRating": 4.0,
    "price": 7999,
    "priceAfterOff": 5999,
    "offPercentage": 25
  },
  {
    "badge": true,
    "image": "https://tse3.mm.bing.net/th/id/OIP.37ZTHFhHVXGU8lqeLZHHJgHaFP?rs=1&pid=ImgDetMain&o=7&rm=3",
    "brandName": "Vans Era",
    "starRating": 4.1,
    "price": 4999,
    "priceAfterOff": 3749,
    "offPercentage": 25
  },
  {
    "badge": true,
    "image": "https://th.bing.com/th/id/OIP.GpVzWE00x0EFz8JdC0dkNgHaFj?w=312&h=200&c=12&rs=1&o=6&pid=23.1",
    "brandName": "Asics Kayano",
    "starRating": 4.6,
    "price": 11999,
    "priceAfterOff": 9599,
    "offPercentage": 20
  },
  {
  "badge": true,
  "image": "https://th.bing.com/th/id/OIP.d_YtPQOiGJT-JqoltLrnfwHaFM?w=311&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  "brandName": "Nike Air Max",
  "starRating": 4.7,
  "price": 8999,
  "priceAfterOff": 7499,
  "offPercentage": 17
}


]

 
 export default sampleData