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
        <v-list-item link to="/E_Maths">
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
      >frimpMaths</v-toolbar-title>
   
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
    
    <v-content >
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
          <h2>Elective Mathematics</h2>
            <p>
              The rationale for the elective or further mathematics topics
              is to provide the fundation for students who would wish to 
              embark on professional studies in engineering, scientific research
              and a number of studies in institution of higher learning. It deals
              with reasoning by analogies, making judgements through discrimination
              of values, analysis of data, and communication of ones thoughts 
              through symbolic expression and graphs. <br> <br>
              The major areas of content covered are; Algebra, Coordinate Geometry,
              Vectors and Mechanics, Logic, Trigonometry, Calculus, Matrices and 
              Trigonometry, and Statistics and Probability.
            </p>
          </v-sheet>
        </v-col>
      </v-row>
    

    <v-card
    width="80%"
    class="mx-auto mb-12"
    >
    <v-toolbar
      color="#fafafa"
    >
      <v-toolbar-title>Topics</v-toolbar-title>
    </v-toolbar>

    <v-list>
      <v-list-group
        class="text-uppercase"
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          :href="subItem.src"
          class="font-weight-bold font-italic"
        >
          <v-list-item-content>
            <v-list-item-title 
            v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
    
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
      items: [
           {
            title: 'SURD',
            active: true,
            items: [
              { title: 'Introduction to Surds',src: 'https://www.youtube.com/watch?v=SoEzLo8yJj0' },
              { title: 'Simplification of Surds',src: 'https://www.youtube.com/watch?v=x1bzwiWEG-4' },
              { title: 'Operations on Surds',src: 'https://www.youtube.com/watch?v=rSZC_MqaEmo' },
              { title: 'Rationalization of Surds',src: 'https://www.youtube.com/watch?v=IgFedhQmZaw' },
              { title: 'Surdic Equations',src: 'https://www.youtube.com/watch?v=gzcyaYiSx9Y' },
            ],
          },
          {
            title: 'Indices',
            items: [
              { title: 'Introduction',src:"" },
              { title: 'Laws of Indices',src:"" },
              { title: 'Standard Forms(Scientific Notations)',src:"" },
              { title: 'Examples on Indices',src:"" },
            ],
          },
        ],
    }),
         head() {
            return {
                title: 'Elective Mathematics',
                meta: [
                    {
                        hid: 'Sets, Coordinate Geometry, Matrices, Surds, Sequences and Series,  Linear Transformations, Binary Operations, Indices and Logarithms, Logic, Relations and Functions, Trigonometric Ratios and Rules, Correlation and Regression, Polynomial Functions, Compound and Multiple Angle, Spearman‟s Rank Correlation, Rational Functions, Trigonometric Functions/Equations, Dynamics, Binomial Theorem, Differentiation, Inequalities and Linear Programming, Application of Differentiation, Probability, Application of Integration, Vectors, Permutation and Combinations, Statistics, Application of vectors in Geometry, Statics',
                        name: 'Sets, Coordinate Geometry, Matrices, Surds, Sequences and Series,  Linear Transformations, Binary Operations, Indices and Logarithms, Logic, Relations and Functions, Trigonometric Ratios and Rules, Correlation and Regression, Polynomial Functions, Compound and Multiple Angle, Spearman‟s Rank Correlation, Rational Functions, Trigonometric Functions/Equations, Dynamics, Binomial Theorem, Differentiation, Inequalities and Linear Programming, Application of Differentiation, Probability, Application of Integration, Vectors, Permutation and Combinations, Statistics, Application of vectors in Geometry, Statics',
                        content: "Sets, Coordinate Geometry, Matrices, Surds, Sequences and Series,  Linear Transformations, Binary Operations, Indices and Logarithms, Logic, Relations and Functions, Trigonometric Ratios and Rules, Correlation and Regression, Polynomial Functions, Compound and Multiple Angle, Spearman‟s Rank Correlation, Rational Functions, Trigonometric Functions/Equations, Dynamics, Binomial Theorem, Differentiation, Inequalities and Linear Programming, Application of Differentiation, Probability, Application of Integration, Vectors, Permutation and Combinations, Statistics, Application of vectors in Geometry, Statics"
                    }
                ]
            }
        }
    };
</script>
