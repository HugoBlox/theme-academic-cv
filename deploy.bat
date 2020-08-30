@ECHO OFF
ECHO Building website...
hugo
ECHO Pushing website to wiwh.github.io (on the submodule)...
cd public
git add *
git commit -m "New website update."
git push
cd ..
ECHO =================
ECHO Website deployed!
ECHO =================
PAUSE