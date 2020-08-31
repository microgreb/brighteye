<template>
    <div>
        <div class="top-menu-line" :class="height">
            <router-link to="/" @click.native="$scrollToTop">
                <img src="/static/svg/logo.svg">
            </router-link>
            <div class="square-container burger" @click="showMenu( !show_menu )">
                <div class="burger-menu" :class="{'menu-open': show_menu}" >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="square-container language-switcher">
                <span>EN</span>
            </div>

            <!--Desktop menu on main page-->
            <div class="mainpage-menu" v-if="height + default_height === 'lowhigh'">
                <a href="#solutions" v-smooth-scroll v-bind:class="{ active: active_menu_item === 'solutions' }">Solutions</a>
                <a href="#momentum" v-smooth-scroll v-bind:class="{ active: active_menu_item === 'momentum' }">Momentum</a>
                <a href="#methodology" v-smooth-scroll v-bind:class="{ active: active_menu_item === 'methodology' }">Methodology</a>
                <a href="#partnership" v-smooth-scroll v-bind:class="{ active: active_menu_item === 'partnership' }">Partnership</a>
                <a href="#cases" v-smooth-scroll v-bind:class="{ active: active_menu_item === 'cases' }">Cases</a>
                <a href="#community" v-smooth-scroll v-bind:class="{ active: active_menu_item === 'community' }">Community</a>
                <a href="#contacts" v-smooth-scroll v-bind:class="{ active: active_menu_item === 'contacts' }">Contacts</a>
            </div>

            <!--Desktop menu on subpages-->
            <div class="mainpage-menu" v-else-if="height === 'low'">
                <router-link to="/#solutions" v-smooth-scroll="{ duration: 1 }" v-bind:class="{ parent: parent_menu === 'solutions' }">Solutions</router-link>
                <router-link to="/#momentum" v-smooth-scroll="{ duration: 1 }" v-bind:class="{ parent: parent_menu === 'momentum' }">Momentum</router-link>
                <router-link to="/#methodology" v-smooth-scroll="{ duration: 1 }" v-bind:class="{ parent: parent_menu === 'methodology' }">Methodology</router-link>
                <router-link to="/#partnership" v-smooth-scroll="{ duration: 1 }" v-bind:class="{ parent: parent_menu === 'partnership' }">Partnership</router-link>
                <router-link to="/#cases" v-smooth-scroll="{ duration: 1 }"  v-bind:class="{ parent: parent_menu === 'cases' }">Cases</router-link>
                <router-link to="/#community" v-smooth-scroll="{ duration: 1 }" v-bind:class="{ parent: parent_menu === 'community' }">Community</router-link>
                <router-link to="/#contacts" v-smooth-scroll="{ duration: 1 }"  v-bind:class="{ parent: parent_menu === 'contacts' }">Contacts</router-link>
            </div>

        </div>

        <show-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove"><MenuDesktop v-if="show_menu" /></show-at>

        <!-- Mobile menu -->
        <hide-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
            <!-- Mobile menu on main page -->
            <div class="opened-menu" :class="[{ active: show_menu }]" v-if="default_height === 'high'">
                <span @click="showMenu( false )">×</span>
                <a href="#solutions" v-smooth-scroll @click="showMenu( false )">Solutions</a>
                <a href="#momentum" v-smooth-scroll="{ offset: -30 }" @click="showMenu( false )">Momentum</a>
                <a href="#methodology" v-smooth-scroll @click="showMenu( false )">Methodology</a>
                <a href="#partnership" v-smooth-scroll @click="showMenu( false )">Partnership</a>
                <a href="#cases" v-smooth-scroll @click="showMenu( false )">Cases</a>
                <a href="#community" v-smooth-scroll @click="showMenu( false )">Community</a>
                <a href="#contacts" v-smooth-scroll @click="showMenu( false )">Contacts</a>
            </div>

            <!-- Mobile menu on subpage -->
            <div class="opened-menu" :class="[{ active: show_menu }]" v-else>
                <span @click="showMenu( false )">×</span>
                <router-link to="/#solutions" v-smooth-scroll="{ duration: 1 }">Solutions</router-link>
                <router-link to="/#momentum" v-smooth-scroll="{ duration: 1 }">Momentum</router-link>
                <router-link to="/#methodology" v-smooth-scroll="{ duration: 1 }">Methodology</router-link>
                <router-link to="/#partnership" v-smooth-scroll="{ duration: 1 }">Partnership</router-link>
                <router-link to="/#cases" v-smooth-scroll="{ duration: 1 }">Cases</router-link>
                <router-link to="/#community" v-smooth-scroll="{ duration: 1 }">Community</router-link>
                <router-link to="/#contacts" v-smooth-scroll="{ duration: 1 }">Contacts</router-link>
            </div>
        </hide-at>

        <div class="indent" :class="[ height, 'default-'+default_height ]">
        </div>
    </div>
</template>

