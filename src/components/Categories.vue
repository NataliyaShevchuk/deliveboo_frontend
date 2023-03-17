<script>
export default {
    data() {
        return {
            categories: [
                {id: 1, tipo: 'Pizzeria'},
                {id: 2, tipo: 'Cinese'},
                {id: 3, tipo: 'Giapponese'},
                {id: 4, tipo: 'Kebab'},
                {id: 5, tipo: 'Bisteccheria'},
                {id: 6, tipo: 'Americano'},
            ],
            filterForCategories: '',

        }
    }
}
</script>

<template>
    <div class="container">
        <div class="text-center p-5">
            <h3>Scegli quello che ti piace di più...</h3>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-4 ">
            <div class="col">
                <div class="card pizzeria zoom">
                    <div class="card-title">
                        <h5 class="text-center">
                            <a href="">{{ categories[0].tipo }}</a>
                        </h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card cinese zoom">
                    <div class="card-title">
                        <h5 class="text-center">
                            <a href="">{{ categories[1].tipo }}</a>
                        </h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card giapponese zoom">
                    <div class="card-title ">
                        <h5 class="text-center">
                            <a href="">{{ categories[2].tipo }}</a>
                        </h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card kebab zoom">
                    <div class="card-title">
                        <h5 class=" text-center">
                            <a href="">{{ categories[3].tipo }}</a>
                        </h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card bisteccheria zoom">
                    <div class="card-title ">
                        <h5 class="text-center">
                            <a href="">{{ categories[4].tipo }}</a>
                        </h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card americano zoom">
                    <div class="card-title">
                        <h5 class="text-center">
                            <a href="">{{ categories[5].tipo }}</a>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'bootstrap';

.pizzeria{
    background-image: url('/cibo/italiano.jpg');
    display: block;
    width: 100%;
    background-size: cover;
    background-position: center;
    height: 120px;
}

.cinese{
    background-image: url('/cibo/cinese.jpg');
    display: block;
    width: 100%;
    background-size: cover;
    background-position: center;
    height: 120px;
}

.giapponese{
    background-image: url('/cibo/giapponese.jpg');
    display: block;
    width: 100%;
    background-size: cover;
    background-position: center;
    height: 120px;
}

.kebab{
    background-image: url('/cibo/kebab.jpg');
    display: block;
    width: 100%;
    background-size: cover;
    background-position: center;
    height: 120px;
}

.bisteccheria{
    background-image: url('/cibo/bisteccheria.jpg');
    display: block;
    width: 100%;
    background-size: cover;
    background-position: center;
    height: 120px;
}

.americano{
    background-image: url('/cibo/fastfood.jpg');
    display: block;
    width: 100%;
    background-size: cover;
    background-position: center;
    height: 120px;
}

a{
    text-decoration: none;
    color: white;

}

a:hover{
    text-decoration: none;
    color: white;
    
}
.card{
    border: 0;
    box-shadow: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

h5{
    padding-top: 1.2rem;
    font-size: 2rem;
}
</style>