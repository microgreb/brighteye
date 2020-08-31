<template>
    <div class="community-section" id="community">
        <div class="section_name_membrane">
            <div class="section_name">
                <span>Community</span>
            </div>
        </div>
        <div class="first-line">
            <div></div>
            <h2>Let us be part of your MOM improvement team</h2>
            <div></div>
            <div>
                <p>Brighteye believes in the power of working together with brilliant people and specialist companies so that we can rollout our software and services as quickly and efficiently as possible. We like to work in small dedicated teams together with the client and the integrator.</p>
            </div>
        </div>
        <div class="second-line">
            <div></div>
            <hide-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
                <img src="/static/svg/integ_mob.svg">
            </hide-at>
            <div>
                <h2>Integration partners</h2>
                <p>Our network of highly capable and flexible integration partners supports our clients with dedicated MOM implementation teams that include project managers, analysts, and software engineers. And because we have integration partners located around the world, we can support your MOM improvement efforts wherever you are.</p>
                <div>
                    <router-link to="/partners" @click.native="$scrollToTop"><button class="bg-hover">Our partners</button></router-link>
                </div>
            </div>
            <show-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
                <div>
                    <img src="/static/svg/integ.svg">
                </div>
            </show-at>
        </div>
        <div class="third-line">
            <div></div>
            <div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div class="image-preload">
            <img src="/static/svg/partners/1_hover.svg">
            <img src="/static/svg/partners/2_hover.svg">
            <img src="/static/svg/partners/3_hover.svg">
            <img src="/static/svg/partners/4_hover.svg">
            <img src="/static/svg/partners/5_hover.svg">
        </div>
    </div>
</template>

<script>
    import {showAt, hideAt} from 'vue-breakpoints'

    export default {
        name: "CommunitySection",
        components: { hideAt, showAt }
    }
</script>

<style lang="scss">

    @import "src/assets/scss/variables";;
    @import "src/assets/scss/mixins";

    .community-section {
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
            }
        }
        .second-line {
            display: grid;
            grid-template-columns: 1fr 3fr 4fr;
            background-color: $very_light_grey;
            position: relative;
            & > div {
                h2 {
                    @include text-margin( var(--vw_42), var(--vw_144), var(--vw_55) );
                }
                p {
                    margin-top: 0;
                    margin-bottom: var(--vw_55);
                }
                button {
                    margin-bottom: var(--vw_144);
                    width: auto;
                    padding-left: var(--vw_21);
                    padding-right: var(--vw_21);
                    height: var(--vw_42);
                }
            }
        }
        .third-line {
            display: grid;
            grid-template-columns: 1fr 6fr 1fr;
            background-color: $very_light_grey;
            padding-bottom: var(--vw_144);
            display: none;
            & > div {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                & > div {
                    display: grid;
                    &:nth-child(1) {
                        grid-template-columns: 1fr 1fr;
                        & > div:nth-child(1) {
                            background-image: url("/static/svg/partners/1.svg");
                            &:hover {
                                background-image: url("/static/svg/partners/1_hover.svg");
                            }
                        }
                        & > div:nth-child(2) {
                            background-image: url("/static/svg/partners/2.svg");
                            &:hover {
                                background-image: url("/static/svg/partners/2_hover.svg");
                            }
                            background-position: right;
                            width: calc(100% + var(--vw_21));
                        }
                    }
                    &:nth-child(2) {
                        grid-template-columns: 1fr;
                        & > div {
                            background-image: url("/static/svg/partners/3.svg");
                            &:hover {
                                background-image: url("/static/svg/partners/3_hover.svg");
                            }
                            background-position: center;
                        }
                    }
                    &:nth-child(3) {
                        grid-template-columns: 1fr 1fr;
                        & > div:nth-child(1) {
                            background-image: url("/static/svg/partners/4.svg");
                            &:hover {
                                background-image: url("/static/svg/partners/4_hover.svg");
                            }
                        }
                        & > div:nth-child(2) {
                            background-image: url("/static/svg/partners/5.svg");
                            &:hover {
                                background-image: url("/static/svg/partners/5_hover.svg");
                            }
                            background-position: right;
                        }
                    }
                    & > div {
                        height: var(--vw_55);
                        background-repeat: no-repeat;
                    }
                }
            }
        }
        .image-preload {
            display: none;
        }
    }

    @media only screen and (max-width: 767px) {
        .community-section {
            .first-line {
                display: block;
                padding: var(--vw_233) var(--vw_55) var(--vw_144) var(--vw_55);
                h2 {
                    margin-bottom: var(--vw_89);
                }
                & > div {
                    p {
                        margin-top: 0;
                    }
                }
            }
            .second-line {
                display: block;
                padding-left: var(--vw_55);
                padding-right: var(--vw_55);
                & > div {
                    h2 {
                        margin-top: 0;
                        font-size: var(--vw_89);
                        margin-bottom: var(--vw_89);
                    }
                    p {
                        margin-bottom: var(--vw_89);
                    }
                    & > div > a > button {
                        height: var(--vw_110);
                        line-height: var(--vw_110);
                        border-radius: var(--vw_13);
                        margin-bottom: var(--vw_144);
                        font-size: var(--vw_55);
                        padding-left: var(--vw_34);
                        padding-right: var(--vw_34);
                    }
                }
            }
            .third-line {
                display: none;
            }
        }
    }

</style>