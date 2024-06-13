<template>
  <dialog open>
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop="">
          <div class="modal-header">
            <img
              src="../../assets/img/modal-pic.svg"
              alt="Chatev"
              title="Chatev-logo"
            />
          </div>

          <div class="modal-body">
            <h1 class="modal-body__text">
              Скачайте приложение, <span>чтобы {{ modalText }}</span>
            </h1>
          </div>

          <div class="modal-footer">
            <div class="modal-footer__buttons">
              <a
                href="https://apps.apple.com/app/chatev/id6444910335"
                target="blank"
                class="ios"
              ></a>
            </div>
            <div class="modal-footer__buttons">
              <a
                href="https://play.google.com/store/apps/details?id=org.chatev.chatev_mobile"
                target="blank"
                class="google"
              ></a>
            </div>
          </div>
          <button class="modal-close" @click="$emit('close')">X</button>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script>
export default {
  component: {},
  props: {
    modalText: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
  },
  emits: ['close'],
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
dialog {
  background: none;
  border: none;
  transition: 0.3s linear;
  transition: opacity 0.5s ease-in-out;
}
.modal-mask {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(39, 48, 69, 0.56);
  display: table;
  animation: some-animation;
  animation-duration: 5s;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 380px;
  height: 440px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
  z-index: 15;
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-header {
  position: absolute;
  top: 0;
  left: 0;
}
.modal-body {
  margin-top: 225px;
  margin-bottom: 33px;
}
.modal-body__text {
  font-size: 27px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  text-align: center;
  color: #215ee3;
}

.modal-default-button {
  float: right;
  z-index: 15;
}
.modal-footer {
  display: flex;
  justify-content: center;
}
.modal-footer__buttons a {
  display: inline-block;
  min-height: 56px;
  min-width: 192px;
  background-position: 50% 50%;
  background-size: auto 56px;
  background-repeat: no-repeat;
}
.modal-footer__buttons a.google {
  background-image: url(../../assets/img/google-play-dark.svg);
}
.modal-footer__buttons a.ios {
  background-image: url(../../assets/img/app-store-dark.svg);
  margin-right: 10px;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-close {
  font-size: 25px;
  outline: none;
  background: none;
  color: #fff;
  border: none;
  position: absolute;
  top: -8%;
  right: 46%;
  cursor: pointer;
  transition: 0.3s;
}
.modal-close:hover {
  color: #215ee3;
  transform: scale(1.1);
}

@media screen and (min-width: 300px) and (max-width: 1000px) {
  .modal-container {
    width: 300px;
  }
  .modal-header,
  .modal-header img {
    width: 100%;
  }
  .modal-body__text {
    font-size: 20px;
  }
  .modal-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .modal-footer__buttons a.ios {
    margin-right: 0px;
    margin-bottom: 10px;
  }
  .modal-close {
    top: 0px;
    right: 0;
  }
}
</style>
