<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/Core_Maths">
          <v-list-item-action>
            <v-icon>mdi-book-open</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>General Mathematics</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/E_MAths">
          <v-list-item-action>
            <v-icon>mdi-book</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Elective Mathematics</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/contact">
          <v-list-item-action>
            <v-icon>mdi-contacts</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar
      app
      color="#01a3a4"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
      class="headline"
      > 
        frimpMaths
      </v-toolbar-title>
   
    <template v-slot:extension>
        <v-tabs 
        align-with-title
        grow
        >
          <v-tab to="/">Home</v-tab>
          <v-tab to="/Core_Maths">Gen. Mathematics</v-tab>
          <v-tab to="/E_Maths">Elec. Mathematics</v-tab>
          <v-tab to="/contact">Contact</v-tab>
        </v-tabs>
    </template>
   
    </v-app-bar>
    
    

    <v-content 
    >
    <v-container>
    <v-row justify="space-around">
      <v-col>
          <v-sheet
            class="mx-auto px-5"
            width="80%"
            color="#fafafa"
            height="100%"
            elevation="3"
          >
          <h2>About</h2>
          <p>
            frimpMaths is a non profit educational platform that seeks to 
            provide online education for students around the globe in the area 
            of Mathematics. This website is specifically for Mathematics education. 
            The content provided are base on
            the West Africa Senior Secondary Certificate Examination(WASSCE) 
             and The General Certificate of Secondary Education (GCSE) Mathematics syllabus. All other students around  
            other part of the world will also find this educational resource useful 
            in their studies and examination preprations. The contents are presented under two streams, that is
            <a href="Core_Maths">General(Core) Mathematics</a>  and <a href="E_Maths">Elective(Further) Mathematics</a>. 
          </p>
          <p>
            All the lessons are presented in videos and this makes it more 
            interactive for students to understand the concepts better. These 
            lessons are taught by an experience mathematics tutor with several
            years of teaching experience. The videos are uploaded on our YouTube
            channel, <a href="https://www.youtube.com/channel/UCIna75uBxequZKtbvGj9bug/featured">frimpMaths</a>, and can be watched on all computers and mobile 
            devices any where. Each topic begins with an introduction where the 
            instructor outlines all the topics that will be discussed. The topics 
            ends with solutions to further examples relating to the concepts taught.
            These examples are carefully selected from previous WASSCE and GCSE pass 
            examination questions. 
          </p>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    </v-content>

  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="white--text text-center"
      color="#01a3a4"
      width= "100%"
    >
      <v-card-text>
        <em><p>Let get Social, follow Us on youtube, facebook and twitter</p></em>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <a 
          class="white--text"
          :href='icon.address'><v-icon size="26px">{{ icon.icon }}</v-icon></a>
        </v-btn>
      </v-card-text>

      <v-card-text 
      class="white--text pt-0"
      >
        Author: Albert A. Frimpong (Web/Software Developer and Educationist)
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>frimpTek Media</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
  import axios from 'axios';
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      contact: {},
      icons: [
        {icon:'mdi mdi-youtube',
        address:'https://www.youtube.com/channel/UCIna75uBxequZKtbvGj9bug/featured',
        },
        {icon:'mdi mdi-facebook',
        address:'https://www.facebook.com/frimpmaths',
        },
        {icon:'mdi mdi-twitter',
        address:'https://twitter.com/frimpmaths',
        }, 
      ],
    }),
         head() {
            return {
                title: 'frimpmaths Home | Mathematics',
                meta: [
                    {
                        hid: 'Core Mathematics, Elective Mathematics, Mathematics, WAEC Core Mathematics, Core Mathematics Sylabus, Elective Mathematics Syllabus',
                        name: 'Core Mathematics, Elective Mathematics, Mathematics, WAEC Core Mathematics, Core Mathematics Sylabus, Elective Mathematics Syllabus',
                        content: 'Core Mathematics, Elective Mathematics, Mathematics, WAEC Core Mathematics, Core Mathematics Sylabus, Elective Mathematics Syllabus',
                    }
                ]
            }
        }
    };
</script>
