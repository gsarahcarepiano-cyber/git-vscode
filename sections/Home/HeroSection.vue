<template>
    <div id="hero">
        <section class="hero">
            <div class="container">
                <div class="left">
                    <h1><span style="color: #4fb315;">Chill</span> with a drink.</h1>
                    <h1><span style="color: #4fb315;">Chill</span> like a panda.</h1>
                    <button @click="$router.push('products')">EXPLORE PRODUCTS</button>
                    <!--Learned this button trick from https://stackoverflow.com/questions/45638239/enclosing-a-router-link-tag-in-a-button-in-vuejs-->
                </div>
                <div class="split"></div>
                <div class="right">
                    <img src="@\assets\img\graphic\hero_coffee.png" alt="Coffee">
                </div>
                
            </div>
        </section>
    </div>
</template>

<style scoped>
.container{
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: row;
    justify-content: center;    
    background-color: rgb(136, 218, 92);
    align-content: center;

    .right{
        align-content: center;
        background-color: rgb(176, 255, 133);
        padding-right: 50px;
            img{
            width: 600px;
        }
    }

    .split{
        width: 200px;
    }

    .left{
        display:block;
        align-content: center;
        justify-content: center;
        line-height: 100px;
        

        h1{
            font-size: 80px;
            line-height: 50px; 
            font-family:Verdana, Geneva, Tahoma, sans-serif;
            color: #f5f5f5;
            
        }

        h2{
            font-weight:lighter;
            font-family: Arial, Helvetica, sans-serif;
            line-height: 0px;
        }

        button{
            width: 400px;
            height: 60px;
            font-size: 30px;
            border: 0;
            padding: 10px;
            background: rgb(243, 255, 243);
            border-radius: 10px;
            color: #4fb315;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            cursor:pointer;
            box-shadow: 0px 0px 10px 0px #4d714c63;
            transition: width 0.25s, height 0.25s, font-size 0.5s, box-shadow 0.5s;
        }

        button:hover{
            box-shadow: 0px 0px 20px 5px #4d714c63;
            width: 410px;
            height: 70px;
            font-size: 32px;
        }
    }
}

@media (max-width: 768px) {
        .container{
            width: 100%;
            height: 700px;
            display: flex;
            flex-direction: column;
            justify-content: center;    
            align-items: center;
            background: radial-gradient(circle,rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 64%, rgba(252, 240, 255, 1) 97%, rgba(222, 237, 255, 1) 100%);
            padding-top: 40px;

            .left{
                display: none;
                align-content: center;
                padding-right: 50px;
                    img{
                    width: 100px;
                }
            }

            .right{
                display:flex;
                flex-direction: column;
                align-content: center;
                align-items: center;
                justify-content: center;

                h1{
                    font-size: 100px;
                    line-height: 100px;
                    align-items: center;
                    text-align: center;
                    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                    
                }

                h2{
                    font-weight:lighter;
                    text-align: center;
                    font-family: Arial, Helvetica, sans-serif;
                }

                button{
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    width: 300px;
                    height: 50px;
                    font-size: 25px;
                    border: 0;
                    padding: 10px;
                    background: linear-gradient(45deg,rgba(9, 9, 121, 1) 25%, rgba(0, 111, 255, 1) 100%);
                    border-radius: 10px;
                    color: white;
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                    cursor:pointer;
                    box-shadow: 0px 0px 10px 0px #4c5871;
                    transition: width 0.25s, height 0.25s, font-size 0.5s, box-shadow 0.5s;
                }

                button:hover{
                    box-shadow: 0px 0px 20px 5px #4c5871;
                    width: 310px;
                    height: 60px;
                    font-size: 27px;
                }
            }
        }
    }
</style>