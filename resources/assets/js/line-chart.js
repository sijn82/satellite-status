/**
 * Created by Sijn on 06/05/2018.
 */
import {Line} from 'vue-chartjs'

export default {
    extends: Line,
    mounted () {
        this.renderChart({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Current Year',
                    backgroundColor: '#FC2525',
                    data: [40, 39, 10, 40, 39, 80, 40]
                },{
                    label: 'Previous Year',
                    backgroundColor: '#05CBE1',
                    data: [60, 55, 32, 10, 2, 12, 53]
                }
            ]
        }, {responsive: true, maintainAspectRatio: false})
    }
}