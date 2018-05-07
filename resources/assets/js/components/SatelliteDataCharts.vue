<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">
                        <h2> Satellite Status Data </h2>
                    </div>

                    <div class="card-body">
                        <h3> Satellite Status Chart Data </h3>
                        <p> View chart data to help diagnose the issue.</p>
                        <div class="Chart__list">
                            <div class="Chart">
                                <h2>Linechart</h2>
                                <line-chart></line-chart>
                                <!--:data="chartData" :options="chartOptions"-->
                            </div>
                        </div>
                    </div>
                    <!--<div class="charts">-->
                        <!--<canvas id="planet-chart"></canvas>-->
                    <!--</div>-->
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">

    .card-header {
        text-align: center;
    h2 {
        margin: auto;
    }
    }
    .card-body {
        text-align: center;
    h3 {
        font-weight: bold;

    }
    }

</style>

<script>

//    import planetChartData from '../chart-data.js';
    import LineExample from '../line-chart';
    import {Line} from 'vue-chartjs'
    export default {

        components: {
            'line-chart': LineExample
        },
//        extends: Line,
//        props: ['data', 'options'],

        data () {
          return {
//              chartData: {
//                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//                  datasets: [
//                      {
//                          label: '2018',
//                          backgroundColor: '#FC2525',
//                          data: [40, 39, 10, 40, 39, 80, 40]
//                      },{
//                          label: '2017',
//                          backgroundColor: '#05CBE1',
//                          data: [60, 55, 32, 10, 2, 12, 53]
//                      }
//                  ]
//
//              },
//              chartOptions: {responsive: true, maintainAspectRatio: false}
          }
        },

        mounted() {
//            this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
//            this.renderChart(this.data, this.options)
//            this.renderChart(this.chartData, this.chartOptions);
            console.log('Component Charts mounted.')
        }
    }
</script>