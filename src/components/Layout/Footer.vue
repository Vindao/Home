<template>
  <footer class="footer" color="secondary">
    <div class="mainFooter flex">
        <nav class="footerNav">
            <ul >
                <li>
<router-link to="/">
                {{$t('Navigation.home')}}
            </router-link to="/services">
                </li>
                <li>
                     <router-link to="/services">
                {{$t('Navigation.services')}}
            </router-link>
                </li>
                <li><router-link to="/about">
                {{$t('Navigation.about')}}
            </router-link></li>
            </ul>
            
           
            
        </nav>
    </div>
    <div class="footerDevider" />
    <div class="copyright flex justify-center items-center">
      <p>
        Copyright &copy; {{getCurrentYear()}} made with love by
        <img
          src="https://yingeder.sirv.com/Vindao/logo-new-03%20(2).png?w=70"
          width="35"
          height="10"
          alt="Vindao Logo"
        />
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  methods: {
    getCurrentYear() {
      const d = new Date();
      return d.getFullYear();
    }
  }
});
</script>

<style lang="scss" scoped>
.footer {
  height: $footerHeight;
  background-color: $secondary;
  @media only screen and (max-width: $breakpoint-sm-max) {
    margin-bottom: $bottomNavHeight;
  }
  .mainFooter {
    height: 153px;
    .footerNav {
        
        ul {
            display: flex;
            padding-left: $rootMargin;

            list-style-type: none;
            li {
                padding-right: $rootMargin
            }
        }
    }
  }
  .footerDevider {
    background-color: $primary;
    height: 1px;
    width: 100%;
  }
  .copyright {
    height: 26px;
    color: $primary;
    p {
      margin: 0;
    }
  }
}
</style>