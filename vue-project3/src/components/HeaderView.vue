<template>
    <div id="wrapper">
            <!-- header begin -->
            <header class="header-fullwidth transparent">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            
                            <div class="de-flex">
                                <div class="de-flex-col">
                                    <!-- logo begin -->
                                    <div id="logo">
                                        <RouterLink to="02-index">
                                            <img class="logo" src="@/assets/images/logo.png" alt="">
                                        </RouterLink>
                                    </div>
                                    <!-- logo close -->
                                </div>

                                <div class="de-flex-col">

                                    <ul id="mainmenu">
                                        <li>
                                            <RouterLink to="/">Home</RouterLink>
                                        </li>
                                        <li><RouterLink to="/about">About</RouterLink></li>
                                        <li>
                                            <RouterLink to="#">Rooms</RouterLink>
                                            <ul>
                                                <li><RouterLink to="02-room-2-cols">2 Columns</RouterLink></li>
                                                <li><RouterLink to="02-room">3 Columns</RouterLink></li>
                                                <li><RouterLink to="02-room-single">Room Single</RouterLink></li>
                                            </ul>
                                        </li>
                                        <li><RouterLink to="02-booking">Booking</RouterLink></li>
                                        <li><RouterLink to="02-offer">Offers</RouterLink></li>
                                        <li><RouterLink to="02-blog">Blog</RouterLink></li>
                                        <li><RouterLink to="02-gallery">Gallery</RouterLink></li>
                                        <li><RouterLink to="02-contact">Contact</RouterLink></li>
                                    </ul>
                                </div>

                                <div class="de-flex-col">
                                    <div class="d-extra">
                                        <RouterLink class="btn-main" to="02-booking">Booking</RouterLink>
                                    </div>
                                    <div id="menu-btn"></div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </header>
            <!-- header close -->

            <!-- menu overlay begin -->
            <div id="menu-overlay" class="slideDown">
                <div class="container-fluid">
                    <div class="row-fluid">
                        <div class="col-md-12">
                            <div id="mo-button-close">
                                <div class="line-1"></div>
                                <div class="line-2"></div>
                            </div>

                            <div class="pt80 pb80">
                                <div class="mo-nav text-center">
                                    <RouterLink to="02-index">
                                        <img class="logo" src="@/assets/images/logo.png" alt="">
                                    </RouterLink>

                                    <div class="spacer-single"></div>

                                    <!-- mainmenu begin -->
                                    <ul id="mo-menu">
                                        <li>
                                            Home
                                            <ul>
                                                <li><RouterLink to="02-index">Fullscreen Slider</RouterLink></li>
                                                <li><RouterLink to="02-index-slider-2">Fullscreen Slider 2</RouterLink></li>
                                                <li><RouterLink to="02-index-slider-3">Fullscreen Slider 3</RouterLink></li>
                                                <li><RouterLink to="02-index-full-page">Full Page</RouterLink></li>
                                                <li><RouterLink to="02-index-video-background">Fullsreen Video</RouterLink></li>
                                                <li><RouterLink to="02-index-room-slider-1">New: Room Slider 1</RouterLink></li>
                                                <li><RouterLink to="02-index-snowy">New: Slider + Snow</RouterLink></li>
                                            </ul>
                                        </li>
                                        <li><RouterLink to="02-about">About</RouterLink></li>
                                        <li>
                                            Rooms
                                            <ul>
                                                <li><RouterLink to="02-room-2-cols">2 Columns</RouterLink></li>
                                                <li><RouterLink to="02-room">3 Columns</RouterLink></li>
                                                <li><RouterLink to="02-room-single">Room Single</RouterLink></li>
                                            </ul>
                                        </li>
                                        <li><RouterLink to="02-booking">Booking</RouterLink></li>
                                        <li><RouterLink to="offer">Offers</RouterLink></li>
                                        <li><RouterLink to="02-blog">Blog</RouterLink></li>
                                        <li><RouterLink to="02-gallery">Gallery</RouterLink></li>
                                        <li><RouterLink to="02-contact">Contact</RouterLink></li>
                                    </ul>
                                    <!-- mainmenu close -->

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>