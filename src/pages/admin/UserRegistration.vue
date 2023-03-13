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
    <header>
        <meta name="csrf-token" content="{{ csrf_token() }}" />

    </header>

    <div class="container justify-content-center">

        <div class="alert alert-success" role="alert" v-if="submitResult === 'success'">
            Fantastico, i tuoi dati sono tutti corretti!
        </div>
        <div class="alert alert-warning" role="alert" v-else-if="submitResult">
            Mi dispiace, le informazioni inserite non sono corrette: {{ submitResult }}
        </div>

        <div class="container mt-4">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Registrati</div>

                        <div class="card-body">

                            <form class="text-success" @submit.prevent="onFormSubmit" v-if="submitResult !== 'success'">



                                <div class="mb-4 row">
                                    <small class="mb-5 text-secondary">I campi con <strong
                                            class="text-black">(*)</strong> sono obbligatori</small>
                                    <label for="name" class="col-md-4 col-form-label text-md-right">Nome
                                        *</label>

                                    <div class="col-md-6">
                                        <input id="name" type="text"
                                            class="form-control" name="name"
                                            required autocomplete="name" autofocus
                                            v-model="form.name">
                                    </div>
                                </div>

                                <div class="mb-4 row">
                                    <label for="surname" class="col-md-4 col-form-label text-md-right">
                                        Cognome
                                    </label>

                                    <div class="col-md-6">
                                        <input id="surname" type="text"
                                            class="form-control" name="surname"
                                            required autocomplete="surname" autofocus
                                            v-model="form.surname">

                                    </div>
                                </div>

                                <div class="mb-4 row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">
                                        Email
                                    </label>
                                    <div class="col-md-6 text-right">

                                        <input id="email" type="email"
                                            class="form-control" name="email"
                                            required autocomplete="email"
                                            v-model="form.email">

                                    </div>
                                </div>

                                <div class="mb-4 row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">
                                        Password
                                    </label>

                                    <div class="col-md-6">
                                        <input id="password" type="password"
                                            class="form-control" name="password"
                                            required autocomplete="new-password"
                                            v-model="form.password">


                                    </div>
                                </div>

                                <div class="mb-4 row">
                                    <label for="password-confirm" class="col-md-4 col-form-label text-md-right">
                                        Conferma la password
                                    </label>

                                    <div class="col-md-6">
                                        <input id="password-confirm" type="password" class="form-control"
                                            name="password" required autocomplete="new-password"
                                            v-model="form.password">
                                    </div>
                                </div>

                                <div class="mb-4 row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-success">
                                            Registrati
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
