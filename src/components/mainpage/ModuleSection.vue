<template>
    <div class="modules-section">
        <div class="first-line">
            <div></div>
            <div>
                <h2>Momentum <br>Application Modules</h2>
                <p>Brighteye’s Momentum software platform includes twelve application modules that collectively constitute a comprehensive and fully integrated MOM solution.</p>
            </div>
            <div></div>
        </div>
        <show-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
            <div>
                <div class="icon-line">
                    <div></div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/1.svg">
                            <p>Dashboards</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/2.svg">
                            <p>Quality Control</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/3.svg">
                            <p>Knowledge</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/4.svg">
                            <p>Reporting</p>
                        </div>
                    </div>
                </div>
                <div class="icon-line">
                    <div></div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/5.svg">
                            <p>Personnel</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/6.svg">
                            <p>Labelling</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/7.svg">
                            <p>Batching</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/8.svg">
                            <p>Historian</p>
                        </div>
                    </div>
                </div>
                <div class="icon-line">
                    <div></div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/9.svg">
                            <p>APS</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/10.svg">
                            <p>Track & Trace</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/11.svg">
                            <p>WMS</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/12.svg">
                            <p>Digital Trail</p>
                        </div>
                    </div>
                </div>
            </div>
        </show-at>
        <hide-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
            <div>
                <div class="icon-line">
                    <div></div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/1.svg">
                            <p>Dashboards</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/2.svg">
                            <p>Quality Control</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/3.svg">
                            <p>Knowledge</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/4.svg">
                            <p>Reporting</p>
                        </div>
                    </div>
                </div>
                <div class="icon-line">
                    <div></div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/5.svg">
                            <p>Personnel</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/6.svg">
                            <p>Labelling</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/7.svg">
                            <p>Batching</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/8.svg">
                            <p>Historian</p>
                        </div>
                    </div>
                </div>
                <div class="icon-line">
                    <div></div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/9.svg">
                            <p>APS</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/10.svg">
                            <p>Track & Trace</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/11.svg">
                            <p>WMS</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/static/svg/icons/12.svg">
                            <p>Digital Trail</p>
                        </div>
                    </div>
                </div>
            </div>
        </hide-at>
        <div class="go-line">
            <p><router-link to="/modules" @click.native="$scrollToTop" class="bg-hover">Modules page</router-link></p>
        </div>
    </div>
</template>

<script>
    import {showAt, hideAt} from 'vue-breakpoints'

    export default {
        name: "ModulesSection",
        components: { hideAt, showAt }
    }
</script>

<style lang="scss">

    @import "src/assets/scss/variables";
    @import "src/assets/scss/mixins";

    .modules-section {
        .first-line {
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;
            text-align: center;
            h2 {
                @include text-margin( var(--vw_42), var(--vw_144), var(--vw_55) );
            }
            p {
                @include text-margin( var(--vw_26), var(--vw_21), var(--vw_144) );
                opacity: 0.62;
            }
        }
        .icon-line {
            display: grid;
            grid-template-columns: 2fr 3fr 3fr 3fr 3fr 2fr;
            text-align: center;
            margin-bottom: var(--vw_68);
            img {
                width: var(--vw_144);
            }
            p {
                hite-space: nowrap;
                font-weight: 600;
                margin-top: var(--vw_21);
            }
        }
        .go-line {
            text-align: center;
            margin-top: var(--vw_55);
            display: inline-block;
            width: 100%;
            cursor: pointer;
            a {
                height: var(--vw_55);
                line-height: var(--vw_55);
                border-radius: calc( var(--vw_55) / 2 );
                margin-top: 0;
                display: inline-block;
                padding-left: var(--vw_26);
                padding-right: var(--vw_26);
                margin-bottom: var(--vw_144);
                font-weight: bold;
                background-color: var(--mc_blue);
                color: white;
                text-decoration: none;
                &:hover {
                    background-color: $blue;
                    color: white;
                }
            }
        }
    }

    @media only screen and (max-width: 767px) {
        .modules-section {
            padding-left: var(--vw_55);
            padding-right: var(--vw_55);
            background-color: $very_light_grey;
            .first-line {
                display: block;
                h2 {
                    padding-top: var(--vw_178);
                    margin-top: 0;
                    margin-bottom: 0;
                    font-size: var(--vw_89);
                }
                p {
                    font-size: var(--vw_55);
                    margin-top: var(--vw_89);
                    margin-bottom: var(--vw_144);
                }
            }
            .icon-line {
                display: block;
                img{
                    width: var(--vw_178);
                }
                & > div {
                    float: left;
                    height: calc( ( 100vw - 3 * var(--vw_55) ) / 2 );
                    width: calc( ( 100vw - 3 * var(--vw_55) ) / 2 );
                    background-color: white;
                    margin-bottom: var(--vw_55);
                    display: grid;
                    align-items: center;
                    border-radius: var(--vw_21);
                    &:first-child {
                        display: none;
                    }
                    &:nth-child(2n) {
                        margin-right: var(--vw_55);
                    }
                    p {
                        margin-top: var(--vw_42);
                        font-weight: 400;
                    }
                }
            }
            .go-line {
                a {
                    height: var(--vw_89);
                    line-height: var(--vw_89);
                    border-radius: var(--vw_13);
                    margin-bottom: var(--vw_233);
                }
            }
        }
    }
</style>
