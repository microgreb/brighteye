<template>
    <div class="map-section">
        <GmapMap
                :center="center"
                :zoom="zoom"
                :options="mapStyle"
                map-type-id="roadmap"
                style="width: 100vw; height: 100vh"
        >
            <gmap-marker v-for="(item, key) in coordinates" :key="key" :icon="item.icon" :position="getPosition(item)" :clickable="true" @click="toggleInfo(item, key)" />
        </GmapMap>
        <div class="switcher-wrapper">
            <div></div>
            <div class="switcher">
                <hide-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
                    <div class="flags-line">
                        <div @click="changeOffice(0)" v-bind:class="[{ active: active_office == 0 }]"><img src="/static/svg/flags/belgium.svg"></div>
                        <div @click="changeOffice(1)" v-bind:class="[{ active: active_office == 1 }]"><img src="/static/svg/flags/spain.svg"></div>
                        <div @click="changeOffice(2)" v-bind:class="[{ active: active_office == 2 }]"><img src="/static/svg/flags/france.svg"></div>
                        <div @click="changeOffice(3)" v-bind:class="[{ active: active_office == 3 }]"><img src="/static/svg/flags/ukraine.svg"></div>
                        <div @click="changeOffice(4)" v-bind:class="[{ active: active_office == 4 }]"><img src="/static/svg/flags/poland.svg"></div>
                        <div @click="changeOffice(5)" v-bind:class="[{ active: active_office == 5 }]"><img src="/static/svg/flags/russia.svg"></div>
                    </div>
                </hide-at>
                <div class="info-line">
                    <h3>{{ offices[active_office].country }}</h3>
                    <div></div>
                    <div>
                        <div>
                            <p>{{ offices[active_office].address1 }}</p>
                            <p>{{ offices[active_office].address2 }}</p>
                            <p>{{ offices[active_office].address3 }}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p class="name">{{ offices[active_office].name }}</p>
                            <p>{{ offices[active_office].tel }}</p>
                            <p>{{ offices[active_office].email }}</p>
                        </div>
                    </div>
                </div>
                <show-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
                    <div class="flags-line">
                        <div @click="changeOffice(0)" v-bind:class="[{ active: active_office == 0 }]"><img src="/static/svg/flags/belgium.svg"></div>
                        <div @click="changeOffice(1)" v-bind:class="[{ active: active_office == 1 }]"><img src="/static/svg/flags/spain.svg"></div>
                        <div @click="changeOffice(2)" v-bind:class="[{ active: active_office == 2 }]"><img src="/static/svg/flags/france.svg"></div>
                        <div @click="changeOffice(3)" v-bind:class="[{ active: active_office == 3 }]"><img src="/static/svg/flags/ukraine.svg"></div>
                        <div @click="changeOffice(4)" v-bind:class="[{ active: active_office == 4 }]"><img src="/static/svg/flags/poland.svg"></div>
                        <div @click="changeOffice(5)" v-bind:class="[{ active: active_office == 5 }]"><img src="/static/svg/flags/russia.svg"></div>
                    </div>
                </show-at>
            </div>
        </div>
    </div>
</template>

