<template>
    <div id="controllers">
        <section class="controllers">
            <div class="container">
                <div class="title">
                    <h1>Non-Coffee</h1>
                    <h2>Refresh your day with coffee-free deliciousness</h2>
                </div>
                <div class="items">
                    <!--ITEM---->
                    <div class="card-space">SSSS
                        <div class="card">
                            <div class="image-wrap"><img src="@\assets\img\product\non-coffee\ChocoPanda.png" alt="atrolab37"></div>
                            <h2>Choco Wacko</h2>
                            <p>Rich, creamy chocolate delight</p>
                        </div>
                    </div>
                    <!--ITEM---->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap"><img src="@\assets\img\product\non-coffee\GreenPanda.png" alt="atrolab37"></div>
                            <h2>Classic Matcha</h2>
                            <p>Smooth & refreshing matcha</p>
                        </div>
                    </div>
                    <!--ITEM---->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap"><img src="@\assets\img\product\non-coffee\PinkPanda.png" alt="atrolab37"></div>
                            <h2>Milky Strawberry</h2>
                            <p>Sweet strawberry & creamy milk</p>
                        </div>
                    </div>

                    <!--ITEM---->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap"><img src="@\assets\img\product\non-coffee\PurplePanda.png" alt="atrolab37"></div>
                            <h2>Sweet Taro</h2>
                            <p>Creamy, sweet taro goodness</p>
                        </div>  
                    </div>
                    <!--ITEM---->
                    <div class="card-space">
                        <div class="card">
                            <div class="image-wrap"><img src="@\assets\img\product\non-coffee\YellowPanda.png" alt="atrolab37"></div>
                            <h2>Mango Float</h2>
                            <p>Creamy tropical mango refreshment</p>
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


    .title{
        justify-items: center;
        align-items: center;
        text-align: center;
        line-height: 10px;
        padding-bottom: 100px;

        h1{
            font-size: 100px;
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
            padding: 20px;
            font-family: Arial, Helvetica, sans-serif;
            line-height: 40px;

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
                width: 200px;
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