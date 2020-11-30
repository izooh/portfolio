<template>
  <div>
  <div class="row">
    <div class="col-8">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="10000"
      controls
      indicators
      background="white"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #FFB74D;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
     <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide  img-blank img-alt="Blank image">
      <div class="slide-right">
        <p class="text-justify leader">Offering Best Business Driven Services </p>
        <p class="text-justify vision text-muted">Beyond The Horizons  </p>
        </div>
       <div class="slide-left"> 
        <p class="text-justify"><i class="fa fa-certificate mr-2" aria-hidden="true"></i>Enterprice Applications</p>
        <p class="text-justify"><i class="fa fa-certificate mr-2" aria-hidden="true"></i>Network Security</p>
        <p class="text-justify"><i class="fa fa-certificate mr-2" aria-hidden="true"></i>Database Management</p>
        <p class="text-justify"><i class="fa fa-certificate mr-2" aria-hidden="true"></i>Backup and Disaster Recovery</p>
    </div>

      </b-carousel-slide>

     

   <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide  img-blank img-alt="Blank image">
      <div class="slide-right">
        <p class="text-justify leader">Offering Best Business Driven Services </p>
        <p class="text-justify vision text-muted">Beyond The Horizons  </p>
        </div>
       <div class="slide-left"> 
        <p class="text-justify"><i class="fa fa-certificate mr-2" aria-hidden="true"></i>Enterprice Resource Planning As Service</p>
        <p class="text-justify"><i class="fa fa-certificate mr-2" aria-hidden="true"></i>Customer Relation Management As Service</p>
        <p class="text-justify"><i class="fa fa-certificate mr-2" aria-hidden="true"></i>Systems Upgrades</p>
        <p class="text-justify"><i class="fa fa-certificate mr-2" aria-hidden="true"></i>Information Security</p>
    </div>

      </b-carousel-slide>

     <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide  img-blank img-alt="Blank image">
      <div class="slide-right">
        <p class="text-justify leader">Offering Best Business Driven Services </p>
        <p class="text-justify vision text-muted">Beyond The Horizons  </p>
        </div>
       <div class="slide-left"> 
        <p class="text-justify"><i class="fa fa-certificate mr-2" aria-hidden="true"></i>Information Technology Consultation</p>
        <p class="text-justify"><i class="fa fa-certificate mr-2" aria-hidden="true"></i>System Design And Support</p>
        <p class="text-justify"><i class="fa fa-certificate mr-2" aria-hidden="true"></i>Setting up Organisation Network</p>
        <p class="text-justify"><i class="fa fa-certificate mr-2" aria-hidden="true"></i>Search Engine Optimisation</p>
    </div>

      </b-carousel-slide>
      </b-carousel>

    
    </div>
     <div class="col-4">
         <section class="section">
            <div class="container-fliud">
                <img alt="Vue logo" class="rounded-circle" src="../../public/images/me.jpg" width="250" height="250">
                <h2 class="vision muted">Software Developer</h2>
                <p class="vision muted">Am a Full Stack Developer specializing in web technologies.I have  experience building complete web applications with Backend API systems. 
                </p>
                
            </div>
        </section>
    </div>
    </div>
   
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
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
<style lang="css" scoped>
 p {
   color: #000000; 
}
.fa-certificate {
    color: #FFB74D
}
.vision {
    color: #000000;
    text-shadow: 1px 1px 2px #FFB74D;
}
.leader{
  font-size: 30px;
}
.slide-right {
  width: 100%;
  overflow: hidden;
  margin-left:0px;
  max-width: 500px
}

.slide-left {
  width: 100%;
  overflow: hidden;
  margin-right:0px;
  max-width: 500px
}

.slide-right p {
  animation: 2s slide-right 2s forwards;
    transform:translateX(-100%);
}
.slide-left p {
    margin-left:0px; 
  animation: 3s slide-left 3s forwards;
    transform:translateX(100%);
}

@keyframes slide-right {
  to {
    transform:translateX(0);
  }
}
@keyframes slide-left {
  to {
    transform:translateX(0);
  }
}
</style>