<script>
    import {showAt, hideAt} from 'vue-breakpoints'

    export default {
        name: "MapSection",
        components: { hideAt, showAt },
        data: function() {
            let zoom = 4.6;
            let center_lat = 45;
            let icon_png = '/static/images/pin.png';
            let icon_active_png = '/static/images/active-pin.png';
            if( window.innerWidth < 768 ){
                zoom = 2.8;
                center_lat = 32;
                icon_png = '/static/images/pin-mobile.png';
                icon_active_png = '/static/images/active-pin-mobile.png'
            }
            let center = {lat:center_lat, lng:29};
            return {
                zoom: zoom,
                center: center,
                icon_png: icon_png,
                icon_active_png: icon_active_png,
                mapStyle: {
                    mapTypeControl: false,
                    zoomControl: true,
                    fullscreenControl: false,
                    streetViewControl: false,
                    styles:  [
                        {
                            elementType: 'geometry',
                            stylers: [{color: '#f5f5f5'}]
                        },
                        {
                            elementType: 'labels.icon',
                            stylers: [{visibility: 'off'}]
                        },
                        {
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#616161'}]
                        },
                        {
                            elementType: 'labels.text.stroke',
                            stylers: [{color: '#f5f5f5'}]
                        },
                        {
                            featureType: 'water',
                            elementType: 'geometry',
                            stylers: [{color: '#c9c9c9'}]
                        },
                        {
                            featureType: 'water',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#9e9e9e'}]
                        },
                        {
                            featureType: "road.local",
                            elementType: "geometry",
                            stylers: [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "gamma": "3.32"
                                },
                                {
                                    "lightness": "16"
                                },
                                {
                                    "saturation": "-25"
                                },
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "lightness": "-100"
                                },
                                {
                                    "saturation": "100"
                                }
                            ]
                        }
                    ]
                },
                coordinates: {
                    0: {
                        full_name: 'Belgium',
                        lat: '50.971441',
                        lng: '3.155759',
                        icon: icon_active_png
                    },
                    1: {
                        full_name: 'Spain',
                        lat: '41.266999',
                        lng: '1.338606',
                        icon: icon_png
                    },
                    2: {
                        full_name: 'France',
                        lat: '48.871752',
                        lng: '2.306143',
                        icon: icon_png
                    },
                    3: {
                        full_name: 'Ukraine',
                        lat: '50.513473',
                        lng: '30.493783',
                        icon: icon_png
                    },
                    4: {
                        full_name: 'Poland',
                        lat: '50.276096',
                        lng: '19.026849',
                        icon: icon_png
                    },
                    5: {
                        full_name: 'Russia',
                        lat: '56.827719',
                        lng: '60.581415',
                        icon: icon_png
                    }
                },
                offices: {
                    0: {
                        'country': 'Belgium',
                        'address1': 'Benelux',
                        'address2': 'Beversesteenweg 561/2',
                        'address3': '8800 Roeselare-Beveren',
                        'tel': 'Tel: +32 (0)51 26 32 10',
                        'email': 'info@brighteye.be',
                    },
                    1: {
                        'country': 'Spain',
                        'address1': 'Avda De Catalunya 60',
                        'address2': '43812',
                        'address3': 'Brafim',
                        'name': 'José Maria Guasch',
                        'tel': 'Tel: +34 648919489',
                        'email': 'Jose-Maria.Guasch@brighteye.es',
                    },
                    2: {
                        'country': 'France',
                        'address1': '49, Rue de Ponthieu',
                        'address2': '75008',
                        'address3': 'Paris',
                        'name': 'Jan Wellensiek',
                        'tel': 'Tel: + 33 7 86 06 92 31',
                        'email': 'jan.wellensiek@brighteye.fr',
                    },
                    3: {
                        'country': 'Ukraine',
                        'address1': 'Marshala Tymoshenko street, 29b',
                        'address2': '04205',
                        'address3': 'Kyiv',
                        'name': 'Dmytro Piatybratov',
                        'tel': 'Tel: +380 66 88 48 115',
                        'email': 'dmytro.piatybratov@brigtheye.com.ua',
                    },
                    4: {
                        'country': 'Poland',
                        'address1': 'BPC Group Poland',
                        'address2': 'Jesionowa 9a',
                        'address3': 'Katowice 40-159',
                        'name': 'Wojciech Chowaniec',
                        'tel': 'Tel: +48 606 320 672',
                        'email': 'wojciech.chowaniec@bpc-group.pl',
                    },
                    5: {
                        'country': 'Russia',
                        'address1': 'Radischeva st. 55',
                        'address2': 'office 301-302, 3rd floor',
                        'address3': 'Ekaterinburg',
                        'name': 'Alexey Belov',
                        'tel': 'Tel: +7 343-287-6173',
                        'email': 'alexey.belov@brighteye.ru',
                    },
                },
                active_office: 0
            }
        },
        methods: {
            changeOffice: function(office_number) {
                this.active_office = office_number;
                //ToDo rewrite
                this.coordinates[0].icon = this.icon_png;
                this.coordinates[1].icon = this.icon_png;
                this.coordinates[2].icon = this.icon_png;
                this.coordinates[3].icon = this.icon_png;
                this.coordinates[4].icon = this.icon_png;
                this.coordinates[5].icon = this.icon_png;
                this.coordinates[office_number].icon = this.icon_active_png;

            },
            getPosition: function(marker) {
                return {
                    lat: parseFloat(marker.lat),
                    lng: parseFloat(marker.lng)
                }
            },
            toggleInfo: function(marker, key) {
                this.changeOffice( key );
            }
        }
    }
</script>

<style lang="scss">

    @import "src/assets/scss/variables";
    @import "src/assets/scss/mixins";

    .map-section {
        position: relative;
        a[href^="http://maps.google.com/maps"],
        a[href^="https://maps.google.com/maps"],
        a[href^="https://www.google.com/maps"] {
            display: none !important;
        }
        & > div > div.vue-map > div > div {
            & > div:nth-child(5), & > div.gmnoprint.gm-style-cc, & > div:nth-child(1) > div.gm-style-pbc {
                display: none;
            }
        }

        .switcher-wrapper {
            position: absolute;
            bottom: 0;
            left: calc( 100vw / 8 );
            right: calc( 100vw / 8 );
            height: var(--vw_288);
            .switcher {
                background-color: white;
                .info-line {
                    display: grid;
                    grid-template-columns: 1fr 1fr 2fr 2fr;
                    height: calc( var(--vw_288) / 2 );
                    h3 {
                        display: grid;
                        align-items: center;
                        justify-content: center;
                    }
                    & > div {
                        display: grid;
                        align-items: center;
                        p {
                            font-size: var(--vw_21);
                            margin-top: 0;
                            margin-bottom: 0;
                            color: $black-blue;
                            &.name {
                                font-weight: bold;
                            }
                        }
                    }

                }
                .flags-line {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
                    height: calc( var(--vw_288) / 2 );
                    & > div {
                        cursor: pointer;
                        background-color: $very_light_grey;
                        display: grid;
                        align-items: center;
                        justify-content: center;
                        &.active {
                            background-color: white;
                        }
                        img {
                            width: var(--vw_55);
                            border: var(--vw_1) solid $light_grey;
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 767px) {
        .map-section {
            .switcher-wrapper {
                width: 100%;
                left: 0;
                right: 0;
                height: auto;
                .switcher {
                    .flags-line {
                        & > div {
                            img {
                                width: var(--vw_89);
                            }
                        }
                    }
                    .info-line {
                        display: inline-block;
                        height: auto;
                        padding-left: var(--vw_89);
                        padding-right: var(--vw_89);
                        padding-bottom: var(--vw_144);
                        h3 {
                            float: left;
                            display: inline-block;
                            width: 100%;
                            margin-top: var(--vw_89);
                            margin-bottom: 0;
                            font-size: var(--vw_55);
                            font-weight: bold;
                        }
                        & > div {
                            display: block;
                            margin-bottom: var(--vw_89);
                            & > div {
                                display: inline-block;
                                p {
                                    font-size: var(--vw_42);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>
