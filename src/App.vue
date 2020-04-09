<template>
  <div id="app">

    <header>
      <h1>
        Cat App
        <FaIcon icon="cat"/>
      </h1>
    </header>

    <div class="container">

      <div class="image-container">
        <div v-if="state === 'loading'" class="loader" />
        <img v-else :src="image">
      </div>

      <button class="btn" @click="loadNextImage">
        <span class="btn-label">Random Cat</span>
        <FaIcon icon="sync-alt" />
      </button>
    </div>

    <footer>
      <span class="credits-author">An app by Joao Vitor Marcenes</span>
      <span class="credits-images">Images by Aden Forhsaw / theCatApi</span>
    </footer>

  </div>
</template>

<script>
  import axios from 'axios'
  import { catKey } from './keys'

  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faCat, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon as FaIcon } from '@fortawesome/vue-fontawesome'
  library.add(faCat, faSyncAlt)

  export default {
    name: 'App',
    components: {
      FaIcon
    },
    data() {
      return {
        state: "",
        image: ""
      }
    },
    created() {
      this.loadNextImage()
    },
    methods: {
      async loadNextImage() {
        try {
          axios.defaults.headers.common['x-api-key'] = catKey

          const params = {
            limit: 1,
            size: 'full'
          }

          this.state = "loading"
          const res = await axios.get('https://api.thecatapi.com/v1/images/search', { params } )
          this.state = "loaded"

          this.image = res.data[0].url

        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  #app {
    font-family: Arial, Helvetica, sans-serif;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loader {
    width: 120px;
    height: 120px;

    border: 16px #444 solid;
    border-top: 16px #e2e2e2 solid;
    border-radius: 50%;

    animation: spin 2s ease-in-out infinite;
  }

  header {
    padding: 20px;

    background: #54f;
    color: #f2f2f2;

    text-align: center;

    font-size: 2rem;
  }

  .container {
    padding: 30px 0px;
    margin: auto;

    width: 80vw;
  }

  .image-container {
    display: flex;

    margin-bottom: 15px;

    width: 100%;
    height: 80vw;

    background: black;

    justify-content: center;
    align-items: center;

    >img {
      flex-shrink: 0;
      max-width: 100%;
      max-height: 100%;

      background: #f2f2f2;
    }
  }

  .btn {
    padding: 10px;

    width: 100%;

    background: #54f;
    color: #f2f2f2;

    border: none;
    outline: none;

    font-size: 1rem;
    font-weight: bold;

    cursor: pointer;

    &-label {
      margin-right: 10px;
    }

    &:hover {
      background: lighten(#54f, 5%);
    }
  }

  footer {
    position: relative;
    bottom: 0px;

    padding: 30px 50px;

    background: #54f;
    color: #f2f2f2;

    >span {
      display: block;
    }
  }

</style>
