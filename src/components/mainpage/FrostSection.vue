<template>
    <div class="frost-section" id="frost">
        <div class="section_name_membrane">
            <div class="section_name">
                <!--<span>Frost & Sullivan</span>-->
            </div>
        </div>
        <div class="first-line">
            <div></div>
            <div>
                <img src="/static/svg/frost/frost.svg">
            </div>
            <div></div>
            <div>
                <h2>Frost & Sullivan</h2>
                <p>For its unrivaled expertise, technology insight, and customer-centric approach, Brighteye earns Frost & Sullivan’s 2020 Europe Customer Value Leadership Award in the manufacturing operations management software in the food and beverage market.</p>
                <a target="_blank" href="/static/pdf/final.pdf">
                    <button class="bg-hover bg-blue">Full research report</button>
                </a>
            </div>
        </div>
        <div class="second-line">
            <div></div>
            <div class="blocks">
                <div>
                    <div class="img-wrapper">
                        <img src="/static/svg/frost/arc.svg">
                    </div>
                    <h4>ARC Advisory Group</h4>
                    <p>The company’s focus is reflected in its branding, “Gain Business Momentum.” The highly scalable Momentum platform has been engineered to meet the needs of discrete, batch, and process manufacturers of all sizes.</p>
                    <a target="_blank" href="https://www.arcweb.com/market-studies/manufacturing-execution-systems-process-industries">
                        <button class="bg-hover bg-blue">Learn more</button>
                    </a>
                </div>
                <div>
                    <div class="img-wrapper">
                        <img src="/static/svg/frost/cgi.svg">
                    </div>
                    <h4>CGI</h4>
                    <p>Momentum has the most extensive functionality in today’s MES market, in one platform. Brighteye delivers an open system that is very easy to integrate with other level 4 – 2 systems. Brighteye has the best TCO in today’s MES market.</p>
                    <a target="_blank" href="https://www.cgi.com/en/manufacturing/2018-mes-product-survey">
                        <button class="bg-hover bg-blue">Learn more</button>
                    </a>
                </div>
                <div>
                    <div class="img-wrapper">
                        <img src="/static/svg/frost/microsoft.svg">
                    </div>
                    <h4>Microsoft</h4>
                    <p>I hereby confirm that BrightEye NV has satisfied the requirements and attained the following competencies in the Microsoft Partner Network program: GOLD DevOps and Silver Application Development.</p>
                    <a target="_blank" href="/static/pdf/microsoft.pdf">
                        <button class="bg-hover bg-blue">Learn more</button>
                    </a>
                </div>
            </div>
        </div>
        <div class="third-line">
            <h2>Some of our clients</h2>
            <div class="logos">
                <div v-for="(link, logo) in logos">
                    <a :href="link" target="_blank">
                        <img :src="'/static/svg/logos/' + logo + '.svg'">
                    </a>
                </div>
            </div>
            <show-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">

            </show-at>
            <hide-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">

            </hide-at>
        </div>

    </div>
</template>

<script>
    import {showAt, hideAt} from 'vue-breakpoints'

    export default {
        name: "FrostSection",
        components: { hideAt, showAt },
        data: function () {
            return {
                logos: {
                    'unilever': 'https://www.unilever.com',
                    'verstegen': 'https://verstegen.eu',
                    'puffin': 'https://www.puffinproduce.com',
                    'pocoloco': 'https://www.pocoloco.be',
                    'mccain': 'https://nl.mccain.be',
                    'merefsa': 'https://www.merefsa.com/empresa/procesos/proceso-diseno.html',
                    'olam': 'https://www.olamgroup.com/products/confectionery-beverage-ingredients/cocoa.html',
                    'mulder': 'https://www.muldernaturalfoods.com',
                    'teijin': 'https://www.teijinaramid.com',
                    'agristo': 'https://agristo.com',
                    'findus': 'https://www.findus.com',
                    'mydibel': 'https://www.mydibel.be',
                    'kamaz': 'https://kamaz.ru',
                    'farmfrites': 'https://www.farmfrites.com',
                    'savencia': 'https://www.savencia-fromagedairy.com',
                    'haacht': 'https://haacht.com',
                    'ardo': 'https://ardo.be',
                    'westmalle': 'https://trappistwestmalle.be'
                }
            }
        }
    }
