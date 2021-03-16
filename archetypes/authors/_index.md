---
# Display name
title: "{{ replace .Name "-" " " | title }}"

# Username (this should match the folder name and the name on publications)
authors:
- "{{ urlize .Name }}"

# 「false」のままにする
superuser: false

# Role/position (e.g., Professor of Artificial Intelligence)
#role:

#university
#  faculty: 学域
#  department: 学類
#  course: 課程
#  enrollment: 入学した年度（例：「2019」）
#  year_offset: 留年・飛び級などで学年がずれる場合、そのずれた年数(例：「1」「-1」) (空白のままなら無視される)
#  grade_label: 「〇年」「M〇」の代わりに別の文言を表示したい場合 (空白のままなら無視される)

university:
  faculty: 
  department: 
  course: 
  enrollment: 
  year_offset: 
  grade_label:

# Short bio (displayed in user profile at end of posts)
#bio: My research interests include distributed robotics, mobile computing and programmable matter.

# 興味のある内容（複数記述可能）
# 「- 内容」のように書く
interests:

#education:
#  courses:
#  - course: Title course 1
#    institution: Name of Institution
#    year: 2012
#  - course: Title course 1
#    institution: Name of Institution
#    year: 2012

# SNSなどのアカウント
# Social/Academic Networking
# For available icons, see: https://wowchemy.com/docs/page-builder/#icons
#   For an email link, use "fas" icon pack, "envelope" icon, and a link in the
#   form "mailto:your-email@example.com" or "#contact" for contact widget.
#social:
#- icon: envelope
#  icon_pack: fas
#  link: '#contact'  # For a direct email link, use "mailto:test@example.org".
#- icon: twitter
#  icon_pack: fab
#  link: https://twitter.com/GeorgeCushen
#- icon: google-scholar
#  icon_pack: ai
#  link: https://scholar.google.co.uk/citations?user=sIwtMXoAAAAJ
#- icon: github
#  icon_pack: fab
#  link: https://github.com/gcushen
# Link to a PDF of your resume/CV from the About widget.
# To enable, copy your resume/CV to `static/files/cv.pdf` and uncomment the lines below.
# - icon: cv
#   icon_pack: ai
#   link: files/cv.pdf

# Enter email to display Gravatar (if Gravatar enabled in Config)
#email: ""

# Highlight the author in author lists? (true/false)
highlight_name: false

# Organizational groups that you belong to (for People widget)
#   Set this to `[]` or comment out if you are not using People widget.
#user_groups:
#- Group 1
#- Group 2
---
