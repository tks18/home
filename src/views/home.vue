<template>
  <div class="content">
    <div
      :class="
        'hero is-medium' +
        ($vuetify.theme.dark ? ' grad-back-dark' : ' grad-back-light')
      "
    >
      <div class="hero-body ma-2 pa-8">
        <div class="container">
          <transition name="bounceUp" mode="out-in">
            <v-card v-bind:key="herokey" class="ma-3 pa-3">
              <div class="columns is-multiline is-centered is-vcentered">
                <div class="column is-half">
                  <figure>
                    <img :src="currentHero.image" alt="Main Image" />
                  </figure>
                </div>
                <div class="column is-half">
                  <div class="content text">
                    <div class="">
                      {{ currentHero.title }}
                    </div>
                    <div class="">
                      {{ currentHero.subtitle }}
                    </div>
                  </div>
                </div>
              </div>
            </v-card>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      heroData: [
        {
          title: 'Summa',
          subtitle: 'summa',
          image: 'https://media.giphy.com/media/3o6gEetbU85BF6h26c/giphy.gif',
          left: true,
        },
        {
          title: 'Summa',
          subtitle: 'summa',
          image: 'https://media.giphy.com/media/3o72FdmnHmeHUH0YeY/giphy.gif',
          left: false,
        },
      ],
      currentHero: {},
      herokey: 0,
    };
  },
  mounted() {
    this.currentHero = this.heroData[0];
    setInterval(() => {
      this.currentHero = this.heroData[this.herokey];
      if (this.herokey == this.heroData.length - 1) {
        this.herokey = 0;
      } else {
        this.herokey++;
      }
    }, 7500);
  },
};
</script>

<style></style>
