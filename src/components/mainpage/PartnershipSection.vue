<template>
    <div class="partnership-section" id="partnership">
        <div class="section_name_membrane">
            <div class="section_name">
                <span>Partnerships</span>
            </div>
        </div>
        <div class="first-line">
            <div></div>
            <h2>Productive partnerships drive successful <br>projects</h2>
            <div></div>
            <p>At Brighteye, we believe that successful MOM improvement projects require productive partnerships among our clients’ IT and operations teams, integration partners, and Brighteye’s internal team of project managers, analysts, and software developers. Therefore, creating and nurturing such partnerships has always been part of Brighteye’s business DNA.</p>
        </div>
        <div class="second-line">
            <div></div>
            <div class="option-wrapper">
                <div class="option">
                    <h4>A universal network of <br>system integration</h4>
                    <div></div>
                    <div class="text-wrapper">
                        <p>Brighteye works with a broad network of capable and trusted integration partners who can provide certified Momentum project leaders, analysts, and software engineers.</p>
                    </div>
                    <div></div>
                    <div class="button-wrapper">
                        <router-link to="/universalnetwork" @click.native="$scrollToTop"><button :class="'bg-hover bg-' + getCollorByUrlName('UniversalNetwork')">Learn more</button></router-link>
                    </div>
                </div>
                <div class="option">
                    <h4>The Brighteye client <br>relationship model</h4>
                    <div></div>
                    <div class="text-wrapper">
                        <p>The Brighteye client relationship model is designed to be flexible and adaptable. <br>Our client partnerships are structured based on the client’s goals and ambitions for a MOM improvement project.</p>
                    </div>
                    <div></div>
                    <div class="button-wrapper">
                        <router-link to="/clientrelationship" @click.native="$scrollToTop"><button :class="'bg-hover bg-' + getCollorByUrlName('ClientRelationship')">Learn more</button></router-link>
                    </div>
                </div>
                <div class="option">
                    <h4>Brighteye's MOM <br>engineers</h4>
                    <div></div>
                    <div class="text-wrapper">
                        <p>Systems integrators play a vital role in the success of Momentum implementation projects. Therefore, Brighteye provides our integration partners robust support services to ensure that projects are completed effectively and efficiently.</p>
                    </div>
                    <div></div>
                    <div class="button-wrapper">
                        <router-link to="/momengineers" @click.native="$scrollToTop"><button :class="'bg-hover bg-' + getCollorByUrlName('MomEngineers')">Learn more</button></router-link>
                    </div>
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
    @import "src/assets/scss/mixins";

    .partnership-section {
        padding-bottom: var(--vw_144);
        position: relative;
        h2 {
            @include text-margin( var(--vw_42), var(--vw_144), var(--vw_89) );
        }
        .first-line {
            display: grid;
            grid-template-columns: 1fr 2fr 1fr 3fr 1fr;
            p {
                @include text-margin( var(--vw_26), var(--vw_144), var(--vw_89) );
                opacity: 0.62;
            }
        }
        .second-line {
            display: grid;
            grid-template-columns: 1fr 6fr 1fr;
            .option-wrapper {
                border-top: 1px solid rgba( black, 0.1 );
                .option {
                    display: grid;
                    grid-template-columns: 9fr 3fr 19fr 2fr 3fr;
                    border-bottom: 1px solid rgba( black, 0.1 );
                    h4 {
                       font-size: var(--vw_26);
                    }
                    p {
                        font-size: var(--vw_21);
                    }
                    button {
                        float: right;
                        margin-bottom: 0;
                        margin-top: calc( 50% - ( var(--vw_34) / 2 ) );
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 767px) {
        .partnership-section {
            padding-bottom: 0;
            padding-top: var(--vw_233);
            .first-line {
                padding-left: var(--vw_55);
                padding-right: var(--vw_55);
                display: block;
                h2 {
                    margin-top: 0;
                    font-size: var(--vw_89);
                    margin-bottom: 0;
                }
                p {
                    margin-top: var(--vw_89);
                    font-size: var(--vw_55);
                    margin-bottom: var(--vw_144);
                }
            }
            .second-line {
                display: block;
                .option-wrapper {
                    border-top: none;
                    .option {
                        display: block;
                        border-bottom: none;
                        padding: var(--vw_144) var(--vw_55);
                        &:nth-child(2n - 1) {
                            background-color: $very_light_grey;
                        }
                        &:last-child {
                            padding-bottom: var(--vw_233);
                        }
                        h4 {
                            margin-top: 0;
                            font-size: var(--vw_68);
                            margin-bottom: var(--vw_89);
                        }
                        .text-wrapper {
                            display: block;
                            p {
                                margin-top: 0;
                                font-size: var(--vw_55);
                            }
                        }
                        .button-wrapper {
                            display: inline-block;
                            button {
                                float: left;
                                margin-top: var(--vw_89);
                            }
                        }
                    }
                }
            }
        }
    }

</style>
