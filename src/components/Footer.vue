<template>
        <div class="footer">
            <div class="contacto">
                <v-btn icon="mdi-whatsapp" elevation="0" class="btn-animation">
                </v-btn>
                <h3>Contacto:</h3>
                <p>011- 2639 - 7764</p>
            </div>
            <div class="tel-fijo">
                <v-icon icon="mdi-phone"></v-icon>
                <h3>Tel fijo:</h3>
                <p>011 - 4957 - 0127 / 011 - 3973 - 0607</p>
            </div>
            <div class="email">
                <v-btn icon="mdi-gmail" elevation="0" class="btn-animation">
                </v-btn>
                <h3>Email:</h3>
                <p>sampaolesi.estudiojuridico@gmail.com</p>
            </div>
        </div>    
</template>


<style scoped>
*{
    margin: 0;
    padding: 0;

    /* GAMA DE COLORES PASTEL*/

    --one: #be8519;
    --two: #000;
    --three: #1f5962;
    --four: #fff;
}
.footer{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 10dvh;
    border-top: 1px solid var(--one) ;
    background-color: #fff;
}
h3, p{
    font-family: 'EB Garamond', serif;
    color: black;
    font-weight: 100;
    font-size: 16px;
}
.contacto, .email, .tel-fijo{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.btn-animation:hover{
    transform: translateY(-2px) translateX(2px);
    transition: 0.5s ease-out;
}
@media screen and (max-width: 650px) {
    .footer{
        flex-direction: column;
        height: 150px;
    }
    .btn-animation:hover{
        transform: none;
        transition: none;
    }
}

</style>