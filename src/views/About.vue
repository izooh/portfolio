<template>
 
    <div>
       <!--breadcrum-->  
    <h4 style="margin-left: 25px;margin-right:25px;">
       <nav class="breadcrumb bg-white">
       <a class="breadcrumb-item" href="">Portfolio</a>
               
       </nav>
    </h4>
    <!--End of breadcrum-->
       <section class="protfolio pt-3">
            <!-- <h1>Portfolio</h1> -->
            <p>These are some of the projects we have done for our clients</p>
            <div class="container">
                <div class="row"> 
                    <div class="col-md-4" v-for="Portfolio of portfolios" :key="Portfolio['.key']">
                        <div class="card mt-2">
                            <div class="card-head">
                                <img alt="Vue logo" class="rounded-circle img-custome" src="https://cdn.mos.cms.futurecdn.net/wH5y2PkWhCxqKBje8rBp5e.jpg">
                                <h2>{{Portfolio.title}}</h2>
                            </div>
                            <hr>
                            <div class="card-body">
                                <p>
                                   {{Portfolio.description.slice(0, 200)}}.....
                                </p>
                                <button type="button" class="btn btn-outline-secondary"><router-link :to="{ path: '/portmore/'+Portfolio.title}"  append> More</router-link></button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
</template>
<script>
import { db } from '../firebaseDatabase';

export default {
  
  data() {
    return {
      portfolios: []
    }
  },
  created: function() {
      db.collection('projects').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let item = doc.data()
          item.id = doc.id
          this.portfolios.push(item)
        })
      })
  }  
}
</script>

<style lang="css" scoped>
  .protfolio{
        
        padding-top: 8%;
        padding-bottom: 15%;
        /* padding:15% */
    }
    .img-custome{
        width: 140px;
        height: 140px;
        margin-top: 15px;
    }
    .card{
        background-color: #34345238;
    }
</style>