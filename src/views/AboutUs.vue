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


  div(align='center', class="form-container" justify='center')
    v-section.Form(name="formSection")
      div.container.col-sm-10(class="my-5" name="")
        v-row(class="no-gutters pb-5" id="formRow")
          div.col-lg-5.col-md-5(class="pt-11 pl-7 pb-0" align="center" justify="center")
            v-img.img-fluid(src="../assets/contactUs.png" id="contactImg" align="center" justify="center")
          div.col-lg-7.col-md-7( justify='center' class='px-5')
            div.col-lg-9(align="center" justify="left")
              iframe(name="hiddenFrame" width="0" height="0" border="0" style="display: none;"
                    onload="if(submitted){location.reload()}")
              v-form(class="login my-3" id="user_info_submit" name="form"
                    action="https://docs.google.com/forms/d/e/1FAIpQLSeyQ2dD8L6DkyYjL_3JzWyZUD1IhOelzgEO8O4kVcdySFVehA/formResponse"
                    method="POST" target="hiddenFrame"
                    v-model="validForm"
                    onsubmit="submitted=true;"
                    )
                h1(style="color: #1b65c4; font-size: 2.5rem" class="font-weight-bold py-3") Contact Us
                div.form-row(name="inputEmail")
                    v-text-field(
                                  lable="Email: " id="email" name="entry.785378515" color='#1b65c4' 
                                  type="email"  placeholder="Email" 
                                  v-model="emailAddress"
                                  :rules="emailRules")
                div.form-row(name="inputName")
                    v-text-field(
                                  lable="full name: " id="name" name="entry.2032351164" color='#1b65c4' 
                                  type="text" placeholder="Full Name" 
                                  counter=50
                                  :rules="[required('Name'), minLength('Name', 4), maxLength('Name', 50)]")
                div.form-row(name="inputPhone")
                    v-text-field(
                                  lable="phone" color='#1b65c4' id="phone" name="entry.1442733485" 
                                  type="phone" placeholder="Contact Number"
                                  counter=true
                                  v-model="mobileNo"
                                  :rules="numberRules")
                div.form-row(name="inputSuggestion")
                    v-text-field(lable="comments" color='#1b65c4' 
                                name="entry.1558155518" type="textarea" 
                                placeholder="Put You suggestions here"
                                id="suggestion"
                                counter=true
                                )
                div.form-row(name="inputButton")
                  v-btn(color='#1b65c4' class='my-3' type="submit" :disabled="!validForm").white--text Submit
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
        heading: "Projects that matter",
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
    validForm: false,
    submitted: false,
    emailAddress: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    mobileNo: "",
    numberRules: [
      v => !!v || "Mobile number is required",
      v =>
        (/^[0-9]{10}/.test(v) && v.length <= 12) ||
        "Mobile number must be valid"
    ],
    required(propertyType) {
      return v => (v && v.length > 0) || `You must input a ${propertyType}`;
    },
    minLength(propertyType, minLength) {
      return v =>
        (v && v.length >= minLength) ||
        `${propertyType} must be atleast ${minLength} characters!`;
    },
    maxLength(propertyType, maxLength) {
      return v =>
        (v && v.length <= maxLength) ||
        `${propertyType} must be less than ${maxLength} characters!`;
    }
  })
};
</script>

<style scoped>
#formRow {
  background-color: white;
  border-radius: 15px;
}
#contactImg {
  max-height: 300px;
  max-width: 400px;
  margin-top: 40px;
  border-radius: 20px;
}
</style>
