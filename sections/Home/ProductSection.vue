<template>
    <div id="home_products">
        <section class="home_products">
            <div class="container">
                <div class="title">
                    <h1>Featured Items</h1>
                </div>
                <div class="items">
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap"><img src="@\assets\img\product\hardware_synth\astrolab37.avif"
                                    alt="atrolab37"></div>
                            <h2>Astro Lab 37</h2>
                            <p>Avant-garde Stage Keyboard</p>
                        </div>
                    </div>
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap"><img
                                    src="@\assets\img\product\hardware_synth\drumbruteimpact1984.avif"
                                    alt="drumbruteimpact1984"></div>
                            <h2>Drum Brute Impact 1984</h2>
                            <p>Defiant analog sound</p>
                        </div>
                    </div>
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap"><img src="@\assets\img\product\hardware_synth\polybrute12.avif"
                                    alt="polybrute12"></div>
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
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    background-color: #f5f5f5;
    text-align: center;


    .title {
        justify-items: center;
        align-items: center;

        h1 {
            font-size: 80px;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            color: #222267;
        }
    }

    .items {
        display: grid;
        grid-template-columns: auto auto auto;

        .card-space {
            width: 500px;
            height: 550px;
            place-content: center;
            display: flex;


            .card {
                width: 350px;
                height: 300px;
                display: flex;
                flex-direction: column;
                place-items: center;
                background-color: #f5f5f5;
                border-radius: 20px;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 15px 0px;
                padding: 25px;
                font-family: Arial, Helvetica, sans-serif;
                line-height: 10px;

                div.card:hover {
                    width: 360px;
                    height: 410px;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 15px 10px;
                }

                .image-wrap {
                    width: 300px;
                    height: 250px;
                    align-items: center;
                    place-content: center;
                    display: flex;
                }

                img {
                    width: 300px;
                    place-items: center;
                    transition: width 0.25s;
                    transition-timing-function: cubic-bezier(0.42, 0, 0.31, 1.03);
                }

                img:hover {
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
        background-color: #ffffffca;
        

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
                    height: 400px;
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