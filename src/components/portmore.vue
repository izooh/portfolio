<template>

  <div>
                    <div class="card mt-2">
                            <div class="card-head">
                                <img alt="Vue logo" class="rounded-circle img-custome" src="https://cdn.mos.cms.futurecdn.net/wH5y2PkWhCxqKBje8rBp5e.jpg" width="50" height="50">
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