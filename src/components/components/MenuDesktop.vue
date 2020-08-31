<template>
    <section class="menu-desktop">
        <div class="contacts-component">
            <div class="description">
                <h2>Get in touch</h2>
                <p>We’re always eager to learn about new potential partnerships and collaborations. So, if you’re considering a MOM improvement project, get in touch with us to learn how we can help make your project a success. You can email us at <a href="mailto:info@brighteye.be">info@brighteye.be</a><span>, or send us a message via online form below.</span></p>
            </div>
            <div class="form">
                <form @submit.prevent="sendEmail">
                    <div class="inputs-part">
                        <div class="fields-block clearfix">
                            <div class="field">
                                <label for="name">Name</label>
                                <input autocomplete="off" v-model="name" type="text" id="name">
                            </div>
                            <div class="field">
                                <label for="country">Country</label>
                                <input autocomplete="off" v-model="country" type="country" id="country">
                            </div>
                            <div class="field">
                                <label for="company">Company</label>
                                <input autocomplete="off" v-model="company" type="company" id="company">
                            </div>
                            <div class="field">
                                <label for="phone">Phone</label>
                                <input autocomplete="off" v-model="phone" type="Phone" id="phone">
                            </div>

                            <div class="field field_long">
                                <label for="email">Email</label>
                                <input v-model="email" autocomplete="off" type="Email" id="email">
                            </div>

                        </div>
                        <div class="theme">
                            <p>How can we help you? What are you looking for?</p>
                            <div class="theme-buttons-block">
                                <div class="theme-buttons clearfix">
                                    <div class="theme-button">
                                        <div @click="active_theme !== 'momentum' ? active_theme = 'momentum' : active_theme = ''" v-bind:class="[{ active: active_theme === 'momentum' }]">Momentum software</div>
                                    </div>
                                    <div class="theme-button">
                                        <div @click="active_theme !== 'mesmom' ? active_theme = 'mesmom' : active_theme = ''" v-bind:class="[{ active: active_theme === 'mesmom' }]">MES/MOM training</div>
                                    </div>
                                    <div class="theme-button">
                                        <div @click="active_theme !== 'rfirfq' ? active_theme = 'rfirfq' : active_theme = ''" v-bind:class="[{ active: active_theme === 'rfirfq' }]">RFI or RFQ</div>
                                    </div>
                                </div>
                                <div class="theme-buttons clearfix">
                                    <div class="theme-button">
                                        <div @click="active_theme !== 'partnership' ? active_theme = 'partnership' : active_theme = ''" v-bind:class="[{ active: active_theme === 'partnership' }]">Partnership</div>
                                    </div>
                                    <div class="theme-button">
                                        <div @click="active_theme !== 'demo' ? active_theme = 'demo' : active_theme = ''" v-bind:class="[{ active: active_theme === 'demo' }]">Demo</div>
                                    </div>
                                    <div class="theme-button">
                                        <div @click="active_theme !== 'other' ? active_theme = 'other' : active_theme = ''" v-bind:class="[{ active: active_theme === 'other' }]">Other</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="button-part">
                        <button v-bind:class="[{ visible: name !== '' || country !== '' || company !== '' || phone !== '' || email !== '' },{ active: name !== '' && country !== '' && company !== '' && phone !== '' && email !== '' && active_theme !== '' }]">Send</button>
                    </div>
                    <p class="message-status" v-if="email_status !== ''">{{ email_status }}</p>
                </form>
            </div>
        </div>
        <div class="menu-component">
            <article v-for="category in categoryNavigationData" v-if="menuCategories.find(item => item === category.key)">
                <a :href="'/' + category.url"><h4>{{category.title}}</h4></a>
                <router-link
                        v-for="page in getPagesDataByCategory(category.categoryName)"
                        :key="page.index"
                        :class="getClass(page.hoverClass, page.urlName)"
                        :to="{name: page.urlName}"
                        @click.native="bodyInherit()">
                    {{page.pageTitle}}
                </router-link>
            </article>
        </div>
    </section>
</template>

<script>
    import Contacts from '../mainpage/ContactSection'
    import NavMixin from '../../mixins/preFooterNavigation'

    export default {
        name: "MenuDesktop",
        components: {Contacts},
        mixins: [NavMixin],
        data: function() {
            return {
                active_theme: '',
                name: '',
                country: '',
                company: '',
                phone: '',
                email: '',
                themes: {
                    momentum: 'Momentum',
                    mesmom: 'MES/MOM training',
                    rfirfq: 'RFI or RFQ',
                    partnership: 'Partnership',
                    demo: 'Demo',
                    other: 'Other',
                },
                email_status: '',
                menuCategories: ['momentum', 'solutions', 'methodology', 'partnership']
            }
        },
        methods: {
            getClass(color, pageUrl) {
                let customClass = 'data-text item-' + color;
                let currentPage = this.getThisPageData();

                if(currentPage && currentPage.urlName === pageUrl) {
                    customClass += ' active';
                }

                return customClass;
            },
            sendEmail () {

                if( this.name !== '' && this.country !== '' && this.company !== '' && this.phone !== '' && this.email !== ''&& this.active_theme !== '') {

                    var xhttp = new XMLHttpRequest();
                    xhttp.open("POST", "http://185.25.118.203/email/send.php", true);
                    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhttp.send( "name=" + this.name + "&email=" + this.email + "&phone=" + this.phone + "&country=" + this.country + "&company=" + this.company + "&theme=" + this.themes[this.active_theme] );
                    var context = this;
                    xhttp.onreadystatechange = function() {

                        if ( this.readyState == 4 && this.status == 200 ) {
                            if( this.responseText === 'success') {
                                context.email_status = 'Email was sent!';
                            }
                            else {
                                context.email_status = 'Error';
                            }
                        }
                    };
                }
                else {
                    context.email_status = 'Please fill all fields'
                }
            },

            bodyInherit() {
                document.getElementsByTagName('body')[0].style.overflow = 'inherit';
            }
        },
    }
