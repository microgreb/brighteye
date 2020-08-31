<template>
    <div class="contact-section" id="contacts">
        <div class="section_name_membrane">
            <div class="section_name">
                <span>Contacts</span>
            </div>
        </div>
        <div class="first-line">
            <div></div>
            <div>
                <h2>Get in touch</h2>
                <p>We’re always eager to learn about new potential partnerships and collaborations. <br><br class="mobile-br">So, if you’re considering a MOM improvement project, get in touch with us to learn how we can help make your project a success. You can email us at <a href="mailto:info@brighteye.be">info@brighteye.be</a><span>, or send us a message via online form below.</span></p>
            </div>
        </div>
        <div class="second-line">
            <div></div>
            <form @submit.prevent="sendEmail">
                <div class="inputs-part">
                    <div>
                        <div class="small-inputs">
                            <div>
                                <p><label for="name">Name</label><input autocomplete="off" v-model="name" type="text" id="name"></p>
                                <p><label for="country">Country</label><input autocomplete="off" v-model="country" type="country" id="country"></p>
                            </div>
                            <div class="right-align-inputs">
                                <p><span><label for="company">Company</label><input autocomplete="off" v-model="company" type="company" id="company"></span></p>
                                <p><span><label for="phone">Phone</label><input autocomplete="off" v-model="phone" type="Phone" id="phone"></span></p>
                            </div>
                        </div>
                        <div class="email-input">
                            <label for="email">Email</label>
                            <input v-model="email" autocomplete="off" type="Email" id="email">
                        </div>
                    </div>
                    <div class="theme">
                        <p>How can we help you? What are you looking for?</p>
                        <div>
                            <div>
                                <div @click="active_theme !== 'momentum' ? active_theme = 'momentum' : active_theme = ''" v-bind:class="[{ active: active_theme === 'momentum' }]">Momentum software</div>
                                <div @click="active_theme !== 'mesmom' ? active_theme = 'mesmom' : active_theme = ''" v-bind:class="[{ active: active_theme === 'mesmom' }]">MES/MOM training</div>
                                <div @click="active_theme !== 'rfirfq' ? active_theme = 'rfirfq' : active_theme = ''" v-bind:class="[{ active: active_theme === 'rfirfq' }]">RFI or RFQ</div>
                            </div>
                            <div>
                                <div @click="active_theme !== 'partnership' ? active_theme = 'partnership' : active_theme = ''" v-bind:class="[{ active: active_theme === 'partnership' }]">Partnership</div>
                                <div @click="active_theme !== 'demo' ? active_theme = 'demo' : active_theme = ''" v-bind:class="[{ active: active_theme === 'demo' }]">Demo</div>
                                <div @click="active_theme !== 'other' ? active_theme = 'other' : active_theme = ''" v-bind:class="[{ active: active_theme === 'other' }]">Other</div>
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
</template>

<script>
    export default {
        name: "ContactSection",
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
                email_status: ''
            }
        },
        methods: {

            sendEmail () {

                if( this.name !== '' && this.country !== '' && this.company !== '' && this.phone !== '' && this.email !== ''&& this.active_theme !== '') {

                    let context = this;
                    (async () => {
                        const response = await fetch('https://service.sitesworkshop.pro/api/email/send', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                'name': this.name,
                                'email': this.email,
                                'phone': this.phone,
                                'country': this.country,
                                'company': this.company,
                                'theme': this.themes[this.active_theme]
                            })
                        });
                        const answer = await response.json();
                        if( answer.answer === 'success') {
                            context.email_status = 'Email was sent!';
                        }
                        else {
                            context.email_status = 'Error';
                        }

                        console.log( answer );
                    })();
                }
                else {
                    context.email_status = 'Please fill all fields'
                }
            }
        }
    }
</script>

<style lang="scss">

    @import "src/assets/scss/variables";
    @import "src/assets/scss/mixins";

    .contact-section {
        position: relative;
        .first-line {
            display: grid;
            grid-template-columns: 1fr 4fr 3fr;
            h2 {
                @include text-margin( var(--vw_42), var(--vw_144), var(--vw_42) );
            }
            p {
                margin-top: 0;
            }
        }
        .second-line {
            display: grid;
            grid-template-columns: 1fr 6fr 1fr;
            .inputs-part {
                display: grid;
                grid-template-columns: 1fr 1fr;
                .small-inputs {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    input {
                        width: calc( var(--vw_288) + var(--vw_55) );
                    }
                    .right-align-inputs {
                        p {
                            display: inline-block;
                            width: 100%;
                            text-align: right;
                            &:nth-child(2) {
                                margin-top: 0;
                            }
                            span {
                                display: inline-block;
                                label {
                                    text-align: left;
                                }
                            }
                        }
                    }
                }
                .email-input input {
                    width: 100%;
                }
                .theme {
                    p {
                        font-size: var(--vw_16);
                        color: $black;
                        opacity: 0.38;
                        margin-left: 5%;
                        margin-top: var(--vw_26);
                        margin-bottom: var(--vw_8);
                        font-weight: 600;
                    }
                    & > div {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        & > div {
                            padding-left: 10%;
                            & > div {
                                border: var(--vw_2) solid $very_light_grey;
                                color: rgba( $black, 0.38 );
                                border-radius: var(--vw_3);
                                height: var(--vw_68);
                                display: grid;
                                align-items: center;
                                justify-content: center;
                                font-size: var(--vw_21);
                                font-weight: 600;
                                cursor: pointer;
                                &:first-child, &:nth-child(2) {
                                    margin-bottom: var(--vw_34);
                                }
                                &:hover {
                                    color: $black;
                                }
                                &.active {
                                    background-color: $blue;
                                    color: white;
                                    font-weight: bold;
                                    border: none;
                                }
                            }
                        }
                    }
                }
            }
            .button-part {
                height: var(--vw_144);
                display: grid;
                align-items: center;
                justify-content: center;
                grid-template-columns: 1fr;
                padding-left: 43%;
                padding-right: 43%;
                button {
                    font-size: var(--vw_26);
                    border-radius: var(--vw_3);
                    background-color: inherit;
                    border: var(--vw_2) solid rgba( $black, 0.05 );
                    width: 100%;
                    opacity: 0;
                    cursor: not-allowed;
                    color: $black;
                    height: var(--vw_42);
                    margin-bottom: 0;
                    &:not(.active):hover {
                        background-color: white !important;
                    }
                    &.visible {
                        opacity: 0.62;
                    }
                    &.active {
                        cursor: pointer;
                        opacity: 1;
                        color: white;
                        border: none;
                        background-color: $green;
                        &:hover {
                            background-color: $blue;
                        }
                    }
                }
            }
            .message-status {
                margin-top: 0;
                margin-bottom: 0;
                text-align: center;
                margin-bottom: var(--vw_89);
            }
        }
    }

    @media only screen and (max-width: 767px) {
        .contact-section {
            padding-top: var(--vw_233);
            padding-bottom: var(--vw_144);
            .first-line {
                display: block;
                padding-left: var(--vw_55);
                padding-right: var(--vw_55);
                & > div {
                    h2 {
                        margin-top: 0;
                        margin-bottom: var(--vw_89);
                        font-size: var(--vw_89);
                    }
                    p {
                        span {
                            display: none;
                        }
                    }
                }
            }
            .second-line {
                display: none;
            }
        }
    }

</style>
