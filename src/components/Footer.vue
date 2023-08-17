<template>
        <div class="footer">
            <div class="contacto">
                <div class="d-flex align-center justify-center mr-5">
                    <v-btn icon="mdi-whatsapp"  elevation="0" class="btn-animation" @click="sendWsp()" style="background-color: transparent; color: #fff;">
                    </v-btn>
                <h3>Contacto:</h3>
                </div>
                <p>011- 2639 - 7764</p>
            </div>
            <div class="tel-fijo">
                <div class="d-flex align-center justify-center mr-5">
                    <v-icon icon="mdi-phone" style="background-color: transparent; color: #fff;"></v-icon>
                    <h3>Tel fijo:</h3>
                </div>

                <p>011 - 4957 - 0127 / 011 - 3973 - 0607</p>
            </div>
            <div class="email">
                <div class="d-flex align-center justify-center mr-5">
                    <v-btn icon="mdi-gmail" elevation="0" class="btn-animation" @click="sendEmail()" style="background-color: transparent; color: #fff;">
                </v-btn>
                <h3>Email:</h3>
                </div>

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
@media screen and (max-width: 960px) {
    .footer{
        flex-direction: column;
        height: 230px;
        align-items: flex-start;
        gap: 10px;

    }
    .btn-animation:hover{
        transform: none;
        transition: none;
    }
    h3, p{
    font-family: 'EB Garamond', serif;
    color: #fff;
    font-weight: 100;
    font-size: 18px;
}
.contacto{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100dvw;
}
 .email, .tel-fijo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0px;
    width: 100dvw;
}
}

</style>