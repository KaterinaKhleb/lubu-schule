<template>
    <v-container
        id="registerForm"
        fluid
        class="form-main pt-10 pb-12 "
        grid-list-lg
    >
        <v-container class="width-50" grid-list-lg>
            <div class="formular-title">{{registration}}</div>
            <div class="text-form mt-8">
                {{regSchoolDesc}}
                <a href="https://t.me/+i8qzmPDTpLkxNGIy" download>{{regSchoolDesc2}}</a>
                {{regSchoolDesc3}}
            </div>
            <div class="text-form mt-8  ">{{regSchoolDesc4}}</div>
            <div class="d-flex text-form mt-8 mb-8 flex-column">
                <div>Email: info@forum-wbk.de</div>
                <div>
                    Telegramm:
                    <a href="https://t.me/+i8qzmPDTpLkxNGIy">{{ourChannel}}</a>
                </div>
                <div>{{address}}: Kornbergstraße 7-9, 70176 Stuttgart.</div>

            </div>
        </v-container>
        <img
            class="man-standing"
            :src="require(`../assets/standing-12.svg`)"
            alt=""
        />
        <img class="vector" :src="require(`../assets/Vector.svg`)" alt="" />
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
export default {
    name: 'Registration',
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
            'registration',
            "regSchoolDesc", "regSchoolDesc2", "regSchoolDesc3", "regSchoolDesc4", "ourChannel", "address"
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
        sendEmail() {
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
    color: white;
}
.text-form {
    color: white;
    font-size: 1.5rem;
}

.vector {
    position: absolute;
    left: 0px;
    height: 300px;
    width: auto;
    bottom: 100px;
}
.man-standing {
    position: absolute;
    height: 300px;
    width: auto;
    left: 100px;
    bottom: 130px;
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
        .vector {
        display: none;
    }
    .man-standing {
        display: none;
    }   
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
        .vector {
        display: none;
    }
    .man-standing {
        display: none;
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
        .vector {
        display: none;
    }
    .man-standing {
        display: none;
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
    .vector {
        display: none;
    }
    .man-standing {
        display: none;
    }
}
</style>
