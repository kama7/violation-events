<template>
  <div v-if="selectedIndex !== null">
    <b-card
      class="m-3"
      header="Details"
      header-class="font-weight-bold"
      header-tag="header"
    >
      <b-row class="border-bottom py-2">
        <b-col md="4">Id</b-col>
        <b-col>{{ selectedViolation.id }}</b-col>
      </b-row>

      <b-row class="border-bottom py-2">
        <b-col md="4">Title</b-col>
        <b-col>{{ selectedViolation.title }}</b-col>
      </b-row>

      <b-row class="border-bottom py-2">
        <b-col md="4">Event time</b-col>
        <b-col>{{ dayjs(selectedViolation.event_time).format('dddd, DD-MM-YY hh:mm a') }}</b-col>
      </b-row>

      <b-row class="border-bottom py-2">
        <b-col md="4">Tags</b-col>
        <b-col>{{ selectedViolation.violations_tags.length
          ? `${selectedViolation.violations_tags[0]?.tag?.name} ${selectedViolation.violations_tags[0]?.tag?.emoji}`
          : ''
        }}</b-col>
      </b-row>

      <b-row class="border-bottom py-2">
        <b-col md="4">Rule</b-col>
        <b-col>
          <div>{{ selectedViolation.rule?.name }}</div>
          <div v-if="selectedViolation.rule.rules_cameras.length">
            {{selectedViolation.rule?.rules_cameras[0]?.camera?.name }}
          </div>
        </b-col>
      </b-row>

      <b-row class="border-bottom py-2">
        <b-col md="4">Category</b-col>
        <b-col>{{selectedViolation.violations_categories.length
          ? selectedViolation.violations_categories?.[0]?.category?.name
          : '-'}}</b-col>
      </b-row>

      <b-row class="py-2">
        <b-col md="4">Stakeholders</b-col>
        <b-col>
          <div
            :key="index"
            v-for="(item,index) in selectedViolation.violations_stakeholders"
            class="row align-items-center my-2"
          >
            <b-col md="auto">
              <b-avatar
                variant="info"
                :src="item.user.profile_pic_url"
              />
            </b-col>

            <b-col col>
              {{`${item.user.first_name} ${item.user.last_name}` }}
            </b-col>
          </div>

          <div v-if="!selectedViolation.violations_stakeholders.length"> - </div>
        </b-col>
      </b-row>
    </b-card>

    <b-card
      class="m-3"
      header="Media"
      header-class="font-weight-bold"
      header-tag="header"
    >
      <b-row class="p-1">
        <b-col md="2">Image</b-col>

        <b-col>
          <b-img
            fluid-grow
            :src="selectedViolation.image_url"
            alt="Image 2"></b-img>
        </b-col>

      </b-row>
      <b-row class="p-1 mt-3">
        <b-col>Video</b-col>

        <b-col>
          <video
            controls
            width="380"
            :src="selectedViolation.video_url"
          ></video>
        </b-col>

      </b-row>
    </b-card>

    <b-card
      class="m-3"
      header="Comments"
      header-tag="header"
      header-class="font-weight-bold"
    >
      <div
        v-for="(comment, index) in selectedViolation.comment_threads"
        :key="index"
      >
        <b-row class="my-2">
          <b-col md="auto">
            <b-avatar
              variant="info"
              :src="comment.user.profile_pic_url"/>
          </b-col>

          <b-col col>
            <div class="row">
              <div class="col font-weight-bold">
                {{`${comment.user.first_name} ${comment.user.last_name}` }}
              </div>

              <div class="col-auto"> {{dayjs().to(dayjs(comment.timestamp))}}</div>
            </div>
            <div>{{comment.message}}</div>
          </b-col>
        </b-row>
      </div>

      <div v-if="!selectedViolation.comment_threads_aggregate?.aggregate?.count"> No Comments</div>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default {
  name: 'ViolationDetails',
  props:{
    selectedIndex: {
      type: Number,
      default: null,
    }
  },

  data(){
    return {
      dayjs,
    }
  },

  computed:{
    ...mapGetters({
      getViolations: 'violations/getViolations',
    }),

    selectedViolation(){
      return this.getViolations[this.selectedIndex]
    }
  },

}
</script>
