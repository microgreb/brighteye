<template>
    <div class="methodology-section" id="methodology">
        <div class="section_name_membrane">
            <div class="section_name">
                <span>Methodology</span>
            </div>
        </div>
        <div></div>
        <div class="left-side">
            <div class="sticky">
                <h2>Gain momentum faster with Brighteye's methodology</h2>
                <p class="opac">Brighteye’s innovative methodology for managing MOM improvement projects streamlines the work required to install, integrate, and deploy the Momentum software platform. Our proven approach ensures that implementation projects are designed properly and executed effectively and efficiently, which speeds up the implementation process and enables our customers to quickly gain the benefits of the Momentum platform.</p>
                <h3 v-bind:class="{active : active === 1 }" class="blue"><a href="#continuous" v-smooth-scroll>Continuous Development and Feedback</a></h3>
                <h3 v-bind:class="{active : active === 2 }" class="yellow"><a href="#devops" v-smooth-scroll>DevOps software</a></h3>
                <h3 v-bind:class="{active : active === 3 }" class="green"><a href="#brightbank" v-smooth-scroll>BrightBank</a></h3>
            </div>
        </div>
        <div  class="right-side">
            <div class="software-wrapper">
                <div class="anchor" id="continuous"></div>
                <router-link to="/continuous" @click.native="$scrollToTop">
                    <img src="/static/svg/met1.svg">
                </router-link>
                <h3><router-link class="blue" to="/continuous" @click.native="$scrollToTop">Continuous Development and Feedback</router-link></h3>
                <p>Brighteye’s MOM improvement methodology is based on transparent and continuous software configuration enabled by continuous, real-time communication and continuous, real-time feedback.</p>

                <router-link to="/continuous" @click.native="$scrollToTop">
                    <button :class="'bg-hover bg-' + getCollorByUrlName('ContinuousPage')">Learn more</button>
                </router-link>

            </div>
            <div class="software-wrapper">
                <div class="anchor" id="devops"></div>
                <router-link to="/devops" @click.native="$scrollToTop">
                    <img src="/static/svg/met3.svg">
                </router-link>
                <h3><router-link class="yellow" to="/devops" @click.native="$scrollToTop">Azure DevOps software</router-link></h3>
                <p>Brighteye’s methodology for managing and executing MOM improvement projects is grounded in tested and proven agile software development principles and methods.</p>
                <router-link to="/devops" @click.native="$scrollToTop">
                    <button :class="'bg-hover bg-' + getCollorByUrlName('DevopsPage')">Learn more</button>
                </router-link>
            </div>
            <div class="software-wrapper">
                <div class="anchor" id="brightbank"></div>
                <router-link to="/brightbank" @click.native="$scrollToTop">
                    <img src="/static/svg/met2.svg">
                </router-link>
                <h3><router-link class="green" to="/brightbank" @click.native="$scrollToTop">BrightBank</router-link></h3>
                <p>BrightBank is Brighteye’s solution for sharing information and knowledge to support the learning needs of customers. The BrightBank solution includes both an online repository of knowledge resources and self-paced training with personal instructor support.</p>
                <router-link to="/brightbank" @click.native="$scrollToTop">
                    <button class="no-margin-bottom" :class="'bg-hover bg-' + getCollorByUrlName('BrightbankPage')">
                    Learn more
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import NavMixin from '../../mixins/preFooterNavigation';

    export default {
        name: "SoftwareSection",
        mixins: [NavMixin],
        data: function() {
            return {
                active: 1
            }
        },
        methods: {
            handleScroll () {

                this.active = 1;
                if( document.getElementById('devops').getBoundingClientRect().top < 1 ) {
                    this.active = 2;
                }
                if( document.getElementById('brightbank').getBoundingClientRect().top < 1 ) {
                    this.active = 3;
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

    .methodology-section {
        display: grid;
        grid-template-columns: 1fr 3fr 3fr 1fr;
        padding-top: var(--vw_144);
        padding-bottom: var(--vw_144);
        position: relative;
        .sticky {
            position: sticky;
            top: var(--vw_144);
        }
        h2 {
            margin-bottom: var(--vw_26);
            margin-top: 0;
        }
        p {
            padding-right: 10%;
            font-size: var(--vw_21);
            margin-top: 0;
        }
        .color-blue {
            background-color: var(--mc_blue);
        }
        .color-green {
            background-color:  var(--mc_green);
        }
        .color-yellow {
            background-color:  var(--mc_yellow);
        }
        .left-side {
            h3 {
                opacity: 0.38;
                font-weight: normal;
                max-width: 60%;
                &.active {
                    opacity: 1;
                    font-weight: bold;
                    &.blue {
                        color: var(--mc_blue);
                    }
                    &.green {
                        color: var(--mc_green);
                    }
                    &.yellow {
                        color: var(--mc_yellow);
                    }
                }
                a {
                    color: inherit;
                    text-decoration: inherit;
                    font-weight: inherit;
                    &:hover {
                        font-weight: bold;
                    }
                }
            }
        }
        .right-side {
            padding-top: var(--vw_13);
            scroll-behavior: smooth;
            overflow-y: scroll;
            .software-wrapper {
                position: relative;
                h3 {
                    margin-bottom: var(--vw_13);
                    cursor: pointer;
                    a {
                        color: var(--mc_black);;
                        text-decoration: none;
                        &:hover {
                            text-decoration: underline;
                            &.blue {
                                color: var(--mc_blue);
                            }
                            &.green {
                                color: var(--mc_green);
                            }
                            &.yellow {
                                color: var(--mc_yellow);
                            }
                        }
                    }
                }
                button {
                    margin-bottom: var(--vw_89);
                    &.no-margin-bottom {
                        margin-bottom: 0;
                    }
                }
                .anchor {
                    position: absolute;
                    top: -$vw_144;
                }
            }
        }
    }

    @media only screen and (max-width: 767px) {
        .methodology-section {
            display: block;
            .left-side {
                padding-left: var(--vw_55);
                padding-right: var(--vw_55);
                h2 {
                    margin-bottom: var(--vw_89);
                }
                p {
                    font-size: var(--vw_55);
                }
                h3 {
                    display: none;
                }
            }
            .right-side {
                .software-wrapper {
                    img {
                        margin-top: var(--vw_89);
                    }
                    h3 {
                        padding-left: var(--vw_55);
                        padding-right: var(--vw_55);
                        font-size: var(--vw_68);
                        margin-bottom: var(--vw_89);
                    }
                    p {
                        padding-left: var(--vw_55);
                        padding-right: var(--vw_55);
                        font-size: var(--vw_55);
                    }
                    button {
                        margin-top: var(--vw_89);
                        margin-left: var(--vw_55);
                    }
                }
            }
        }
    }
</style>
