template = readLines("automation_websiteelementscreation/projects_template.md")


THISISTHETITLE

heretheautors

IMAGECAPTION

maintexthere

templatenew = template

title1 = "testing"
templatenew =sub ("THISISTHETITLE", title1,templatenew)

writeLines(templatenew,"automation_websiteelementscreation/tests.md" )
