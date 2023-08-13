<template lang="pug">
v-container(fluid='' style='margin: 0px; padding: 0px; width: 100%;')
  v-layout(row='' wrap='')
    v-container(fluid='' style='margin: 0px; padding: 0px; width: 100%;background-color: #1b65c4;')
      v-row
        v-flex(xs12='',sm12='', md4='',lg4='',xl4='')
          v-img(src='../assets/aboutus_team.png' aspect-ratio='1.7')
        v-flex(xs12='',sm12='', md7='',lg7='',xl7='')    
          v-container()  
            h1.pa-3.mt-3(style="text-align: center;color:#fff") About Us
            h3.font-weight-regular.mb-n.pl-12.pr-12.mt-n2(style="text-align: left;color:#fff") {{desc1}}
            h3.font-weight-regular.mb-n.pl-12.pr-12.mt-2(style="text-align: left;color:#fff") {{desc2}}
    v-container()      
      h1.pa-3.rounded-lg.text-center(style="text-align: center;color:#000") GUIDING PRINCIPLES
      v-flex(v-for='item in items', :key='item.name',xs12='',sm12='', md12='',lg12='',xl12='')
        div.d-none.d-lg-flex.d-xl-flex.mt-2
        div(v-if="item.direction === 'left'")
          v-row
            v-flex(xs12='',sm12='', md4='',lg4='',xl4='')
              v-img.mt-5.ml-3.mr-n3(:src="item.src" contain aspect-ratio='2.5')
            v-flex(xs12='',sm12='', md8='',lg8='',xl8='')    
                v-container()  
                  h1.font-weight-medium.pa-3(style="text-align: center;color:#000") {{item.heading}}
                  h3.font-weight-light.mb-n.pa-3(style="text-align: center;color:#000") {{item.subheading}}   
        div(v-if="item.direction === 'right'")
          v-layout(v-if='$vuetify.breakpoint.smAndDown')
            v-row
              v-flex(xs12='',sm12='', md4='',lg4='',xl4='')
                v-img.mt-5.ml-n3.mr-3(:src="item.src" contain aspect-ratio='2.5')
              v-flex(xs12='',sm12='', md8='',lg8='',xl8='')    
                v-container()  
                  h1.font-weight-medium.pa-3(style="text-align: center;color:#000") {{item.heading}}
                  h3.font-weight-light.mb-n.pa-3(style="text-align: center;color:#000") {{item.subheading}}          
          v-layout(v-if='$vuetify.breakpoint.mdAndUp')          
            v-row
              v-flex(xs12='',sm12='', md8='',lg8='',xl8='')    
                v-container()  
                  h1.font-weight-medium.pa-3(style="text-align: center;color:#000") {{item.heading}}
                  h3.font-weight-light.mb-n.pa-3(style="text-align: center;color:#000") {{item.subheading}}
              v-flex(xs12='',sm12='', md4='',lg4='',xl4='')
                v-img.mt-5.ml-n3.mr-3(:src="item.src" contain aspect-ratio='2.5')    
  div(align='center' justify='center')
    v-container.col-sm-10(align='center' justify='center')
     v-row.py-2
      v-flex.pt-6.px-3(lg5='', justify='center')
       v-img.img-fluid(src="../assets/contactUs.png")
      v-flex.px-2.mx-3(justify='center' align='center')
        div.mt-5.Form
            iframe(name='hiddenframe' height='0' width='0' border='0' style='display: none;' onload="if(submitted){location.reload()}")
            v-form(class="login my-3" max-height='300px' id="user_info_submit" name="form"
                  action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSd25Z-mQHDN42vNZdMXwQXkH_LfTnpUMA2kxJPnj4VHy6q8JQ/formResponse"
                  method="POST" target="hiddenframe"
                  v-model="validform"
                  v-ref='form'
                  onsubmit="submitted=true;")
              h1(style='color:#1b65c4;' class="font-weight-bold py-3") Contact Us
                v-text-field(label="Email: "  prepend-icon='mdi-email' id="email"   name="entry.1624474703" color='#1b65c4' type="email" v-model="emailaddress" :rules="emailrules")
                v-text-field(label="Full name: " prepend-icon='mdi-account' id="name" name="entry.274700485" color='#1b65c4' type="text" counter=20 v-model="Name" :rules="namerules")
                
                v-text-field(label="Contact Number:"  prepend-icon=" mdi-dialpad"  color='#1b65c4' id="phone" name="entry.1452831997" type="phone"   counter=true v-model="mobileno" :rules="numberrules")
                v-text-field(label="Comments and queries" color='#1b65c4' name="entry.629220262" type="textarea" id="suggestion" counter=true)
                v-btn.my-3(color='#1b65c4' type='submit' :disabled="!validform").white--text submit

</template>
<script>
export default {
  name: "Project",
  data: () => ({
    desc1:
      "DevlUp Labs is a thriving student-led open source community at IIT Jodhpur.We believe in sharing of ideas and upskilling by collaboration through meaningful projects. Our focus is to deliver results with the highest of standards.We aim to build an open source community through proper guidance and by encouraging self learning.",
    desc2:
      "We encourage development of technology and Innovation through various sessions, workshops and webinars.",
    item: 1,
    items: [
      {
        direction: "right",
        heading: "Learning Driven Endeavour",
        src: "../data/images/AboutusPoints/point1new.png",
        subheading:
          "Everything we do is to upskill ourselves! We aim to learn and grow as a team!"
      },
      {
        direction: "left",
        heading: "Open Source community",
        src: "../data/images/AboutusPoints/point2new.png",
        subheading:
          "Inspire and guide the coming generation to build a functioning and interactive open-source community."
      },
      {
        direction: "right",
        heading: "Projects that matter to the community",
        src: "../data/images/AboutusPoints/point3new.png",
        subheading:
          "We at devlup labs are committed to products and projects that matter, projects that serve a real purpose for the community."
      },
      {
        direction: "left",
        heading: "Unparalleled Standards",
        src: "../data/images/AboutusPoints/point4new.png",
        subheading:
          "We insist on the highest of standards, from functionality to code to coffee."
      },
      {
        direction: "right",
        heading: "Delivering Results",
        src: "../data/images/AboutusPoints/point5new.png",
        subheading:
          "Nothing is more important than delivering amazing results to the end-user."
      },
      {
        direction: "left",
        heading: "Don’t Reinvent the wheel",
        src: "../data/images/AboutusPoints/point6new.png",
        subheading:
          "We believe that we can deliver better results and enrich the learning experience by leveraging existing solutions and building on top of them."
      },
      {
        direction: "right",
        heading: "Self Learning",
        src: "../data/images/AboutusPoints/point7new.png",
        subheading:
          "Self Learning sits at the heart of devlup labs, we believe in proper utilization of resources and peer guidance to propel self learning."
      }
    ],
    validform: false,
    submitted: false,
    Name: "",
    namerules: [
      v => !!v || "name should not be emptty",
      v => (v && v.length <= 20) || "name should be less than 20"
    ],
    emailaddress: "",
    emailrules: [
      v => !!v || "email is required",
      v =>
        /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(
          v
        ) || "E-mail must be valid"
    ],
    mobileno: "",
    numberrules: [
      v => !!v || "Mobile number is required",
      v => /^[0-9]{10}/.test(v) || "Mobile number must be valid"
    ]
  })
};
</script>
