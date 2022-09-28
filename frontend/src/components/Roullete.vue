<template>
    <section id="roulleteLayer">
        <div>룰렛 만들어 보자!!!</div>

        <div class="roulleteArea">
            <div class="roulleteArrow"></div>

            <button type="button" id="btn-start" @click="play">돌려</button>

            <div class="roulleteTable" id="roullete" :style="state.rouletteStyle">

                <!-- 값 -->
                <div class="item-wrapper">
                    <div class="item" v-for="(item, idx) in state.data" :key="idx"
                        :style="state.itemStyle[idx]">
                        {{state.data[idx].text}}
                    </div>
                    <!-- <div class="item">1</div>
                    <div class="item">2</div>
                    <div class="item">3</div>
                    <div class="item">4</div> -->
                </div>

                <!-- 선 -->
                <div class="line-wrapper">
                    <div class="line" v-for="(el, idx) in state.data" :key="idx" :style="state.lineStyle[idx]"></div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

    const state = reactive({
        data : [{ 
                text : '1번 말'
            },
            { 
                text : '2번 말'
            },
            { 
                text : '3번 말'
            },
            { 
                text : '4번 말'
            }
        ],

        itemStyle : [{
                'transform' : "" 
            }
        ],
        lineStyle : [{
                'transform' : "" 
            }
        ],        
        current : 0,
        rouletteStyle : {
            'transform' : ""
        }
    });

    // const angle = computed(() => {
    //     -state.current * calDeg();
    // })
    // const rouletteStyle = computed(() => ({
    //     transform : 'rotate(' + angle + 'deg)'
    // }));

    function calDeg() {
        return 360 / state.data.length;
    }
    
    function calOffset() {
        return calDeg() / 2;
    }

    function calAngle(angle) {
        state.current = angle;
        state.rouletteStyle = {
            'transform': 'rotate(' + (-state.current * calDeg() + 3600) + 'deg)',
            
        }
        console.log(state.rouletteStyle);
        // return -state.current * calDeg();
    }

    function play() {
        calAngle(Math.trunc(Math.random() * state.data.length));
    }

    onMounted (() => {
        state.itemStyle = [];
        state.lineStyle = [];

        state.data.forEach((el, idx) => {
            state.itemStyle.push({
                transform : "rotate(" + (calDeg() * idx) + "deg)"    ,
            })
        })

        state.data.forEach((el, idx) => {
            state.lineStyle.push({
                transform : "rotate(" + (calDeg() * idx + calOffset()) + "deg)",
            })
        })
    });

</script>

<script lang="ts">
import { computed } from '@vue/reactivity';
import { defineComponent, onMounted, reactive } from "vue";

export default defineComponent({
    name: "roulleteLayer",
});

</script>