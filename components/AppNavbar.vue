<template>
    <div class="navbar">
        <div class="logo">
            <a @click="scrollToSection('home')"><img src="@\assets\img\graphic\title.png" alt="logo"></a>
        </div>
        <div class="menu">
            <a @click="scrollToSection('home')" class="button-text">Home</a>
            <div class="dropdown">
                <a @click="scrollToSection('menu')" class="button-text">Menu</a>
                <div class="submenu">
                    <a @click="$router.push('coffee')" class="button-text">Coffee</a>
                    <a @click="$router.push('noncoffee')" class="button-text">Non-Coffee</a>
                </div>
            </div>
            <a @click="$router.push('aboutus')" class="button-text">About Us</a>
        </div>
    </div>
</template>

<script setup>
// defineEmits(['navigate'])

import { useRouter } from 'vue-router'

const router = useRouter()

const scrollToSection = async (id) => {
    if (router.currentRoute.value.path !== '/') {
        await router.push('/')
    }

    setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
        })
    })
}
</script>

<style scoped>
.navbar {
    position: fixed;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;

    .logo {
        display: flex;
        align-items: center;
        padding-left: 20px;
        padding-top: 20px;
        cursor: pointer;

        img {
            width: 200px
        }
    }

    .menu {
        display: grid;
        grid-template-columns: 100px 100px 100px;
        text-align: center;
        font-size: 20px;
        padding-right: 40px;
        gap: 20px;
        cursor: pointer;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;

        a {
            text-decoration: none;
            color: inherit;
        }

        .button-text {
            text-decoration: none;
            color: inherit;
            font-size: 20px;
            transition: font-size 0.25s;
        }

        .button-text:hover {
            font-size: 22px;
        }
    }


}

.dropdown {
    position: relative;

    .submenu {
        min-width: 200px;
        min-height: 0px;
        position: absolute;
        display: flex;
        flex-direction: column;
        background-color: transparent;
        text-align: left;
        color: transparent;
        min-width: 0px;
        border-radius: 5px;
        padding: 5px 5px;
        box-shadow: 0px 0px #666666;
        gap: 0px;
        font-size: 0px;
        transition: font-size 0.25s, gap 1.0s, background-color 0.25s, color 0.25s, min-height 0.25s, box-shadow 0.25s;
        transition-timing-function: cubic-bezier(0.22, 0.05, 0.08, 0.99);
    }
}

.dropdown:hover .submenu {
    min-height: 100px;
    display: flex;
    font-size: 20px;
    color: #222222;
    background-color: #f5f5f5;
    box-shadow: 0px 5px #666666;
    gap: 10px;

}

/*@media detects the size of the screen. The max-width here is the threshold...*/
/*...that tells the website to adjust the size if the width of the screen is 768 in this case*/
@media (max-width: 768px) {
    .navbar {
        height: 150px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        gap: 10px;

        .logo {
            justify-content: center;
            padding: 0;
        }

        .menu {
            font-size: 1em;
            padding: 0;
        }
    }
}
</style>