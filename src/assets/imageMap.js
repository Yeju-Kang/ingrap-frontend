// src/assets/imageMap.js
const S3_BASE_URL = "https://ingrap-front-bucket.s3.ap-northeast-2.amazonaws.com";

const imageMap = {
  logo: {
    s: `${S3_BASE_URL}/assets/logo/logo-s.png`,
    l: `${S3_BASE_URL}/assets/logo/logo-l.png`,
  },
  banner: {
    top: `${S3_BASE_URL}/assets/banner/banner-top.png`,
    bottom: `${S3_BASE_URL}/assets/banner/banner-bottom.png`,
  },
  icon: {
    shop: `${S3_BASE_URL}/assets/icon/shop.png`,
    cart: `${S3_BASE_URL}/assets/icon/cart.png`,
  },
  section: {
    home: {
      room1: `${S3_BASE_URL}/assets/section/home/room1.jpg`,
      room2: `${S3_BASE_URL}/assets/section/home/room2.jpg`,
      room3: `${S3_BASE_URL}/assets/section/home/room3.jpg`,
      room4: `${S3_BASE_URL}/assets/section/home/room4.jpg`,
    },
    shop: {
      bedroom: `${S3_BASE_URL}/assets/section/shop/bedroom.png`,
      kitchen: `${S3_BASE_URL}/assets/section/shop/kitchen.png`,
      bathroom: `${S3_BASE_URL}/assets/section/shop/bathroom.png`,
      living: `${S3_BASE_URL}/assets/section/shop/living.png`,
      terrace: `${S3_BASE_URL}/assets/section/shop/terrace.png`,
      lighting: `${S3_BASE_URL}/assets/section/shop/lighting.png`,
      outdoor: `${S3_BASE_URL}/assets/section/shop/outdoor.png`,
      store: `${S3_BASE_URL}/assets/section/shop/store.png`,
      chair:`${S3_BASE_URL}/assets/section/shop/chair.glb`,
      chairimg:`${S3_BASE_URL}/assets/section/shop/chairimg.png`,
      bed:`${S3_BASE_URL}/assets/section/shop/bed.glb`,
      bedimg: `${S3_BASE_URL}/assets/section/shop/bedimg.png`,
      drawer:`${S3_BASE_URL}/assets/section/shop/drawer.glb`,
      drawerimg: `${S3_BASE_URL}/assets/section/shop/drawerimg.png`,
      sofa:`${S3_BASE_URL}/assets/section/shop/sofa.glb`,
      sofaimg: `${S3_BASE_URL}/assets/section/shop/sofaimg.png`,
      lamp:`${S3_BASE_URL}/assets/section/shop/lamp.glb`,
      lampimg: `${S3_BASE_URL}/assets/section/shop/lampimg.png`,
      woodfloor:`${S3_BASE_URL}/assets/section/shop/woodfloor.jpg`,
      wallpaper:`${S3_BASE_URL}/assets/section/shop/wallpaper.png`,
      lightWoodBed: `${S3_BASE_URL}/assets/section/shop/light_wood_bed.png`
    },
  },
  manual: {
    intro: `${S3_BASE_URL}/assets/manual/intro.png`,
    howToBuy: `${S3_BASE_URL}/assets/manual/how-to-buy.png`,
  },
};

export default imageMap;
