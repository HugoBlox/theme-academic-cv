# Source for lsd-ucsc.github.io 

For the original documentation on the Academic Template for Hugo, [see this repository](https://github.com/wowchemy/wowchemy-hugo-modules).

## Workflow

The **lsd-ucsc.github.io-source** repository contains the editable source code for the **lsd-ucsc.github.io** website. If you want to make a change to the website, it should only be done in this repository instead of directly to the generated website's repository. 

For detailed documentation on how to make changes and build the website, see the [GitHub Pages section of the deployment documentation](https://wowchemy.com/docs/deployment/#github-pages)

The steps to make changes to the template and build the website are as follows: 

- Clone the source repository: `git clone https://github.com/lsd-ucsc/lsd-ucsc.github.io-source.git`
- Init submodule: `cd lsd-ucsc.github.io-source; git submodule update --init --recursive`
- Check that the `public/` folder exists. This contains the content of the generated website. *Do not make changes here*.
- If you want to see the changes you make to the template source code in real time, run `hugo server -D` and go to (by default) `localhost:1313`.
- After you have made the changes you want to make, run `hugo` to generate the website. The website is generated in the `public/` directory. 
- You must now push both the contents of `public/` to the `lsd-ucsc.github.io` repository and the changes you made to the template to this repository. 

## Making Changes 

Please see [this documentation](https://wowchemy.com/docs/) if you want a deep dive into how to customize the Academic template using the Hugo static site generator. 

Generally, any basic additions can be made by just editing markdown files such as those in the `content/` directory. 

Advanced customization options are available (e.g. JavaScript, CSS/Sass, overriding templates) and details on them can be found in the documentation listed above. 
