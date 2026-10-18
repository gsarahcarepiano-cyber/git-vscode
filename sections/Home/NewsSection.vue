<template>
    <div id="home_news">
        <section class="home_news">
            <div class="container">
                <div class="title">
                    <h1>Contact Information</h1>
                </div>
                <div class="items">
                    <!--News 1-->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap"><img src="@\assets\img\news\Facebook.png" alt="atrolab37">
                            </div>
                            <h2>Facebook</h2>
                            <p>Panda Coffee</p>
                            <div class="date-text">

                            </div>
                        </div>
                    </div>
                    <!--News 2-->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap"><img src="@\assets\img\news\gmail.webp"
                                    alt="atrolab37"></div>
                            <h2>Gmail</h2>
                            <p>pandacoffeeph@gmail.com</p>
                            <div class="date-text">
                            </div>
                        </div>
                    </div>
                    <!--News 3-->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap"><img src="@\assets\img\news\Contact.png"
                                    alt="atrolab37"></div>
                            <h2>Contact Number</h2>
                            <p>0948-048-1581</p>
                            <div class="date-text">
                            </div>
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
    background-color: #ffffffca;

    .title {
        justify-items: center;
        align-items: center;

        h1 {
            font-size: 80px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
                height: 400px;
                display: flex;
                flex-direction: column;
                place-items: center;
                background-color: #f5f5f5;
                border-radius: 20px;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 15px 0px;
                padding: 25px;
                font-family: Arial, Helvetica, sans-serif;

                h3 {
                    top: 0;
                    left: 0;
                }


                .image-wrap {
                    width: 200x;
                    height: 300px;
                    align-items: center;
                    display: flex;
                }

                img {
                    width: 250px;
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

                    h3 {
                        top: 0;
                        left: 0;
                    }

                    .image-wrap {
                        width: 200px;
                        height: 200px;
                        align-items: center;
                        display: flex;
                    }

                    img {
                        width: 200px;
                    }
                }
            }
        }
    }
}
</style>