<template>
    <div class="momentum-section" id="momentum">
        <div class="first-line">
            <div></div>
            <div>
                <show-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
                    <img src="/static/svg/moment.svg">
                </show-at>
                <hide-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
                    <img src="/static/svg/moment_mob.svg">
                </hide-at>
            </div>
            <div></div>
            <div>
                <h2>Optimize manufacturing operations with Momentum</h2>
                <p>Momentum is Brighteye’s cloud-based MOM software platform that provides enterprise-level manufacturing execution system (MES) capabilities, Warehouse Management (WMS), Advanced Production Scheduling (APS) and much more. The highly scalable Momentum platform has been engineered to meet the needs of discrete, batch, and process manufacturers of all sizes, and is purpose built to enable companies to control and continuously improve their manufacturing operations.</p>
            </div>
        </div>
        <div class="second-line">
            <div></div>
            <div class="learn_more_column">
                <div>
                    <h4>Gain Business Momentum</h4>
                    <p>Momentum provides the control, data, and insights that companies need to optimize the performance of manufacturing Business.</p>
                    <div class="button-wrapper">
                        <router-link to="/gainbusiness" @click.native="$scrollToTop"><button :class="'bg-hover bg-' + getCollorByUrlName('GainBusiness')">Learn more</button></router-link>
                    </div>
                </div>
            </div>
            <div class="learn_more_column">
                <div>
                    <h4>Advanced Manufacturing Technology</h4>
                    <p>Momentum leverages advanced software design, development techniques and cloud ready architecture to deliver MOM class stability.</p>
                    <div class="button-wrapper">
                        <router-link to="/manufacturingtechnology" @click.native="$scrollToTop"><button :class="'bg-hover bg-' + getCollorByUrlName('ManufacturingTechnology')">Learn more</button></router-link>
                    </div>
                </div>
            </div>
            <div class="learn_more_column">
                <div>
                    <h4>Universal User Experience</h4>
                    <p>Momentum provides a simple user interface that users can quickly learn regardless of their previous experience with business software.</p>
                    <div class="button-wrapper">
                        <router-link to="/userexperience" @click.native="$scrollToTop"><button :class="'bg-hover bg-' + getCollorByUrlName('UserExperience')">Learn more</button></router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="third-line">
        </div>
    </div>
</template>

<script>
    import {showAt, hideAt} from 'vue-breakpoints'
    import NavMixin from '../../mixins/preFooterNavigation';
    export default {
        name: "MomentumSection",
        components: { hideAt, showAt },
        mixins: [NavMixin],
    }
</script>

<style lang="scss">
    @import "src/assets/scss/variables";
    @import "src/assets/scss/mixins";

    .momentum-section {
        .first-line {
            display: grid;
            grid-template-columns: 2fr 5fr 1fr 6fr 2fr;
            img {
                margin-top: var(--vw_233);
            }
            h2 {
                @include text-margin( var(--vw_42), var(--vw_144), var(--vw_55) );
            }
            p {
                @include text-margin( var(--vw_26), var(--vw_8), var(--vw_144) );
                opacity: 0.62;
            }
        }
        .second-line {
            display: grid;
            grid-template-columns: 2fr 4fr 4fr 4fr 2fr;
            .learn_more_column {
                position: relative;
                width: 95%;
                border-radius: var(--vw_3);
                background-color: $very_light_grey;
                & > div {
                    display: grid;
                    padding-left: var(--vw_34);
                    padding-right: var(--vw_34);
                    h4 {
                        @include text-margin( var(--vw_21), var(--vw_55), var(--vw_26) );
                    }
                    p {
                        font-size: var(--vw_21);
                        margin-bottom: calc( var(--vw_55) - var(--vw_5) );
                    }
                    .button-wrapper {
                        height: var(--vw_55);
                        button {
                            position: absolute;
                            bottom: 0;
                        }
                    }
                }
            }
        }
        .third-line {
            display: grid;
            grid-template-columns: 2fr 3fr 1fr 3fr 1fr 3fr 3fr;
        }
    }

    @media only screen and (max-width: 767px) {
        .momentum-section {
            .first-line {
                display: block;
                img {
                    margin-top: 0;
                }
                & > div {
                    padding-left: var(--vw_55);
                    padding-right: var(--vw_55);
                    h2 {
                        margin-top: var(--vw_233);
                        font-size: var(--vw_89);
                        margin-bottom: 0;
                        font-weight: 600;
                    }
                    p {
                        font-size: var(--vw_55);
                        margin-top: var(--vw_89);
                        margin-bottom: var(--vw_144);
                    }
                }
            }
            .second-line {
                display: block;
                .learn_more_column {
                    width: 100%;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-position: top;
                    background-color: inherit;
                    &:nth-child(2) {
                        border-top: var(--vw_3) solid $light_grey;
                    }
                    &:nth-child(3) {
                        border-top: var(--vw_3) solid $light_grey;
                        button {
                            background-color: $yellow;
                        }
                    }
                    &:nth-child(4) {
                        border-top: var(--vw_3) solid $light_grey;
                        border-bottom: var(--vw_3) solid $light_grey;
                        button {
                            background-color: $green;
                        }
                    }
                    & > div {
                        padding: var(--vw_144) var(--vw_55);
                        display: block;

                        h4 {
                            font-size: var(--vw_68);
                            margin-top: 0;
                            margin-bottom: 0;
                            font-weight: bold;
                        }
                        p {
                            font-size: var(--vw_55);
                            margin-bottom: var(--vw_89);
                        }
                        .button-wrapper {
                            height: auto;
                            a {
                               button {
                                   position: relative;
                                   margin-bottom: 0;
                               }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
