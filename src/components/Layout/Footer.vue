<template>
  <footer class="footer" color="secondary">
    <div class="mainFooter flex">
      <div class="mainFooterTop">
        <nav class="footerNav">
          <ul>
            <li>
              <router-link to="/">{{ $t('Navigation.home') }}</router-link>
            </li>
            <li>
              <router-link to="/services">
                {{ $t('Navigation.services') }}
              </router-link>
            </li>
            <li>
              <router-link to="/about">
                {{ $t('Navigation.about') }}
              </router-link>
            </li>
          </ul>
        </nav>
        <address class="contact">
          <a href="mailto:vindao@outlook.com">vindao@outlook.com</a>
          <a href="tel:+491782838557">+491782838557</a>
        </address>
      </div>
      <div class="mainFooterBottom">
        <nav class="legal footerNav">
          <ul>
            <li>
              <router-link to="/agb">{{ $t('Navigation.agb') }}</router-link>
            </li>
            <li>
              <router-link to="/impressum">
                {{ $t('Navigation.impressum') }}
              </router-link>
            </li>
          </ul>
        </nav>
        <q-btn class="contactBtn">{{ $t('Navigation.contact') }}</q-btn>
        <div class="socialMedia footerNav">
          <ul>
            <li>
              <img
                class="Sirv"
                data-src="https://yingeder.sirv.com/Vindao/GitHub-Mark-120px-plus.png"
                alt="GitHub"
                height="27px"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footerDevider" />
    <div class="copyright flex justify-center items-center">
      <p>
        Copyright &copy; {{ getCurrentYear() }}
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
    transform: translateY(-$bottomNavHeight);
  }
  .mainFooter {
    height: calc(#{$footerHeight} - #{$footerBottomHeight});

    margin: 0 $contentMargin;
    padding-top: $contentMargin;
    font-size: 0.9em;
    bottom: 0;
    .mainFooterTop {
      width: 100%;
      height: 70%;
      display: flex;
      justify-content: space-between;
      .contact {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        a {
          padding-bottom: $rootMargin;
        }
      }
    }
    .mainFooterBottom {
      height: 30%;

      display: flex;
      align-items: flex-end;
      width: 100%;
      justify-content: space-between;
      .legal {
        width: 30%;
        li {
          padding-bottom: 0;
        }
      }
      .contactBtn {
        width: 30%;

        color: $backgroundColor;
        align-self: flex-end;
        margin-bottom: 54px;
        background-color: $primary;
        @media only screen and (max-width: 420px) {
          font-size: 0.85em;
        }
      }
      .socialMedia {
        width: 30%;
        ul {
          justify-content: flex-end;
          li {
            padding: 0 0 0 $contentMargin;
          }
        }
      }
    }
  }
  .footerNav {
    ul {
      display: flex;
      text-align: left;
      padding: 0;
      margin: 0;
      list-style-type: none;

      li {
        padding: 0 $contentMargin $rootMargin 0;
      }
    }
  }
  .footerDevider {
    background-color: $primary;
    height: 1px;
  }
  .copyright {
    color: $primary;
    height: $footerBottomHeight;
    p {
      margin: 0;
    }
  }
}
</style>
