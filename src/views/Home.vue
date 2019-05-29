<template>
  <div class="home">
    <LineChart />
    <div>
      <h2>Simple Chart with ChartJs and Vue</h2>
      <p> A simple chart made with chart.js and Vue, for learning process
         <br> In this example i consume data from this
         <a href="https://www.quandl.com/data/CEPEA-Center-for-Applied-Studies-on-Applied-Economics-Brazil">Quandl dataset</a>  
         and explore some of the core concepts of Vuejs and Chart.js .

      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LineChart from '@/components/LineChart.vue';


export default {
  name: 'home',
  components: {
    LineChart
  }


}
</script>
