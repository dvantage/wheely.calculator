<template>
  <div id="app">
    <h1>Wheely calculator</h1>
    <div class="wheely-calc">
      <table>
        <tr>
          <th>Расстояние в городе (км)</th>
          <th>Расстояние за городом(км)</th>
          <th>Время (мин)</th>
        </tr>
        <tr>
          <td><input v-model="distance" name="distance" type="text"></td>
          <td><input v-model="distanceCountry" name="distanceCountry" type="text"></td>
          <td><input v-model="time" name="time" type="text"></td>

        </tr>
        <tr>
          <th>Класс</th>
        </tr>
        <tr>
          <td>
            <select v-model="classAuto">
              <option v-for="(value,  key, index) in tariffs" :value="key">
                {{ key }}
              </option>
            </select>
          </td>
        </tr>
      </table>
      <div class="results">
        <ul>
          <li>Сумма поездки: <span>{{ result }}</span></li>
          <li>Сумма поездки со скидкой (20%): <span>{{ resultDiscount }}</span></li>
          <li>Минимальная стоимость поездки: <span>{{ minimal }}</span></li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Watch, Vue} from 'vue-property-decorator';
// import 'assets/css/style.css';

@Component
export default class App extends Vue {

  @Prop() private msg!: string;
  private discount: number = 20;

  public distance: number = 0;
  public distanceCountry: number = 0;
  public time: number = 0;
  public classAuto: string = 'business';
  public minimal: number = 0;
  public result: number = 0;
  public resultDiscount: number = 0;

  public tariffs = {
    business: {
      base:            300, // Начальная стоимость
      time:            25,  // Стоимость за минуту поездки
      distance:        25,  // Стоимость за 1км поездки (в городе)
      distanceCountry: 35,  // Стоимость за 1км поездки (за городом)
      min:             600  // Минимальная стоимость
    },
    first:      {
      base:            550,
      time:            45,
      distance:        45,
      distanceCountry: 65,
      min:             1000
    },
    luxe:     {
      base:            600,
      time:            50,
      distance:        50,
      distanceCountry: 75,
      min:             2000
    },
    xl:       {
      base:            450,
      time:            35,
      distance:        35,
      distanceCountry: 50,
      min:             1800
    },
  };

  @Watch('distance')
  @Watch('distanceCountry')
  @Watch('time')
  @Watch('classAuto', {deep: true, immediate: true})
  onClassAutoChanged(val: string, oldVal: string): any {
    this.calc();
  }


  public calc(): any {
    let current = this.tariffs[this.classAuto];
    this.result = current.base
        + this.distance * current.distance
        + this.distanceCountry * current.distanceCountry
        + this.time * current.time;
    this.resultDiscount = this.result - (this.result * this.discount / 100);
    this.minimal = current.min;
  }

  mounted() {
    console.log('App mount');
  }

  created() {
    console.log('App created');
  }
}
</script>


<style lang="scss">

html {
  height: 100%;
}

body {
  // background: black;
  background-image: url("assets/background.png");
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

@media only screen and (max-width: 768px) {
  body {
    background-size: cover;
    background-position: center center;
  }
}

h1 {
  color: white;
  text-transform: uppercase;
  text-align: center;
}

.wheely-calc {

  background: rgba(0, 0, 0, 0.77) none repeat scroll 0 0;
  color: white;
  margin: 100px auto 0;
  max-width: 495px;
  text-align: center;
  width: auto;
  overflow: hidden;
}

.results {
  margin: 50px 0;
}

select {
  background: black none repeat scroll 0 0;
  border: 1px solid yellow;
  color: white;
  font-weight: bold;
  height: 28px;
  text-align: center;
  text-align-last: center;
  text-transform: uppercase;
  width: 142px;
}

select option {
  text-align: center;
  text-align-last: center;
}

input[type="text"] {
  background: black none repeat scroll 0 0;
  border: 1px solid yellow;
  color: white;
  font-weight: bold;
  height: 26px;
  margin: 0 10px;
  padding: 0 5px;
  text-transform: uppercase;
  text-align: center;
  width: 130px;
}

ul {
  list-style: outside none none;
  margin: 0 auto;
  padding: 0;
  text-align: left;
  width: 303px;
}

ul li {

}

ul li span {
  color: yellow;
  font-weight: bold;
}

@media only screen and (max-width: 768px) {
  select {
    width: 110px;
  }
  input[type="text"] {
    width: 100px;
  }

  .wheely-calc {
    margin-top: 80px;
    margin-bottom: 280px;
  }
  body {
    background-position: bottom center;
    background-size: 500px auto;
    height: 100%;
  }

}

table {
  border-collapse: separate;
  border-spacing: 0 10px;
  width: 100%;
}

tr {

}

tr td {
  width: 40%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background: black;*/
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
