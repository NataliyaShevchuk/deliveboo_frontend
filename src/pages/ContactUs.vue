<script>
import axios from "axios";

export default {
    name: "ContactUs",
    data() {
        return {
            backendUrl: 'http://localhost:8000',
            loading: false,
            submitResult: "",
            form: {
                name: "",
                email: "",
                message: "",
            }
        };
    },
    methods: {
        onFormSubmit() {
            this.loading = true;

            const formData = new FormData();
            formData.append('name', this.form.name);
            formData.append('email', this.form.email);
            formData.append('message', this.form.message);


            axios
                .post(this.backendUrl + '/api/contacts', formData)
                .then((resp) => {
                    this.submitResult = "success";
                    this.loading = false;
                })
                .catch((e) => {
                    if (e.response && e.response.data) {
                        this.submitResult = e.response.data.message;
                    } else {
                        this.submitResult = e.message;
                    }
                    console.log(e);

                    this.loading = false;
                });
        }
    }
}
</script>


<template>
    <button class="btn btn-success opacity-75 m-3">
        <a :href="'/'" class="text-decoration-none text-white">
            Indietro
        </a>
    </button>
    <div class="container justify-content-center mt-5">

        <div class="alert alert-success" role="alert" v-if="submitResult === 'success'">
            Fantastico, ti ringrazio per averci contattato!
        </div>
        <div class="alert alert-warning" role="alert" v-else-if="submitResult">
            Mi dispiace, ma c'è un problema: {{ submitResult }}
        </div>


        <form class="text-success" @submit.prevent="onFormSubmit" v-if="submitResult !== 'success'">
            <div class="mb-3">
                <label for="nameInput" class="form-label">Nome </label>
                <input type="text"
                    class="form-control"
                    name="name"
                    v-model="form.name">
            </div>

            <div class="mb-3">
                <label class="form-label">Email *</label>
                <input type="email"
                    class="form-control"
                    name="email"
                    v-model="form.email">
            </div>


            <div class="mb-3">
                <label class="form-label">Messaggio </label>
                <textarea type="text"
                    class="form-control"
                    name="description"
                    v-model="form.message">
                        </textarea>
            </div>

            <div class="d-flex justify-content-center gap-3">
                <button class="btn btn-success" :disabled="loading">
                    <span
                        v-if="loading"
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"></span>
                    Invia
                </button>
                <button class="btn btn-warning text-white" typeof="reset" :disabled="loading">
                    Annulla
                </button>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
form {
    padding: 2rem;
    border: 1px solid #ef5117ff;
    border-bottom: 1px solid #318411ff;
    border-left: 1px solid #f9ca30ff;
    border-radius: 5px;
}
</style>