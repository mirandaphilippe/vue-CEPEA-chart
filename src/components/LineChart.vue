<template>
  <div>
    <div class="chart-wrapper">
      <canvas id="chartjs"></canvas>
    </div>
    <button v-on:click="loadQuandl()">Reload</button>
  </div>
</template>

<script>
import Chart from "chart.js";
import axios from "axios";
import mixin from "../mixins/chart";

export default {
  name: "LineChart",
  mixins: [mixin],
  data() {
    return {
      data: {
        quandlData: null,
        datasetDetails: {
          name: null,
          description: null
        }
      }
    };
  },
  mounted() {
    this.loadQuandl();
  },

  methods: {
    async loadQuandl() {
     await axios
        .get(
          "https://www.quandl.com/api/v3/datasets/CEPEA/CALF_C.json?api_key=2tzaqQ4JxsFMzeRUUpL4"
        )
        .then(res => {
          const r = res.data;
          this.quandlData = this.serializeFromVector(r.dataset.data);
        });
        this.createChart();
    },

    createChart() {
      // this.loadQuandl();
      const context = document.getElementById("chartjs").getContext("2d");
      const chart = new Chart(context, {
        type: "scatter",
        data: {
          datasets: [
            {
              label:"Preço U$$",
              data: this.quandlData,
              pointStyle: 'circle',
              pointBackgroundColor: '#00ccaa',
              pointRadius:1,
              showLine: true
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                offset: false,
                ticks: {
                  beginAtZero: false
                }
              }
            ],
            xAxes: [
              {
                type: 'time',
                time: {
                  unit: 'year'
                },
                stacked: false,
                offset: false,
                ticks: {
                  beginAtZero: false
                }
              }
            ]
          }
        }
      });

      console.log(chart);
    },
    randomize() {
      this.loadQuandl();
    }
  },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.chart-wrapper {
  display: relative;
  width: 100%;
  margin: auto;
}
</style>
