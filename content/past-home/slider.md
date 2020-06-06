---
# Slider widget.
#widget = "slider"  # See https://sourcethemes.com/academic/docs/page-builder/
#headless = true  # This file represents a page section. # Activate this widget? true/false
weight: 25  # Order that this section will appear.

# Slide interval.
# Use `false` to disable animation or enter a time in ms, e.g. `5000` (5s).
#interval = false

# Slide height (optional).
# E.g. `500px` for 500 pixels or `calc(100vh - 70px)` for full screen.
#height = "450px"

# Slides.
# Duplicate an `[[item]]` block to add more slides.
#[[item]]
 # title = " "
 # content = " "
 # align = "right"  # Choose `center`, `left`, or `right`.

  # Overlay a color or image (optional).
  #   Deactivate an option by commenting out the line, prefixing it with `#`.
 # overlay_color = "#7289DA"  # An HTML color value.
  #overlay_img = "headers/Discord-Slider.png"  # Image path relative to your `static/img/` folder.
 # overlay_filter = 0  # Darken the image. Value in range 0-1.

  # Call to action button (optional).
  #   Activate the button by specifying a URL and button label below.
  #   Deactivate by commenting out parameters, prefixing lines with `#`.
 # cta_label = "CHAT WITH US"
 # cta_url = "http://bit.ly/ACMW-discord"
 # cta_icon_pack = "fab"
  #cta_icon = "discord"

#[[item]]
 # title = "  "
  #content = "  "
 # align = "right"

  #overlay_color = "#555"  # An HTML color value.
  #overlay_img = "headers/Facebook-Slider.PNG"  # Image path relative to your `static/img/` folder.
  #overlay_filter = 0 
  
  #cta_label = "LIKE US"
 # cta_url = "https://www.facebook.com/ucfacmw/"
  #cta_icon_pack = "far"
  #cta_icon = "thumbs-up" # Darken the image. Value in range 0-1.

#[[item]]
  #title = " "
  #content = " "
  #align = "right"

 # overlay_color = "#333"  # An HTML color value.
  #overlay_img = "headers/Instagram-Slider.PNG"  # Image path relative to your `static/img/` folder.
  #overlay_filter = 0
  
  #cta_label = "FOLLOW US"
  #cta_url = "https://www.instagram.com/ucfacmw"
  #cta_icon_pack = "fab"
 # cta_icon = "instagram"  # Darken the image. Value in range 0-1.
---
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <style type="text/css">
        html,
        body { 
            height: 450px; 
        } 
        .mid-right { 
            top: 50%; 
            right: 10%; 
            transform: translateY(-50%);
        } 
        .btn-xl {
            padding: 10px 20px;
            font-size: 25px;
            border-radius: 10px;
            width:100%;
        }
        .btn-discord {
            color: #2C2F33;
            background-color: #7289DA;
            border-color: #7289DA;
        }
        .btn-discord:hover {
            color: #7289DA;
            background-color: #fff;
        }
        .btn-facebook{
            color: #FFFFFF;
            background-color: #4267B2;
            border-color: #4267B2;
        }
        .btn-facebook:hover {
            color: #4267B2;
            background-color: #FFFFFF;
        }
        .btn-instagram {
            color: #FCAF45;
            background-color: #405DE6;
            /* border-color: #405DE6; */
        }
        .btn-instagram:hover {
            color: #C13584;
            background-color: #FFDC80;
        }
        .btn-twitter {
            color: #2C2F33;
            background-color: #7289DA;
            border-color: #7289DA;
        }
        .btn-twitter:hover {
            color: #99AAB5;
            background-color: #2C2F33;
        }
        .btn-reddit {
            color: #2C2F33;
            background-color: #7289DA;
            border-color: #7289DA;
        }
        .btn-reddit:hover {
            color: #99AAB5;
            background-color: #2C2F33;
        }
        /* .carousel-control-next-icon,
        .carousel-control-prev-icon {
        color: #000000 ;
        font-size: 20px;
        } */
    </style>
</head>

<body>
<div id="social-media" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#social-media" data-slide-to="0" class="active"></li>
    <li data-target="#social-media" data-slide-to="1"></li>
    <li data-target="#social-media" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://ucfacmw.org/img/headers/Discord-Slider.png" class="d-block w-100">
        <div class="position-absolute mid-right">
            <a class="btn btn-discord btn-xl" href="http://bit.ly/ACMW-discord" role="button">
            <i class="fab fa-discord" style="padding-right: 10px;"></i>  CHAT WITH US</a>
        </div> 
    </div>
    <div class="carousel-item">
      <img src="https://ucfacmw.org/img/headers/Facebook-Slider.PNG" class="d-block w-100">
      <div class="position-absolute mid-right">
            <a class="btn btn-facebook btn-xl" href="https://www.facebook.com/ucfacmw/" role="button">
            <i class="far fa-thumbs-up" style="padding-right: 10px;"></i>  LIKE US</a>
        </div> 
    </div>
    <div class="carousel-item">
      <img src="https://ucfacmw.org/img/headers/Instagram-Slider.PNG" class="d-block w-100">
      <div class="position-absolute mid-right">
            <a class="btn btn-instagram btn-xl" href="https://www.instagram.com/ucfacmw" role="button">
            <i class="fab fa-instagram" style="padding-right: 10px;"></i>  FOLLOW US</a>
        </div> 
    </div>
  </div>
  <a class="carousel-control-prev" href="#social-media" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#social-media" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</body> 
  
</html> 

