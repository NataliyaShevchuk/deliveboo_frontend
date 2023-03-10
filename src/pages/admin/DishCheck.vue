<script>
import axios from "axios";

export default {
    name: "DishCheck",
    data() {
        return {
            backendUrl: 'http://localhost:8001',
            submitResult: "",
            form: {
                name: "",
                cover_img: "",
                ingredients: "",
                description: "",
                price: "",
                hide: "",
            }
        };
    },
    methods: {
        onFormSubmit() {
            const formData = new FormData();
            formData.append('name', this.form.name);
            formData.append('cover_img', this.form.cover_img);
            formData.append('ingredients', this.form.ingredients);
            formData.append('description', this.form.description);
            formData.append('price', this.form.price);
            formData.append('hide', this.form.hide);

            axios
                .post(this.backendUrl + '/api/dish-check', formData)
                .then((resp) => {
                    this.submitResult = "success";
                    if(this.formData.hide === "checked"){
                        return true;
                    }else{
                        return false;
                    }
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
                <label for="nameInput" class="form-label">Nome del piatto *</label>
                <input type="text"
                    class="form-control"
                    name="name"
                    v-model="form.name">
            </div>

            <div class="mb-3">
                <label for="" class="form-label">Immagine *</label>
                <input type="file"
                    class="form-control"
                    name="cover_img"
                    @change="onCoverImgchange">
            </div>


            <div class="mb-3">
                <label class="form-label">Descrivi in breve il piatto *</label>
                <textarea type="text"
                    class="form-control"
                    name="description"
                    v-model="form.description">
                        </textarea>
            </div>

            <div class="mb-3">
                <label class="form-label">Ingredienti *</label>
                <textarea type="text"
                    class="form-control"
                    name="ingredients"
                    v-model="form.ingredients">
                        </textarea>
            </div>

            <div class="mb-3">
                <label class="form-label">Prezzo</label>
                <input type="text"
                    class="form-control"
                    name="price"
                    v-model="form.price">
            </div>


            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" 
                v-model="form.hide">
                <label class="form-check-label" for="flexSwitchCheckDefault">Nascondere la vista del piatto</label>
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