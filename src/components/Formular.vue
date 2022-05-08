<template>
    <v-container
        id="registerForm"
        fluid
        class="form-main pt-10 pb-12"
        grid-list-lg
    >
        <v-container grid-list-lg>

            <div class="d-flex">
                <div class="width-50 ">
                    <div class="formular-title text-form">Please fill out the form to register for a {{title}}</div>
                    <div class="text-form mt-8 mr-8">If you have any further questions, please feel free to contact us by phone or via social media.</div>
                    <div class="d-flex mt-12 mx-7">
                        <img :src="require(`../assets/frau.png`)">
                        <div class="d-flex text-form mt-4 ml-5 flex-column">
                           <div> Natalia Odehowa</div>
                            <div>info@forum-wbk.de</div>
                            <div>+4915737264373</div>

                        </div>
                    </div>
                </div>
                <div class="width-50">
                    <v-form
                        style="background:white"
                        ref="form"
                        class="pa-7 rounded"
                        v-model="valid"
                        lazy-validation
                    >
                        <v-text-field
                            color="teal"
                            v-model="name"
                            :rules="nameRules"
                            label="Name"
                            required
                        ></v-text-field>

                            <v-text-field
                                color="teal"
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                            ></v-text-field>

                                <v-text-field
                                    color="teal"
                                    v-model="phone"
                                    :rules="phoneRules"
                                    label="Phone number"
                                    required
                                ></v-text-field>

                                    <v-select class="dropdown"
                                        v-if="formType==='curses'"
                                        color="teal"
                                        v-model="select"
                                        :items="items"
                                        :rules="[v => !!v || 'Item is required']"
                                        label="Item"
                                        required
                                    ></v-select>

                                        <v-textarea
                                            v-model="message"
                                            color="teal"
                                        >
                                            <template v-slot:label>
                                                <div>
                                                    Message
                                                    <small>(optional)</small>
                                                </div>
                                            </template>
                                            </v-textarea>

                                            <!-- <v-checkbox
                                                v-model="checkbox"
                                                :rules="[v => !!v || 'You must agree to continue!']"
                                                label="Do you agree?"
                                                required
                                            ></v-checkbox> -->

                                                <v-btn
                                                    depressed
                                                    tile
                                                    :disabled="!valid"
                                                    class="mr-4 button"
                                                    @click="validate"
                                                >
                                                    Send Request
                                                    </v-btn>
                                                    </v-form>

                </div>

            </div>
        </v-container>
        <img
            class="dots"
            :src="require(`../assets/dots.png`)"
            alt=""
        >

            </v-container>
</template>

<script>
export default {
    name: 'Formular',
    props: ['title', 'formType'],
    data: () => ({
        valid: true,
        name: '',
        nameRules: [v => !!v || 'Name is required'],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        phone: '',
        phoneRules: [v => !!v || 'Phone id required'],
        select: null,
        items: ["English (Children Group)", "English (Teenagers Group)", "German (Children Group)", "German (Teenagers Group)", "German (Parents Group)", "Drawing" ],
        checkbox: false,
        message: '',
    }),

    methods: {
        validate() {
            this.$refs.form.validate();
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },
    },
};
</script>

<style scoped>
.form-main {
    background-color: #416865;
}
.width-50 {
    width: 50%;
}
.width-80 {
    width: 80%;
    margin: auto;
}
.formular-title {
    font-size: 3rem;
    font-weight: 800;
}
.text-form {
    color: white;
}
img {
    height: 100px;
    width: auto;
}
.dots {
    position: relative;
    bottom: 60px;
    left: 47%;
    z-index: 1;
}
.dropdown{
    z-index: 99999;
}
</style>
