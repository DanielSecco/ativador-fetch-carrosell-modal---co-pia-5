<template>
  <div  class="tagnumber">
    <h1>{{ msg }}</h1>
      <p>
    Informe o número da tag ou utilize o Leitor
    </p>
   <input type="number" id="tagNum" v-on:change="sendop"  placeholder="#"  v-model.number="num"/>
      <br/>
    <modal v-show="isModalVisible" @close="closeModal()"/> 
    <button type="button" class="btn" @click="showModal">QR CODE</button>
      <br/>
    <button class="btavancar" @click="avancar">AVANÇAR</button>
  </div>
</template>

<script>
    var $ = require('jquery');
 import Swiper from 'swiper'
     import Modal from '@/components/comps/Modal.vue'
export default {
  name: 'tagnumber',
    components:{
        Modal
    },
  data () {
    return {
      isModalVisible: false,
        msg: 'TAG #',
		num: ''
		
    }
  },
    methods: {
           showModal() {
               this.$emit('paused', this.paused=false )
                this.isModalVisible = true;
            },
            closeModal() {
          this.num  = TagN;
                this.isModalVisible = false;
            },
       sendop: function(event){

        console.log('thisnum--> ', this.num);  
           if(this.num !== undefined ){   
     TagN = this.num;
     return
           }
    },
        avancar () {
           
              
     console.log('tagnFinal ',TagN);
              var mySwiper = new Swiper('.swiper-container', {

});
        mySwiper.slideTo(2);
            
        }
        
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
    color:black;
}
    #tagNum{
        width: 200px;
        background-color: azure;
    }  
button {
    color: aliceblue;
background-color: #000;
	font-size: 1em;
    width: 200px;
	padding: 1em 2em;
    margin: 1em;
	border: none !important;
	border-radius: 3px;
	box-shadow: none;
}
</style>