<template>
    <div class="about-us">
        <section class="about-us">
            <div class="container">
                <div class="title">
                    <h1>About Us</h1>
                </div>
                <div class="paragraphs">
                    <div class="left">
                        <p>We create instruments and effects that encourage musical discovery, reward curiosity, and savor the artistic process. We’re an international team of passionate people, on a mission to navigate uncharted sonic territory in the name of creative empowerment.</p>
                    </div>
                    <div class="right">
                        <p>From the raw analog power of Brute synthesizers to our faithful virtual instrument emulations of V Collection, we provide musicians with an inspiring sonic experience that's instantly accessible, exploratory, and thrilling.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(180deg,rgba(255, 255, 255, 1) 0%, rgba(222, 251, 255, 1) 52%, rgba(99, 232, 255, 1) 100%);

    .title{
        height: 10vh;
        display: flex;
        justify-items: center;
        align-items: center;
        padding: 50px 20px;

        h1{
            font-size: 80px;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            color: #222267;
        }
        
    }

    .paragraphs{
        width: 100%;
        height: 40vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: space-between;
        

        p{
            font-size: 30px;
            padding: 20px;
            font-family: Arial, Helvetica, sans-serif;
        }

        .left{
            width: 50vw;
            height: 50vh;
        }

        .right{
            width: 50vw;
            height: 50vh;
        }
    }
}

@media (max-width: 768px) {
    .container{
    width: 100%;
    height: 100vh;
    display: flex;

    .title{
        height: 10vh;
        display: flex;
        justify-items: center;
        align-items: center;
        padding: 50px 20px;

        h1{
            font-size: 60px;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            color: #222267;
        }
        
    }

    .paragraphs{
        width: 100%;
        height: 40vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: space-between;
        

        p{
            font-size: 25px;
            padding: 20px;
            font-family: Arial, Helvetica, sans-serif;
        }

        .left{
            width: 50vw;
            height: 50vh;
        }

        .right{
            width: 50vw;
            height: 50vh;
        }
    }
}
}
</style>