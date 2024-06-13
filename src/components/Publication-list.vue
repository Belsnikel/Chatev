<template>
  <BaseDialog
    v-if="isOpen"
    :modal-text="modalText"
    @close="closeModal"
  ></BaseDialog>
  <Head>
    <meta vmid="og:title" property="og:title" content="Chatev" />
    <meta vmid="description" name="description" content="Chatev" />
    <meta vmid="description" name="description" :content="metaDescription" />
    <meta vmid="og:title" property="og:title" :content="metaTitle" />
    <meta vmid="og:type" property="og:type" content="website" />
    <meta vmid="og:site_name" property="og:site_name" content="Chatev" />
    <meta
      vmid="og:description"
      property="og:description"
      :content="metaDescription"
    />
    <meta vmid="og:image" property="og:image" :content="metaImg" />
    <meta
      vmid="og:image:secure_url"
      property="og:image:secure_url"
      :content="metaImg"
    />
    <meta vmid="og:image:alt" property="og:image:alt" :content="metaTitle" />
    <meta vmid="og:image:type" property="og:image:type" content="image/jpg" />
    <meta vmid="og:image:width" property="og:image:width" content="1200" />
    <meta vmid="og:image:height" property="og:image:height" content="630" />
    <!-- <meta
      vmid="og:url"
      property="og:url"
      content=""
    /> -->
    <meta vmid="og:locale" property="og:locale" content="ru-RU" />
    <meta
      vmid="twitter:description"
      name="twitter:description"
      :content="metaDescription"
    />
    <meta vmid="twitter:title" name="twitter:title" :content="metaTitle" />
    <meta vmid="twitter:image" name="twitter:image" :content="metaImg" />
    <meta vmid="twitter:image:alt" name="twitter:image:alt" content="Chatev" />
    <meta vmid="twitter:card" name="twitter:card" :content="metaImg" />
    <title>{{ publicationMetaTitle }}</title>
  </Head>
  <div class="publication-wrapper">
    <div class="publication">
      <div class="publication__header">
        <div class="publication__info">
          <div class="publication__description_full">
            <div class="publication__title-wrapper">
              <img :src="publicationAvatarUrl" alt="" />
              <div class="publication__title-head-wrapper">
                <h1 class="publication__title">
                  {{ publicationTitle }}
                </h1>
                <span class="publication__date">{{ publicationStatus }}</span>
              </div>
            </div>
            <h2 class="publication__text-head">
              {{ publicationTextHead }}
            </h2>
            <div class="publication__desc" v-if="publicationText">
              <div v-html="publicationText" class="publication__text"></div>
            </div>
            <div
              class="publication__ad-btn-wrapper"
              v-if="
                publicationSocialIconUrl ||
                publicationPhoneIconUrl ||
                publicationAdressIconUrl
              "
            >
              <div class="publication__ad-btn" v-if="publicationSocialIconUrl">
                <a
                  :href="publicationSocialIconUrl"
                  class="publication__ad-link"
                  target="_blank"
                >
                  <img
                    :src="publicationIcon"
                    class="publication__ad-icon"
                    alt=""
                  />
                  <div class="publication__ad-text-info">
                    <span class="publication__ad-btn-text">{{
                      publicationSocialIconText
                    }}</span>
                    <span class="publication__ad-text-url">
                      {{ publicationSocialUrl }}
                    </span>
                  </div>
                </a>
              </div>
              <div class="publication__ad-btn" v-if="publicationPhoneIconUrl">
                <a
                  :href="publicationPhoneIconUrl"
                  class="publication__ad-link"
                  target="_blank"
                >
                  <img
                    :src="publicationIconPhone"
                    class="publication__ad-icon"
                    alt=""
                  />
                  <div class="publication__ad-text-info">
                    <span class="publication__ad-btn-text">{{
                      publicationPhoneIconText
                    }}</span>
                    <span class="publication__ad-text-url">
                      {{ publicationPhoneUrl }}
                    </span>
                  </div>
                </a>
              </div>
              <div class="publication__ad-btn" v-if="publicationAdressIconUrl">
                <a
                  :href="publicationAdressIconUrl"
                  class="publication__ad-link"
                  target="_blank"
                >
                  <img
                    :src="publicationIconGeo"
                    class="publication__ad-icon"
                    alt=""
                  />
                  <div class="publication__ad-text-info">
                    <span class="publication__ad-btn-text">{{
                      publicationAdressIconText
                    }}</span>
                    <span class="publication__ad-text-url">
                      {{ publicationAdressUrl }}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="publication__logo-wrapper">
            <div class="publication__logo">
              <img :src="publicationImageUrl" alt="" />
            </div>
          </div>
        </div>
        <div class="publication__user-feedback-wrapper">
          <div class="publication__likes-wrappper">
            <div class="publication__likes">
              <a
                href="javascript:void(0)"
                class="publication__likes-link"
                @click="publicationModalLikes"
              >
                <img src="../assets/icons/like-icon.svg" alt="" />
              </a>
              <span class="publication__likes-number">{{
                publicationLikes
              }}</span>
            </div>
            <div class="publication__dislikes">
              <a
                href="javascript:void(0)"
                class="publication__dislikes-link"
                @click="publicationModalDisLikes"
              >
                <img src="../assets/icons/dislike-icon.svg" alt="" />
              </a>
              <span class="publication__dislikes-number">{{
                publicationDislikes
              }}</span>
            </div>
            <div class="publication__comments">
              <a
                href="javascript:void(0)"
                class="publication__comments-link"
                @click="publicationModalComments"
              >
                <img src="../assets/icons/comment-icon.svg" alt="" />
              </a>
              <span class="publication__comments-number">{{
                publicationComments
              }}</span>
            </div>
          </div>
          <div class="publication__favourites-wrapper">
            <div class="publication__favourites">
              <a
                href="javascript:void(0)"
                class="publication__comments-link"
                @click="publicationModalFavourites"
              >
                <img src="../assets/icons/favourites-icon.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseDialog from './UI/BaseDialog.vue'
