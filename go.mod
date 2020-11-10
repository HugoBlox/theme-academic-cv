module github.com/wowchemy/starter-academic

go 1.15

require (
	github.com/wowchemy/wowchemy-hugo-modules/netlify-cms-academic v0.0.0-20201109174124-1ed538027a75 // indirect
	github.com/wowchemy/wowchemy-hugo-modules/wowchemy v0.0.0-20201109174124-1ed538027a75
)

replace github.com/wowchemy/wowchemy-hugo-modules/netlify-cms-academic => ../../wowchemy-hugo/netlify-cms-academic

replace github.com/wowchemy/wowchemy-hugo-modules/wowchemy => ../../wowchemy-hugo/wowchemy
