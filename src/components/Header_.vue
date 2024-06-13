<template>
  <header>
    <div class="header">
      <div class="header__logo">
        <img width="100px" src="../assets/img/logo.svg" alt="" />
      </div>
    </div>
    <span
      >Найди услуги, товары, информацию в эмиграции {{ countryLocation }}
    </span>
  </header>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    publicationData: {
      type: Object,
      default() {
        return {}
      },
    },
    eventListData: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    publicationCountryValue() {
      return this.checkLocationCountry(this.publicationData.location_country_id)
    },
    eventCountryValue() {
      return this.checkLocationCountry(this.eventListData.location_country_id)
    },

    countryLocation() {
      const routePath = this.$route.path
      if (routePath.includes('/publication/')) {
        return this.publicationCountryValue
      } else if (routePath.includes('/event/')) {
        return this.eventCountryValue
      } else {
        return false
      }
    },
    countryLocationText() {
      return 'и других странах'
    },
  },
  methods: {
    checkLocationCountry(id) {
      const countryBook = {
        '01e5c00a-c929-11ec-aaaa-55523c117701': 'Грузии',
        '01e5c00a-c929-11ec-aaaa-55523c117702': 'Cербии',
      }
      if (id === '01e5c00a-c929-11ec-aaaa-55523c117708' || !id) {
        return 'в разных странах'
      } else if (countryBook[id]) {
        return 'в ' + countryBook[id] + ' и других странах'
      }
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Raleway:wght@300&display=swap');

header {
  background-color: #fff;
  text-align: center;
  margin-bottom: 15px;
}
header span {
  display: block;
  text-align: center;
  color: #949494;
  font-style: italic;
  font-size: 14px;
  padding: 0px 20px 6px 20px;
  font-family: 'Raleway', sans-serif;
}
.header {
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  margin: 0px 15px;
  align-items: center;
}
.header__logo {
  height: 30px;
}
.header__logo img {
  width: 116px;
  height: 30px;
}
</style>
