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
    ]
  })
};
</script>
