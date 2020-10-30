<template>
  <div id="app">

    <header>
      <h1>
        {{doggo ? 'Doggo' : 'Yako'}}
        <FaIcon :icon="doggo ? 'dog' : 'cat'"/>
      </h1>
    </header>

    <div class="container">

      <div class="image-container">
        <div v-if="state === 'loading'" class="loader" />
        <img id="image" ref="image" v-else :src="image" :style="imageStyle">
      </div>

      <button class="btn" @click="loadNextImage">
        <span class="btn-label">Random {{doggo ? 'Doggo' : 'Yako'}}</span>
        <FaIcon icon="sync-alt" />
      </button>

      <!--
      <button class="btn" @click="downloadImage">
        <span class="btn-label">Download Image</span>
        <FaIcon icon="download" />
      </button>
      -->

      <div class="doggo-toggle">
        <FaIcon class="icon" :class="{active: !doggo}" icon="cat"/>
        <label class="switch" >
          <input type="checkbox" @click='toggleDoggo'>
          <span class="slider"></span>
        </label>
        <FaIcon class="icon" :class="{active: doggo}" icon="dog"/>
      </div>

    </div>

    <footer>
      <span class="credits-author">An app by Joao Vitor Costa Marcenes</span>
      <span class="credits-images">Images by Aden Forhsaw / theCatApi</span>
    </footer>

  </div>
</template>

<script>
  import axios from 'axios'
  import { catKey, dogKey } from './keys'

  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faCat, faDog, faSyncAlt, faDownload } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon as FaIcon } from '@fortawesome/vue-fontawesome'
  library.add(faCat, faDog, faSyncAlt, faDownload)

  export default {
    name: 'App',
    components: {
      FaIcon
    },
    data() {
      return {
        state: "",
        image: "",
        imageStyle: "",
        doggo: false
      }
    },
    mounted() {
      this.loadNextImage()
    },
    methods: {
      async loadNextImage() {
        try {
          axios.defaults.headers.common['x-api-key'] = this.doggo ? dogKey : catKey

          const params = {
            limit: 1,
            size: 'full'
          }

          this.state = "loading"
          const res = await axios.get(`https://api.the${this.doggo ? 'dog' : 'cat'}api.com/v1/images/search`, { params } )
          this.state = "loaded"

          const data = res.data[0]

          this.imageStyle = data.width > data.height ? "width: 100%;" : "height: 100%;"

          this.image = data.url

        } catch (err) {
          console.log(err)
        }
      },
      toggleDoggo() {
        this.doggo = !this.doggo
        this.loadNextImage()
      }
    }
  }
</script>

<style lang="scss">
  $primary-color: rgb(73, 126, 175);

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  a {
    display: block;

    text-align: center;

    text-decoration: none;
  }

  #app {
    position: relative;
    font-family: Arial, Helvetica, sans-serif;

    min-height: 100vh;

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

    background: $primary-color;
    color: #f2f2f2;

    text-align: center;

    font-size: 2rem;
  }

  .container {
    padding: 30px 0px;
    //padding-bottom: 6rem;
    margin: auto;

    width: 80vw;
  }

  .image-container {
    display: flex;

    margin-bottom: 10px;

    width: 80vw;
    height: 80vw;

    background: black;

    box-shadow: 0px 0px 8px 2px #555;

    justify-content: center;
    align-items: center;

    >img {
      flex-shrink: 0;

      margin: 0px;

      max-width: 100%;
      max-height: 100%;

      background: #f2f2f2;
    }
  }

  .btn {
    padding: 10px;

    margin-top: 15px;

    width: 100%;

    background: $primary-color;
    color: #f2f2f2;

    border: none;
    outline: none;

    box-shadow: 0px 0px 8px 1px #555;

    font-size: 1rem;
    font-weight: bold;

    cursor: pointer;

    &-label {
      margin-right: 10px;
    }

    &:hover {
      background: lighten($primary-color, 10%);
    }
  }

  .doggo-toggle {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 80%;

    position: absolute;

    padding: 10px;

    margin-top: 15px;
    padding: auto;

    >.icon {
      font-size: 4rem;

      padding: 5px;

      color: #ccc;

      &.active {
        color: $primary-color
      }
    }

    >.switch {
      position: relative;
      display: inline-block;

      margin: 0px 10px 0px 10px;

      width: 90px;
      height: 51px;

      >input {
        opacity: 0;

        width: 0;
        height: 0;

        &:checked {
          + .slider::before {
            -webkit-transform: translateX(39px);
            -ms-transform: translateX(39px);
            transform: translateX(39px);
          }
        }

        &:focus + .slider {
          box-shadow: 0 0 1px #2196F3;
        }
      }

      >.slider {
        position: absolute;

        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background-color: #ccc;

        border-radius: 51px;

        cursor: pointer;

        -webkit-transition: .4s;
        transition: .4s;

        &::before {
          position: absolute;

          content: "";

          height: 43px;
          width: 43px;

          left: 4px;
          bottom: 4px;

          background-color: $primary-color;

          border-radius: 50%;

          -webkit-transition: .4s;
          transition: .4s;
        }
      }
    }
  }

  footer {
    position: absolute;
    bottom: 0;

    padding-top: 15px;

    height: 5rem;
    width: 100%;

    background: $primary-color;
    color: #f2f2f2;

    >span {
      display: block;

      text-align: center;
      line-height: 1.4rem;
    }
  }

</style>