<script>
    import MenuDesktop from '../components/MenuDesktop'
    import {showAt, hideAt} from 'vue-breakpoints'

    export default {
        name: "MenuComponent",
        props: ['default_height','parent_menu'],
        components: {MenuDesktop, hideAt, showAt},
        data: function () {
            return {
                height: this.default_height,
                active_menu_item: '',
                show_menu: false
            }
        },
        methods: {
            handleScroll () {

                if( this.default_height === 'high' ) {
                    if( document.getElementsByClassName('section-content')[0].getBoundingClientRect().top  < -120) {
                        this.height = 'low';
                        //ToDo rewrite
                        if( document.getElementById('solutions').getBoundingClientRect().top < 1 ){
                            this.active_menu_item = 'solutions'
                        }
                        if( document.getElementById('momentum-image').getBoundingClientRect().top < 1 ){
                            this.active_menu_item = 'momentum'
                        }
                        if( document.getElementById('methodology-image').getBoundingClientRect().top < 1 ){
                            this.active_menu_item = 'methodology'
                        }
                        if( document.getElementById('partnerships-image').getBoundingClientRect().top < 1 ){
                            this.active_menu_item = 'partnership'
                        }
                        if( document.getElementById('brightway-image').getBoundingClientRect().top < 1 ){
                            this.active_menu_item = 'cases'
                        }
                        if( document.getElementById('community-image').getBoundingClientRect().top < 1 ){
                            this.active_menu_item = 'community'
                        }
                        if( document.getElementById('contacts').getBoundingClientRect().top < 1 ){
                            this.active_menu_item = 'contacts'
                        }
                    }
                    else {
                        this.height = 'high';
                    }
                }
            },
            showMenu( show ) {
                this.show_menu = show;
                if( show ) {
                    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
                }
                else {
                    document.getElementsByTagName('body')[0].style.overflow = 'inherit';
                }
            }
        },
        created: function () {
            window.addEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style lang="scss">
    @import "src/assets/scss/variables";

    .top-menu-line {
        width: 100%;
        box-sizing: border-box;
        z-index: 100;
        position: relative;
        &.high {
            height: var(--vw_144);
            padding-bottom: var(--vw_26);
            display: inline-block;
            img {
                height: var(--vw_55);
                margin-top: var(--vw_34);
                margin-left: var(--vw_26);
            }
            .square-container {
                margin-right: var(--vw_42);
            }
        }
        &.low {
            background-color: $black;
            height: var(--vw_68);
            position: fixed;
            top: 0;
            img {
                height: var(--vw_42);
                margin-left: var(--vw_8);
                margin-top: var(--vw_13);
                z-index: 10;
                position: relative;
            }
            .square-container {
                width: var(--vw_68);
                justify-content: center;
                z-index: 10;
                position: relative;
            }
            .mainpage-menu {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                text-align: center;
                a {
                    line-height: var(--vw_68);
                    padding-left: var(--vw_13);
                    padding-right: var(--vw_13);
                    color: white;
                    opacity: 0.5;
                    text-decoration: none;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: var(--vw_16);
                    &.active {
                        color: $blue;
                        opacity: 1;
                        font-weight: bold;
                    }
                    &.parent {
                        opacity: 1;
                        color: white;
                    }
                    &:hover {
                        opacity: 1;
                        color: white;
                    }
                }
            }
        }
        img {
            float: left;
        }
        .square-container {
            max-width: 7.5vw;
            float: right;
            height: 100%;
            display: grid;
            align-items: center;
            &.burger {
                .burger-menu {
                    height: var(--vw_26);
                    width: var(--vw_34);
                    position: relative;
                    cursor: pointer;
                    float: right;

                    span {
                        height: var(--vw_2);
                        width: 100%;
                        background-color: white;
                        position: absolute;
                        transition: .3s;
                        left: 0;
                        top: 0;

                        &:nth-child(2) {
                            top: calc( 50% - var(--vw_1) );
                        }

                        &:last-child {
                            top: auto;
                            bottom: 0;
                        }
                    }

                    &:hover {
                        span:nth-child(2) {
                            width: 70%;
                        }
                    }
                    &.menu-open{
                        span:nth-child(2){
                            width: 0;
                            left: 50%;
                        }
                        span:first-child,
                        span:last-child{
                            top: calc(50% - 0.052vw);
                        }
                        span:first-child{
                            transform: rotate(45deg);
                        }
                        span:last-child{
                            transform: rotate(-45deg);
                        }
                    }
                }
            }
            &.language-switcher {
                span {
                    color: white;
                    font-size: var(--vw_21);
                    font-weight: bold;
                    cursor: pointer;
                }
            }
        }
    }
    .opened-menu {
        background-color: $black;
        position: fixed;
        top: -1px;
        bottom: -1px;
        left: -1px;
        right: -1px;
        z-index: 100;
        align-items: center;
        justify-items: center;
        padding-top: 10vh;
        font-size: var(--vw_68);
        &:not(.active) {
            display: none;
        }
        span {
            position: absolute;
            color: white;
            right: var(--vw_55);
            top: var(--vw_13);
            font-size: var(--vw_144);
        }
        a {
            display: inline-block;
            width: 100%;
            text-align: center;
            line-height: 10vh;
        }
    }
    .indent.low {
        &.default-low {
            height: var(--vw_68);
        }
        &.default-high {
            height: var(--vw_144);
        }
    }

    @media only screen and (max-width: 767px) {
        .top-menu-line {
            &.low, &.high {
                height: var(--vw_144);
                padding-bottom: 0;
                .mainpage-menu {
                    display: none;
                }
                img {
                    height: var(--vw_110);
                    margin-top: calc( var(--vw_34) / 2 );
                    margin-left: var(--vw_8);
                }
                .square-container {
                    margin-right: 0;
                    width: var(--vw_144);
                    height: var(--vw_144);
                    max-width: inherit;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    &.burger {
                        .burger-menu {
                            width: var(--vw_68);
                            height: var(--vw_68);
                            span {
                                height: 2px;
                                &:nth-child(2) {
                                    top: calc( 50% - 1px );
                                }
                            }
                        }
                    }
                    &.language-switcher {
                        span {
                            font-size: var(--vw_55);
                        }
                    }
                }
            }
        }
    }

    /*@media only screen and (min-width: 768px) {*/
        /*.opened-menu, .burger {*/
            /*display: none !important;*/
        /*}*/
    /*}*/

</style>