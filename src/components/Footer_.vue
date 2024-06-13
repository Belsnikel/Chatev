<template>
  <footer id="footer">
    <div class="footer-wrapper">
      <div class="footer__left-column">
        <ul class="footer__left-list">
          <li class="item">
            <a href="https://chatev.ru/personal" target="_blank"
              >Политика конфиденциальности</a
            >
          </li>
          <li class="item">
            <a href="https://chatev.ru/oferta" target="_blank"
              >Публичная оферта</a
            >
          </li>
          <li class="item">
            <a href="https://chatev.ru/terms-of-service" target="_blank"
              >Условия пользования</a
            >
          </li>
          <li class="item">
            <span>Email: </span
            ><a href="mailto:chatevapp@gmail.com">chatevapp@gmail.com</a>
          </li>
        </ul>
      </div>
      <div class="footer__logo">
        <img src="../assets/img/footer-logo.png" alt="Chatev-Logo" />
      </div>
      <div class="footer__right-column">
        <ul class="footer__right-list">
          <li class="item">I/E Grigorii Gorkushenko</li>
          <li class="item">Identification number: 302229283</li>
          <li class="item">
            Address: Georgia, Tbilisi, Chugureti District, Lochini
          </li>
          <li class="item">Street, N 3, Floor 2, Apartment N5</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

footer#footer {
  background-color: #fff;
}
footer ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
footer a,
li {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
}
footer a {
  text-decoration: none;
  color: rgb(33, 94, 227);
}
.footer-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  margin: 0px 15px;
  align-items: center;
  padding: 5px 35px;
  margin: 0 auto;
}
.footer__logo {
  margin-right: -120px;
}
.footer__logo img {
  width: 64px;
  height: 65px;
}

/* breakpoints */
@media screen and (min-width: 930px) and (max-width: 1199px) {
  .footer__logo {
    margin-right: -88px;
  }
  .footer-wrapper {
    margin: 0px 7%;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1400px) {
  .footer-wrapper {
    margin: 0px 9.5%;
  }
}
@media screen and (min-width: 1400px) and (max-width: 1600px) {
  .footer-wrapper {
    margin: 0px 10%;
  }
}
@media screen and (min-width: 1601px) and (max-width: 4000px) {
  .footer-wrapper {
    margin: 0px 12.5%;
  }
}
@media screen and (min-width: 768px) and (max-width: 929px) {
  .footer-wrapper {
    margin: 0px 4.5%;
  }
  .footer__logo {
    margin-right: -2%;
  }
}
@media screen and (min-width: 300px) and (max-width: 767px) {
  .footer-wrapper {
    align-items: flex-start;
    padding: 5px 8px;
  }
  .footer__logo {
    margin: 0px 12px;
  }
}
</style>
