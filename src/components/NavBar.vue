<template>
    <v-app-bar height="100" color="#688D99" elevation="0" absolute="">
        <div class="d-flex justify-space-between flex-row w-100">
            <h3 class="ml-3">
                Logo
            </h3>
                <v-spacer></v-spacer>
                    <v-btn color="black" v-for="icon in icons" :key="icon" class="pa-2 ma-2" @click="sectionDirect(icon)">
                        <h3>{{icon.text }}</h3>
                    </v-btn>
                <v-spacer></v-spacer>
        </div>
    </v-app-bar>
</template>


<script>
export default {
    name: 'NavBar',
    data: ()=>({
        icons: [
            {
                text: 'section 1',
                redirect: 'section-1'
            },
            {
                text: 'section 2',
                redirect: 'section-2'
            },
            {
                text: 'section 3',
                redirect: 'section-3',

            },
            {
                text: 'section 4',
                redirect: 'section-4'
            },
        ]
    }),
    methods: {
        sectionDirect(icon){
            let hireMe = document.getElementById(`${icon.redirect}`)
            hireMe.scrollIntoView({
                behavior: 'smooth'
            })

        }
    }
}


</script>

<style lang="css" scoped>
*{
    margin: 0;
    padding: 0;

    /* GAMA DE COLORES PASTEL*/

    --one: #688D99;
    --two: #E6CAD1;
    --three: #B3D9E6;
    --four: #EBE482;
    --five: #9E9B70;
}

.v-btn{
    text-transform: none !important;
}

</style>
