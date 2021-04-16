<template>
  <notifications
    :group="group"
    classes="notification"
    :duration="4000"
    :max="2"
    :position="position"
  >
    <template slot="body" slot-scope="props">
      <v-card
        :loading="props.item.data.loading"
        class="mt-2 pt-2 non-touch"
        shaped
        :ripple="props.item.data.onClick != undefined"
        outlined
        :light="!props.item.data.dark"
        :dark="props.item.data.dark"
        elevation="22"
        @click="handleClick(props)"
        :color="props.item.type"
      >
        <template v-if="props.item.data.loading" #progress>
          <v-progress-linear indeterminate color="white" rounded />
        </template>
        <v-card-subtitle class="text-caption my-0 py-0">
          <v-row class="my-0 py-0">
            <v-col cols="8" align="left" class="my-0 py-0">
              {{
                props.item.data.type != undefined
                  ? props.item.data.type
                  : 'Normal Notifications'
              }}
            </v-col>
            <v-col cols="4" align="right" class="my-0 py-0">
              <v-btn icon x-small @click="handleClose(props)">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-subtitle>
        <v-card-title class="my-1 py-0">
          {{ props.item.title }}
        </v-card-title>
        <v-card-text class="my-1 py-0">
          {{ props.item.text }}
        </v-card-text>
        <v-card-actions
          v-if="props.item.data.buttons && props.item.data.buttons.length > 0"
        >
          <v-spacer />
          <v-btn
            v-for="(button, index) in props.item.data.buttons"
            @click="button.onClick()"
            :key="index"
            small
            text
            outlined
          >
            {{ button.text }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </notifications>
</template>
<script>
export default {
  title: 'MainNotification',
  props: {
    group: {
      default: 'main',
      type: String,
    },
    position: {
      default: 'top right',
      type: String,
    },
  },
  methods: {
    handleClick(props) {
      if (props.item.data.onClick !== undefined) {
        props.item.data.onClick();
        props.close();
      }
    },
    handleClose(props) {
      if (props.item.data.onClose !== undefined) {
        props.item.data.onClose();
        props.close();
      } else {
        props.close();
      }
    },
  },
};
</script>
