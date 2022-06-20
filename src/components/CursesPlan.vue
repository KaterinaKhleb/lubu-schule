<template>
    <v-container fluid id="curseSection" grid-list-lg>
        <v-container grid-list-lg>
            <v-row cols="12" sm="6" md="8">
                <v-col cols="12" sm="12">
                    <v-layout row>
                        <v-flex
                            class="display-2  black--text text-xs-center my-5"
                            ><span>Доступные</span>
                            <span> Бесплатные курсы</span></v-flex
                        >
                    </v-layout>
                    <v-layout row wrap>
                        <v-expansion-panels popup>
                            <v-expansion-panel
                                v-for="(curse, i) in curses"
                                :key="i"
                            >
                                <v-expansion-panel-header light>
                                    {{ curse.name }}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <div class="d-flex mt-5">
                                        <div class="width-50" color="red">
                                            <span
                                                class="text-h5 curse-underline "
                                                >Описание:</span
                                            >
                                            <br />
                                            <div class=" pt-6">
                                                {{ curse.desc }}
                                            </div>
                                        </div>
                                        <div class="width-50 ml-12">
                                            <span
                                                class="text-h5 curse-underline"
                                                >Группы</span
                                            >
                                            <br />
                                            <div
                                                class="pt-6"
                                                v-for="group in curse.groups"
                                                :key="group.group"
                                            >
                                                <div>
                                                    <h4>
                                                        {{ group.group }}:
                                                        {{ group.time }}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-layout>
                </v-col>
            </v-row>
        </v-container>
        <!-- <img class="dots-curses" :src="require(`../assets/dots_dark.svg`)" alt=""> -->
    </v-container>
</template>

<script>
export default {
    name: 'CursesPlan',
    data() {
        return {
            curses: [
                {
                    name: 'Английский',
                    desc:
                        'Занятия английского языка поделены на 2 группы - младшую и среднюю группы. Уровень языка варьируется между начинающим и продвинутым.',
                    groups: [
                        { group: 'Младшая группа', time: 'Суббота 11:00 - 11:45' },
                        { group: 'Средняя группа', time: 'Суббота 10:00 - 10:45' }
                    ]
                },
                {
                    name: 'Немецкий',
                    desc:
                        'Занятия немецким поделены на 3 группы - младшую, среднюю и группу родителей. Уроыень языка начинающий, темы занятий зависят от группы.',
                    groups: [
                        { group: 'Младшая группа', time: 'Суббота 10:00 - 10:45' },
                        { group: 'Средняя группа', time: 'Суббота 11:00 - 11:45' },
                        { group: 'Родители', time: 'Суббота 10:00 - 11:45' }
                    ]
                },
                {
                    name: 'Рисование, Шахматы',
                    desc:
                        'Занятия рисованием и шахматы проходят одномоментно, все желающие могут сами выбрать себе занятие по вкусу. Любой возраст приветсвуется!',
                    groups: [
                        { group: 'Для всех', time: 'Saturday 12:00 - 13:30' }
                    ]
                }
            ]
        };
    },
    methods: {
        scrollMeTo(refName) {
            const element = document.getElementById(refName);
            const top = element.offsetTop;
            window.scrollTo(0, top);
        }
    }
};
</script>

<style scoped>
#curseSection {
    background-color: #f6f7f8;
}
.width-50 {
    width: 48%;
}

.curse-underline::before {
    content: '';
    position: absolute;
    bottom: 16px;
    width: 150px;
    height: 14px;
    transform: skew(-12deg) translateY(90%);
    background: rgba(238, 111, 87, 0.5);
    /* z-index: -1; */
}
.curse-underline {
    padding: 30px 0 8px;
    position: relative;
}
.dots-curses {
    position: relative;
    left: 80px;
    bottom: 80px;
    height: 120px;
    width: auto;
}
</style>
