<template>
    <v-container id="registerForm" fluid class="form-main" grid-list-lg>
        <v-container grid-list-lg>
            <v-layout column>
                <v-flex class="display-2  black--text text-xs-center my-5"
                    >Register for the course</v-flex
                >
                <v-form
                    style="background:white"
                    ref="form"
                    class="pa-7"
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

                    <v-select
                        color="teal"
                        v-model="select"
                        :items="items"
                        :rules="[v => !!v || 'Item is required']"
                        label="Item"
                        required
                    ></v-select>

                    <v-textarea v-model="message" color="teal">
                        <template v-slot:label>
                            <div>
                                Message
                                <small>(optional)</small>
                            </div>
                        </template>
                    </v-textarea>

                    <v-checkbox
                        v-model="checkbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Do you agree?"
                        required
                    ></v-checkbox>

                    <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="validate"
                    >
                        Send
                    </v-btn>
                </v-form>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: 'Formular',
    data: () => ({
        valid: true,
        name: '',
        nameRules: [v => !!v || 'Name is required'],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        phone: '',
        phoneRules: [v => !!v || 'Phone id required'],
        select: null,
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
        checkbox: false,
        message: ''
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
        }
    }
};
</script>

<style scoped>
.form-main {
    background-color: #b5ada6;
}
</style>
