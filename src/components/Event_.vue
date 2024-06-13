<template>
  <Header_
    v-if="this.$route.path.match(/event/g)"
    :key="eventListData"
    :eventListData="eventListData"
  />
  <BaseDialog
    v-if="participantsClick || isParticipate"
    :modal-text="modalText"
    @close="closeModal"
  ></BaseDialog>
  <div class="event-wrapper">
    <div class="event">
      <div class="event__header">
        <div class="event__info">
          <div class="event__description_full">
            <h1 class="event__title">
              {{ eventTitle }}
            </h1>
            <div class="event__desc">
              <h2 class="event__desc-title">{{ eventText }}</h2>
              <div class="event__desc-full"></div>
            </div>
          </div>
          <div class="event__logo-wrapper">
            <div class="event__logo-wrapper">
              <div class="event__logo">
                <img :src="eventAvatarUrl" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="event__conrols">
          <div class="event__event-status-wrapper">
            <div class="event__status">{{ eventStatus }}</div>
            <div class="event__controls-wrapper">
              <div class="wrapper__event-status">
                <div class="event__date">{{ eventDate }}</div>
              </div>
            </div>
          </div>
          <div class="event__btn-wrapper">
            <button class="event__btn-members" @click="participantsModal">
              {{ ParticipantsButtonText }}
            </button>
            <button class="event__btn-join" @click="isParticipateModal">
              {{ ParticipateButtonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="publication-component">
    <Publication_
      v-if="event_template_id"
      :event_template_id="event_template_id"
    ></Publication_>
  </div>
</template>

<script>
import Header_ from './Header_.vue'
import Publication_ from './Publication_.vue'
import BaseDialog from './UI/BaseDialog.vue'
import eventService from '@/services/event-service.js'

export default {
  data() {
    return {
      eventListData: {},
      currentEventStatus: '',
      eventAt: '',
      id: this.$route.params.id,
      event_template_id: '',
      participantsClick: false,
      isParticipate: false,
      modalText: '',
      event_type_id: '',
    }
  },
  components: {Publication_, BaseDialog, Header_},

  props: {},

  computed: {
    eventStatus() {
      return this.getEventStatus()
    },
    eventDate() {
      return this.sortEventByStatus()
    },
    eventTitle() {
      return this.eventListData.name
    },
    eventText() {
      return this.eventListData.description
    },
    eventAvatarUrlFormat() {
      return this.encodeImageUrl(this.eventListData.avatar_path)
    },
    eventAvatarUrl() {
      return `https://firebasestorage.googleapis.com/v0/b/chatev-test.appspot.com/o/${this.eventAvatarUrlFormat}?alt=media`
    },
    ParticipantsButtonText() {
      return this.ParticipantsButtonValue()
    },
    ParticipateButtonText() {
      return this.ParticipateButtonValue()
    },
  },
  methods: {
    getEventStatus() {
      const currentEventStatus = {
        ACTIVE: 'идёт',
        FINISHED: 'завершено',
        CANCELLED: 'завершено',
        PLANNED: 'запланировано',
      }
      if (this.checkEventTypeId()) {
        return currentEventStatus[this.eventListData.status]
      } else {
        return ''
      }
    },
    sortEventByStatus() {
      const eventState = this.eventListData.status

      if (this.checkEventTypeId()) {
        switch (eventState) {
          case 'PLANNED' || 'ACTIVE':
            return (
              'c ' +
              new Date(this.eventListData.started_at)
                .toLocaleString()
                .slice(0, -3)
            )
          case 'FINISHED':
            return (
              'в ' +
              new Date(this.eventListData.finished_at)
                .toLocaleString()
                .slice(0, -3)
            )
          case 'CANCELLED':
            return (
              'в' +
              new Date(this.eventListData.created_at)
                .toLocaleString()
                .slice(0, -3)
            )
        }
      } else {
        return ''
      }
    },
    encodeImageUrl(imageId) {
      if (imageId != null) {
        return imageId.replaceAll('/', '%2F')
      }
    },
    checkEventTypeId() {
      if (
        this.event_type_id === '01e5c00a-c929-11eb-b8bc-55523c117701' ||
        this.event_type_id === '01e5c00a-c929-11eb-b8bc-55523c117709' ||
        this.event_type_id === '01e5c00a-c929-11eb-b8bc-55523c117712' ||
        this.event_type_id === '01e5c00a-c929-11eb-b8bc-55523c117716'
      ) {
        return true
      }
    },

    ParticipantsButtonValue() {
      if (this.checkEventTypeId()) {
        return 'Участники'
      } else {
        return 'Подписчики'
      }
    },
    ParticipateButtonValue() {
      if (this.checkEventTypeId()) {
        return 'Участвовать'
      } else {
        return 'Подписаться'
      }
    },

    participantsModal() {
      if (this.checkEventTypeId()) {
        this.modalText = 'увидеть участников'
        this.participantsClick = true
      } else {
        this.modalText = 'увидеть подписчиков'
        this.participantsClick = true
      }
    },
    isParticipateModal() {
      if (this.checkEventTypeId()) {
        this.modalText = 'участвовать'
        this.isParticipate = true
      } else {
        this.modalText = 'Подписаться'
        this.participantsClick = true
      }
    },
    closeModal() {
      this.isParticipate = false
      this.participantsClick = false
    },
  },

  async created() {
    return (
      (this.eventListData = await eventService.getEvents(this.id)),
      (this.event_template_id = this.eventListData.event_template.id),
      (this.event_type_id = this.eventListData.event_type_id)
    )
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=c:wght@700&family=Inter:wght@300;400;600;700&display=swap');

button {
  border: none;
  background: none;
  outline: none;
  margin: 0;
  padding: 0;
  font-size: 16px;
  cursor: pointer;
}
.event-wrapper {
  max-width: 70vw;
  width: 100%;
  margin: auto;
  margin-top: 50px;
  padding: 5px 35px;
  background-color: #fff;
  border-radius: 10px;
  border: 0.5px solid #215ee3;
  box-shadow: 0px 0px 10px 0.5px rgba(0, 0, 0, 0.15);
}
.event {
  padding-top: 30px;
}
.event__date {
  margin-bottom: 10px;
}
.event__info {
  display: flex;
  justify-content: space-between;
}
.event__desc-full {
  font-size: 16px;
  max-width: 34vw;
}
.event__desc {
  padding-bottom: 40px;
}
.event__title {
  font-size: 24px;
  padding-bottom: 50px;
}
.event__desc-title {
  font-size: 19px;
  line-height: 1.5;
  padding-bottom: 8px;
  padding-right: 45px;
  font-weight: 300;
}
.event__status {
  font-weight: bold;
  text-transform: capitalize;
}
.event__logo {
  text-align: right;
  margin-bottom: 15px;
  display: flex;
}
.event__logo img {
  max-width: 210px;
  height: auto;
  object-fit: cover;
  clip-path: circle(50%);
}
.event__btn-wrapper {
  display: flex;
  margin-bottom: 20px;
}
.event__btn-wrapper button {
  display: block;
}
.event__controls-wrapper {
  display: flex;
  justify-content: space-between;
  width: 141%;
  margin-bottom: 20px;
}

.event__conrols {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.event__btn-members {
  border: 1px solid #215ee3;
  color: #215ee3;
  border-radius: 30px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 20px;
  padding: 15px 40px;
  margin-right: 20px;
  transition: 0.2s ease-out;
}
.event__btn-members:hover {
  background: #215ee3;
  color: #fff;
}
.event__btn-join {
  background-color: #215ee3;
  border-radius: 30px;
  color: #fff;
  font-size: 20px;
  padding: 15px 70px;
  font-weight: 700;
  border: 1px solid transparent;
  transition: 0.2s ease-out;
}
.event__btn-join:hover {
  background: #fff;
  color: #215ee3;
  border: 1px solid #215ee3;
}

//breakpoints

@media screen and (min-width: 768px) and (max-width: 929px) {
  .event__title {
    font-size: 24px;
  }
  .event__logo img {
    max-width: 185px;
  }
  .event__desc-title[data-v-269c7cb5] {
    font-size: 16px;
  }
  .event__status {
    font-size: 12px;
  }
  .event__date {
    font-size: 12px;
  }
  .event__btn-members,
  .event__btn-join {
    font-size: 16px;
  }
  .event__btn-members {
    padding: 15px 40px;
  }
  .event__btn-join {
    padding: 15px 50px;
  }
}
@media screen and (min-width: 300px) and (max-width: 767px) {
  .event__info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .event__logo img {
    max-width: 190px;
  }
  .event__title {
    font-size: 23px;
  }
  .event__description_full {
    text-align: center;
  }
  .event__desc-title {
    padding-bottom: 0px;
    padding-right: 0px;
    font-size: 16px;
  }
  .event__desc {
    padding-bottom: 25px;
  }
  .event__event-status-wrapper {
    text-align: center;
    font-size: 14px;
  }
  .event__conrols {
    display: flex;
    flex-wrap: wrap;
  }
  .event__controls-wrapper {
    width: 100%;
    display: block;
  }
  .event__conrols {
    display: block;
    text-align: center;
  }
  .event__btn-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 15px;
  }
  .event__btn-members {
    margin-right: 0px;
    margin-bottom: 20px;
    font-size: 16px;
  }
  .event__btn-join {
    font-size: 16px;
  }
}
</style>
