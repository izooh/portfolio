<template>

  <div>
    <!--breadcrum-->  
    <h6 style="margin-left: 25px;margin-right:25px;">
       <nav class="breadcrumb bg-white">
       <a class="breadcrumb-item" href=""><router-link to="/about">Portfolio</router-link></a>
       <span class="breadcrumb-item">&#10148; {{portfolio[0].title}}</span>        
       </nav>
    </h6>
    
<!--End of breadcrum-->
                    <div class="card mt-2">
                            <div class="card-head">
                                <img alt="Vue logo" class="" v-bind:src=portfolio[0].image width="100%" height="500">
                                
                            </div>
                            
                            
                            
                            <div class="card-body">
                               <h2>{{portfolio[0].title}}</h2> 
                                <div class="row">
                                  <div class="col-8">
                                   <p>
                                   {{portfolio[0].description}}
                                  </p>
                                  </div>
                                  <div class="col-4">
                                        
                                          <div class="card">
                                              <div class="p-3 d-flex align-items-center justify-content-center bg-secondary text-white">
                                                  <h5>Get a quote</h5>
                                              </div>
                                              <div class="p-3 px-4 py-2"> <span class="font-weight-normal quote"> Name</span> <input type="text" class="form-control mb-2" placeholder="Enter Full Name" /> <span class="font-weight-normal quote">Mail</span> <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email"> <span class="font-weight-normal quote">Message</span>
                                                  <div class="form"> <textarea class="form-control mb-3 description-area" placeholder="whats your message..."></textarea> </div>
                                                  <div class="text-right"> <button class="btn btn-secondary send">Talk to us<i class="fa fa-comments ml-1"></i></button> </div>
                                              </div>
                                          
                                      </div>

                                  </div>
                                </div>
                               
                                
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

.fa-comments {
    color: #FFB74D
}



</style>