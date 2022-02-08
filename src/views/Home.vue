<template>
  <div class="home">
    <div class="products">

      <div 
      v-for = "(TShirt, index) in this.TShirts" :key="index"
      class="product"
      :class="{ inBag : isInBag(TShirt) }"
      >

      <div class="product-image" :style="{backgroundImage: 'url(' + TShirt.imageURL + ')'}">
      </div>
        <p v-if='TShirt.flag != ""' class="flag" v-bind:class="{ red: TShirt.flag == 'NEW', blue:TShirt.flag=='Sale!'}">{{TShirt.flag}}</p>


        
        <h4>{{ TShirt.name }}</h4>
        <p>{{TShirt.description}}</p>
        <p class="price"> US$ {{ TShirt.price}}</p>
        <button v-if="!isInBag(TShirt)" @click="addToBag(TShirt)">Ajouter au panier</button>
        <button 
          v-else 
          class="remove"
          @click="this.$store.dispatch('removeFromBag', TShirt.id)"
          >Supprimer du panier</button>


      </div>     
    </div>
  </div>
  <div class="divButtons">
    <button v-on:click="changePage(1)" v-bind:class="{ selected: ActuelPage === 1 }" class="singleButton">1</button>
    <button v-on:click="changePage(2)" v-bind:class="{ selected: ActuelPage === 2 }" class="singleButton">2</button>
    <button v-on:click="changePage(3)" v-bind:class="{ selected: ActuelPage === 3 }" class="singleButton">3</button>
    <button v-on:click="changePage(4)" v-bind:class="{ selected: ActuelPage === 4 }" class="singleButton">4</button>
    <button v-on:click="changePage(5)" v-bind:class="{ selected: ActuelPage === 5 }" class="singleButton">5</button>
    
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Home',
 data() {
      return {
        Tshirts: [],
        ActuelPage: 1,
      }
    },

  methods: {
    addToBag(TShirt) {
      TShirt.quantity = 1;
      this.$store.dispatch('addToBag', TShirt);      
    },
    isInBag(TShirt) {
      return this.TShirtsInBag.find(item => item.id == TShirt.id)
    },
    
    
   
  }, 
  computed: mapState([
      'TShirts', 'TShirtsInBag'
    ])
   
  }

</script>

<style lang="scss">

  .home {
    .red{
    padding: 10px;
    position: absolute;
    border-radius: 50%;
    transform: rotate(-45deg);
    color: white;
    background-color: rgb(255, 102, 0);
    text-align: center;
    margin-top: -180px;
  }

.blue{
    padding: 10px;
    position: absolute;
    border-radius: 50%;
    transform: rotate(-45deg);
    color: white;
    background-color: rgb(0, 255, 234);
    text-align: center;
    margin-top: -180px;

  }


    .products {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;


      .product {
        flex: 0 0 30%;
        box-sizing: border-box;  
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 16px;
        margin: 8px;
        height: 590px;

        @media only screen and (max-width: 769px) {
          flex: 0 0 40%;
        }

        @media only screen and (max-width: 640px) {
          flex: 0 0 90%;
        }

        &.inBag {
          border: 1px solid #007bff;
        }
        
        .product-image {
          margin: 20px auto;
          width: 160px;
          height: 140px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        h4 {
          margin: 22px auto;
          font-size: 12px;
          max-width: 60%;
          font-weight: normal;
        }

        p.price {
          font-size: 20px;
          font-weight: bold;
        }

        button {
          color: #fff;
          background-color: #007bff;
          border: 1px solid #007bff;
          border-radius: 100px;
          font-weight: 400;
          text-align: center;
          padding: 8px 16px;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }

          &.remove {
            background-color: transparent;
            border: none;
            color: black;
            text-decoration: underline;
          }
        }
      }
    }
  }

</style>
