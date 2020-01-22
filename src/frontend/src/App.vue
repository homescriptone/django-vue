<template>
  <div id="app">
    <div class="container">
      <div class="col-lg-12" style="display:flex;">
          <div class="col-sm-12" style="text-align:center;">
            <a href="#ajouter-une-note">Ajouter une note</a>
          </div>
      </div>
    </div>
<br/>
    <h1 id="ajouter-une-note">{{ msg }}</h1>
    <br/>
    <form @submit.prevent='submitNotes'>
      <template>
        <div class="container" style="width:80%;">
          <label>Title</label>
          <b-form-input  v-model="formData.title"> </b-form-input>
          <label>Content</label>
          <b-form-textarea v-model="formData.content"></b-form-textarea>

      <br/>
      <b-button type="submit" variant="primary"> Enregistrer cette note</b-button>
      </div>
      </template>
    </form>
    <br/>

    <div class="container">
      <div class="col-lg-12" style="display:flex;">
          <div class="col-sm-12" style="text-align:center;">
            <a href="#toutes-les-notes">Toutes les notes</a>
          </div>
      </div>
    </div>
<br/>
    <ul style="display:grid;">
      <li v-for="(note,index) in notes" :key="index" >
        <h3>{{note.title}}</h3>
        <h5>Crée le {{note.created_on}}</h5>
        <p> {{note.content}}</p>
        <br/>
      </li>
     
    </ul>
    

  </div>
</template>

<script>
import api from './api/index'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Bienvenue sur votre bloc notes personnel',
      formData : {
        title : '',
        content : ''
      },
      notes : []
    }
  },
  methods:{
    submitNotes(){
      api.fetchNotes('post',null,this.formData).then(res=>{
        this.msg = 'Félicitation, votre note a été ajouté, veuillez ajouter une nouvelle'
      }).catch((e) => {
        this.msg = e.res
      })
    },
    fetchAllNotes(){
      api.fetchNotes('get',null,null).then((res)=>{
        this.notes = res.data
      }).catch((e)=>{
        console.log(e)
      })
    },
  },
  mounted(){
      this.fetchAllNotes()
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
