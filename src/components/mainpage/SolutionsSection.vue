<template>
    <div class="solutions-section" id="solutions">
        <div class="section_name_membrane">
            <div class="section_name">
                <span>Solutions</span>
            </div>
        </div>
        <div class="first-line">
            <div></div>
            <h2>The Bright Way delivers business momentum your way</h2>
            <div></div>
            <div>
                <p>
                    <span>Brighteye takes a holistic and thoughtful approach to every MOM improvement project. We call this approach The Bright Way, and it is based on three core components: The </span>
                    <a href="#momentum" v-smooth-scroll>Momentum</a>
                    <span>software platform, Brighteye’s collaborative</span>
                    <a href="#methodology" v-smooth-scroll>Methodology</a>
                    <span>, Productive </span>
                    <a href="#partnership" v-smooth-scroll>Partnerships</a>
                    <span>with clients and integration partners</span>
                </p>
                <p class="second-p">
                    <span>
                        We work with clients who are at different stages in their journey toward digital manufacturing operations. And while the building blocks are always the same, we tailor The Bright Way experience based on each client’s unique needs, goals, and priorities. In short, The Bright Way can meet you wherever you are on the path to optimized manufacturing.
                    </span>
                </p>
            </div>
        </div>
        <div class="second-line">
            <div></div>
            <div>
                <span>01</span>
                <div class="column-inner">
                    <div>
                        <h4>Momentum Data</h4>
                        <p>Get critical insights about the performance of manufacturing equipment – and immediate ROI – <br class="mobile-br">with this low-cost, no-risk version of <br>The Bright Way experience.</p>
                        <div>
                            <router-link to="/data" @click.native="$scrollToTop"><button :class="'bg-hover bg-' + getCollorByUrlName('DataPage')">Learn more</button></router-link>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div>
                <span>02</span>
                <div class="column-inner">
                    <div>
                        <h4>Momentum Operations</h4>
                        <p>Optimize the effectiveness and efficiency of daily manufacturing operations, eliminate performance constraints, and unleash new capacity with this Bright Way MOM approach.</p>
                        <div>
                             <router-link to="/manufacturing" @click.native="$scrollToTop"><button :class="'bg-hover bg-' + getCollorByUrlName('ManufacturingPage')">Learn more</button></router-link>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div>
                <span>03</span>
                <div class="column-inner">
                    <div>
                        <h4>Momentum Enterprise</h4>
                        <p>Gain the insights you need to prepare your business for the future,make better strategic decisions, and build long-term competitive advantage with a strategic Bright Way incorporation.</p>
                        <div>
                            <router-link to="/strategic" @click.native="$scrollToTop"><button :class="'bg-hover bg-' + getCollorByUrlName('StrategicPage')">Learn more</button></router-link>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavMixin from '../../mixins/preFooterNavigation';

    export default {
        name: "SolutionsSection",
        mixins: [NavMixin],
    }
</script>

<style lang="scss">

    @import "src/assets/scss/variables";
    @import "src/assets/scss/fonts";

    .solutions-section {
        position: relative;
        .first-line {
            display: grid;
            grid-template-columns: 2fr 4fr 1fr 7fr 2fr;
            padding: calc( var(--vw_144) - var(--vw_16) ) 0;
            p, h2 {
                margin-block-start: 0;
                margin-block-end: 0;
            }
            p {
                margin-top: var(--vw_8);
                span {
                    opacity: 0.62;
                }
                a {
                    opacity: 1;
                }
                &.second-p {
                    margin-top: var(--vw_34);
                }
            }
        }
        .second-line {
            display: grid;
            grid-template-columns: 2fr 4fr 4fr 4fr 2fr;
            & > div {
                position: relative;
                display: grid;
                span {
                    opacity: 0.2;
                    font-family: CharterC;
                    font-size: var(--vw_21);
                    padding-bottom: var(--vw_13);
                    width: 90%;
                    border-bottom: 1px solid;
                    display: inline-block;
                }
                .column-inner {
                    display: grid;
                    grid-template-columns: 4fr 1fr;
                    h4 {
                        margin-top: var(--vw_26);
                        margin-bottom: var(--vw_26);
                    }
                    p {
                        font-size: var(--vw_21);
                        margin-top: 0;
                        margin-bottom: calc( var(--vw_55) - var(--vw_5) );
                    }
                    button {
                        margin-bottom: var(--vw_144);
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 767px) {
        body {
            .solutions-section {
                .first-line {
                    display: block;
                    padding: var(--vw_233) var(--vw_55) var(--vw_144) var(--vw_55);
                    p, p.second-p {
                        margin-top: var(--vw_89);
                        font-size: var(--vw_55);
                    }
                }
                .second-line {
                    display: block;
                    & > div {
                        display: block;
                        &:nth-child(2n) {
                            background-color: $very_light_grey;
                        }
                        &:last-child {
                            padding-bottom: var(--vw_89);
                        }
                        &:nth-child(2) {
                            button {
                                //background-color: #00c8ff;
                            }
                        }
                        &:nth-child(3) {
                            button {
                                //background-color: #ffc800;
                                background-color: $yellow;
                            }
                        }
                        &:nth-child(4) {
                            button {
                                //background-color: #00c800;
                                background-color: $green;
                            }
                        }
                        span {
                            font-size: var(--vw_34);
                            width: 100%;
                            padding-bottom: var(--vw_55);
                            display: none;
                        }
                        .column-inner {
                            display: block;
                            padding-left: var(--vw_55);
                            padding-right: var(--vw_55);
                            padding-top: var(--vw_55);
                            h4 {
                                margin-top: var(--vw_89);
                                margin-bottom: var(--vw_55);
                                font-size: var(--vw_68);
                                font-weight: bold;
                            }
                            p {
                                font-size: var(--vw_55);
                                margin-bottom: var(--vw_89);
                            }
                        }
                    }
                }
            }
        }
    }

</style>
