library (magick)

img_1 = image_read(c("static/img/CRC_Logo.svg","static/img/sourcedatais.jpg","static/img/logo-EMBO-partner.png"))
img_1_2 =image_extent(image_resize(img_1, "300x300"), "400x300")
image_append(img_1_2)

image_write(image_append(img_1_2), path = "static/img/combinedlogo.png", format = "png")
