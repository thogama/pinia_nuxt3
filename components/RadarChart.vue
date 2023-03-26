<template>
    <div class="col">
        <Radar :data="chartConfig" :options="options" />
    </div>
</template>
  
<script setup lang="ts">
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    scales,
} from 'chart.js'
import { Radar } from 'vue-chartjs'

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)

const chartConfig = {
    labels: [
        "HP",
        "INT",
        "ATK",
        "DEF",
        "MP"

    ],
    datasets: [
        {
            label: 'Now',
            data: [25, 35, 50, 100, 10],
            fill: true,
            borderColor: '#4300FF',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)',
            pointRadius: 0,
            elements: {
                point: {
                    pointStyle: "circle"
                }
            }

        },
        {
            label: 'Then',
            data: [35, 35, 80, 25, 40],
            fill: true,
            borderColor: 'green',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)',
            pointRadius: 0,
            elements: {
                point: {
                    pointStyle: "circle"
                }
            }

        },


    ]
}

const options = {
    responsive: true,
    scales: {
        r: {
            ticks: {
                display: false
            },
            pointLabels: {
                color: 'red',
            },
            angleLines: {
                color: 'tomato',
                lineWidth: 3,

            },
            grid: {
                lineWidth: 3,


            },
            suggestedMin: 0,
            suggestedMax: 100


        }
    },
}



</script>