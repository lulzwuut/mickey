---
layout: post
title:  "TERTIUS Gallery Website"
date:   2019-12-31 01:00:00
last_modified_at:  2019-12-31 01:00:00
excerpt: 
categories: webdev
url: 'tertiusgallery'
tags:  tertius, gallery, webdesign
image:
  feature: terthero.png
  topPosition: -100px
bgContrast: dark
bgGradientOpacity: darker
syntaxHighlighter: no
---

<p style="text-align: center">Website is now live at: <a href="http://gallery.tertius.nl/">gallery.tertius.nl</a></p>

<div class="container">
	<div class="carousel">
		<input type="radio" id="carousel-1" name="carousel[]" checked>
		<input type="radio" id="carousel-2" name="carousel[]">
     <input type="radio" id="carousel-3" name="carousel[]">
		<input type="radio" id="carousel-4" name="carousel[]">
		<input type="radio" id="carousel-5" name="carousel[]">
		<ul class="carousel__items">
			<li class="carousel__item"><img src="assets/images/posts/tert1img.png" alt=""></li>
			<li class="carousel__item"><img src="assets/images/posts/tert2img.png" alt=""></li>
			<li class="carousel__item"><img src="assets/images/posts/tert3img.png" alt=""></li>
		</ul>
     <div class="carousel__prev">
     	<label for="carousel-1"></label>
     	<label for="carousel-2"></label>
     	<label for="carousel-3"></label>
     	<label for="carousel-4"></label>
     	<label for="carousel-5"></label>
     </div>
     <div class="carousel__next">
       <label for="carousel-1"></label>
       <label for="carousel-2"></label>
       <label for="carousel-3"></label>
       <label for="carousel-4"></label>
       <label for="carousel-5"></label>
     </div>
     <div class="carousel__nav">
       <label for="carousel-1"></label>
       <label for="carousel-2"></label>
       <label for="carousel-3"></label>
       <label for="carousel-4"></label>
       <label for="carousel-5"></label>
     </div>
   </div>
 </div>

<style>
	/**
 * Carousel.sass
 * @author: Dang Van Thanh
 * @github: https://github.com/dangvanthanh/carousel.sass
 * @description: A Simple Carousel Pure CSS Using Sass
 * @version: 1.0.0
 */
%animation-default {
  opacity: 1 !important;
  z-index: 3;
}

@mixin carousel($items, $animation: 'default') {
  .carousel {
    width: 100%;
    position: relative;
    overflow: hidden;

    > input[type="radio"] {
      position: absolute;
      left: 0;
      opacity: 0;
      top: 0;

      &:checked {
        ~ .carousel__items .carousel__item,
        ~ .carousel__prev > label,
        ~ .carousel__next > label {
          opacity: 0;
        }
      }

      @for $i from 1 through $items {
        &:nth-child(#{$i}) {
          &:checked {
            ~ .carousel__items .carousel__item {
              @if $animation == 'default' {
                &:nth-child(#{$i}) {
                  opacity: 1;
                }
              }
            }

            ~ .carousel__prev {
              > label {
                @if $i == 1 {
                  &:nth-child(#{$items}) {
                    @extend %animation-default;
                  }
                } @else if $i == $items {
                  &:nth-child(#{$items - 1}) {
                    @extend %animation-default;
                  }
                } @else {
                  &:nth-child(#{$i - 1}) {
                    @extend %animation-default;
                  }
                }
              }
            }

            ~ .carousel__next {
              > label {
                @if $i == $items {
                  &:nth-child(1) {
                    @extend %animation-default;
                  }
                } @else {
                  &:nth-child(#{$i + 1}) {
                    @extend %animation-default;
                  }
                }
              }
            }

            ~ .carousel__nav {
              > label {
                &:nth-child(#{$i}) {
                  background: #ccc;
                  cursor: default;
                  pointer-events: none;
                }
              }
            }
          }
        }
      }
    }

    &__items {
      margin: 0;
      padding: 0;
      list-style-type: none;
      width: 100%;
      height: 600px;
      position: relative;
    }

    &__item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: opacity 2s;
      -webkit-transition: opacity 2s;

      img {
        width: 100%;
        vertical-align: middle;
      }
    }

    &__prev,
    &__next {
      > label {
        border: 1px solid #fff;
        border-radius: 50%;
        cursor: pointer;
        display: block;
        width: 40px;
        height: 40px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        transition: all .3s ease;
        -webkit-transition: all .3s ease;
        opacity: 0;
        z-index: 2;

        &:hover,
        &:focus {
          opacity: .5 !important;
        }

        &:before,
        &:after {
          content: "";
          position: absolute;
          width: inherit;
          height: inherit;
        }

        &:before {
          background: linear-gradient(to top, #fff 0%, #fff 10%, rgba(51, 51, 51, 0) 10%),
                      linear-gradient(to left, #fff 0%, #fff 10%, rgba(51, 51, 51, 0) 10%);
          width: 60%;
          height: 60%;
          top: 20%;
        }
      }
    }

    &__prev {
      > label {
        left: 2%;

        &:before {
          left: 35%;
          top: 20%;
          transform: rotate(135deg);
          -webkit-transform: rotate(135deg);
        }
      }
    }

    &__next {
      > label {
        right: 2%;

        &:before {
          left: 10%;
          transform: rotate(315deg);
          -webkit-transform: rotate(315deg);
        }
      }
    }

    &__nav {
      position: absolute;
      bottom: 3%;
      left: 0;
      text-align: center;
      width: 100%;
      z-index: 3;

      > label {
        border: 1px solid #fff;
        display: inline-block;
        border-radius: 50%;
        cursor: pointer;
        margin: 0 .125%;
        width: 20px;
        height: 20px;
      }
    }
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

body {
  background: #fcfcfc;
  margin: 0;
}

.container {
  width: 900px;
  min-width: 900px;
  margin: 50px auto;
}

@include carousel(5);
</style>
