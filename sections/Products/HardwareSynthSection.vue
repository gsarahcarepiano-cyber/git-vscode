<template>
    <div id="hardware_synth">
        <section class="hardware_synth">
            <div class="container">
                <div class="title">
                    <h1>Hardware Synthesizers</h1>
                    <h2>Powerful synthesis at your fingertips</h2>
                </div>
                <div class="items">
                    <!--ITEM-->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap">
                                <img src="@\assets\img\product\hardware_synth\astrolab37.avif" alt="atrolab37">
                            </div>
                            <h2>Astro Lab 37</h2>
                            <p>Avant-garde Stage Keyboard</p>
                        </div>
                    </div>
                    <!--ITEM-->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap">
                                <img src="@\assets\img\product\hardware_synth\astrolab61.avif" alt="atrolab37">
                            </div>
                            <h2>Astro Lab 61</h2>
                            <p>Avant-garde Stage Keyboard</p>
                        </div>
                    </div>
                    <!--ITEM-->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap">
                                <img src="@\assets\img\product\hardware_synth\astrolab88.avif" alt="atrolab37">
                            </div>
                            <h2>Astro Lab 88</h2>
                            <p>Avant-garde Stage Keyboard</p>
                        </div>
                    </div>

                    <!--ITEM-->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap">
                                <img src="@\assets\img\product\hardware_synth\drumbrute.avif" alt="atrolab37">
                            </div>
                            <h2>Drumbrute</h2>
                            <p>Pure Analog Beats</p>
                        </div>
                    </div>
                    <!--ITEM-->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap">
                                <img src="@\assets\img\product\hardware_synth\drumbruteimpact.avif" alt="atrolab37">
                            </div>
                            <h2>Drumbrute Impact</h2>
                            <p>The Beast Strikes Back</p>
                        </div>
                    </div>
                    <!--ITEM-->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap">
                                <img src="@\assets\img\product\hardware_synth\drumbruteimpact1984.avif" alt="atrolab37">
                            </div>
                            <h2>Drumbrute Impact 1984</h2>
                            <p>Defiant analog sound</p>
                        </div>
                    </div>

                    <!--ITEM-->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap">
                                <img src="@\assets\img\product\hardware_synth\matrixbrute.avif" alt="atrolab37">
                            </div>
                            <h2>Matrixbrute</h2>
                            <p>Analog Avant-Garde</p>
                        </div>
                    </div>
                    <!--ITEM-->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap">
                                <img src="@\assets\img\product\hardware_synth\microbrute.avif" alt="atrolab37">
                            </div>
                            <h2>Microbrute</h2>
                            <p>Looks Tiny, Sounds Massive</p>
                        </div>
                    </div>
                    <!--ITEM-->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap">
                                <img src="@\assets\img\product\hardware_synth\minibrute2.avif" alt="atrolab37">
                            </div>
                            <h2>Minibrute 2</h2>
                            <p>Wired Up, analog mutant</p>
                        </div>
                    </div>

                    <!--ITEM-->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap">
                                <img src="@\assets\img\product\hardware_synth\minibrute2s.avif" alt="atrolab37">
                            </div>
                            <h2>Minibrute 2</h2>
                            <p>Unrestrained Analog</p>
                        </div>
                    </div>
                    <!--ITEM-->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap">
                                <img src="@\assets\img\product\hardware_synth\polybrute.avif" alt="atrolab37">
                            </div>
                            <h2>Polybrute</h2>
                            <p>Morphing analog polysynth</p>
                        </div>
                    </div>
                    <!--ITEM-->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap">
                                <img src="@\assets\img\product\hardware_synth\polybrute12.avif" alt="atrolab37">
                            </div>
                            <h2>Polybrute 12</h2>
                            <p>The art of expression</p>
                        </div>
                    </div>
                    

                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    background: radial-gradient(circle,rgba(230, 253, 255, 1) 0%, rgba(245, 245, 245, 1) 25%, rgba(245, 245, 245, 1) 43%, rgba(217, 253, 255, 1) 55%, rgba(240, 251, 255, 1) 77%, rgba(227, 249, 255, 1) 100%);
    padding-bottom: 50px;
    padding-top: 100px;
    
    .title{
        justify-items: center;
        align-items: center;
        text-align: center;
        line-height: 20px;

        h1{
            font-size: 80px;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            color: #222267;
        }

        h2{
            font-size: 30px;
            line-height: 30px;
            font-family: Arial, Helvetica, sans-serif;
            color: #3b3bba;
        }
    }

    .items{
        display: grid;
        grid-template-columns: auto auto auto;

        .card-space{
            width: 500px;
            height: 550px;
            place-content: center;
            display: flex;
        

            .card{
            width: 350px;
            height: 400px;
            display: flex;
            flex-direction: column;
            place-items: center;
            background-color: #f5f5f5;
            border-radius: 20px;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 15px 0px;
            padding: 25px;
            font-family: Arial, Helvetica, sans-serif;
            line-height: 10px;

            div.card:hover{
                width: 360px;
                height: 410px;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 15px 10px;
            }

            .image-wrap{
                width: 300px;
                height: 250px;
                align-items: center;
                place-content: center;
                display: flex;
            }

            img{
                width: 300px;
                place-items: center;
                transition: width 0.25s;
                transition-timing-function: cubic-bezier(0.42, 0, 0.31, 1.03);
            }

            img:hover{
                width: 320px;
            }
        }
        }
    }
}

@media (max-width: 768px) {
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        text-align: center;
        background-color: #ffffffca;
        padding-top: 150px;

        .title {
            justify-items: center;
            align-items: center;

            h1 {
                font-size: 60px;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                color: #222267;
            }

        }

        .items {
            display: grid;
            grid-template-columns: auto auto;

            .card-space {
                width: 300px;
                height: 550px;
                place-content: center;
                display: flex;

                .card {
                    width: 200px;
                    height: 350px;
                    display: flex;
                    flex-direction: column;
                    place-items: center;
                    background-color: #f5f5f5;
                    border-radius: 20px;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 15px 0px;
                    padding: 25px;
                    font-family: Arial, Helvetica, sans-serif;
                    line-height: 30px;

                    h3 {
                        top: 0;
                        left: 0;
                    }

                    h2{
                        font-size: 20px;
                    }

                    .image-wrap {
                        width: 200px;
                        height: 150px;
                        align-items: center;
                        display: flex;
                    }

                    img {
                        width: 200px;
                    }

                        img:hover {
                        width: 220px;
                    }
                }
            }
        }
    }
}

</style> 