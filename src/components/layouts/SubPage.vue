<template>
    <div class="subpage">
        <PagePreloader/>

        <menu-component default_height="low" :parent_menu="data.parent_menu"  class="menu"/>

        <!--Desktop-->
        <show-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
            <div class="desktop-content">
                <!--<div class="first-line" :class="data.firstline.color">-->
                <div class="first-line" :class="'bg-' + thisPageData.hoverClass">
                    <div>
                        <img :src="'/static/svg/subpages/' + data.firstline.image + '.svg'">
                    </div>
                    <div>
                        <div>
                            <h2>{{ data.firstline.header }}</h2>
                            <p v-for="paragraph in data.firstline.text">{{ paragraph }}</p>
                        </div>
                    </div>
                </div>
                <div class="lines" v-if="!data.customlines" :class="'mc-' + thisPageData.hoverClass">
                    <div class="line" v-for="line in data.lines" :class="line.full ? 'full-' + line.full.type : '' + line.height">
                        <div class="line-inner" v-if="!line.full" :class="'wider-' + line.wider">
                            <div v-for="side in sides" :class="side">
                                <!--Text-->
                                <div v-if="line[side].type === 'text'" class="text" :class="line[side].width">
                                    <div></div>
                                    <p>{{ line[side].text }}</p>
                                </div>
                                <!--List-->
                                <div v-if="line[side].type === 'list'" class="list" :class="line[side].width">
                                    <div></div>
                                    <ul>
                                        <li v-for="item in line[side].list">{{item}}</li>
                                    </ul>
                                </div>
                                <!--Image-->
                                <div v-if="line[side].type === 'image'" class="image">
                                    <img :src="'/static/svg/subpages/' + line[side].image + '.svg'">
                                </div>
                                <!--Header + text-->
                                <div v-if="line[side].type === 'header_text'" class="header_text">
                                    <div></div>
                                    <div>
                                        <h3 v-if="line[side].header != ''" v-html="line[side].header"></h3>
                                        <p v-for="paragraph in line[side].text" :class="line[side].style" v-html="paragraph"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="line.full" class="full">
                            <div></div>

                            <div v-if="line.full.type === 'icons'" class="full-icons">
                                <h2>{{line.full.header}}</h2>
                                <p>{{line.full.text}}</p>
                                <div class="icon">
                                    <img :src="'/static/svg/subpages/' + line.full.icon + '.svg'">
                                </div>
                            </div>

                            <div v-if="line.full.type === 'schema'" class="full-schema">
                                <p v-html="line.full.text"></p>
                                <img :src="'/static/svg/subpages/' + line.full.image + '.svg'">
                            </div>

                            <div v-if="line.full.type === 'module'" class="full-module">
                                <img :src="'/static/svg/icons/' + line.full.icon + '.svg'">
                                <div></div>
                                <div>
                                    <h3>{{line.full.header}}</h3>
                                    <p>{{line.full.text}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="customlines">
                    <div class="customline" v-for="line in data.customlines" :class="line.type + '-line'">
                        <div v-if="line.type === 'counters'" class="counters">
                            <div></div>
                            <div>
                                <ul>
                                    <li v-for="counter in line.counters"><span>{{ plus }} </span>{{ timer < counter ? timer.toFixed(1) : counter }}<span>%</span></li>
                                </ul>
                                <div class="text-line">
                                    <p>{{ line.bold }}</p>
                                    <p>{{ line.regular }}</p>
                                </div>
                            </div>
                        </div>
                        <div v-if="line.type === 'list'" class="list">
                            <div></div>
                            <div>
                                <h2>{{line.header}}</h2>
                                <ol>
                                    <li v-for="item in line.list">{{ item }}</li>
                                </ol>
                                <a :href="line.contact.link">{{line.contact.text}}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </show-at>

        <!--Mobile-->
        <hide-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">

            <!--Modules page-->
            <div class="mobile-custom-content" v-if="data.firstline.header === 'Momentum Application Modules'">
                <div class="header">
                    <div class="header-image">
                        <img src="/static/svg/moment_mob_white.svg">
                    </div>
                    <div class="header-text">
                        <h2>{{ data.firstline.header }}</h2>
                        <p>{{ data.firstline.text[0] }}</p>
                    </div>
                </div>
                <div class="lines">
                    <div class="line" v-for="line in data.lines" :class="line.full ? 'full-' + line.full.type : '' + line.height">
                        <div class="full-module">
                            <img :src="'/static/svg/icons/' + line.full.icon + '.svg'">
                            <div></div>
                            <div>
                                <h3>{{line.full.header}}</h3>
                                <p>{{line.full.text}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--Any mobile page-->
            <div class="mobile-content" v-else>
                <section class="mobile-data" v-if="data.has_mobile === true">
                    <article class="main-data">
                        <div class="main-img" :class="'bg-' + thisPageData.hoverClass">
                            <img :src="'/static/svg/subpages/mobile/' + data.firstline.mobile.img + '.svg'">
                        </div>
                        <h2 class="main-header _padding-lr-55">
                            {{data.firstline.header}}
                        </h2>
                        <div class="main-description _padding-lr-55 _padding-b-233 _padding-t-89">
                            <p v-for="paragraph in data.firstline.text">{{ paragraph }}</p>
                        </div>
                    </article>

                    <article v-for="single in data.lines" :class="'mobile-line-' + single.mobile.type" v-if="!single.full">

                        <!-- List -->
                        <div class="list-block" v-if="single.mobile.type === 'list'">
                            <div class="list-img" v-if="single.mobile.img">
                                <img :src="'/static/svg/subpages/mobile/' + single.mobile.img + '.svg'">
                            </div>
                            <h4 class="list-header _padding-lr-55">{{single.left.text}}</h4>
                            <div class="_list-data _padding-lr-55" :class="'list-' + thisPageData.hoverClass">
                                <p v-for="list in single.right.list">{{list}}</p>
                                <a v-if="single.mobile.link" :href="single.mobile.link" v-html="single.mobile.text"></a>
                            </div>
                        </div>

                        <!-- Block with img -->
                        <div class="header-text-block" v-if="single.mobile.type === 'header_text'" :class="[single.mobile.bg_color_class, single.mobile.no_padding_block ? 'no_padding' : '']">
                            <div class="data-img" v-if="single.mobile.img" :class="single.mobile.no_padding_image ? '_padding-b-233' : ''">
                                <img :src="'/static/svg/subpages/mobile/' + single.mobile.img + '.svg'">
                            </div>
                            <h4 class="_data-header _padding-lr-55" v-if="single.mobile.header !== ''">{{single.mobile.header}}</h4>
                            <div class="_data-description _padding-lr-55" :class="[single.mobile.no_padding_description ? 'no_padding_description' : '', single.mobile.header === '' ? 'no_padding_firstline' : '']">
                                <p v-for="paragraph in single.mobile.text" v-html="paragraph"></p>
                            </div>
                        </div>

                        <!-- Icons  -->
                        <div class="icons-block" v-if="single.mobile.type === 'icons'">
                            <h4 class="_data-header _padding-t-233 _padding-lr-55">{{single.mobile.header}}</h4>
                            <div class="_data-description _padding-lr-55">
                                <p>{{ single.mobile.text }}</p>
                            </div>
                            <div class="data-img">
                                <img :src="'/static/svg/subpages/mobile/' + single.mobile.img + '.svg'">
                            </div>
                        </div>

                        <!-- Black list -->
                        <div class="black-list-block" v-if="single.mobile.type === 'black_list'">
                            <h4 class="black-block _padding-lr-55" :class="'color-' + thisPageData.hoverClass">{{single.mobile.text}}</h4>
                            <div class="_list-data _padding-lr-55" :class="'list-' + thisPageData.hoverClass">
                                <p v-for="list in single.mobile.list">{{list}}</p>
                            </div>
                        </div>

                        <!--Counters-->
                        <div v-if="single.mobile.type === 'counters'" class="counters">
                            <ul>
                                <li v-for="counter in single.mobile.counters"><span>{{ plus }} </span>{{ counter }}<span>%</span></li>
                            </ul>
                        </div>

                    </article>

                </section>
                <img :src="'/static/images/subpages_mob/' + data.mobile_image" v-else>
            </div>
        </hide-at>
        <PreFooterNavigation :navigationData="navData"/>
        <Footer/>
    </div>
</template>

<script>
    import MenuComponent from '../components/MenuComponent'
    import EmptySection from "../mainpage/EmptySection";
    import {showAt, hideAt} from 'vue-breakpoints'
    import PreFooterNavigation from '../components/PreFooterNavigation';
    import Footer from '../components/Footer';
    import NavMixin from '../../mixins/preFooterNavigation';
    import PagePreloader from '../components/Preloader'

    export default {
        name: "SubPage",
        components: {EmptySection, MenuComponent, hideAt, showAt, PreFooterNavigation, Footer, PagePreloader},
        mixins: [NavMixin],
        props: ['data'],
        data: function () {
            return {
                sides: ['left','right'],
                timer: 0,
                was_scrolled: false,
                plus: ''
            }
        },
        computed: {
            navData(){
                return {
                    next: this.getNextPageData(),
                    prev: this.getPrevPageData()
                }
            },
            thisPageData() {
                return this.getThisPageData();
            }
        },
        methods: {
            handleScroll () {
                if( !this.was_scrolled ) {
                    this.plus = '+';
                    this.was_scrolled = true;

                    let timerId = setInterval(() => {
                        this.timer += 0.1;
                    }, 4);

                    setTimeout(function() {
                        clearInterval(timerId);
                    }, 1000);
                }
            }
        },
        created: function () {
            setTimeout( () => {
                if( this.data.customlines && ( this.data.customlines.length > 0 ) && ( !this.was_scrolled ) ) {
                    window.addEventListener('scroll', this.handleScroll);
                }
            }, 500);

            console.log('test-start');
        }
    }
</script>

<style lang="scss">

    @import "src/assets/scss/variables";
    @import "src/assets/scss/fonts";

    .subpage {
        .desktop-content {
            .first-line {
                height: $vw_754;
                display: grid;
                grid-template-columns: 8fr 6fr 2fr;
                color: white;
                &.blue {
                    background-color: $blue;
                }
                &.green {
                    background-color: $green;
                }
                &.yellow {
                    background-color: $yellow;
                }
                &.black {
                    background-color: $black;
                }
                & > div {
                    display: grid;
                    align-items: center;
                    p {
                        font-weight: 600;
                    }
                }
            }
            .lines {
                &.mc-blue .line:nth-child(2n){
                    background-color: var(--mc_blue_light);
                }
                &.mc-yellow .line:nth-child(2n){
                    background-color: var(--mc_yellow_light);
                }
                &.mc-green .line:nth-child(2n){
                    background-color: var(--mc_green_light);
                }
                .line {
                    height: $vw_610;
                    display: grid;
                    align-items: center;
                    &:nth-child(2n) {
                        background-color: $very_light_grey;
                    }
                    &.full-modules {
                        height: calc(#{$vw_377} + #{$vw_89});
                    }
                    &.high {
                        height: $vw_754;
                    }
                    .line-inner {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        &.wider-left {
                            grid-template-columns: 9fr 7fr;
                            .left > div {
                                grid-template-columns: 2fr 7fr;
                            }
                        }
                        &.wider-right {
                            grid-template-columns: 7fr 9fr;
                            .right > div {
                                grid-template-columns: 0fr 7fr 2fr;
                            }
                        }
                        .left {
                            .header_text {
                                grid-template-columns: 1fr 3fr;
                            }
                        }
                        .right {
                            .header_text {
                                grid-template-columns: 0fr 3fr 1fr;
                            }
                        }
                        .text {
                            display: grid;

                            &.narrow {
                                grid-template-columns: 1fr 2fr 1fr;
                            }
                            &.normal {
                                grid-template-columns: 2fr 5fr 1fr;
                            }
                            &.wide {
                                grid-template-columns: 1fr 3fr;
                            }

                            p {
                                color: black;
                                font-weight: 600;
                                font-size: $vw_34;
                                margin-top: 0;
                            }
                        }
                        .list {
                            display: grid;

                            &.narrow {
                                grid-template-columns: 1fr 5fr 2fr;
                                padding-left: $vw_55;
                            }
                            &.normal {
                                grid-template-columns: 0fr 3fr 1fr;
                                padding-left: $vw_55;
                            }
                            &.wide {
                                grid-template-columns: 0fr 3fr 1fr;
                            }
                            ul {
                                padding-left: 0;
                                margin-top: 0;
                                margin-bottom: 0;
                                display: grid;
                                li {
                                    color: black;
                                    font-size: $vw_26;
                                    list-style: none;
                                    position: relative;
                                    margin-bottom: $vw_42;
                                    &:last-child {
                                        margin-bottom: 0;
                                    }

                                    &:before {
                                        content: '';
                                        display: inline-block;
                                        width: $vw_26;
                                        height: $vw_26;
                                        left: -$vw_55;
                                        top: $vw_5;
                                        background-image:url('/static/svg/subpages/glaz.svg');
                                        position: absolute;
                                    }
                                }
                            }
                        }
                        .header_text {
                            display: grid;
                            height: 100%;
                            align-items: center;
                            & > div {
                                h3 {
                                    margin-top: 0;
                                }
                                p {
                                    margin-bottom: $vw_42;
                                    &:first-child {
                                        margin-top: 0;
                                    }
                                    &:last-child {
                                        margin-bottom: 0;
                                    }
                                    &.bold {
                                        font-weight: 600;
                                    }
                                }
                            }
                        }
                    }
                    .full {
                        display: grid;
                        grid-template-columns: 1fr 6fr 1fr;
                        text-align: center;
                        .full-icons {
                            h2 {
                                margin-top: 0;
                            }
                            p {
                                padding-left: calc(100% / 6);
                                padding-right: calc(100% / 6);
                                margin-bottom: $vw_68;
                            }
                        }
                        .full-schema {
                            p {
                                margin-top: $vw_42;
                                margin-bottom: $vw_89;
                            }
                        }
                        .full-module {
                            display: grid;
                            grid-template-columns: 3fr 1fr 7fr 1fr;
                            align-items: center;
                            justify-items: right;
                            img {
                                width: $vw_144;
                            }
                            & > div {
                                text-align: left;
                                h3 {
                                    margin-top: 0;
                                }
                                p {
                                    margin-bottom: 0;
                                }
                            }
                        }
                    }
                }
            }
            .customlines {
                .customline {
                    display: grid;
                    align-items: center;
                    &.counters-line {
                        height: calc(#{$vw_610} + #{$vw_89});
                        .counters {
                            display: grid;
                            grid-template-columns: 1fr 6fr 1fr;
                            ul {
                                list-style-type: none;
                                display: flex;
                                justify-content: space-between;
                                margin-top: 0;
                                margin-bottom: $vw_110;
                                padding-left: 0;
                                li {
                                    font-family: BrutalType, sans-serif;
                                    font-size: $vw_89;
                                    font-weight: bold;
                                    span {
                                        font-weight: 200;
                                    }
                                }
                            }
                            .text-line {
                                display: grid;
                                grid-template-columns: 1fr 1fr;
                                p {
                                    &:first-child {
                                        color: black;
                                        font-weight: 600;
                                        font-size: $vw_26;
                                        margin-top: 0;
                                        padding-right: $vw_42;
                                    }
                                    &:last-child {
                                        margin-top: 0;
                                    }
                                }
                            }
                        }
                    }
                    &.list-line {
                        background-color: $very_light_grey;
                        height: calc( #{$vw_754} + #{$vw_377} );
                        .list {
                            display: grid;
                            grid-template-columns: 1fr 6fr 1fr;
                            h2 {
                                text-align: center;
                                width: 80%;
                                margin: 0 auto $vw_89 auto;
                            }
                            ol {
                                display: flex;
                                flex-wrap: wrap;
                                padding-left: 0;
                                counter-reset: item;
                                list-style-type: none;
                                li {
                                    width: calc( 100%/3);
                                    padding-left: $vw_68;
                                    padding-right: $vw_68;
                                    font-size: $vw_26;
                                    margin-bottom: $vw_89;
                                    margin-left: 0;
                                    margin-right: 0;
                                    position: relative;
                                    &:before {
                                        content: "0"counter(item) "  ";
                                        counter-increment: item;
                                        font-size: $vw_26;
                                        position: absolute;
                                        left: 0;
                                        opacity: 0.15;
                                        border-right: $vw_1 solid rgba($black, 0.66);
                                        height: 100%;
                                        font-family: CharterC;
                                        width: $vw_55;
                                    }
                                }
                            }
                            a {
                                display: inline-block;
                                width: 100%;
                                text-align: center;
                                font-size: $vw_34;
                            }
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 767px) {
        .menu {
            height: var(--vw_144);
        }
        .mobile-content {
            img {
                width: 100%;
            }
        }
        .mobile-custom-content {
            .header {
                background-color: $black;
                .header-image {
                    height: 100vw;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    padding-left: var(--vw_55);
                    padding-right: var(--vw_55);
                }
                .header-text {
                    padding: var(--vw_89) var(--vw_55) var(--vw_233) var(--vw_55);
                    color: white;
                    p {
                        margin-top: var(--vw_110);
                        font-size: var(--vw_55);
                        font-weight: 600;
                    }
                }
            }
            .lines {
                .line {
                    border-bottom: 1px solid #e6e6e6;
                    padding: var(--vw_233) var(--vw_55);
                    &:nth-child(2n) {
                        background-color: $very_light_grey;
                    }
                    .full-module {
                        img {
                            width: var(--vw_288);
                        }
                        h3 {
                            font-size: var(--vw_68);
                            margin-top: var(--vw_110);
                            margin-bottom: var(--vw_68);
                            font-weight: bold;
                        }
                    }
                    &:last-child{
                        border-bottom: none;
                    }
                }
            }
        }
    }

    section.mobile-data{
        ._padding-lr-55{
            padding: 0 var(--vw_55);
        }
        ._padding-b-233{
            padding-bottom: var(--vw_233);
        }
        ._padding-t-89{
            padding-top: var(--vw_89);
        }
        ._padding-t-233{
            padding-top: var(--vw_233);
        }
        ._data-header{
            margin: 0;
            font-size: var(--vw_68);
            font-weight: 800;
            line-height: var(--vw_89);
            padding-bottom: var(--vw_55);
        }
        ._data-description{
            font-size: var(--vw_55);
            line-height: var(--vw_68);
            padding-bottom: var(--vw_89);
            p{
                margin-top: var(--vw_55);
            }
        }
        ._list-data{
            padding-bottom: var(--vw_233);
            p{
                position: relative;
                font-size: var(--vw_55);
                line-height: var(--vw_68);
                padding-bottom: var(--vw_89);
                padding-left: var(--vw_89);
                margin: 0;
                &::before{
                    position: absolute;
                    content: '';
                    left: 0;
                    top: var(--vw_16);
                    height: var(--vw_21);
                    width: var(--vw_21);
                    border: 2px solid;
                    border-radius: var(--vw_21);
                }
                &:last-child{
                    padding-bottom: 0;
                }
            }
            a {
                display: inline-block;
                margin-top: var(--vw_55);
                font-size: var(--vw_68);
                text-align: center;
                width: 100%;
                &:last-child{
                    padding-bottom: 0;
                }
            }
            &.list-blue p::before{ border-color: var(--mc_blue) }
            &.list-green p::before{ border-color: var(--mc_green) }
            &.list-yellow p::before{ border-color: var(--mc_yellow) }
        }
        .main-img{
            margin-bottom: var(--vw_233);
            min-height: 100vw;
        }
        .main-data{
            img{
                width: 100%;
                height: auto;
            }
            .main-header{
                font-size: var(--vw_89);
                line-height: var(--vw_110);
            }
            .main-description{
                font-size: var(--vw_55);
                line-height: var(--vw_68);
            }
        }
        .mobile-line-list{
            .list-img{
                height: var(--vw_610);
                background-color: #d6d6d6;
                margin-bottom: var(--vw_233);
            }
            .list-header{
                margin: 0;
                font-size: var(--vw_68);
                font-weight: 600;
                line-height: var(--vw_89);
                padding-bottom: var(--vw_144);
            }
        }
        .mobile-line-header_text{
            .header-text-block:not(.no_padding){
                padding-bottom: var(--vw_233);
            }
            ._data-description p:last-child{
                padding-bottom: 0;
            }
            ._data-description.no_padding_firstline p:first-child{
                margin-top: 0;
            }
            ._data-description.no_padding_description {
                padding-bottom: 0;
            }
        }
        .black-block{
            margin-top: 0;
            padding: var(--vw_233) var(--vw_144) var(--vw_178);
            margin-bottom: var(--vw_144);
            background-color: var(--mc_black);
            color: white;
            font-weight: 600;
            font-size: var(--vw_68);
            line-height: var(--vw_89);
            position: relative;
            &::before{
                content: '';
                position: absolute;
                top: var(--vw_144);
                left: 0;
                height: 2px;
                width: var(--vw_377);
            }
            &.color-green{
                &::before{
                    background-color: var(--mc_green);
                }
            }
            &.color-yellow{
                &::before{
                    background-color: var(--mc_yellow);
                }
            }
        }
        .counters {
            margin-bottom: var(--vw_68);
            ul {
                margin-top: 0;
                padding-left: 0;
                list-style-type: none;
                display: inline-block;
                width: 100%;
                li {
                    display: inline-block;
                    float: left;
                    width: 50%;
                    background-color: $blue;
                    color: white;
                    text-align: center;
                    font-size: var(--vw_68);
                    height: var(--vw_178);
                    line-height: var(--vw_178);
                    font-weight: bold;
                    margin-left: 0;
                    margin-right: 0;
                    &:first-child, &:nth-child(2) {
                        border-bottom: var(--vw_2) white solid;
                    }
                    &:nth-child(3), &:nth-child(4) {
                        border-top: var(--vw_2) white solid;
                    }
                    &:first-child, &:nth-child(3) {
                        border-right: var(--vw_2) white solid;
                    }
                    &:nth-child(2), &:nth-child(4) {
                        border-left: var(--vw_2) white solid;
                    }
                    span {
                        color: white;
                    }
                }
            }
        }
        .icons-block {
            h4 {
                text-align: center;
            }
            p {
                margin-top: 0;
            }
        }

        //Backgrounds
        .blue-light{
            background-color: #E6FAFA;
        }
        .yellow-light{
            background-color: #FAFAF5;
        }
        .green-light{
            background-color: #F5FAFA;
        }
    }

</style>
