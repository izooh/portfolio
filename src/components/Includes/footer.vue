
<template>
    <div>
    <div >
    <div class="card">
        <div class="heading text-center">
            <div class="head1">More Information</div>
            <p class="bdr"></p>
        </div>
        <div class="card-body">
            <div class="row m-0 pt-5">
                <div class="card col-12 col-md-3">
                    <div class="card-content"> <i class="fas fa-hand-holding-usd fa-3x" id="icon-anim"></i>
                        <div class="card-title"> CONTACT US</div>
                        <p class="text-justify ml-5"><small><i class="fa fa-building" aria-hidden="true"></i> {{address[0].company}} <br><i class="fa fa-address-card" aria-hidden="true"></i> {{address[0].postal}}<br><i class="fa fa-map-marker" aria-hidden="true"></i> {{address[0].location}}<br>
                        <i class="fa fa-envelope" aria-hidden="true"></i> {{address[0].email}}<br><i class="fa fa-phone-square" aria-hidden="true"></i> {{address[0].phone}}</small></p>
                        <div class="learn-more">
                            <p> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                        </div>
                    </div>
                </div>
                <div class="card col-12 col-md-3">
                    <div class="card-content"> <i class="far fa-handshake fa-3x" id="icon-anim"></i>
                        <div class="card-title"> OUR TEAM </div>
                        <p><small>Save customers' cards for future phone orders</small></p>
                        <div class="learn-more">
                            <p> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                        </div>
                    </div>
                </div>
                <div class="card col-12 col-md-3">
                    <div class="card-content"> <i class="fas fa-question fa-3x" id="icon-anim"></i>
                        <div class="card-title"> FAQS </div>
                        <p class="text-justify ml-5"><small>How can we help you?<br>
                         You can also browse the topics below to find what you are looking for</small></p>
                        <div class="learn-more">
                            <p> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                        </div>
                    </div>
                </div>
                <div class="card col-12 col-md-3">
                    <div class="card-content"> <i class="fas fa-user-secret fa-3x" id="icon-anim"></i>
                        <div class="card-title"> STAY<br /> SECURE </div>
                        <p><small>Save customers' cards for future phone orders</small></p>
                        <div class="learn-more">
                            <p class="panim"> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer row m-0">
            <p> <label>{{address[0].company}} &copy; Copyright {{new Date().getFullYear()}}</label></p>
            <div>
                <p> <small class="follow-text">FOLLOW US ON SOCIAL MEDIA</small> <label class="footer-right"> <i class="fab fa-instagram"></i> <i class="fab fa-facebook-square"></i> <i class="fab fa-linkedin"></i> <i class="fab fa-twitter-square"></i> </label> </p>
            </div>
        </div>
    </div>
</div>
        
    </div>
</template>
<script>
        import { db } from '../../firebaseDatabase';

        export default {
        
        data() {
            return {
            address: []
            }
        },
        created: function() {
            db.collection('Address').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                let item = doc.data()
                this.address.push(item)
                })
            })
        }  
        }
</script>
<style lang="css" scoped>
body {
    background-color: #616161
}

.card {
    background-color: #616161;
    color: white;
    margin-top: 50px;
    border: none
}

.head1 {
    font-weight: 900;
    font-size: 30px
}

.bdr {
    border-bottom: 1.5px solid #FFB74D;
    width: 280px;
    margin-right: auto;
    margin-left: auto
}

.card-footer {
    justify-content: space-between;
    border: none;
    background: none;
    border-bottom: 0.5px solid #9E9E9E
}

.footer-right>i {
    margin-left: 15px
}

.fa-hand-holding-usd {
    color: #FFB74D
}

.fa-handshake {
    color: #FFB74D
}

.card-title {
    margin-bottom: .75rem;
    font-weight: 900;
    font-size: 15px;
    margin-top: 1.75rem
}

.learn-more {
    color: #FFB74D;
    
}
.learn-more:hover {
    color: #FFB74D;
    text-shadow: 5px 5px 5px #FFFFFF;
    cursor: pointer;
    cursor: hand;
}

.fa-angle-right {
    margin-left: 10px
}

.fa-3x {
    color: #FFB74D
}

.card-content {
    padding-right: 40px;
    padding-left: 30px;
    padding-bottom: 10px;
    padding-top: 10px
}

.card-content>p {
    color: #9E9E9E
}

.heading {
    position: relative;
    top: 75px
}

.follow-text {
    color: #9E9E9E
}
#icon-anim {
  transform: scale(1);
  transition: all ease .3s;
}
#icon-anim:hover {
  transform: scale(1.15) rotate(360deg);
}


</style>