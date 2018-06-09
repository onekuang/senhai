<template id="child-map">
  <div id="map" :style="style">
    
  </div>
</template>

<script>
  export default{
    data(){
      return{
        style:{
          width:'100%',
          height:'300px'
        }
      }
    },
    mounted(){
      var map = new BMap.Map("map");          // 创建地图实例  
      var point = new BMap.Point(113.751666,23.03081);  // 创建点坐标  
      map.centerAndZoom(point, 20);                 // 初始化地图，设置中心点坐标和地图级别 
      map.enableScrollWheelZoom(false);     //开启鼠标滚轮缩放
      var marker = new BMap.Marker(point);  // 创建标注
      map.addOverlay(marker);               // 将标注添加到地图中
      map.setCurrentCity("东莞");
      marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      var opts = {    
        width : 200,     // 信息窗口宽度    
        height: 60,     // 信息窗口高度    
        title : "地址:"  // 信息窗口标题   
      }    
      var infoWindow = new BMap.InfoWindow("东莞市南城区莞太路鸿禧商业大厦603,新视野网络", opts);  // 创建信息窗口对象    
      map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
    }
  }
</script>