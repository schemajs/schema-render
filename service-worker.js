/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "82952f6a8fd7e5d08fb04f889fda53e3"
  },
  {
    "url": "assets/css/0.styles.06186596.css",
    "revision": "d9c4ac1636f0f336a9404184e20e4b21"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2f129b73.js",
    "revision": "af2ef53eebcd66606921e311eb05a4f1"
  },
  {
    "url": "assets/js/11.f835a8a8.js",
    "revision": "6dce4e9fc835dd11e4a8fdd40d4c6a25"
  },
  {
    "url": "assets/js/12.dcdd0860.js",
    "revision": "da8ab35ef8c5bc1dd9c8c9604cb07eb0"
  },
  {
    "url": "assets/js/13.11fe22e6.js",
    "revision": "73339b7a4da35dda9119aad6c5a7cbba"
  },
  {
    "url": "assets/js/14.8b514ff1.js",
    "revision": "986f695eacfc1b7e40f9cf863ece04c5"
  },
  {
    "url": "assets/js/15.77374709.js",
    "revision": "0143590a9c01641cf44cbaf4a3f169ef"
  },
  {
    "url": "assets/js/16.e6a85bcd.js",
    "revision": "bf99776b7645f443148b06a855d777db"
  },
  {
    "url": "assets/js/17.5f28b759.js",
    "revision": "338fdf384252cc98ceea9a30f7fbe05f"
  },
  {
    "url": "assets/js/18.5090d8b3.js",
    "revision": "7329e433faaa591423e092e212c22b5c"
  },
  {
    "url": "assets/js/19.d50fede2.js",
    "revision": "89ccbab0ca88734adaba58dbcb4a570e"
  },
  {
    "url": "assets/js/2.ef3a985a.js",
    "revision": "6f2b044777ff3d8504e7ab8f5035ecaf"
  },
  {
    "url": "assets/js/20.72466147.js",
    "revision": "0ca4ee8e627817dc2768e331249333d4"
  },
  {
    "url": "assets/js/21.c6c4839d.js",
    "revision": "60b9358589495b9d6c330eb191419c3b"
  },
  {
    "url": "assets/js/22.e8b0066e.js",
    "revision": "3080ba0c030a757e8851d211d10c13d8"
  },
  {
    "url": "assets/js/23.a5d4e2ac.js",
    "revision": "9219f491a2bd618cc5250231a82ae69a"
  },
  {
    "url": "assets/js/24.df78caf3.js",
    "revision": "d7018546f6de2be3c25b2936d58d89e5"
  },
  {
    "url": "assets/js/25.7f2af26d.js",
    "revision": "4aef5b1446af68cf73bf901807a7c317"
  },
  {
    "url": "assets/js/26.4f5a25f9.js",
    "revision": "053067189b6b2911cd18c1ab76bd00ef"
  },
  {
    "url": "assets/js/27.4b7deb9c.js",
    "revision": "36f9cf4bee0718549002c1c9edce6488"
  },
  {
    "url": "assets/js/28.14d38bef.js",
    "revision": "57cee2ed450e05cceb8d48a88985728f"
  },
  {
    "url": "assets/js/29.f1803203.js",
    "revision": "81a22ff97545734699bbe8fbc38f3699"
  },
  {
    "url": "assets/js/3.62143bb1.js",
    "revision": "4c4af2342bf14a356d94aa47adc09f13"
  },
  {
    "url": "assets/js/30.7ca6901d.js",
    "revision": "0d30c7ef98a7e015d911b68b9f1d791c"
  },
  {
    "url": "assets/js/31.f3e10ad7.js",
    "revision": "da7b7a526bf5ab589d71d50b426beda6"
  },
  {
    "url": "assets/js/32.3c21bed4.js",
    "revision": "796a3951993937712aaf42bed985ef38"
  },
  {
    "url": "assets/js/33.550b7f25.js",
    "revision": "697c105f9af9c4d170c116082eaf6c1b"
  },
  {
    "url": "assets/js/34.d87667ea.js",
    "revision": "82f4cd40ac4a7c6a41c5d7aa831f74e9"
  },
  {
    "url": "assets/js/35.75f160f4.js",
    "revision": "5fda081e1b306218d9910f7988435ece"
  },
  {
    "url": "assets/js/36.ee22b68b.js",
    "revision": "bae4c34edf483ad97e50f3ecc379636c"
  },
  {
    "url": "assets/js/37.0b37dc80.js",
    "revision": "0d6029ec90f334bfad086dc80ddc4ac2"
  },
  {
    "url": "assets/js/38.4d516e3e.js",
    "revision": "e2a442d9023e717edb0ec4bed37ec9cc"
  },
  {
    "url": "assets/js/39.36d59431.js",
    "revision": "80c5551132ca75b845905b3e929c891a"
  },
  {
    "url": "assets/js/4.a04ecfca.js",
    "revision": "3abc8d16d7efb4dc9cd3b36b11cca7a7"
  },
  {
    "url": "assets/js/40.10c4325b.js",
    "revision": "24e08bb7fbcb9ef58ca15744b75ea819"
  },
  {
    "url": "assets/js/41.50a2efff.js",
    "revision": "bf1d609607887df47e9d1f2347fad4a0"
  },
  {
    "url": "assets/js/42.1789c9fd.js",
    "revision": "c8b08e088d288bf95f478c1146271a0b"
  },
  {
    "url": "assets/js/43.ccfa7eca.js",
    "revision": "3929b6fb9680168d033387440a90175b"
  },
  {
    "url": "assets/js/44.838b923b.js",
    "revision": "46d6ad9b29e3afda5d0d6b169dd1f05d"
  },
  {
    "url": "assets/js/45.ec01a89d.js",
    "revision": "efe1a8a147650fe728ca9fe8bbf46cbc"
  },
  {
    "url": "assets/js/46.dca8f75c.js",
    "revision": "e84e29c24cfa80befbb822db97fd7258"
  },
  {
    "url": "assets/js/47.8ee992d2.js",
    "revision": "729be11e1b7e26ae888e40ba936dc324"
  },
  {
    "url": "assets/js/48.303b90e7.js",
    "revision": "99359435d98565d34417868a94611c5d"
  },
  {
    "url": "assets/js/49.35d402bd.js",
    "revision": "74f32f73baa5b3254b1b6ecc8b0b80b7"
  },
  {
    "url": "assets/js/5.c549f0cd.js",
    "revision": "bb1620bb4dec0500819125dd6b336e30"
  },
  {
    "url": "assets/js/50.74f12899.js",
    "revision": "b24658e0b9d35e36fafda25374a97f77"
  },
  {
    "url": "assets/js/51.bb9855d5.js",
    "revision": "6ae805263adc7500a879a121d59f648d"
  },
  {
    "url": "assets/js/52.831ea6e5.js",
    "revision": "7cbaeadc4e6e6c7d83431d48bfa72346"
  },
  {
    "url": "assets/js/53.217511f4.js",
    "revision": "618731510b97fe040612c23f4202e762"
  },
  {
    "url": "assets/js/54.29ca5a59.js",
    "revision": "441862b515d564746ad4cc4db452a473"
  },
  {
    "url": "assets/js/55.ece5d9a8.js",
    "revision": "03a216d6aad6c466f621cecc2959c646"
  },
  {
    "url": "assets/js/56.2ff658b9.js",
    "revision": "3a50eacf0b44d5ad8ebb4c57288b117c"
  },
  {
    "url": "assets/js/57.21f2da59.js",
    "revision": "52560630694ae45203fd86f2e826233a"
  },
  {
    "url": "assets/js/58.a36ce93a.js",
    "revision": "bb6918827cc9da643d49ac6a4ca7adc7"
  },
  {
    "url": "assets/js/59.0c009eac.js",
    "revision": "c86fa968756fbd11803da33aead391a2"
  },
  {
    "url": "assets/js/6.7fcb3a83.js",
    "revision": "287349cf77afb9d2e7a1a92e92b2131b"
  },
  {
    "url": "assets/js/60.399740d3.js",
    "revision": "4910e58ef4e674b625680549c5e3ca1f"
  },
  {
    "url": "assets/js/61.97736442.js",
    "revision": "acbef6707371e9e9f37acbc9ab5d497a"
  },
  {
    "url": "assets/js/7.3d8ca03e.js",
    "revision": "7f6a6d1b30730a3b2c04b0dee921306a"
  },
  {
    "url": "assets/js/8.e3756ef8.js",
    "revision": "af3c96bdb2171ce3cd30dd8b0cd100a0"
  },
  {
    "url": "assets/js/9.93d665ed.js",
    "revision": "591b21cbe0f6dacaa334abc071c73630"
  },
  {
    "url": "assets/js/app.8ca4021e.js",
    "revision": "dd2f3517699fc7f17454ea075767da20"
  },
  {
    "url": "demo/hello-world/h5.png",
    "revision": "1db27a81e61d4f9d26a14fbd684b0f27"
  },
  {
    "url": "demo/hello-world/weapp.png",
    "revision": "488aa403f73bddfad2ba5b1b73c37a7d"
  },
  {
    "url": "en/api/components.html",
    "revision": "00487148813c212a210892411237a039"
  },
  {
    "url": "en/api/leap-ui.html",
    "revision": "6414f118496380044b050cf7b7044f15"
  },
  {
    "url": "en/api/stores.html",
    "revision": "bf9ac56175985c50b8f8e87b7bad36a0"
  },
  {
    "url": "en/api/taro-ui.html",
    "revision": "9c82617dd9a1c215264137f826812ecd"
  },
  {
    "url": "en/api/taro.html",
    "revision": "5ecbe259b067afd5b1f70d06e490ee94"
  },
  {
    "url": "en/case/leap-ui.html",
    "revision": "9fc44858cbbc389363878f0da9a55349"
  },
  {
    "url": "en/case/simple.html",
    "revision": "f5673226922e5b2204f0b25bd7d57693"
  },
  {
    "url": "en/case/taro-ui.html",
    "revision": "9062f982fe486ce93cc7fa6cf85cbfff"
  },
  {
    "url": "en/case/taro.html",
    "revision": "10cde2ab758228df6c90d6e8ff8338bb"
  },
  {
    "url": "en/guide/advance/business.html",
    "revision": "daef49018b69b9e04dd358a3bc400502"
  },
  {
    "url": "en/guide/advance/layout.html",
    "revision": "608e6d58444cb6cedfba531187c7a7cb"
  },
  {
    "url": "en/guide/advance/performance.html",
    "revision": "c651e8390b14f26e9a2e1294caa071d3"
  },
  {
    "url": "en/guide/base/directory-structure.html",
    "revision": "59c09ee12529b0c6ce4bb33b21d9eb21"
  },
  {
    "url": "en/guide/base/getting-started.html",
    "revision": "9857331aa61d3e9e78807f72a6744ce8"
  },
  {
    "url": "en/guide/base/hello.html",
    "revision": "7200942740dbf247af58a54ae9b9b003"
  },
  {
    "url": "en/guide/base/intro.html",
    "revision": "d1af610fa88e812a694a576da5e4e6ee"
  },
  {
    "url": "en/guide/concepts/events.html",
    "revision": "dc77c995463b77c7e44d1cb789f14eb2"
  },
  {
    "url": "en/guide/concepts/mobx.html",
    "revision": "971ce1b48b969f6254ea7d1577518cf7"
  },
  {
    "url": "en/guide/concepts/path.html",
    "revision": "78f24fa5e31e66d6ad3c54063ce4ff97"
  },
  {
    "url": "en/guide/concepts/schema.html",
    "revision": "2a387ab2bffacdf4ede44add35cecd9f"
  },
  {
    "url": "en/index.html",
    "revision": "0fb7583324e8c131eec9507522338240"
  },
  {
    "url": "en/misc/custom-component.html",
    "revision": "53d6b980988cca758c1ca170b5f810b5"
  },
  {
    "url": "en/misc/custom-ui-lib.html",
    "revision": "a1b435f7d4ad53e13750581837bff485"
  },
  {
    "url": "en/misc/design-concepts.html",
    "revision": "6fb422b62f6ab155b98eb2a6dde7cbe1"
  },
  {
    "url": "en/misc/faq.html",
    "revision": "369207a5f05c1f7e88a9302991b6129e"
  },
  {
    "url": "en/misc/glossary.html",
    "revision": "cdd0b5e789d4b2dcfdd0b92e7debe6c0"
  },
  {
    "url": "en/misc/recursive-render.html",
    "revision": "16d757f476986baf0289235b2e88fbdc"
  },
  {
    "url": "logo.png",
    "revision": "eaa6786829c02320352aea7433dbbfab"
  },
  {
    "url": "zh/api/components.html",
    "revision": "908e9a4e20ffe391fda054a506edcaba"
  },
  {
    "url": "zh/api/leap-ui.html",
    "revision": "e2f9de134f0f6c3c44b77b709a99baef"
  },
  {
    "url": "zh/api/stores.html",
    "revision": "7ad0a6c7b2323314586b98d41cc9eede"
  },
  {
    "url": "zh/api/taro-ui.html",
    "revision": "a2ffd8862a1bd6e6ee449bab18a437c0"
  },
  {
    "url": "zh/api/taro.html",
    "revision": "4113daeb8da9085f2fef9650ea07ec68"
  },
  {
    "url": "zh/case/leap-ui.html",
    "revision": "0cbc1bab1cc9ba01e18ba4951ba9c8d2"
  },
  {
    "url": "zh/case/simple.html",
    "revision": "0a7978a1740b9b9d1a461678ae7960bf"
  },
  {
    "url": "zh/case/taro-ui.html",
    "revision": "7405809d7de0e0e7093523a18d5527b0"
  },
  {
    "url": "zh/case/taro.html",
    "revision": "3e29e86b5c9803ecb3d2b2bb6caf2a42"
  },
  {
    "url": "zh/guide/advance/business.html",
    "revision": "faf19adb0a103beaf05f530d495748c6"
  },
  {
    "url": "zh/guide/advance/layout.html",
    "revision": "9f112d2133104fd03c213f851b27a80b"
  },
  {
    "url": "zh/guide/advance/performance.html",
    "revision": "e1812d20af2b6140f5bcb0d87ea5a3f9"
  },
  {
    "url": "zh/guide/base/directory-structure.html",
    "revision": "0639977496aff3d4f6f4296c0f6b741e"
  },
  {
    "url": "zh/guide/base/getting-started.html",
    "revision": "6eaecbb75f3d874a20cf6ee085440779"
  },
  {
    "url": "zh/guide/base/hello.html",
    "revision": "d062d7d178a3b8edc241a25debf842fa"
  },
  {
    "url": "zh/guide/base/intro.html",
    "revision": "9a1b607a14bd931854424b701755fdc1"
  },
  {
    "url": "zh/guide/concepts/events.html",
    "revision": "a80335254a2529809ab0ac01a943762b"
  },
  {
    "url": "zh/guide/concepts/mobx.html",
    "revision": "00072b0f67d55354192be64d2083eef3"
  },
  {
    "url": "zh/guide/concepts/path.html",
    "revision": "908134dc8c88fb45f7b4f5bcebfecfe6"
  },
  {
    "url": "zh/guide/concepts/schema.html",
    "revision": "96678e95f48deb71e156017de0098c12"
  },
  {
    "url": "zh/index.html",
    "revision": "4880d410ab8b0bc92f64c87f7d81c715"
  },
  {
    "url": "zh/misc/custom-component.html",
    "revision": "ab987d83c35b211b4b9d78b2661dd30d"
  },
  {
    "url": "zh/misc/custom-ui-lib.html",
    "revision": "e87fc3f2fa56666aa8fc2c1e1daf950a"
  },
  {
    "url": "zh/misc/design-concepts.html",
    "revision": "a03dba80c0d27aae32104fd1a1363a49"
  },
  {
    "url": "zh/misc/faq.html",
    "revision": "e461f4d06b9a3fe345aafb33151f5e28"
  },
  {
    "url": "zh/misc/glossary.html",
    "revision": "5cc92d5d6af33747d4aebc96e6dcfaaf"
  },
  {
    "url": "zh/misc/recursive-render.html",
    "revision": "2130ff550ef84e4049c089726597a389"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
