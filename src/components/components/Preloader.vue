<template>
    <section id="page-preloader">
        <!--<div class="status"></div>-->
        <div class="preloader-box">
            <div class="spinner-bg"><img src="/static/images/preloader/bg.svg"></div>
            <div class="main-img"><img src="/static/images/preloader/main.svg"></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Preloader",
        mounted(){

            let element = document.getElementById('page-preloader'),
                windowWidth = window.outerWidth,
                timeOut = windowWidth > 768 ? 1000 : 1500;

            element.classList.add('loading');
            setTimeout(() => {
                document.getElementById('page-preloader').classList.add('hidden')
            }, timeOut);
        },
    }
</script>

<style lang="scss" scoped>
    #page-preloader{
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 800;
        background-color: var(--mc_black);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 1;
        transition: .3s;
        visibility: visible;
        &.hidden{
            opacity: 0;
            visibility: hidden;
            transition: .3s;
        }
        .status{
            height: 3px;
            width: 100%;
            background: linear-gradient(to right, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255,255,255,0.05) 100%);
            &::before{
                content: '';
                width: 0;
                display: block;
                height: 100%;
                background-color: var(--mc_blue);
                transition: all 1.5s ease-in-out;
            }
        }
        &.loading{
            .status::before{
                width: 100%;
                transition: all 1.5s ease-in-out;
            }
        }
        .preloader-box{
            height: var(--vw_110);
            width: var(--vw_110);
            position: relative;
            .main-img{
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
            }
        }
        .spinner-bg{
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: .38;
            width: 100%;
            animation:spin 4s linear infinite;
        }

        @keyframes spin { 100% { -webkit-transform: rotate(-360deg); transform:rotate(-360deg); } }

        @media all and (max-width: 768px){
            .status{
                &::before{
                    transition: all 2.5s ease-in-out;
                }
            }
            &.loading{
                .status::before{
                    transition: all 2.5s ease-in-out;
                }
            }
            .preloader-box{
                height: var(--vw_178);
                width: var(--vw_178);
            }
        }
    }
</style>