</script>

<style lang="scss">

    @import "src/assets/scss/variables";;
    @import "src/assets/scss/mixins";

    .frost-section {
        position: relative;
        background-color: #F6FAFA;
        .first-line {
            display: grid;
            grid-template-columns: 3fr 4fr 1fr 5fr 3fr;
            padding: var(--vw_144) 0;
            h2 {
                padding-top: var(--vw_42);
            }
            p, h2 {
                margin-block-start: 0;
                margin-block-end: 0;
                margin-bottom: var(--vw_42);
            }
            button {
                width: auto;
                padding-left: var(--vw_16);
                padding-right: var(--vw_16);
            }
        }
        .second-line {
            display: grid;
            grid-template-columns: 1fr 6fr 1fr;
            background-color: $very_light_grey;
            position: relative;
            padding-bottom: var(--vw_144);
            .blocks {
                display: flex;
                align-content: space-between;
                & > div {
                    width: auto;
                    background-color: white;
                    padding: var(--vw_42) var(--vw_34);
                    .img-wrapper {
                        height: var(--vw_144);
                    }
                    p {
                        font-size: var(--vw_21);
                        margin-bottom: var(--vw_42);
                    }
                    &:nth-child(1) {
                        img {
                            height: var(--vw_89);
                        }
                    }
                    &:nth-child(2) {
                        margin-left: var(--vw_21);
                        margin-right: var(--vw_21);
                        img {
                            height: var(--vw_42);
                        }
                    }
                    &:nth-child(3) {
                        img {
                            width: var(--vw_144);
                        }
                    }
                }
            }
        }
        .third-line {
            background-color: white;
            padding-bottom: var(--vw_144);
            padding-top: var(--vw_144);
            h2 {
                margin-top: 0;
                margin-bottom: var(--vw_89);
                text-align: center;
            }
            .logos {
                display: grid;
                grid-template-columns: var( --vw_233 ) var( --vw_233 ) var( --vw_233 ) var( --vw_233 ) var( --vw_233 ) var( --vw_233 );
                justify-content: center;
                text-align: center;
                & > div {
                    padding: var( --vw_21 );
                    height: var( --vw_144 );
                    a {
                        display: flex;
                        height: 100%;
                        align-items: center;
                        justify-content: center;
                        img {
                            max-width: 100%;
                            max-height: 100%;
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 767px) {
        .frost-section {
            .first-line {
                display: inline-block;
                padding-left: var(--vw_55);
                padding-right: var(--vw_55);
                p {
                    margin-bottom: var(--vw_89);
                }
                h2 {
                    padding-top: var(--vw_89);
                }
                button {
                    padding-left: var(--vw_42);
                    padding-right: var(--vw_42);
                }
            }
            .second-line {
                display: inline-block;
                padding-bottom: 0;
                .blocks {
                    flex-direction: column;
                    & > div {
                        padding-left: var(--vw_55);
                        padding-right: var(--vw_55);
                        padding-top: var(--vw_110);
                        padding-bottom: var(--vw_89);
                        border-top: var(--vw_3) solid #e6e6e6;
                        p {
                            font-size: var(--vw_55);
                            margin-bottom: var(--vw_89);
                        }
                        &:nth-child(1) {
                            img {
                                height: var(--vw_178);
                            }
                        }
                        &:nth-child(2) {
                            margin-left: 0;
                            margin-right: 0;
                            //background-color: #f6fafa;
                            img {
                                height: var(--vw_89);
                            }
                        }
                        &:nth-child(3) {
                            border-bottom: var(--vw_3) solid #e6e6e6;
                            img {
                                width: var(--vw_288);
                            }
                        }
                    }
                }
            }
            .third-line {
                padding-left: calc( var(--vw_55 ) - var(--vw_21) );
                padding-right: calc( var(--vw_55 ) - var(--vw_21) );
                .logos {
                    grid-template-columns: 1fr 1fr 1fr;
                    & > div {
                        padding: var(--vw_42) var(--vw_21);
                        height: var(--vw_288);
                    }
                }
            }
        }
    }

</style>
