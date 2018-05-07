<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">
                        <h2> Satellite Status Grid </h2>
                    </div>

                    <div class="card-body">
                            <!--<h3> Red Border = Error Issued </h3>-->
                            <p> Click on Satellite to open up in Diagnoses Panel.</p>

                        <div class="satellites col-sm-12 list-group">
                            <ul>
                                <li v-for="(satellite, index) in satellites"
                                    class="name satellite-grid-item col-sm-3 list-group-item"
                                    v-bind:class="{'satellite-error': satelliteError(satellite)}"
                                    @click="selectedSatellite(satellite)" >
                                    <p>{{ satellite.name }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card card-default">
                    <div class="card-header satellite-data-header">
                        <h2> Satellite Diagnoses Panel </h2>
                    </div>
                    <div class="satellite-data-subtitle">
                        <p> Click on Satellite/Chart Name to remove from diagnoses panel.</p>
                    </div>
                    <div id="satelliteData"
                         class="col-sm-12 card-body"
                         v-for="(satellite, index) in satellites"
                         v-if="satellite.selectedSatellite">
                        <div class="data-selection">
                            <div class="selected-name col-sm-4">
                                <h3 @click="deselectSatellite(satellite)">{{satellite.name}}</h3>
                            </div>
                            <div class="satellite-status col-sm-8">
                                <ul class="">
                                    <li v-bind:class="{'satellite-error': statusError(satellite.status1)}" class="" @click="showData(satellite, i = 1)"><p> Satellite Status 1:    {{ satellite.status1 }}</p></li>
                                    <li v-bind:class="{'satellite-error': statusError(satellite.status2)}" class="" @click="showData(satellite, i = 2)"><p> Satellite Status 2:    {{ satellite.status2 }}</p></li>
                                    <li v-bind:class="{'satellite-error': statusError(satellite.status3)}" class="" @click="showData(satellite, i = 3)"><p> Satellite Status 3:    {{ satellite.status3 }}</p></li>
                                </ul>
                            </div>
                        </div>
                        <div class="satellite-data col-sm-12">
                            <ul>
                                <li v-show="satellite.showSelectedData1"><h3 @click="hideData(satellite, i = 1)"> Satellite Status 1 Data</h3> <line-chart>{{ satellite.statusData1 }}</line-chart></li>
                                <li v-show="satellite.showSelectedData2"><h3 @click="hideData(satellite, i = 2)"> Satellite Status 2 Data</h3><bar-chart>{{ satellite.statusData2 }}</bar-chart></li>
                                <li v-show="satellite.showSelectedData3"><h3 @click="hideData(satellite, i = 3)"> Satellite Status 3 Data</h3><radar-chart>{{ satellite.statusData3 }}</radar-chart></li>
                            </ul>
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
        padding-top: 10px;
    }
    .satellite-data-header {
        /*clear: both;*/
    }
    .satellite-data-subtitle {
        padding-top: 20px;
        margin: auto;
    }
    /*canvas#line-chart.chartjs-render-monitor {*/
        /*height: 350px !important;*/
    /*}*/
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
        /*padding-bottom: 30px;*/
        padding-left: 15px;
        ul {
            padding-left: 0;
            li {
            text-align: center;
            }
        }
    }
    .satellite-grid-item {
        float: left;
        min-height: 50px;
        list-style: none;
        background-color: rgba(18, 31, 31, .3);
        border:1px solid white;
        color: black;
        text-transform: capitalize;
        font-weight: bold;
        p {
            margin-bottom: 0;
        }
    }
    .selected-name {
        float: left;
        display: inline-block;
        border: 1px solid grey;
        height: 100%;
        background-color: rgba(18, 31, 31, .5);
        h3 {
            position: inherit;
            top: 40%;
            text-transform: capitalize;
            color: whitesmoke;
            /*background-color: darkslategrey;*/
        }

    }
    .satellite-status {
        float: right;
        display: inline-block;
        border: 1px solid black;
        height: 100%;
        background-color: whitesmoke;
        ul {
            padding-left: 0;
            text-align: center;
        height: 100%;
            li {
                list-style: none;
                border: 1px solid lightgrey;
                height: 33.33%;
                background-color: white;
                p {
                    margin-bottom: 0;
                    margin-top: 12px;
                    font-weight: bold;
                    text-transform: capitalize;
                }
            }
        }
    }
    .data-selection {
        height: 150px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }
    .satellite-data {
        display: block;
        border: 1px solid grey;
        clear: both;
        ul {
            list-style: none;
            padding-left: 0;
            li {
              h3 {
                   padding-top: 20px;
               }
            }
        }
    }
    .satellite-error {
        /*border: 1px solid red;*/
        background-color: rgba(204, 0, 0, .8) !important;
        color: whitesmoke !important;
    }
    .Chart {
        background: #212733;
        border-radius: 15px;
        box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
        margin:  25px 0;
    }

    .Chart h2 {
        margin-top: 0;
        padding: 15px 0;
        color:  rgba(255, 0,0, 0.5);
        border-bottom: 1px solid #323d54;
    }

