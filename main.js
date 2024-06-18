// HTMLファイル内にデータを表示させるためには、まずVUeアプリを作成する必要がある
const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      image: './assets/images/socks_green.jpg',
      inventory: 100
    }
  }
})