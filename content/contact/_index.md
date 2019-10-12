+++
# Contact widget.
widget = "contact"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = false  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 130  # Order that this section will appear.

title = "Contact"
subtitle = "Contact form and map"

# Automatically link email and phone?
autolink = true

# Email form provider
#   0: Disable email form
#   1: Netlify (requires that the site is hosted by Netlify)
#   2: formspree.io
email_form = 1
+++

Google form embed:
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdkYB8QudLGuyP3uIs5921ae7I67jZbELQmBXcUwFV0k9UTnw/viewform?embedded=true" width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

Typeform popup for the form:
<a class="typeform-share button" href="https://adrianofantini.typeform.com/to/S17fG9" data-mode="popup" style="display:inline-block;text-decoration:none;background-color:#267DDD;color:white;cursor:pointer;font-family:Helvetica,Arial,sans-serif;font-size:20px;line-height:50px;text-align:center;margin:0;height:50px;padding:0px 33px;border-radius:25px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" data-hide-headers=true data-submit-close-delay="0" target="_blank">Register! </a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>

Typeform embed for the form (you need to fork the submodule to be able to add to git the layouts/shortcodes/typeform.html, see https://www.typeform.com/help/embed-typeform-hugo-sites/):
{{< typeform S17fG9 adrianofantini 600px "100%" >}}

Google map embed for the car directions:
<iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d176791.8827635176!2d11.930181865362899!3d46.18313230007569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x477907af7f6f0507%3A0xeecf16d4e5212cbe!2sStazione%20di%20Belluno%2C%2032100%20Belluno%20BL!3m2!1d46.141429599999995!2d12.209919699999999!4m3!3m2!1d46.2170011!2d11.9273239!5e0!3m2!1sit!2sit!4v1570789516987!5m2!1sit!2sit" width="100%" height="600" frameborder="0" style="border:0;" allowfullscreen=""></iframe>

Komoot embed for the trek:
<iframe src="https://www.komoot.com/tour/98511283/embed?profile=1" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