import {Head} from '@vueuse/head'

export default {
  data() {
    return {
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/chatev-test.appspot.com/o/',
      modalText: '',
      isOpen: false,
      metaTitle: this.post_data.topic_text,
      metaDescription: this.post_data.body_text,
      metaImg: this.checkMetaImgPath(),
      isMobile: false,
    }
  },
  props: {
    post_data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  components: {BaseDialog, Head},

  computed: {
    publicationTitle() {
      return this.publicationCheckTitle()
    },
    publicationStatus() {
      return this.sortPublicationsByStatus()
    },
    publicationText() {
      return this.post_data.body_text !== undefined
        ? this.post_data.body_text.replace(/\n/g, '<br>')
        : null
    },
    publicationTextHead() {
      return this.post_data.topic_text
    },
    publicationImageUrl() {
      return this.imgUrl + this.publicationImageUrlFormat() + '?alt=media'
    },
    publicationAvatarUrl() {
      return this.imgUrl + this.publicationAvatarUrlFormat() + '?alt=media'
    },
    publicationIcon() {
      return this.defineIconType()
    },
    publicationIconPhone() {
      return require('@/assets/icons/phone-icon.svg')
    },
    publicationIconGeo() {
      return require('@/assets/icons/geo-icon.svg')
    },
    publicationSocialIconText() {
      return this.publicationCheckSocialButton()
    },
    publicationPhoneIconText() {
      return this.publicationCheckPhoneButton()
    },
    publicationAdressIconText() {
      return this.publicationCheckAdressButton()
    },
    publicationSocialUrl() {
      return this.defineIconUrl(this.post_data.link_showed_url)
    },
    publicationPhoneUrl() {
      return this.defineIconUrl(this.post_data.link2_showed_url)
    },
    publicationAdressUrl() {
      if (navigator.userAgent.match(/Windows|Macintosh|Linux/i)) {
        return this.post_data.link3_showed_url
      }
      return this.defineIconUrl(this.publicationAdressCutUrl())
    },
    publicationSocialIconUrl() {
      return this.defineIconShowUrl(this.post_data.link_url)
    },
    publicationPhoneIconUrl() {
      return this.defineIconShowUrl(this.post_data.link2_url)
    },
    publicationAdressIconUrl() {
      return this.defineIconShowUrl(this.post_data.link3_url)
    },
    publicationLikes() {
      return this.post_data.likes
    },
    publicationDislikes() {
      return this.post_data.dislikes
    },
    publicationComments() {
      return this.post_data.comments
    },
    publicationMetaTitle() {
      return this.post_data.topic_text
    },
    publicationMetaDescription() {
      return this.post_data.body_text
    },
    publicationMetaImage() {
      return this.checkMetaImgPath()
    },
  },
  methods: {
    closeModal() {
      this.isOpen = false
    },
    publicationModal() {
      this.modalText = 'смотреть подробнее'
      this.isOpen = true
    },
    publicationModalLikes() {
      this.modalText = 'ставить лайки'
      this.isOpen = true
    },
    publicationModalDisLikes() {
      this.modalText = 'ставить дизлайки'
      this.isOpen = true
    },
    publicationModalComments() {
      this.modalText = 'оставлять комментарии'
      this.isOpen = true
    },
    publicationModalFavourites() {
      this.modalText = 'добавить в избранное'
      this.isOpen = true
    },
    sortPublicationsByStatus() {
      const eventState = this.post_data.status
      switch (eventState) {
        case 'PLANNED':
          return new Date(this.post_data.started_at)
            .toLocaleString()
            .slice(0, -3)
        case 'PUBLISHED':
          return new Date(this.post_data.created_at)
            .toLocaleString()
            .slice(0, -3)
      }
    },
    encodeImageUrl(imageId) {
      if (imageId) {
        return imageId.replaceAll('/', '%2F')
      }
    },
    publicationAvatarUrlFormat() {
      if (this.post_data.publication_author_avatar) {
        return this.encodeImageUrl(this.post_data.publication_author_avatar)
      }
    },
    publicationImageUrlFormat() {
      if (this.post_data.attachment_id)
        return this.encodeImageUrl(this.post_data.attachment_id)
    },
    defineIconUrl(iconUrl) {
      return iconUrl
    },
    defineIconShowUrl(iconShowUrl) {
      if (
        iconShowUrl &&
        !iconShowUrl.match(/http|https/g) &&
        !iconShowUrl.match(/tel:/g) &&
        iconShowUrl != undefined
      ) {
        return 'https://' + iconShowUrl
      } else if (iconShowUrl != undefined && iconShowUrl.match(/tel:/g)) {
        return iconShowUrl
      } else if (iconShowUrl != undefined && iconShowUrl != '') {
        return iconShowUrl
      }
    },
    defineIconType() {
      const linkType = this.post_data.link_type
      const linkUrl = this.post_data.link_url

      if (linkUrl != null) {
        switch (linkType) {
          case 'WEB':
            if (linkUrl.match(/t\.me/g)) {
              return require('@/assets/icons/telegram-icon.svg')
            } else if (linkUrl.match(/instagram\.com/g)) {
              return require('@/assets/icons/instagram-icon.svg')
            } else if (linkUrl.match(/tel:/g)) {
              return require('@/assets/icons/phone-icon.svg')
            } else {
              return require('@/assets/icons/web-icon.svg')
            }
          case 'PHONE':
            if (linkUrl.match(/tel:/g)) {
              return require('@/assets/icons/phone-icon.svg')
            }
            break
          default:
            return require('@/assets/icons/web-icon.svg')
        }
      }
    },
    checkMetaImgPath() {
      if (this.post_data.attachment_id) {
        return (
          'https://firebasestorage.googleapis.com/v0/b/chatev-test.appspot.com/o/' +
          this.post_data.attachment_id.replaceAll('/', '%2F') +
          '?alt=media'
        )
      } else {
        return require('../assets/img/logo.svg')
      }
    },
    publicationCheckTitle() {
      if (
        this.post_data.publication_author_name != undefined &&
        navigator.userAgent.match(/Windows|Macintosh|Linux/i)
      ) {
        return this.post_data.publication_author_name
      } else if (
        this.post_data.publication_author_name != undefined &&
        this.post_data.publication_author_name.length > 20
      ) {
        return this.post_data.publication_author_name.slice(0, 20) + '...'
      } else {
        return this.post_data.publication_author_name
      }
    },
    publicationCheckSocialButton() {
      if (this.post_data.link_text) {
        return this.post_data.link_text
      } else {
        return 'Перейти по ссылке'
      }
    },
    publicationCheckPhoneButton() {
      if (this.post_data.link2_text) {
        return this.post_data.link2_text
      } else {
        return 'Позвонить'
      }
    },
    publicationCheckAdressButton() {
      if (this.post_data_link3_text) {
        return this.post_data_link3_text
      } else {
        return 'Адрес'
      }
    },
    publicationAdressCutUrl() {
      return this.post_data.link3_showed_url != undefined
        ? this.post_data.link3_showed_url.slice(0, 20) + '...'
        : ''
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=c:wght@700&family=Inter:wght@300;400;600;700&display=swap');

.publication-wrapper {
  max-width: 70vw;
  width: 100%;
  margin: auto;
  margin-top: 50px;
  padding: 5px 30px;
  background-color: #fff;
  border-radius: 22px;
  box-shadow: 0px 0px 10px 0.5px rgba(0, 0, 0, 0.15);
  margin-bottom: 80px;
}
.publication {
  padding-top: 20px;
}
.publication__date {
  margin-bottom: 5px;
  font-size: 19px;
  color: #949494;
  font-weight: 400;
  margin-bottom: 50px;
  display: block;
}
.publication__date,
.publication__desc-title {
  margin-left: 18px;
}
.publication__info {
  display: flex;
  justify-content: space-between;
  padding: 17px 0px;
  width: 100%;
  min-height: 380px;
}
.publication__desc-full {
  font-size: 16px;
  width: 100%;
  line-height: 1.4;
  hyphens: auto;
  word-break: break-word;
}
.publication__description_full {
  position: relative;
}
.publication__logo {
  margin-top: 110px;
  text-align: right;
  max-height: 644px;
  display: flex;
  justify-content: flex-end;
}
.publication__logo img {
  max-width: 500px;
  object-fit: cover;
  border-radius: 10px;
}
.publication__title-wrapper {
  display: flex;
  flex-direction: row;
}
.publication__title-head-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: left;
}
.publication__title {
  font-size: 24px;
  margin-left: 18px;
  margin-bottom: 4px;
  margin-top: 0;
}
.publication__title-wrapper img {
  width: 64px;
  height: 64px;
  top: -5px;
  font-size: 40px;
  clip-path: circle(50%);
}
.publication__text {
  hyphens: auto;
  word-break: break-word;
  font-size: 19px;
  line-height: 1.5;
}
.publication__text-head {
  padding-bottom: 15px;
}
.publication__ad-text-url {
  text-decoration: underline;
  color: #949494;
}
.publication__desc-title {
  font-size: 16px;
  padding-bottom: 4px;
  font-weight: 400;
  color: #949494;
}
.publication__status {
  font-weight: bold;
  text-transform: capitalize;
}
.publication__ad-btn-wrapper {
  position: absolute;
  bottom: 0;
  min-height: 38px;
}
.publication__ad-btn {
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 30px;
}
a.publication__ad-link {
  display: flex;
  position: relative;
  align-items: center;
  text-decoration: none;
  color: #000;
}
a.publication__ad-link::after {
  content: '';
  position: absolute;
  background-image: url(../assets/icons/arrow-right.svg);
  width: 34px;
  height: 34px;
  right: -36px;
  top: 4px;
}
.publication__ad-btn-text {
  font-weight: bold;
}
.publication__ad-icon {
  width: 30px;
  height: auto;
  margin-right: 10px;
}
.publication__ad-text-info {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
div.publication__ad-text-info span {
  display: inherit;
}
.publication__user-feedback-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
}
.publication__likes-wrappper {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.publication__likes-wrappper div {
  margin-right: 12px;
}
.publication__likes,
.publication__dislikes,
.publication__comments {
  display: flex;
}
.publication__likes-link,
.publication__dislikes-link,
.publication__comments-link {
  margin-right: 5px;
}
.publication__likes img {
  margin-top: -3px;
}
.publication__favourites {
  margin-right: 0px;
}
.publication__comments-number,
.publication__dislikes-number,
.publication__likes-number {
  display: block;
  color: #949494;
}
span {
  display: block;
}
button {
  border: none;
  background: none;
  outline: none;
  margin: 0;
  padding: 0;
  font-size: 16px;
}

//breakpoints
@media screen and (min-width: 930px) and (max-width: 1199px) {
  .publication__logo img {
    max-width: 350px;
  }
  .publication__text {
    width: 90%;
  }
}
@media screen and (min-width: 768px) and (max-width: 929px) {
  .publication__logo img {
    max-width: 250px;
  }
  .publication__text {
    width: 90%;
    font-size: 14px;
  }
  .publication__title {
    font-size: 24px;
  }
  .publication__date {
    font-size: 16px;
  }
  .publication__ad-btn-wrapper {
    position: static;
  }
  .publication__title img {
    width: 60px;
    height: 60px;
  }
  .publication__logo {
    margin-top: 110px;
  }
}
@media screen and (min-width: 300px) and (max-width: 767px) {
  .publication-wrapper {
    margin-top: 0;
    padding: 5px 30px;
    max-width: 75vw;
  }
  .publication {
    padding-top: 0;
  }
  .publication-single {
    margin-bottom: 0;
  }
  .publication__info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    min-height: unset;
  }
  .publication__text {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    text-align: left;
    font-size: 14px;
    margin-left: 0px;
    margin-bottom: 10px;
  }
  .publication__text-head {
    text-align: left;
    font-size: 16px;
    padding-bottom: 10px;
  }
  .publication__desc,
  .publication__text-head {
    width: 300px;
  }
  .publication__description_full {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: unset;
  }
  .publication__info img {
    text-align: center;
  }
  .publication__logo-wrapper {
    margin-bottom: 40px;
    min-height: 100px;
  }
  .publication__logo img {
    max-width: 300px;
    left: 66px;
  }
  .publication__logo {
    margin-top: 0px;
    text-align: center;
    max-height: 400px;
  }
  .publication__title {
    font-size: 18px;
    margin-left: 0px;
    width: 165px;
    text-align: left;
    word-break: break-word;
  }
  .publication__title-wrapper {
    width: 300px;
    justify-content: center;
  }
  .publication__title-wrapper img {
    width: 55px;
    height: 55px;
    margin-left: -70px;
    margin-right: 10px;
  }

  .publication__date {
    margin-left: -60px;
    font-size: 12px;
    margin-bottom: 30px;
    margin-top: 0px;
  }
  a.publication__ad-link {
    position: static;
  }
  .publication__ad-btn-wrapper {
    align-self: baseline;
    width: 195px;
  }
  .publication__ad-btn {
    position: relative;
  }
  .publication__ad-btn-text {
    text-align: left;
  }
  a.publication__ad-link::after {
    right: -65%;
    top: 2%;
  }
  .publication__ad-btn,
  .publication__user-feedback-wrapper {
    margin-left: -2%;
  }
  .publication__favourites {
    margin-right: -17px;
  }
  .publication__ad-btn-text {
    font-size: 14px;
  }
  .publication__ad-text-url {
    font-size: 13px;
  }
}
</style>
