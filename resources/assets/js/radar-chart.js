/**
 * Created by Sijn on 07/05/2018.
 */
import { Radar } from 'vue-chartjs'

export default {
    extends: Radar,
    data () {
        return {
            gradient: null,
            gradient2: null
        }
    },
    mounted () {
        this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
        this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);

        this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
        this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
        this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

        this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)');
        this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)');
        this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)');
        // Overwriting base render method with actual data.
        this.renderChart({
            labels: ['Activity 1', 'Activity 2', 'Activity 3', 'Activity 4', 'Activity 5', 'Activity 6', 'Activity 7'],
            datasets: [
                {
                    label: '2018 Dataset',
                    borderColor: '#f87979',
                    pointBackgroundColor: 'white',
                    borderWidth: 1,
                    pointBorderColor: 'white',
                    backgroundColor: this.gradient,
                    data: [40, 20, 12, 39, 10, 40, 39]
                },
                {
                    label: '2017 Dataset',
                    borderColor: '#24f880',
                    pointBackgroundColor: 'white',
                    pointBorderColor: 'white',
                    borderWidth: 1,
                    backgroundColor: this.gradient2,
                    data: [38, 18, 15, 45, 13, 37, 36]
                }
            ]
        })
    }
}