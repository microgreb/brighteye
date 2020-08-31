<template>
    <div class="empty-section" :class="[background, height]" :id="background + '-image'"></div>

</template>

<script>
    export default {
        name: "EmptySection",
        props: {
            background: {
                type: String,
                default: ''
            },
            height: {
                default: ''
            }
        },
    }
</script>

<style lang="scss">
    @import "src/assets/scss/variables";

    .empty-section {
        height: var(--vw_610);
        background-color: $light_grey;
        background-size: cover;
        background-position: center;
        &.high {
            //height: var(--vw_987);
        }
        &.medium {
            height: var(--vw_754);
        }
        &.momentum {
            background-image: url('/static/images/momentum.png');
        }
        &.methodology {
            background-image: url('/static/images/methodolog.png');
        }
        &.partnerships {
            background-image: url('/static/images/partnerships.png');
        }
        &.brightway {
            background-image: url('/static/images/brightway.png');
        }
        &.community {
            background-image: url('/static/images/community.png');
        }

        @media only screen and (max-width: 767px) {
            &.momentum {
                background-image: url('/static/images/momentum_mob.png');
                //margin-top: var(--vw_89);
            }
            &.methodology {
                background-image: url('/static/images/methodolog_mob.png');
            }
            &.partnerships {
                background-image: url('/static/images/partnerships_mob.png');
            }
            &.brightway {
                background-image: url('/static/images/brightway_mob.png');
            }
            &.community {
                background-image: url('/static/images/community_mob.png');
            }
        }

    }
</style>