</style>

<script>

    import LineChart from '../line-chart.js'
    import BarChart from '../bar-chart.js'
    import RadarChart from '../radar-chart.js'


//    import {Line} from 'vue-chartjs'
    export default {
//        extends: Line,
        components: {
            'line-chart': LineChart,
            'bar-chart': BarChart,
            'radar-chart': RadarChart
        },
//        props: ['data', 'options'],

        data() {
           return {

//               chartData: {
//                   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//                   datasets: [
//                       {
//                           label: '2018',
//                           backgroundColor: '#FC2525',
//                           data: [40, 39, 10, 40, 39, 80, 40]
//                       },{
//                           label: '2017',
//                           backgroundColor: '#05CBE1',
//                           data: [60, 55, 32, 10, 2, 12, 53]
//                       }
//                   ]
//
//               },
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
                       statusData1: [],
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
                       status2: 'ok',
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
                       status1: 'error',
                       statusData1: [],
                       status2: 'ok',
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
                   },
                   {
                       name: 'satellite11',
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
                       name: 'satellite12',
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
                       name: 'satellite13',
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
                       name: 'satellite14',
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
                       name: 'satellite15',
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
                       name: 'satellite16',
                       selectedSatellite: false,
                       showSelectedData: false,
                       showSelectedData1: false,
                       showSelectedData2: false,
                       showSelectedData3: false,
                       status1: 'ok',
                       statusData1: [],
                       status2: 'ok',
                       statusData2: [],
                       status3: 'error',
                       statusData3: []
                   },
                   {
                       name: 'satellite17',
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
                       name: 'satellite18',
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
                       name: 'satellite19',
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
                       name: 'satellite20',
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
                       name: 'satellite21',
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
                       name: 'satellite22',
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
                       name: 'satellite23',
                       selectedSatellite: false,
                       showSelectedData: false,
                       showSelectedData1: false,
                       showSelectedData2: false,
                       showSelectedData3: false,
                       status1: 'error',
                       statusData1: [],
                       status2: 'error',
                       statusData2: [],
                       status3: 'ok',
                       statusData3: []
                   },
                   {
                       name: 'satellite24',
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
                       name: 'satellite25',
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
                       name: 'satellite26',
                       selectedSatellite: false,
                       showSelectedData: false,
                       showSelectedData1: false,
                       showSelectedData2: false,
                       showSelectedData3: false,
                       status1: 'ok',
                       statusData1: [],
                       status2: 'ok',
                       statusData2: [],
                       status3: 'error',
                       statusData3: []
                   },
                   {
                       name: 'satellite27',
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
                       name: 'satellite28',
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
                       name: 'satellite29',
                       selectedSatellite: false,
                       showSelectedData: false,
                       showSelectedData1: false,
                       showSelectedData2: false,
                       showSelectedData3: false,
                       status1: 'error',
                       statusData1: [],
                       status2: 'ok',
                       statusData2: [],
                       status3: 'ok',
                       statusData3: []
                   },
                   {
                       name: 'satellite30',
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
                       name: 'satellite31',
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
                       name: 'satellite32',
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
                       name: 'satellite33',
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
                       name: 'satellite34',
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
                       name: 'satellite35',
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
                       name: 'satellite36',
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
                       name: 'satellite37',
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
                       name: 'satellite38',
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
                       name: 'satellite39',
                       selectedSatellite: false,
                       showSelectedData: false,
                       showSelectedData1: false,
                       showSelectedData2: false,
                       showSelectedData3: false,
                       status1: 'ok',
                       statusData1: [],
                       status2: 'ok',
                       statusData2: [],
                       status3: 'error',
                       statusData3: []
                   },
                   {
                       name: 'satellite40',
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
                       name: 'satellite41',
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
                       name: 'satellite42',
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
                       name: 'satellite43',
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
                       name: 'satellite44',
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
                       name: 'satellite45',
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
                       name: 'satellite46',
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
                       name: 'satellite47',
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
                       name: 'satellite48',
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
                       name: 'satellite49',
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
                       name: 'satellite50',
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
               ],
           }
        },

        methods: {
            satelliteError: function(satellite)
            {
                if (satellite.status1 == 'error' || satellite.status2 == 'error' || satellite.status3 == 'error')
                    return true;
                },
            statusError: function(i)
            {
                if (i == 'error') {
                    return true;
                }
                return false;
            },
            selectedSatellite: function(satellite)
            {
                return satellite.selectedSatellite = true;
            },
            deselectSatellite: function(satellite)
            {
                return satellite.selectedSatellite = false;
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
            },
            hideData: function(satellite, i)
            {
                this.status = i;
                if (i == 1) {
                    return satellite.showSelectedData1 = false;
                }
                if (i == 2) {
                    return satellite.showSelectedData2 = false;
                }
                if (i == 3) {
                    return satellite.showSelectedData3 = false;
                }
            }
        },

        mounted() {
            console.log('Component mounted.')
//            this.renderChart(this.data, this.options)
//            this.renderChart(this.chartData, this.chartOptions);
        }
    }
</script>