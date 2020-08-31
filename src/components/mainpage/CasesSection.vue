<template>
    <div class="cases-section" id="cases">
        <div class="section_name_membrane">
            <div class="section_name">
                <span>Cases</span>
            </div>
        </div>
        <div class="left-column">
            <div></div>
            <div class="menu-column">
                <div>
                    <h3>We celebrate <br class="desktop-br"> our<br class="mobile-br"> customers’ <br class="desktop-br"> successes</h3>
                </div>
                <div class="menu-wrapper">
                    <div class="menu">
                        <a @click="active_customer = 'mulder'" v-bind:class="[{ active: active_customer === 'mulder' }]">Mulder Natural Foods</a>
                        <a @click="active_customer = 'puffin'" v-bind:class="[{ active: active_customer === 'puffin' }]">Puffin Produce Ltd</a>
                        <a @click="active_customer = 'agristo'" v-bind:class="[{ active: active_customer === 'agristo' }]">Agristo</a>
                    </div>
                </div>
                <div>
                    <!--<button>See all cases</button>-->
                </div>
            </div>
        </div>
        <div class="center-column">
            <div></div>
            <show-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
                <div>
                    <h3>{{ customers[active_customer].name }}</h3>
                    <p class="company-text">{{ customers[active_customer].company }}</p>
                    <p><span>Challenges - </span>{{ customers[active_customer].challenges }}</p>
                    <p><span>Successes Achieved - </span>{{ customers[active_customer].success_achieved }}</p>
                </div>
            </show-at>
            <hide-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
                <div>
                    <h3 @click="opened_accordion.mulder = !opened_accordion.mulder">
                        {{ customers.mulder.name }}
                    </h3>
                    <div v-if="opened_accordion.mulder">
                        <p class="company-text">{{ customers.mulder.company }}</p>
                        <p><span>Challenges - </span>{{ customers.mulder.challenges }}</p>
                        <p><span>Successes Achieved - </span>{{ customers.mulder.success_achieved }}</p>
                    </div>
                    <h3 @click="opened_accordion.puffin = !opened_accordion.puffin">
                        {{ customers.puffin.name }}
                    </h3>
                    <div v-if="opened_accordion.puffin">
                        <p class="company-text">{{ customers.puffin.company }}</p>
                        <p><span>Challenges - </span>{{ customers.puffin.challenges }}</p>
                        <p><span>Successes Achieved - </span>{{ customers.puffin.success_achieved }}</p>
                    </div>
                    <h3 @click="opened_accordion.agristo = !opened_accordion.agristo">
                        {{ customers.agristo.name }}
                    </h3>
                    <div  v-if="opened_accordion.agristo">
                        <p class="company-text">{{ customers.agristo.company }}</p>
                        <p><span>Challenges - </span>{{ customers.agristo.challenges }}</p>
                        <p><span>Successes Achieved - </span>{{ customers.agristo.success_achieved }}</p>
                    </div>
                </div>
            </hide-at>
        </div>
        <div class="right-column">
            <div>
                <img :src="'/static/images/' + customers[active_customer].image">
                <p>{{ customers[active_customer].company }}</p>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
    import {showAt, hideAt} from 'vue-breakpoints'

    export default {
        name: "CasesSection",
        components: { hideAt, showAt },
        data: function() {
            return {
                customers: {
                    'agristo' : {
                        'name' : 'Agristo',
                        'image' : 'agristo.png',
                        'company' : 'Agristo is a leading provider of frozen potato products. With four plants located in Belgium and the Netherlands, the company processes about 700,000 tons of finished products each year, and it accounts for 7% of the worldwide market for frozen potato products.',
                        'challenges' : 'Agristo processes a large variety of products packaged in more than 3,000 consumer units. As a result, the company must manage a large volume of customer orders and needs to optimize production activities at each of its four plants. Production optimization is critical because every hour of downtime results in a revenue loss of €40,000 that cannot be recovered.',
                        'success_achieved' : 'By implementing Brighteye’s MOM software platform, Agristo was able to centralize all of its production data. This means that production planning and quality control can be carried out taking into account the actual state of production operations at each of Agristo’s four plants. The synchronization of production data has enabled Agristo to optimize its manufacturing operations and eliminate at least ten hours of downtime per year.'
                    },
                    'mulder' : {
                        'name' : 'Mulder Natural Foods',
                        'image' : 'mulder.svg',
                        'company' : 'Mulder Natural Foods is a European leader in the production of private label breakfast cereals. The company offers customers an extensive range of high-quality products, and provides multiple packaging options. Mulder is active in more than 60 companies worldwide.',
                        'challenges' : 'To meet changing customer demands and reach its growth objectives, Mulder needed to expand its product line quickly and improve its ability to efficiently handle smaller customer orders. The company also needed to reduce its product loss rates and increase overall profitability.',
                        'success_achieved' : 'Brighteye’s MOM solution enabled Mulder to successfully introduce more than 300 new products over a two-month period. The company was also able to reduce its product loss rate from 12% to less than 1%. As a result of its growth strategy, Mulder’s annual turn over grew from €3 million in 2004 to €330 million in 2016.'
                    },
                    'puffin' : {
                        'name' : 'Puffin Produce Ltd',
                        'image' : 'puffin.png',
                        'company' : 'Puffin Produce Ltd. is a rural co-operative in Wales providing fresh produce to the UK market. The company offers customers 150 varieties of high-quality products packaged in 6 sizes. Puffin produces 35,000 tons of products annually, resulting in a turn over of €22 million.',
                        'challenges' : 'As a relatively small organization, Puffin regularly competes with larger enterprises, and to compete effectively, Puffin needed to be able to efficiently handle short production runs.',
                        'success_achieved' : 'By implementing Brighteye’s MOM solution, Puffin increased is ability to detect errors by 20%, and improved its ability to detect substandard products early in the processing value chain. The company also obtained complete traceability of suppliers throughout the value chain and greater insight regarding yields from the field to the customer.'
                    },
                },
                active_customer: 'mulder',
                opened_accordion: {
                    'mulder': true,
                    'puffin': false,
                    'agristo': false
                }
            }
        }
    }
