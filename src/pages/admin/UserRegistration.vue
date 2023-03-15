<script>
import axios from 'axios';

export default {
    name: "UserRegistration",
    data() {
        return {
            backendUrl: 'http://localhost:8000',
            submitResult: "",
            form: {
                name: "",
                surname: "",
                email: "",
                password: "",
                // confirm_password: "",
            },
        };
    },
    methods: {
        onFormSubmit() {
            const formData = new FormData();
            formData.append('name', this.form.name);
            formData.append('surname', this.form.surname);
            formData.append('email', this.form.email);
            formData.append('password', this.form.password);
            // formData.append('confirm_password', this.form.confirm_password);

            axios
                .post(this.backendUrl + '/api/register', formData)
                .then((resp) => {
                    this.submitResult = "success";
                })
                .catch((e) => {
                    if (e.response && e.response.data) {
                        this.submitResult = e.response.data.message;
                    } else {
                        this.submitResult = e.message;
                    }

                });
        },
    }
}
</script>


<template>

</template>
