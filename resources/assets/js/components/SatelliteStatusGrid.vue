<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">
                        <h2> Satellite Status Grid </h2>
                    </div>

                    <div class="card-body">
                            <h3> Red Border = Error Issued </h3>
                            <p> Click on Satellite with issue to open up a diagnosis menu.</p>

                        <div class="satellites col-sm-10 col-sm-offset-2">
                            <ul>
                                <li v-for="(satellite, index) in satellites"
                                    class="name satellite-grid-item col-sm-3"
                                    v-bind:class="{'satellite-error': satelliteError(satellite)}"
                                    @click="selectedSatellite(satellite)" >
                                    <p>{{ satellite.name }}</p>
                                    {{ satellite.selectedSatellite }}
                                </li>
                            </ul>
                        </div>
                        <div id="satelliteData"
                             class="col-sm-12"
                             v-for="(satellite, index) in satellites"
                             v-if="satellite.selectedSatellite">
                            <div class="data-selection">
                                <div class="selected-name col-sm-4">
                                    <h3>{{satellite.name}}</h3>
                                </div>
                                <div class="satellite-status col-sm-8">
                                    <ul>
                                        <li @click="showData(satellite, i = 1)"><p> Satellite Status 1: {{ satellite.status1 }}</p></li>
                                        <li @click="showData(satellite, i = 2)"><p> Satellite Status 2: {{ satellite.status2 }}</p></li>
                                        <li @click="showData(satellite, i = 3)"><p> Satellite Status 3: {{ satellite.status3 }}</p></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="satellite-data col-sm-12">
                                <ul>
                                    <li v-show="satellite.showSelectedData1"> <line-chart>{{ satellite.statusData1 }}</line-chart>{{satellite.showSelectedData1}} </li>
                                    <li v-show="satellite.showSelectedData2">{{ satellite.statusData2 }} {{satellite.showSelectedData2}}</li>
                                    <li v-show="satellite.showSelectedData3">{{ satellite.statusData3 }} {{satellite.showSelectedData3}}</li>
                                </ul>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">


    #satelliteData {
        clear: both;
        padding-top: 50px;
    }
    canvas#line-chart.chartjs-render-monitor {
        height: 350px !important;
    }
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
    .satellites {
        padding-bottom: 30px;
        ul li {
            text-align: center;
        }
    }
    .satellite-grid-item {
        float: left;
        min-height: 50px;
        list-style: none;
        background-color: rgba(220, 220, 220, 0.8);
        border:1px solid lightgreen;
    }
    .selected-name {
        float: left;
        display: inline-block;
        border: 1px solid grey;
        height: 100%;
        h3 {
            position: inherit;
            top: 40%;
        }

    }
    .satellite-status {
        float: right;
        display: inline-block;
        border: 1px solid black;
        height: 100%;
        ul {
            padding-left: 0;
            text-align: center;
            li {
                list-style: none;
                border: 1px solid lightgrey;
            }
        }
    }
    .data-selection {
        height: 150px;
    }
    .satellite-data {
        display: block;
        border: 1px solid grey;
        clear: both;
        ul {
            list-style: none;
            padding-left: 0;
        }
    }
    .satellite-error {
        border: 1px solid red;
    }

</style>

