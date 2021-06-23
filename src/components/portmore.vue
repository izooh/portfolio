<template>

  <div>
    <!--breadcrum-->  
    <h4 style="margin-left: 25px;margin-right:25px;">
       <nav class="breadcrumb bg-white">
       <a class="breadcrumb-item" href=""><router-link to="/about">Portfolio</router-link></a>
       <span class="breadcrumb-item">&#10148; {{portfolio[0].title}}</span>        
       </nav>
    </h4>
<!--End of breadcrum-->
                    <div class="card mt-2">
                            <div class="card-head">
                                <img alt="Vue logo" class="" v-bind:src=portfolio[0].image width="100%" height="300">
                                <h2>{{portfolio[0].title}}</h2>
                            </div>
                            <hr>
                            <div class="card-body">
                                <p>
                                   {{portfolio[0].description}}
                                </p>
                               
                                
                            </div>
                        </div>                 
  
  </div>

</template>

<script>
import { db } from '../firebaseDatabase';
export default {
  data () {
    return {
      portfolio: []
    }
  },
   created: function() {
     let title = this.$route.params.id
     db.collection("projects").where("title", "==", title)
    .get()
    .then(snapshot => {
     
        snapshot.forEach(doc => {
          let item = doc.data()
          item.id = doc.id
          this.portfolio.push(item)
          console.log(this.portfolio[0])
        })
      })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  } 

}
</script>

<style>
.progress-bar {
  margin: 10px 0;
}

</style>