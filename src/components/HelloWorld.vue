
<template>
  <div class="wrap">
      <div id="mapbox"></div>
      <div class="toolbox">
          <el-button plain @click="addLayer()">添加图层</el-button>
          <el-button plain @click="updateLayer()">更新图层</el-button>
          <el-button plain @click="deleteLayer()">删除图层</el-button>
          <el-button plain @click="svgaddlayer()">填充图片</el-button>
          <el-button plain @click="showlayer()">显示隐藏图片</el-button>
      </div>
  </div>
</template>

<script>
var key = "pk.eyJ1IjoiMjQ1MTc0ODYyIiwiYSI6ImNqbW82ZmE4dDBpMngza3Fvd3h2aXMxbXEifQ.JtY2C9MHBAkF6Wu2fdyTXQ";
import { apply, updateMapboxLayer,removeMapboxLayer,addMapboxLayer,getMapboxLayer } from 'ol-mapbox-style';
import {getSTyle} from './mapbox-style';

export default {
 name:'',
 mixins:[],
 components: {

 },
 props:{},
 data () {
   return {
      map:null,
      count:0
   }
 },
 computed:{},
 mounted(){
  this.initLoad()
 },
 destroyed:{},
 methods:{
  async initLoad(){
      let map =  await apply('mapbox',getSTyle() , {accessToken: key})
      this.map = map
  },
  addLayer(){
      let map = this.map
      addMapboxLayer(map,{
          "id": "landuse_overlay_national_park",
          "type": "fill",
          "source": "mapbox",
          "source-layer": "landuse_overlay",
          "filter": ["==", "class", "national_park"],
          "paint": {
              "fill-color": "#DC143C",
              "fill-opacity": 0.75
          },
          "metadata": {
              "mapbox:group": "1444849388993.3071"
          },
          "interactive": true
      })
  },
  updateLayer(){
      const color = ['#FFB6C1','#C71585','#FF00FF','#7B68EE','#4682B4','#00FA9A','#FFD700']
      this.count = this.count + 1
      if(this.count > color.length){
          this.count = 0 
      }
      let map = this.map
      updateMapboxLayer(map,{
          "id": "hfbh-2d",
          'type': 'fill',
          "source": "os",
          "source-layer": "bhbm3856",
          "paint": {
              "fill-color": color[this.count],
              "fill-opacity": 0.6,
              "fill-outline-color": "red",
              "fill-antialias": true
          }
      })
  },
  svgaddlayer(){
      let map = this.map
      updateMapboxLayer(map,{
          "id": "hfbh-2d",
          'type': 'fill',
          "source": "os",
          "source-layer": "bhbm3856",
          "paint": {
              "fill-pattern":'grass',
              "fill-outline-color": "red",
              "fill-antialias": true
          }
      })
  },
  showlayer(){
      let map = this.map
      let layer = getMapboxLayer(map,'hfbh-2d')
      if(layer.layout){
          if(layer.layout.visibility){
              if(layer.layout.visibility === 'none'){
                  layer.layout.visibility = 'visible'
              } else {
                  layer.layout.visibility = 'none'
              }
          } else {
              layer.layout.visibility = 'none' 
          }
      } else {
          let obj = {
              visibility:'none'
          }
          layer.layout = obj
      }

      updateMapboxLayer(map,layer)
  },
  deleteLayer(){
      let map = this.map
      removeMapboxLayer(map,'landuse_overlay_national_park')
  }
 }
}
</script>

<style scoped lang='scss'>
.wrap,#mapbox{
  width: 100%;
  height: 100%;
  float: none;
}

.toolbox{
  display: flex;
  z-index: 10000;
  position: absolute;
  top: 0px;
  right: 0px;
}

</style>
