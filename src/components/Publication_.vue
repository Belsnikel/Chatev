<template>
  <Header_
    v-if="this.$route.path.match(/publication/g)"
    :key="publicationData"
    :publicationData="publicationData"
  />
  <Head>
    <title>Chatev</title>
    <meta vmid="og:title" property="og:title" content="Chatev" />
    <meta vmid="description" name="description" content="Chatev" />
  </Head>
  <div v-if="this.$route.path.match(/event/g)">
    <Publication-list
      v-for="post in publicationData"
      :key="post"
      :post_data="post"
    ></Publication-list>
  </div>
  <div v-if="this.$route.path.match(/publication/g)" class="publication-single">
    <Publication-list
      :key="publicationData"
      :post_data="publicationData"
    ></Publication-list>
  </div>
</template>

<script>
import Header_ from './Header_.vue'
import publicationService from '@/services/publication-service'
import PublicationList from './Publication-list.vue'
import {Head} from '@vueuse/head'

export default {
  data() {
    return {
      pubListData: {},
      publicationData: [],
      post_data: {},
      id: this.$route.params.id,
    }
  },

  components: {PublicationList, Head, Header_},

  props: {
    event_template_id: {
      type: String,
      default() {
        return 'error'
      },
    },
  },
  computed: {},

  methods: {},
  async mounted() {
    if (window.location.pathname.match(/publication/g)) {
      return (
        (this.pubListData = await publicationService.getPublications(this.id)),
        (this.publicationData = this.pubListData)
      )
    } else {
      return (
        (this.pubListData = await publicationService.getPublications(
          this.event_template_id
        )),
        (this.publicationData = this.pubListData.result)
      )
    }
  },
}
</script>
<style lang="scss" scoped>
.publication-single {
  margin-bottom: 210px;
}
@media screen and (min-width: 300px) and (max-width: 767px) {
  .publication-single {
    margin-bottom: 0;
  }
}
</style>
