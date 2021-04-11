<template>
  <div> <br><br>
  

  <div class="hm-1">
    <div class="word-1"> 
      <div class="w3-animate-bottom"> 
      <b-row>
        <b-col cols="8"><h1>สนามยิงปืน </h1>
        <h2>มหาวิทยาลัยสงขลานครินทร์ <br>Prince of Songkla University</h2>
        <router-link class="nav-link" to="/contest"><b-button pill >การแข่งขัน</b-button></router-link></b-col>
        
        <b-col ols="4"><b-img src="http://www.sportscenter.psu.ac.th/photo/files/c22_IMG_9890_resize.jpg" rounded="circle" alt="Circle image" width="250%" height="250%" ></b-img></b-col>
    </b-row>
    </div></div>
  </div>


  <div class="word-2">
    <div class="detail-1">
      <h7>เนื่องจากมหาวิทยาลัยการกีฬาแห่งชาติ วิทยาเขตตรัง ได้รับมอบหมายให้เป็นเจ้าภาพจัดการแข่งขัน
        กีฬายิงปืน พลศึกษาเกม ซึ่งเป็นการแข่งขันกีฬาประจำปีของมหาวิทยาลัยการกีฬาแห่งชาติ โดยจัดขึ้นทุกปี
        ในช่วงเดือนสิงหาคม ทั้งนี้ทางมหาวิทยาลัยได้รับงบประมาณในการสร้างสนามยิงปืนและอุปกรณ์จัดการ
        แข่งขันตามมาตรฐานการจัดการแข่งขันเพื่อรองรับการเป็นเจ้าภาพจัดการแข่งขัน ทำให้ขณะนี้สนามกีฬายิงปืน
        มหาวิทยาลัยการกีฬาแห่งชาติ วิทยาเขตตรัง เป็นสนามกีฬายิงปืนที่ได้มาตรฐานมากที่สุดแห่งหนึ่งในภาคใต้
      </h7>
    </div></div>

 <div class="photo">
    <b-carousel
    id="carousel-fade"
    style="text-shadow: 2px 2px 2px #000"
    fade
    indicators
    no-touch="true"
    no-wrap
    img-width="600"
    img-height="400"
  >
      <!-- Text slides with image -->
     <b-carousel-slide
        caption="การแข่งขัน PSU Shooting Open"
        text=""
        img-src="http://www.sportscenter.psu.ac.th/photo/files/p34_22553357_917375641749594_9028101195117400274_o.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="http://www.sportscenter.psu.ac.th/photo/files/p34_22553286_917377321749426_7867662258365518181_o.jpg">
        <h1></h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="http://www.sportscenter.psu.ac.th/photo/files/p34_22829055_917378281749330_3761624091951534153_o.jpg"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"

            src="http://www.sportscenter.psu.ac.th/photo/files/p34_22770637_917374081749750_6945423245367773887_o.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      
    </b-carousel>
  </div>
    
  </div>
</template>

<script>

  export default {
    data() {
      return {
        slide: 0,
        sliding: null,

      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
<style scoped>

p {
  list-style-type: none;
   padding:10px ;
   margin: 10px;
}
div{
  max-width: 100%;
  height: 550%;
  margin-right:0 ;
}
.hm-1{
 background-image: url(01.jpg);
 max-width: 100%;
 background-repeat: no-repeat;
 background-size:     cover;  
 height:780px;
}

.word-1{
  padding: 15%;
  
}
h1,h2{
  font-family: 'Prompt','Montserrat', 'Kanit',sans-serif; font-weight:300;
  color: rgb(248, 248, 248);
}
.word-2{
  height: 10cm;
  align-items: center;
}
.detail-1{
    height: 30%;
    width: 50%;
    text-align: center;
    margin: 10% 25% 10% 25%;
}
button{
  width: 50%;
}
</style>