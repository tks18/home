<template>
  <div class="column is-full">
    <v-container id="home-emailme">
      <v-alert
        v-ripple
        dense
        text
        outlined
        class="non-touch point-cursor"
        :type="emailType"
        @click="handleEmailClick('me@sudharshan.tk')"
      >
        <div class="text">
          <span class="text-overline font-weight-black">Tip:</span>
          <span class="text-subtitle-2">
            Click Here to Contact / You can Contact me through
          </span>
          <span class="font-weight-black"> me@sudharshan.tk</span>
        </div>
      </v-alert>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomeContactTipComponent',
  props: {
    gotoUrl: {
      type: Function,
      default: () => {},
    },
  },
  data: () => ({
    mailtoLink:
      'mailto:me@sudharshan.tk?subject=Contacting%20You%20from%20Website&body=Hey%20there%20!%0D%0A%0D%0A',
    emailType: 'info',
  }),
  methods: {
    handleEmailClick(email) {
      navigator.clipboard.writeText(email).then(
        () => {
          this.$notify({
            group: 'main',
            type: 'yellow',
            duration: 5000,
            title: 'Email Address Copied !',
            text:
              'My Email Address has been Copied to Clipboard. You can Click the below button to Directly open your Mail Client to Send my Mail. Thank You',
            data: {
              loading: false,
              dark: false,
              type: 'Normal Notification',
              buttons: [
                {
                  text: 'Open Email',
                  onClick: () => {
                    this.gotoUrl(this.mailtoLink);
                  },
                },
              ],
            },
          });
          setTimeout(() => {
            this.emailType = 'info';
          }, 3003);
        },
        () => {
          this.$notify({
            group: 'main',
            type: 'error',
            duration: 5000,
            title: 'Error in the Process',
            text:
              'Error While Copying the Email Address. No Worries you can Directly Send me a Mail with the Below Button.',
            data: {
              loading: false,
              dark: true,
              type: 'Error Notification',
              buttons: [
                {
                  text: 'Open Email',
                  onClick: () => {
                    this.gotoUrl(this.mailtoLink);
                  },
                },
              ],
            },
          });
          setTimeout(() => {
            this.emailType = 'info';
          }, 3003);
        },
      );
    },
  },
};
</script>
