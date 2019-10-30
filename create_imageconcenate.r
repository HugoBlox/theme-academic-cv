library (magick)

img_1 = image_read(c("static/img/CRC_Logo.svg","static/img/sourcedata_logo_rgb.png"))
img_1_2 =image_extent(image_resize(img_1, "300x300"), "400x300")
img_1_3 =image_resize(img_1, "x100")

image_append(img_1_3)

image_write(image_append(img_1_3), path = "static/img/combinedlogo.png", format = "png")


# background
bg = image_read(c("static/img/background.jpg"))

bg2=image_resize(bg, "12x12")
bg3=image_modulate(bg2,  saturation = 50)
# for (x in c(200:180)){
#   bg2=image_resize(c(bg2,image_modulate(bg,  saturation = x)), "72x72")
#   #bg3 = image_animate(image_scale(img, "200x200"), fps = 1, dispose = "previous")
#   #bg2= c(bg2,image_modulate(bg,  saturation = x))
# }

bgf= image_animate(image_morph(c(bg3,bg2,bg3), frames =10), fps = 2)
bgf
image_write(bgf, path="static/img/bg.gif", format = "gif")

image_read("static/img/bg.gif")

bg =image_read(c("static/img/sdash-bk.jpg"))

bg2=image_resize(bg, "800X")
bg3=image_modulate(bg2,  saturation = 35)
bg4=image_modulate(bg2,  saturation = 60)

bgf= image_animate(image_morph(c(bg3,bg4,bg3), frames =3), fps = 2)
bgf
image_write(bgf, path="static/img/bg.gif", format = "gif")
