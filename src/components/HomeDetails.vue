<template>
    <v-container fluid class="school-holder">
        <v-container grid-list-lg>
            <v-row cols="12" sm="6" md="8">
                <v-col cols="12" sm="8">
                    <v-layout column>
                        <v-flex
                            class="display-2  black--text text-xs-center my-5"
                            >About us</v-flex
                        >
                        <v-flex>
                            <div
                                class="headline mt-3 black--text font-weight-bold"
                            >
                                What is our motivation?
                            </div>
                            <p class="subheading mt-3">
                                Due to language deficits, refugee children need
                                help in coping with school material. Since the
                                help offered by the schools is usually not
                                sufficient, individual support in the form of
                                tutoring tailored to the child is necessary. It
                                is planned to involve refugee teachers from
                                Ukraine in the project, who will tutor between
                                five and ten refugee students in various
                                subjects. There will be close cooperation with
                                the German subject teachers, so that reference
                                can be made to ongoing subject teaching at any
                                time. In cooperation with the Forum der
                                Kulturen/ or a school, the Ukrainian teachers
                                who have fled are given information about the
                                project in order to arouse their interest in
                                voluntary work with students from Ukraine.
                            </p>
                        </v-flex>
                        <v-flex>
                            <div
                                class="headline mt-3 black--text font-weight-bold"
                            >
                                What do we offer?
                            </div>
                            <p class="subheading mt-3">
                                Tutoring in DAZ, mathematics, English and all
                                other common school subjects is planned, and the
                                books and teaching materials will be used here.
                                In addition, we want to get dictionaries and
                                vocabulary trainers for all tutoring subjects to
                                support teachers and students. In addition to
                                support in the classic subjects, language
                                courses, creative and play activities for
                                children are to be offered. Another important
                                point of our project is the psychological
                                support of volunteers. It is essential for
                                children to keep contact with their age group,
                                keep studying and developing their skills in
                                order to give them back the feeling of a safe
                                live and support.
                            </p>
                        </v-flex>
                    </v-layout>
                </v-col>
                <v-col cols="12" sm="4">
                    <img
                        :src="require(`../assets/Illustration_girl.svg`)"
                        alt=""
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: 'HomeDetails'
};
</script>

<style scoped>
.school-holder {
    background-color: #f6f7f8;
}
</style>