</script>

<style lang="scss" scoped>
    body{
        overflow: hidden;
    }
    .clearfix::after{
        content: '';
        display: block;
        clear: both;
    }
    .menu-desktop{
        background-color: var(--mc_black);
        height: 100vh;
        width: 100%;
        position: fixed;
        display: flex;
        top: 0;
        left: 0;
        color: rgba(255, 255, 255, 0.50);
        z-index: 30;
    }
    .contacts-component,
    .menu-component{
        width: 50%;
        display: flex;
        align-items: center;
    }
    .contacts-component{
        padding: 0 var(--vw_178);
        flex-direction: column;
        justify-content: center;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        .description{
            h2{
                color: white;
                font-size: var(--vw_26);
                margin: 0;
                line-height: var(--vw_34);
                padding-bottom: var(--vw_26);
            }
            p{
                margin: 0;
                font-size: var(--vw_21);
                line-height: var(--vw_26);
                padding-bottom: var(--vw_26);
            }
        }
    }
    .fields-block{
        margin: 0 calc(var(--vw_13) * -1);
        .field{
            width: 50%;
            float: left;
            padding: 0 var(--vw_13) var(--vw_21);;
            &_long{
                width: 100%;
            }
            label{
                display: block;
                color: rgb(255, 255, 255);
                font-size: var(--vw_13);
                line-height: var(--vw_16);
                font-weight: 400;
            }
            input{
                border: none;
                outline: none;
                background-color: rgba(255, 255, 255, 0.05);
                color: white;
                font-size: var(--vw_16);
                line-height: var(--vw_42);
                height: var(--vw_42);
                border-radius: 3px;
                width: 100%;
            }
        }
    }
    .theme{
        p{
            margin: 0;
            color: rgba(255, 255, 255, 0.5);
            font-size: var(--vw_13);
            line-height: var(--vw_16);
            padding-bottom: var(--vw_8);
        }
        .theme-buttons-block{
            .theme-buttons{
                margin: 0 calc(var(--vw_8) * -1) var(--vw_16);
            }
            .theme-button{
                width: 33.33%;
                padding: 0 var(--vw_8);
                float: left;
                div{
                    border: 2px solid rgba(255, 255, 255, 0.05);
                    box-sizing: border-box;
                    transition: .3s;
                    line-height: var(--vw_42);
                    font-size: var(--vw_16);
                    text-align: center;
                    cursor: pointer;
                    border-radius: 3px;
                    &:hover:not(.active){
                        transition: .3s;
                        color: white;
                        border-color: white;
                    }
                    &.active{
                        background-color: var(--mc_blue);
                        color: white;
                    }
                }
            }
        }
    }
    .button-part{
        min-height: calc(var(--vw_42) + 6px);
        button{
            width: calc(33.33% - var(--vw_8) - 2px);
            margin: 0;
            padding: 0;
            outline: none;
            border: 2px solid rgba(255, 255, 255, 0.05);
            box-sizing: border-box;
            transition: .3s;
            line-height: var(--vw_42);
            color: rgba(255, 255, 255, 0.5);
            font-size: var(--vw_16);
            text-align: center;
            border-radius: 3px;
            height: auto;
            background-color: transparent;
            display: none;
            cursor: not-allowed;
            &:hover{
                background-color: inherit !important;
                border-color: rgba(255, 255, 255, 0.05);
            }
            &.visible{
                display: block;
            }
            &.active{
                cursor: pointer;
                color: white;
                background-color: var(--mc_green);
                &:hover {
                    transition: .3s;
                    background-color: var(--mc_blue) !important;
                }
            }
        }
    }
    .menu-desktop{
        .menu-component {
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding-left: var(--vw_233);
            article{
                padding-bottom: var(--vw_42);
                &:last-child{
                    padding-bottom: 0;
                }
            }
            h4, .data-text{
                font-size: var(--vw_26);
                line-height: var(--vw_34);
                margin: 0;
                padding: 0;
                display: block;
                font-weight: 600;
            }
            h4{
                color: var(--mc_blue);
            }
            a {
                text-decoration: none;
                transition: .3s;
                &:hover {
                    transition: .3s;
                    text-decoration: none;
                    opacity: 1;
                }
                &.active {
                    opacity: 1;
                }
                &.item-green {
                    &:hover, &.active { color: var(--mc_green)}
                }
                &.item-blue {
                    &:hover, &.active { color: var(--mc_blue) }
                }
                &.item-yellow {
                    &:hover, &.active { color: var(--mc_yellow) }
                }
                &.item-black {
                    &:hover, &.active { color: #fff }
                }
            }
            .data-text{
                color: white;
                opacity: .5;
            }
        }
    }
</style>