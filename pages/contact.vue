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
      <v-container
      fluid
      >
      <v-card 
        class="mx-auto px-5 mt-7"
        width="80%"
        color="#fafafa"
        height="28rem"
        elevation="3"
      >
      <h1>Contact</h1>

      <v-form
        name="contactus" 
        action="/" 
        method="post" 
        netlify
        netlify-honeypot="bot-field"
      >
    <input type="hidden" name="form-name" value="contactus" />
    <v-text-field
      name="name"
      v-model="name"
      :counter="35"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      name="email"
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-textarea
      name="message"
      filled
      label="Please enter your message, questions or suggestions here !"
      auto-grow
      value=""
      counter="500"
      clearable
    ></v-textarea>

    <v-btn 
    class="mr-4" 
    color="success"
    type="submit"
    >
    submit
    </v-btn>

    </v-form>
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
      name: '',
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
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 35) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),
         head() {
            return {
                title: 'Contacts frimpmaths',
                meta: [
                    {
                        hid: 'frimpmaths Contact',
                        name: 'frimpmaths Contact',
                        content: "Contact frimpmaths"
                    }
                ]
            }
        }
    };
</script>
