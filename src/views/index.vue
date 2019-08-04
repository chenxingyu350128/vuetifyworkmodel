<template>
  <div class="white pb-12">
    <v-card class="pa-2" color="blue" dark tile flat>
       <v-layout justify-center row wrap class="text-center">
         <v-flex align-self-center xs12 >
            <v-btn color="#ccc" fab >
              <v-icon  size="50">mdi-plus-circle-outline</v-icon>
            </v-btn>
         </v-flex>
         <v-flex class="pa-3" xs12>
           请添加您的腕表
         </v-flex>
         <v-layout justify-space-around class="pa-1" xs12>
           <v-flex xs4>
             <div>步数</div>
             <div>- -</div>
           </v-flex>
           <v-flex xs4>
             <div>睡眠时长</div>
             <div>- -</div>
           </v-flex>
           <v-flex xs4>
             <div>心率</div>
             <div>- -</div>
           </v-flex>
         </v-layout>
       </v-layout>
    </v-card>
    <div class="grey lighten-2 py-1">
      <div class="grey lighten-5 pa-2">
        <v-card class="pa-1 body-2" justify-space-between xs12>
          <v-layout row wrap class="text-center">
            <v-flex xs4>
              <span>健康第一步</span>
              
            </v-flex>
            <v-flex xs8 class="text-right pr-4">
              <span>
                买个智能腕表 
                <v-btn class="pa-0 ml-1 subtitle-2" small color="deep-orange" dark>详情</v-btn>
              </span>
            </v-flex>
          </v-layout>
        </v-card>
      </div>
      <carousel :height="100" :hideDelimiters="notTrue" :hideDelimitersBg="!notTrue" :showArrows="notTrue"/>     
    </div>
  </div>

</template>

<script>
import carousel from '../components/public/carousel'
export default {
  data: ()=>({
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
    notTrue: false,
  }),
  components: {
    carousel,
  }
};
</script>
