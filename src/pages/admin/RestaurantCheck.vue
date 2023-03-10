<script>
import axios from "axios";

export default {
    name: "RestaurantCheck",
    data() {
        return {
            backendUrl: 'http://localhost:8000',
            submitResult: "",
            form: {
                name: "",
                phone_number: "",
                cover_img: "",
                vat: "",
                address: "",
            }
        };
    },
    methods: {
        onFormSubmit() {
            const formData = new FormData();
            formData.append('name', this.form.name);
            formData.append('phone_number', this.form.phone_number);
            formData.append('cover_img', this.form.cover_img);
            formData.append('vat', this.form.vat);
            formData.append('address', this.form.address);

            axios
            .post(this.backendUrl + '/api/restaurant-check', formData)
                .then((resp) => {
                    this.submitResult = "success";
                })
                .catch((e) => {
                    if (e.response && e.response.data) {
                        this.submitResult = e.response.data.message;
                    } else {
                        this.submitResult = e.message;
                    }
                    console.log(e);
                });
        },
        onCoverImgchange(event) {
            const chosenFiles = event.target.files

            this.form.cover_img = chosenFiles[0];
        }
    }
}
</script>


<template>
    <div class="container justify-content-center">
        
        <div class="alert alert-success" role="alert" v-if="submitResult === 'success'">
            Fantastico, i tuoi dati sono tutti corretti!
        </div>
        <div class="alert alert-warning" role="alert" v-else-if="submitResult">
            Mi dispiace, le informazioni inserite non sono corrette: {{ submitResult }}
        </div>

    
        <form class="text-success" @submit.prevent="onFormSubmit" v-if="submitResult !== 'success'">
            <div class="mb-3">
                <label for="nameInput" class="form-label">Nome *</label>
                <input type="text"
                    class="form-control"
                    name="name"
                    v-model="form.name">
            </div>

            <div class="mb-3">
                <label class="form-label">Numero di telefono *</label>
                <input type="number"
                    class="form-control"
                    name="phone_number"
                    v-model="form.phone_number">
            </div>

            <div class="mb-3">
                <label for="" class="form-label">Cover Image *</label>
                <input type="file"
                    class="form-control"
                    name="cover_img"
                    @change="onCoverImgchange">
            </div>


            <div class="mb-3">
                <label class="form-label">P.IVA *</label>
                <input type="number"
                    class="form-control"
                    name="vat"
                    v-model="form.vat">
            </div>

            <div class="mb-3">
                <label class="form-label">Indirizzo *</label>
                <input type="text"
                    class="form-control"
                    name="address"
                    v-model="form.address">
            </div>

            <div class="mb-3">
                <div class="mb-1">Tipologie di cucina</div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="CheckType" name="">
                    <label class="form-check-label" for="CheckType"></label>
                </div>

            </div>

            <button class="btn btn-success text-white" type="submit">Save</button>
            <button class="btn btn-warning m-3" type="reset">
                <a href="" class="text-decoration-none text-white">
                    Back
                </a>
            </button>
        </form>
    </div>
</template>