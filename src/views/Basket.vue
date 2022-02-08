<template>
  <div class="basket">
    <div class="items">

      <div v-for="(TShirt, index) in TShirtsInBag" :key="index" class="item">
        <div class="remove" @click="this.$store.dispatch('removeFromBag',TShirt.id)">Supprimer le produit</div>
        <div class="photo">
          <p>{{TShirt.flag}}</p>


           <img :src="TShirt.imageURL">
         </div>
        <div class="description">
         {{ TShirt.description }}
         </div>
        <div class="price">
          
            <span class="amount">US $ {{ TShirt.price }}</span>
        </div>
      </div>
      <div class="grand-total"> Grand Total</div>

    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";



export default {
  name: 'Basket',

  methods: {
   
  
  },
    computed: mapState([
      'TShirtsInBag'
    ])
    
 
}
</script>

<style lang="scss">

.basket {
  padding: 60px 0;  
  .items {
    max-width: 800px;
    margin: auto;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remove {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
      }

      .quantity-area {
        margin: 8px auto;
        height: 14px;

        button {
          width: 16px;
          height: 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .quantity {

            margin: 0 4px;
        }
      }

      .photo {
        img {
          max-width: 80px;
        }
      }

      .description {
        padding-left: 30px;
        box-sizing: border-box;
        max-width: 50%;

      }

      .price {
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;

        }
      }
    }
      .grand-total {
          font-size: 24px;
          font-weight: bold;
          text-align: right;
          margin-top: 8px;
      }

  }

}

</style>
