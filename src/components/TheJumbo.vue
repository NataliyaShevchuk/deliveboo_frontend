<script>
export default {
    data() {
        return {

        };
    },
};
</script>
<template>
    <section class="">
        <div class="container-fluid jumbotron">
            <div class="row">
                <div class="d-flex align-items-center justify-content-center">
                    <h1 class="text-center payoff">Accomodati, ci pensa Deliveboo!</h1>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
.jumbotron {
    background-image: url('/logo/dog.jpg') ;
    height:100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.jumbo-image {
    object-fit: contain;
    max-height: 100%;
    max-width: 100%;
}

.payoff{
    font-family: 'Bungee', cursive;
    color: #ef5117ff;
}

</style>