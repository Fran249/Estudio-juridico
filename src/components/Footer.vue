<template>
        <div class="footer">
            <div class="contacto">
                <v-btn icon="mdi-whatsapp"  elevation="0" class="btn-animation" @click="sendWsp()" style="background-color: transparent; color: #fff;">
                </v-btn>
                <h3>Contacto:</h3>
                <p>011- 2639 - 7764</p>
            </div>
            <div class="tel-fijo">
                <v-icon icon="mdi-phone" style="background-color: transparent; color: #fff;"></v-icon>
                <h3>Tel fijo:</h3>
                <p>011 - 4957 - 0127 / 011 - 3973 - 0607</p>
            </div>
            <div class="email">
                <v-btn icon="mdi-gmail" elevation="0" class="btn-animation" @click="sendEmail()" style="background-color: transparent; color: #fff;">
                </v-btn>
                <h3>Email:</h3>
                <p>sampaolesi.estudiojuridico@gmail.com</p>
            </div>
        </div>    
</template>

<script>
export default {
    data: ()=>({
        
    }),
    methods: {
        sendWsp(){
            window.open('https://api.whatsapp.com/send?phone=5401126397764')
        },
        sendEmail(){
            window.open('mailto:sampaolesi.estudiojuridico@gmail.com?Subject=Asunto')
        }
    }
}
</script>

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
    position: absolute;
    left: 0;
    bottom: 0;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 10dvh;
    border-top: 1px solid var(--one) ;
    background-color: transparent;
}
h3, p{
    font-family: 'EB Garamond', serif;
    color: #fff;
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