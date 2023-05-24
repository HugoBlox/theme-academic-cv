import argparse
import os
import sys
import shutil
from datetime import datetime

# weightの決め方
# xxyymnn
# xx: 博士後期課程10, 博士前期課程20, 学部生30
# yy: 入学年西暦下二桁
# m: 入学時期 春1, 秋2
# nn: 通し番号（名前順になるように？）

template_j = '''\
---
# Display name
title: "{0}"

# {1}
weight: {2}

# Username (this should match the folder name and the name on publications)
authors:
- "{3}"

# Is this the primary user of the site?
superuser: false

# Role/position (e.g., Professor of Artificial Intelligence)
role: {4}

# Organizations/Affiliations
organizations:
- name: "{5}"
  url: "{6}"
- name: "大阪大学"
  url: "http://www.osaka-u.ac.jp/"


# Short bio (displayed in user profile at end of posts)
bio: 

# List each interest with a dash
#interests:
#- 

#education:
#  courses:
#  - course: Title course 1
#    institution: Name of Institution
#    year: 2012
#  - course: Title course 1
#    institution: Name of Institution
#    year: 2012

# Social/Academic Networking
# For available icons, see: https://sourcethemes.com/academic/docs/page-builder/#icons
#   For an email link, use "fas" icon pack, "envelope" icon, and a link in the
#   form "mailto:your-email@example.com" or "#contact" for contact widget.
social:
#- icon: envelope
#  icon_pack: fas
#  link: '#contact'  # For a direct email link, use "mailto:test@example.org".
#- icon: twitter
#  icon_pack: fab
#  link: https://twitter.com/USERNAME
#- icon: google-scholar
#  icon_pack: ai
#  link: https://scholar.google.com/citations?user=PERSON-ID
#- icon: github
#  icon_pack: fab
#  link: https://github.com/USERNAME
# Link to a PDF of your resume/CV from the About widget.
# To enable, copy your resume/CV to `static/files/cv.pdf` and uncomment the lines below.
# - icon: cv
#   icon_pack: ai
#   link: files/cv.pdf

# Enter email to display Gravatar (if Gravatar enabled in Config)
email: ""

# Organizational groups that you belong to (for People widget)
#   Set this to `[]` or comment out if you are not using People widget.
user_groups:
- {7}
---
### Contact
- email: {8}


Please add `osaka-u.ac.jp` to complete email address
'''

template_e = '''\
---
# Display name
title: "{0}"

# {1}
weight: {2}

# Username (this should match the folder name and the name on publications)
authors:
- "{3}"

# Is this the primary user of the site?
superuser: false

# Role/position (e.g., Professor of Artificial Intelligence)
role: {4}

# Organizations/Affiliations
organizations:
- name: "{5}"
  url: "{6}"
- name: "Osaka University"
  url: "http://www.osaka-u.ac.jp/"


# Short bio (displayed in user profile at end of posts)
bio: 

# List each interest with a dash
#interests:
#- 

#education:
#  courses:
#  - course: Title course 1
#    institution: Name of Institution
#    year: 2012
#  - course: Title course 1
#    institution: Name of Institution
#    year: 2012

# Social/Academic Networking
# For available icons, see: https://sourcethemes.com/academic/docs/page-builder/#icons
#   For an email link, use "fas" icon pack, "envelope" icon, and a link in the
#   form "mailto:your-email@example.com" or "#contact" for contact widget.
social:
#- icon: envelope
#  icon_pack: fas
#  link: '#contact'  # For a direct email link, use "mailto:test@example.org".
#- icon: twitter
#  icon_pack: fab
#  link: https://twitter.com/USERNAME
#- icon: google-scholar
#  icon_pack: ai
#  link: https://scholar.google.com/citations?user=PERSON-ID
#- icon: github
#  icon_pack: fab
#  link: https://github.com/USERNAME
# Link to a PDF of your resume/CV from the About widget.
# To enable, copy your resume/CV to `static/files/cv.pdf` and uncomment the lines below.
# - icon: cv
#   icon_pack: ai
#   link: files/cv.pdf

# Enter email to display Gravatar (if Gravatar enabled in Config)
email: ""

# Organizational groups that you belong to (for People widget)
#   Set this to `[]` or comment out if you are not using People widget.
user_groups:
- {7}
---
### Contact
- email: {8}


Please add `osaka-u.ac.jp` to complete email address
'''

parser = argparse.ArgumentParser()
parser.add_argument('position', choices=['bachelor', 'master', 'doctor'])
parser.add_argument('joinedin', type=str, help='yyyy-mm-dd')
parser.add_argument('jname', type=str)
parser.add_argument('ename', type=str)
parser.add_argument('email', type=str)
parser.add_argument('id', type=int, help='two digits')
parser.add_argument('-p', '--photo', type=str, default='static/img/default_avatar.png')
args = parser.parse_args()

basename = args.ename.lower().replace(' ', '-')

if args.position == 'bachelor':
    jgroup = '学生'
    jrole = '学部学生'
    jinst = '基礎工学部'
    jiweb = 'https://www.es.osaka-u.ac.jp/ja/'
    egroup = 'Students'
    erole = 'Undergraduate Student'
    einst = 'School of Engineering Science'
    eiweb = 'https://www.es.osaka-u.ac.jp/en/'
    weight_role = 30
elif args.position == 'master':
    jgroup = '学生'
    jrole = '博士前期課程学生'
    jinst = '情報科学研究科'
    jiweb = 'http://www.ist.osaka-u.ac.jp/'
    egroup = 'Students'
    erole = 'Graduate Student'
    einst = 'Graduate School of Information Science and Technology'
    eiweb = 'http://www.ist.osaka-u.ac.jp/'
    weight_role = 20
else: # args.position = 'doctor'
    jgroup = '学生'
    jrole = '博士後期課程学生'
    jinst = '情報科学研究科'
    jiweb = 'http://www.ist.osaka-u.ac.jp/'
    egroup = 'Students'
    erole = 'PhD Student'
    einst = 'Graduate School of Information Science and Technology'
    eiweb = 'http://www.ist.osaka-u.ac.jp/'
    weight_role = 10

date = datetime.strptime(args.joinedin, '%Y-%m-%d')
year = date.year % 100
month = date.month
sem = 1 if month == 4 else 2
weight = str(weight_role) + str(year) + str(sem) + '%02d' % args.id

email = args.email.replace('osaka-u.ac.jp', '')

ja = template_j.format(
    args.jname, date, weight, basename, jrole, jinst, jiweb, jgroup, email
)
en = template_e.format(
    args.ename, date, weight, basename, erole, einst, eiweb, egroup, email
)

jdir = 'content/ja/authors/{}'.format(basename)
edir = 'content/en/authors/{}'.format(basename)
os.makedirs(jdir, exist_ok=True)
os.makedirs(edir, exist_ok=True)

with open(os.path.join(jdir, '_index.md'), 'w') as f:
    f.write(ja)
with open(os.path.join(edir, '_index.md'), 'w') as f:
    f.write(en)

if args.photo and os.path.exists(args.photo):
    ext = os.path.splitext(args.photo)[-1]
    print(ext)
    shutil.copy(args.photo, os.path.join(jdir, 'avatar' + ext))
    shutil.copy(args.photo, os.path.join(edir, 'avatar' + ext))
