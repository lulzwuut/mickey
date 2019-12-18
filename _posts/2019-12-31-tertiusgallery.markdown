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

<p style="text-align: center">Website is now live at: <a href="http://gallery.tertius.nl/" style="color: blue; text-decoration: underline;">gallery.tertius.nl</a></p>

<div class="one-time">
  <div><img src="assets/images/posts/tert1img.png" alt=""></div>
  <div><img src="assets/images/posts/tert2img.png" alt=""></div>
  <div><img src="assets/images/posts/tert3img.png" alt=""></div>
</div>
  <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <script type="text/javascript" src="https://kenwheeler.github.io/slick/slick/slick.js"></script>
  
<script type="text/javascript">
	$(document).ready(function() {
		$('.one-time').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
    });
	});
</script>