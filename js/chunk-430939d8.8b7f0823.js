(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-430939d8"],{"53b7":function(e,t,c){"use strict";c.r(t);var o=c("7a23"),n=Object(o["withScopeId"])("data-v-576c4eb4");Object(o["pushScopeId"])("data-v-576c4eb4");var a={class:"content d-flex flex-column justify-content-between position-relative"},r=Object(o["createVNode"])("div",{class:"favorites-banner d-flex-center text-white fs-2 mb-md-4 mb-3"},[Object(o["createVNode"])("p",{class:"\n            bg-translucent\n            fw-bolder\n            rounded-3 rounded\n            px-lg-5\n            py-lg-3\n            px-4\n            py-2\n          "}," 商品收藏列表 ")],-1),l={key:0,class:"container mb-4"},d=Object(o["createVNode"])("nav",{"aria-label":"breadcrumb"},[Object(o["createVNode"])("ol",{class:"breadcrumb mb-md-4 mb-3"},[Object(o["createVNode"])("li",{class:"breadcrumb-item text-gray"},"首頁"),Object(o["createVNode"])("li",{class:"breadcrumb-item text-secondary"},"商品收藏列表")])],-1),i={class:"\n            row row-cols-1 row-cols-lg-4 row-cols-md-2\n            g-md-5\n            justify-content-center\n            mt-0\n          "},s={key:0,class:"\n                col\n                animate__animated animate__fadeIn\n                d-flex-center\n                mt-0\n                mb-4\n              "},b={class:"\n                  card\n                  bg-transparent\n                  w-100 w-sm-65 w-md-100\n                  h-100\n                  border-0\n                "},u={key:1,class:"shopping text-center"},m=Object(o["createVNode"])("h2",{class:"fw-bold"},"目前商品收藏列表為空",-1),j=Object(o["createVNode"])("h3",null,"逛逛新鮮水果",-1);Object(o["popScopeId"])();var p=n((function(e,t,c,n,p,O){var v=Object(o["resolveComponent"])("ProductImg"),f=Object(o["resolveComponent"])("AddToCart"),h=Object(o["resolveComponent"])("Subscription");return Object(o["openBlock"])(),Object(o["createBlock"])("div",a,[Object(o["createVNode"])("div",null,[r,p.collectionData.length&&p.view?(Object(o["openBlock"])(),Object(o["createBlock"])("div",l,[d,Object(o["createVNode"])("ul",i,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(p.collectionData,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],{key:e.id},[p.id[e.id]?(Object(o["openBlock"])(),Object(o["createBlock"])("li",s,[Object(o["createVNode"])("div",b,[Object(o["createVNode"])(v,{item:e,onFavorites:O.removeFavorites,ref:"productImg"},null,8,["item","onFavorites"]),Object(o["createVNode"])(f,{class:"mx-auto",item:e},null,8,["item"])])])):Object(o["createCommentVNode"])("",!0)],64)})),128))])])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",u,[m,j,Object(o["createVNode"])("button",{type:"button",class:"btn btn-primary btn-sm btn-hover",onClick:t[1]||(t[1]=function(t){return e.$router.push("/products")})}," 商品列表 ")]))]),Object(o["createVNode"])(h)])})),O=c("5530"),v=(c("07ac"),c("159b"),c("c260")),f=c("93a5"),h=c("b017"),w=c("5502"),k={data:function(){return{collectionData:this.$store.getters.collectionData,id:{},view:!0}},components:{ProductImg:v["a"],AddToCart:f["a"],Subscription:h["a"]},methods:Object(O["a"])(Object(O["a"])({},Object(w["b"])(["data","getAllProducts","updateCollectionData"])),{},{removeFavorites:function(e){this.id[e]=!1,this.view=Object.values(this.id).some((function(e){return!0===e}))}}),computed:{allProducts:function(){return this.$store.getters.allProducts}},watch:{allProducts:function(){var e=this;this.data(),this.updateCollectionData(),this.collectionData.forEach((function(t){e.id[t.id]=!0}))}},mounted:function(){this.collectionData.length&&this.getAllProducts()}};c("e968");k.render=p,k.__scopeId="data-v-576c4eb4";t["default"]=k},e6ad:function(e,t,c){},e968:function(e,t,c){"use strict";c("e6ad")}}]);
//# sourceMappingURL=chunk-430939d8.8b7f0823.js.map