</script>

<style lang="scss">

    @import "src/assets/scss/variables";
    @import "src/assets/scss/mixins";

    .cases-section {
        height: 100vh;
        display: grid;
        grid-template-columns: 5fr 7fr 4fr;
        position: relative;
        .left-column {
            display: grid;
            grid-template-columns: 2fr 2fr 1fr;
            border-right: var(--vw_1) solid rgba( black, 0.1);
            .menu-column {
                display: grid;
                & > * {
                    height: calc( 100vh / 3 );
                    display: grid;
                    align-items: center;
                }
                h3 {
                    margin-top: 0;
                    margin-bottom: 0;
                }
                .menu-wrapper {
                    display: grid;
                    align-items: center;
                    width: 110%;
                    .menu {
                        display: grid;
                        a {
                            line-height: calc( var(--vw_55) + var(--vw_5) );
                            font-size: var(--vw_26);
                            font-weight: normal;
                            color: $black;
                            opacity: 0.38;
                            &.active {
                                font-weight: bold;
                                opacity: 1;
                                color: $blue;
                            }
                        }
                    }
                }
            }
        }
        .center-column {
            display: grid;
            align-items: center;
            grid-template-columns: 1fr 5fr 1fr;
            & > div {
                h3 {
                    font-weight: 600;
                    color: $black;
                }
                p {
                    &.company-text {
                        display: none;
                    }
                    font-size: var(--vw_21);
                    span {
                        opacity: 0.38;
                    }
                }
            }
        }
        .right-column {
            display: grid;
            align-items: center;
            grid-template-columns: 1fr 1fr;
            img {
                width: 100%;
            }
            p {
                margin-top: 0;
                font-size: var(--vw_16);
            }
        }
    }

    @media only screen and (max-width: 767px) {
        .cases-section {
            display: block;
            padding: var(--vw_233) var(--vw_55);
            height: auto;
            .left-column {
                display: block;
                border-right: none;
                .menu-column {
                    display: block;
                    & > div {
                        display: block;
                        height: auto;
                        &.menu-wrapper, button {
                            display: none;
                        }
                        h3 {
                            font-size: var(--vw_89);
                        }
                    }
                }

            }
            .center-column {
                display: block;
                padding-top: var(--vw_89);
                border-bottom: var(--vw_3) solid rgba( $blue, 0.38 );
                min-height: calc( 3 * var(--vw_144) );
                box-sizing: content-box;
                & > div {
                    h3 {
                        font-size: var(--vw_55);
                        line-height: var(--vw_144);
                        margin-top: 0;
                        margin-bottom: 0;
                        border-top: var(--vw_3) solid rgba( $blue, 0.38 );
                        background-image: url("/static/svg/subpages/glaz.svg");
                        background-repeat: no-repeat;
                        background-position: right center;
                        background-size: var(--vw_68);
                        font-weight: bold;
                    }
                    & > div {
                        padding-top: var(--vw_42);
                        padding-bottom: var(--vw_89);
                        p {
                            font-size: var(--vw_55);
                            &.company-text {
                                display: inline;
                                font-size: var(--vw_42);
                                opacity: 0.5;
                            }
                            span {
                                color: $blue;
                                opacity: 1;
                                font-weight: 600;
                            }
                        }
                    }
                }
            }
            .right-column {
                display: none;
            }
        }
    }

</style>
