export const dataList = [
  {
    img: "src/assets/ear/i1.png",
    title: "Apple BYZ S852I",
    price: 2927,
    oldPrice: 3527,
    rate: 4.7,
    type: 'Наушники',
  },
  {
    img: "src/assets/ear/i2.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
    type: 'Наушники',
  },
  {
    img: "src/assets/ear/i3.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
    type: 'Наушники',
  },
  {
    img: "src/assets/ear/i4.png",
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
    type: 'Наушники',
  },
  {
    img: "src/assets/ear/i5.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
    type: 'Наушники',
  },
  {
    img: "src/assets/ear/i6.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
    type: 'Наушники',
  },
  {
    img: "src/assets/ear/i7.png",
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
    type: 'Беспроводные наушники',
  },
  {
    img: "src/assets/ear/i8.png",
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
    type: 'Беспроводные наушники',
  },
  {
    img: "src/assets/ear/i9.png",
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7,
    type: 'Беспроводные наушники',
  },

];

export const productTypes = [...new Set ( dataList.map((item)=> item.type))];


