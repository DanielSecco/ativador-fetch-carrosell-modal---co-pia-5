
<template>
  <div class="modal-backdrop">
    <div class="modal">
          <!--<button type="button" class="btn-close" @click="close" > x </button>-->
      <qrcode-reader  @decode="onDecode"  :paused="this.paused" ></qrcode-reader>
       <button type="button" class="btn-green" @click="close" >Close me!</button>
    </div>
  </div>
</template>

<script>
     import QrcodeReader from '@/components/QrcodeReader.vue'
var $ = require('jquery')
    export default {
        name: 'modal',
        components: {
           QrcodeReader 
            
        },
        data(){
            return{
              paused: false,  
                
            }
        },
        methods: {
            close() {
                this.$emit('close');
            },
             onDecode(content) {
                console.log(content);
                
                
                // navigator.mediaDevices.getUserMedia({ audio: false, video: false });
                var str = content;
                this.paused = true;
                var matchUrl = str.substr(0, 21);
                var urlToMach = 'https://sid.anubz.io/'
                var res = str.substr(21, 7);
                console.log(matchUrl, '<>', urlToMach);
                if (matchUrl === urlToMach) {
                
     console.log('tagCarro....2> ', res);
       
           
                    
                    TagN = res;
      return TagN , this.close();
               
           // $('.qrcode-reader').remove();
                } else {
                    console.log('woooops');
                }
            }
        },
    };
</script>
<style scoped>
    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal {
        background: #000;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        width: inherit;
        height: inherit;
        flex-direction: column;
    }
    .modal-header,
    .modal-footer {
        padding: 15px;
        display: flex;
    }
    .modal-header {
        border-bottom: 1px solid #eeeeee;
        color: #4AAE9B;
        justify-content: space-between;
    }
    .modal-footer {
        border-top: 1px solid #eeeeee;
        justify-content: flex-end;
    }
    .modal-body {
        position: relative;
        padding: 20px 10px;
    }
    .btn-close {
        border: none;
        width: 50px;
        height: 50px;
        font-size: 20px;
        padding: 20px;
        cursor: pointer;
        font-weight: bold;
        color: #4AAE9B;
        background: transparent;
    }
    .btn-green {
        position: relative;
     color: aliceblue;
background-color: #ECC041;
	font-size: 1em;
	padding: 1em 2em;
    margin: 1em;
	border: none !important;
	border-radius: 5em;
	box-shadow: none;
    }
</style>