<script>

    import LineExample from '../line-chart.js'
    import {Line} from 'vue-chartjs'
    export default {
        extends: Line,
        components: {
            'line-chart': LineExample
        },
        props: ['data', 'options'],

        data() {
           return {

//                   chartData: {
//                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//                      datasets: [
//                          {
//                              label: '2018',
//                              backgroundColor: '#FC2525',
//                              data: [40, 39, 10, 40, 39, 80, 40]
//                          },{
//                              label: '2017',
//                              backgroundColor: '#05CBE1',
//                              data: [60, 55, 32, 10, 2, 12, 53]
//                          }
//                      ]
//
//                  },
//               chartOptions: {
//                   responsive: true, maintainAspectRatio: false
//               },

               satellites: [
                   {
                       name: 'satellite1',
                       selectedSatellite: false,
                       showSelectedData: false,
                       showSelectedData1: false,
                       showSelectedData2: false,
                       showSelectedData3: false,
                       status1: 'ok',
                       statusData1: [10, 15, 20, 45, 30],
                       status2: 'ok',
                       statusData2: [],
                       status3: 'ok',
                       statusData3: [],
                   },
                   {
                       name: 'satellite2',
                       selectedSatellite: false,
                       showSelectedData: false,
                       showSelectedData1: false,
                       showSelectedData2: false,
                       showSelectedData3: false,
                       status1: 'ok',
                       statusData1: [],
                       status2: 'ok',
                       statusData2: [],
                       status3: 'ok',
                       statusData3: []
                   },
                   {
                       name: 'satellite3',
                       selectedSatellite: false,
                       showSelectedData: false,
                       showSelectedData1: false,
                       showSelectedData2: false,
                       showSelectedData3: false,
                       status1: 'ok',
                       statusData1: [],
                       status2: 'error',
                       statusData2: [],
                       status3: 'ok',
                       statusData3: []
                   },
                   {
                       name: 'satellite4',
                       selectedSatellite: false,
                       showSelectedData: false,
                       showSelectedData1: false,
                       showSelectedData2: false,
                       showSelectedData3: false,
                       status1: 'ok',
                       statusData1: [],
                       status2: 'ok',
                       statusData2: [],
                       status3: 'ok',
                       statusData3: [],
                   },
                   {
                       name: 'satellite5',
                       selectedSatellite: false,
                       showSelectedData: false,
                       showSelectedData1: false,
                       showSelectedData2: false,
                       showSelectedData3: false,
                       status1: 'ok',
                       statusData1: [],
                       status2: 'ok',
                       statusData2: [],
                       status3: 'ok',
                       statusData3: []
                   },
                   {
                       name: 'satellite6',
                       selectedSatellite: false,
                       showSelectedData: false,
                       showSelectedData1: false,
                       showSelectedData2: false,
                       showSelectedData3: false,
                       status1: 'ok',
                       statusData1: [],
                       status2: 'error',
                       statusData2: [],
                       status3: 'ok',
                       statusData3: []
                   },
                   {
                       name: 'satellite7',
                       selectedSatellite: false,
                       showSelectedData: false,
                       showSelectedData1: false,
                       showSelectedData2: false,
                       showSelectedData3: false,
                       status1: 'ok',
                       statusData1: [],
                       status2: 'ok',
                       statusData2: [],
                       status3: 'ok',
                       statusData3: [],
                   },
                   {
                       name: 'satellite8',
                       selectedSatellite: false,
                       showSelectedData: false,
                       showSelectedData1: false,
                       showSelectedData2: false,
                       showSelectedData3: false,
                       status1: 'ok',
                       statusData1: [],
                       status2: 'ok',
                       statusData2: [],
                       status3: 'ok',
                       statusData3: []
                   },
                   {
                       name: 'satellite9',
                       selectedSatellite: false,
                       showSelectedData: false,
                       showSelectedData1: false,
                       showSelectedData2: false,
                       showSelectedData3: false,
                       status1: 'ok',
                       statusData1: [],
                       status2: 'error',
                       statusData2: [],
                       status3: 'ok',
                       statusData3: []
                   },
                   {
                       name: 'satellite10',
                       selectedSatellite: false,
                       showSelectedData: false,
                       showSelectedData1: false,
                       showSelectedData2: false,
                       showSelectedData3: false,
                       status1: 'ok',
                       statusData1: [],
                       status2: 'ok',
                       statusData2: [],
                       status3: 'ok',
                       statusData3: []
                   }
               ],
           }
        },

        methods: {
            satelliteError: function(satellite)
            {
                if ((satellite.status1 == 'error') || satellite.status2 == 'error' || satellite.status3 == 'error')
                    return true;
                },
            selectedSatellite: function(satellite)
            {
                return satellite.selectedSatellite = true;
            },
            showData: function(satellite, i)
            {
                console.log(i);
                this.status = i;
                if (i == 1) {
                    return satellite.showSelectedData1 = true;
                }
                if (i == 2) {
                    return satellite.showSelectedData2 = true;
                }
                if (i == 3) {
                    return satellite.showSelectedData3 = true;
                }
            }
        },

        mounted() {
            console.log('Component mounted.')
//            this.renderChart(this.data, this.options)
        }
    }
</script>