<template>
    <v-container
        id="registerForm"
        fluid
        class="form-main pt-10 pb-12"
        grid-list-lg
    >
        <v-container grid-list-lg>
            <div class="d-flex formular-holder">
                <div class="width-50 ">
                    <div class="formular-title text-form">{{ formTitle }}</div>
                    <div class="text-form mt-8 mr-8">{{ formSubtitle }}</div>
                    <div class="d-flex mt-12 mx-auto mb-3">
                        <div class="d-flex text-form mt-4 ml-5 flex-column">
                            <div>info@forum-wbk.de</div>
                            <div>
                                Telegtamm:
                                <a href="https://t.me/+7pzjhBIQFWcwOTNi"
                                    >Our channel</a
                                >
                            </div>
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
                            v-model="nameText"
                            :rules="nameRules"
                            :label="name"
                            required
                        ></v-text-field>

                        <v-text-field
                            color="teal"
                            v-model="emailText"
                            :rules="emailRules"
                            :label="email"
                            required
                        ></v-text-field>

                        <v-text-field
                            color="teal"
                            v-model="phoneText"
                            :rules="phoneRules"
                            :label="phone"
                            required
                        ></v-text-field>

                        <v-select
                            class="dropdown"
                            v-if="formType === 'curses'"
                            color="teal"
                            v-model="select"
                            :items="items"
                            :rules="[v => !!v || 'Item is required']"
                            label="Item"
                            required
                        ></v-select>

                        <v-textarea v-model="messageText" color="teal">
                            <template v-slot:label>
                                <div>
                                    {{ message }}
                                    <small>({{ optional }})</small>
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
                            @click="sendEmail"
                        >
                            {{ send }}
                        </v-btn>
                    </v-form>
                </div>
            </div>
        </v-container>
        <img class="dots" :src="require(`../assets/dots.png`)" alt="" />
        <v-alert type="success" v-model="successRequest">{{ success }}</v-alert>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
export default {
    name: 'Formular',
    props: ['title', 'formType'],
    data: () => ({
        valid: true,
        nameText: '',
        emailText: '',
        successRequest: false,
        phoneText: '',
        nameRules: [v => !!v || 'Name is required'],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        phoneRules: [v => !!v || 'Phone id required'],
        select: null,
        items: [
            'English (Children Group)',
            'English (Teenagers Group)',
            'German (Children Group)',
            'German (Teenagers Group)',
            'German (Parents Group)',
            'Drawing'
        ],
        checkbox: false,
        messageText: ''
    }),
    computed: {
        ...mapGetters([
            'email',
            'phone',
            'name',
            'message',
            'optional',
            'send',
            'formSubtitle',
            'formTitle',
            'success'
        ])
    },

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
        sendEmail(e) {
            try {
                const data = {
                    fromName: this.nameText,
                    fromEmail: this.emailText,
                    message: this.messageText,
                    fromPhone: this.phoneText
                };
                axios.post('/sendemail', data);
            } catch (error) {
                console.log({ error });
            }
            // Reset form field
            this.name = '';
            this.email = '';
            this.message = '';
            this.successRequest = true;
            setTimeout(() => {
                this.successRequest = true;
            }, '3000');
        }
    }
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
.dropdown {
    z-index: 99999;
}
a {
    color: white !important;
}
/* Tablet horiz to vertical
===============================*/
@media (min-width: 1024px) and (max-width: 1280px) {
}

/* Horiz Tablet to Desktop
===============================*/
@media (min-width: 768px) and (max-width: 1023px) {
    .formular-title {
        font-size: 2.8rem;
    }
    .width-50 {
        width: 100%;
    }
    .formular-holder {
        flex-direction: column;
    }
}

/* Mobile to Tablet Portrait
===============================*/
@media (min-width: 480px) and (max-width: 767px) {
    .formular-title {
        font-size: 2rem;
    }
    .width-50 {
        width: 100%;
    }
    .formular-holder {
        flex-direction: column;
    }
}

@media (max-width: 480px) {
    .formular-title {
        font-size: 1.5rem;
    }
    .flexbox {
        display: block !important;
        width: 100%;
    }
    .width-50 {
        width: 100%;
    }
    .formular-holder {
        flex-direction: column;
    }
}
</style>
