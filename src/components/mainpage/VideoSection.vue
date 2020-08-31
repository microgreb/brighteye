<template>
    <div class="video-section">

        <menu-component default_height="high"/>
        <div class="section-content">
            <show-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">

                <video-bg :sources="['/static/videoplayback.mp4']" img="/static/images/bg.png">
                    <div class="content-inner">
                        <div></div>
                        <ol>
                            <li><a href="#solutions" v-smooth-scroll>Solutions</a></li>
                            <li><a href="#momentum" v-smooth-scroll>Momentum</a></li>
                            <li><a href="#methodology" v-smooth-scroll>Methodology</a></li>
                            <li><a href="#partnership" v-smooth-scroll>Partnership</a></li>
                            <li><a href="#cases" v-smooth-scroll>Cases</a></li>
                            <li><a href="#community" v-smooth-scroll>Community</a></li>
                            <li><a href="#contacts" v-smooth-scroll>Contacts</a></li>
                        </ol>

                        <div class="description">
                            <h2>Gain business momentum in manufacturing</h2>
                            <p><a href="#momentum" v-smooth-scroll>Momentum</a>, our universal software platform, provides MOM scale solutions to maximise manufacturing momentum across the total production process.</p>
                            <p>Eliminate the constraints in Manufacturing Operations Management and unleash your fullest potential. Experience The <a href="#solutions" v-smooth-scroll>Bright Way</a> to keep your business moving.</p>
                        </div>
                    </div>
                </video-bg>

            </show-at>
            <hide-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
                <div class="description">
                    <h2>Gain business momentum<br> in manufacturing</h2>
                    <p><a href="#momentum" v-smooth-scroll>Momentum</a>, our universal software platform, provides MOM scale solutions to maximise manufacturing momentum across the total production process.</p>
                    <p>Eliminate the constraints in Manufacturing Operations Management and unleash your fullest potential. Experience The <a href="#solutions" v-smooth-scroll>Bright Way</a> to keep your business moving.</p>
                </div>
            </hide-at>
        </div>

        <div class="scroll-line">
            <div class="mouse">
                <div class="wheel"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import MenuComponent from '../components/MenuComponent'
    import {showAt, hideAt} from 'vue-breakpoints'

    export default {
        name: 'Videosection',
        components: { MenuComponent, hideAt, showAt }
    }
</script>

<style lang="scss">

    @import "src/assets/scss/variables";

    .video-section {
        width: 100vw;
        height: 100vh;
        background-image: url('/static/images/bg.png');
        background-size: cover;
        color: white;
        .section-content {
            position: absolute;
            width: 100%;
            top: 0;
            .VideoBg__content {
                display: grid;
                align-items: center;
                background-color: rgba(black, 0.62);
                .content-inner {
                    display: grid;
                    grid-template-columns: 2fr 6fr 5fr 3fr;
                    text-align: left;
                    height: calc( 100vh - var(--vw_144) - var(--vw_144) );
                    ol {
                        margin-top: var(--vw_21);
                        padding-left: 0;
                        counter-reset: item;
                        list-style-type: none;
                        li {
                            display: block;
                            font-size: var(--vw_26);
                            position: relative;
                            line-height: var(--vw_55);
                            font-weight: bold;
                            cursor: pointer;
                            &:before {
                                content: "0"counter(item) "  ";
                                counter-increment: item;
                                font-size: var(--vw_13);
                                position: absolute;
                                left: -$vw_34;
                                top: -$vw_13;
                                opacity: 0.38;
                            }
                            a {
                                color: inherit;
                                text-decoration: none;
                                &:hover {
                                    color: $blue;
                                    text-decoration: underline;
                                }
                            }
                        }
                    }
                    .description {
                        display: table;
                        margin: auto;
                        p {
                            font-weight: 600;
                        }
                    }
                }
            }
        }
        .scroll-line {
            height: var(--vw_144);
            text-align: center;
            bottom: 0;
            position: absolute;
            width: 100%;
            .mouse {
                margin: auto;
                height: var(--vw_55);
                width: var(--vw_34);
                border: var(--vw_2) solid white;
                border-radius: calc( var(--vw_34) / 2);
                box-sizing: border-box;
                padding-top: var(--vw_8);
                opacity: 0.62;
                .wheel {
                    height: var(--vw_13);
                    width: var(--vw_5);
                    border-radius: calc(var(--vw_5) / 2);
                    background-color: white;
                    margin: auto;
                    animation-name: scroll;
                    animation-duration: 2.2s;
                    animation-timing-function: ease-in;
                    animation-iteration-count: infinite;
                }
                @keyframes scroll {
                    0% { opacity: 0; }
                    10% { transform: translateY(0); opacity: 1; }
                    100% { transform: translateY(15px); opacity: 0;}
                }
            }
        }
    }

    @media only screen and (max-width: 767px) {
        .video-section {
            background-image: url('/static/images/f3.jpg');
            .section-content {
                height: 100vh;
                display: grid;
                align-items: center;
                background-color: rgba( black, 0.7);
                .description {
                    padding-left: var(--vw_55);
                    padding-right: var(--vw_55);
                }
            }
            .scroll-line {
                display: none;
            }
        }
    }
</style>