<template>
    <Radar :data="chartConfig" :options="options" />
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
        "1",
        "2",
        "3",
        "4",
        "5",

    ],
    datasets: [
        {
            label: 'Atributos',
            data: [60, 25, 90, 60, 60],
            fill: true,
            backgroundColor: 'orange',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)',
            elements: {
                point: {
                    pointStyle: "triangle"
                }
            }

        }
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
                color: 'red'
            }
        }
    },
}



</script>