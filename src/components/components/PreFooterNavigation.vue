<template>
    <section class="pre-footer-navigation" :class="customClass" v-if="navigationData">
        <router-link :to="{name: navigationData.prev.urlName}" class="prev nav-block" :class="navigationData.prev.hoverClass">
            <div class="arrow display-on-desktop">
                <img src="/static/svg/icons/arrow.svg">
            </div>
            <div class="nav-data">
                <div class="description">
                    <span>Previous page <img src="/static/svg/icons/arrow_mobile.svg" class="display-on-mobile"></span>
                    <span>{{navigationData.prev.pageCategory}}</span>
                </div>
                <div class="title">
                    {{navigationData.prev.pageTitle}}
                </div>
            </div>
        </router-link>
        <router-link :to="{name: navigationData.next.urlName}" class="next nav-block" :class="navigationData.next.hoverClass">
            <div class="nav-data">
                <div class="description">
                    <span>Next page <img src="/static/svg/icons/arrow_mobile.svg" class="display-on-mobile"></span>
                    <span>{{navigationData.next.pageCategory}}</span>
                </div>
                <div class="title">
                    {{navigationData.next.pageTitle}}
                </div>
            </div>
            <div class="arrow display-on-desktop">
                <img src="/static/svg/icons/arrow.svg">
            </div>
        </router-link>
    </section>
</template>

<script>
    export default {
        name: "PreFooterNavigation",
        props: {
            customClass: {
                type: String,
                default: ''
            },
            navigationData: {
                type: Object,
                default: null
            }
        },
    }
</script>

<style lang="scss">
    @import "../../../src/assets/scss/variables";

    .pre-footer-navigation{
        height: var(--vw_377);
        background-color: white;
        display: grid;
        grid-template-columns: 1fr 1fr;
        border-top: 2px solid $black;
        border-bottom: 2px solid $black;
        overflow: hidden;
        box-sizing: border-box;
        margin-top: 2px;
        .display-on-desktop{
            display: block;
        }
        .display-on-mobile{
            display: none;
        }
        a{
            text-decoration: none;
            color: $black;
            font-size: var(--vw_26);
        }
        .nav-block{
            display: grid;
            align-items: center;
            background-color: white;
            transition: .3s;
            .arrow{
                /*justify-content: center;*/
                /*display: flex;*/
                img {
                    position: relative;
                    transition: .3s;
                }
            }
            &:hover{
                transition: .3s;
                color: white;
                img{
                    filter: invert(1) contrast(2);
                }
            }
            &.black{
                &:hover{
                    background-color: var(--mc_black);
                }
            }
            &.blue{
                &:hover{
                    background-color: var(--mc_blue);
                }
            }
            &.yellow{
                &:hover{
                    background-color:  var(--mc_yellow);
                }
            }
            &.green{
                &:hover{
                    background-color:  var(--mc_green);
                }
            }
        }
        .description{
            span{
                display: block;
            }
        }
        .prev{
            border-right: 1px solid $black;
            grid-template-columns: 1fr 3fr;
        }
        .next{
            border-left: 1px solid $black;
            grid-template-columns: 3fr 1fr;
            .arrow{
                img{
                    transform: rotate(180deg);
                }
            }
            .nav-data{
                text-align: right;
            }
        }
        .title{
            padding-top: var(--vw_42);
            font-size: var(--vw_34);
        }
        @media all and (max-width: 768px){
            display: flex;
            flex-direction: column-reverse;
            height: auto;
            border-width: 1px;
            .display-on-desktop{
                display: none;
            }
            .display-on-mobile{
                display: block;
            }
            .nav-block{
                height: var(--vw_754);
                padding: 0 var(--vw_55);
                transition: .3s;
                color: white;
                grid-template-columns: 1fr;
                img{
                    filter: invert(1) contrast(2);
                }
                &.black{
                    background-color: white;
                    color: var(--mc_black);
                    img{
                        filter: none;
                    }
                }
                &.blue{
                    background-color: var(--mc_blue);
                }
                &.yellow{
                    background-color: var(--mc_yellow);
                }
                &.green{
                    background-color: var(--mc_green);
                }
                &.prev,
                &.next{
                    border: none;
                    .nav-data{
                        text-align: left;
                    }
                }
                &.prev{
                    border-top: 1px solid var(--mc_black);
                    .nav-data{
                        display: grid;
                        grid-row: 1;
                        .description img{
                            transform: rotate(180deg);
                        }
                    }
                }
                .arrow{
                    justify-content: flex-end;
                    img{
                        max-width: var(--vw_178);
                        width: 100%;
                        height: auto;
                        object-fit: contain;
                    }
                }
            }
            .description{
                img{
                    max-width: var(--vw_178);
                }
                span {
                    font-size: var(--vw_55);
                    &:first-child{
                        padding-bottom: var(--vw_110);
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                }
            }
            .title{
                font-size: var(--vw_68);
                padding-top: 0;
            }
        }
    }
</style>