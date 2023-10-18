<template>
  <div class="p-3">
    <b-table
      hover
      striped
      :fields="fields"
      :items="getViolations"
      class="violations-page__table"
      @row-clicked="openViolationDetails"
    >
      <template #cell(event_time)="data">
        {{ dayjs(data.value).format('DD/MM/YYYY hh:mm a') }}
      </template>

      <template #cell(violations_tags)="data">
        {{ data.value.length && data.value?.[0]?.tag?.emoji || '-' }}
      </template>

      <template #cell(rule)="data">
        {{ data.value?.name ?? '-' }}
      </template>
      <template #cell(violations_categories)="data">
        {{ data.value.length && data.value?.[0]?.category?.name || '-' }}
      </template>
    </b-table>

    <b-sidebar
      v-model="isSidebarOpen"
      backdrop
      title="Violation Details"
      shadow
      right
      width="35rem"
    >
      <ViolationDetails :selected-index="selectedIndex"></ViolationDetails>
    </b-sidebar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import dayjs from 'dayjs';
import ViolationDetails from '@/components/violations/ViolationDetails';
export default {
  name: 'ViolationsPage',
  components: { ViolationDetails },
  data() {
    return {
      dayjs,
      fields: [
        {
          key: 'id',
          sortable: true,
        },
        {
          key: 'title',
          sortable: true,
        },
        {
          key: 'event_time',
          label: 'Event time',
          sortable: true,
        },
        {
          key: 'violations_tags',
          label: 'Tags',
          sortable: true,
        },
        {
          key: 'rule',
          sortable: true
        },
        {
          key: 'violations_categories',
          label: 'Categories',
          sortable: true
        },
      ],

      selectedIndex: null,
      isSidebarOpen: false,
    }
  },

  computed: {
    ...mapGetters({
      getViolations: 'violations/getViolations',
    }),
  },

  async created() {
    await this.fetchViolations();
  },

  methods: {
    ...mapActions({
      fetchViolations: 'violations/fetchViolations'
    }),

    openViolationDetails(item, index) {
      this.selectedIndex = index
      this.isSidebarOpen = true
    }
  }
}
</script>

<style>
.violations-page__table tr:hover {
  cursor: pointer;
}
</style>
