# TODO list & ideas

## TODO

### Building CSS
- Translate all the system from physical to flow relative properties: block-size and inline-size
- Work on relative units
- Add gallery with srcset for different sizes
- Add mixin to generate grid system breakpoints
- Add flex system
- Add responsive video
- Add gradients to backgrounds
- Add different types of navigation
- visuals Call to actions. Some resources
- Make the badge more visual
- Add shapes or artistic components
- Add animation library
- Add extra themes option. Add a switcher in the DS
- Add range bar to fonts. Playground
- Add shadows
- Add tooltips
- Add menu icon vs close icon animation
- Add object fit utilities?
- Add blending effects
- Add background fix utilities for paralax effects
- Add layout modes. 2 cols, 3 cols, patterns
- Change sizing tokens, the scale is too small

### Assets and resources
- Add photos in assets. Add attribution. Add filters and demos to the images. Resources for landing pages. 
- Find a font to use easily with variable fonts. Elana is helping with this.
- Illustrations. Shapes (brand)
- Add landing pages created by nakDS
- Add a handwritten font

### Docs
- Add principles
- Still not very happy with current documentation system. It's not scalable. What about creating it in React and export the whole components, not only the CSS? In this case, am I going to use nextJS? Which are the advantages?
- Use Vue to created docs?
- Add modal JS. Need to decide what to use for JS.
- Add copy option to hex color values: https://clipboardjs.com/
- Doc the tokens
- Doc how to consume. Whole the page & individual components
- Tecnical documentation
- Add instructions to install
- Roudmap. Add it to the readme. Beta on February. March release. 2 months of promotion. Research the tracking. Present it on an event.
- Give a solution to the nav
- Doc browser support

### UX
- Burguer menu on the right. There are more right handed users. But in desktop is kind of antipattern?
- The current navigation isn't convenient. A fast sidebar could be useful. 

### Brand
- Create brand.
- Brand values, pursopes, objetives
- Principles: simplicity, consistency, beauty, flexible, scalable

### Compilation, release, tools
- Refactor the gulfile. Better approach to have postcss.config.js on root?
- Add circleCI to publish npm
- Add browsersync
- Add property sorter
- Add stylelint on commit

### Distribution
- Add the fonts to the CDN
- Distribute the CSS on mixins to consume with more flexibility. Users don´t have to use my naming convention, that can be a real limitation. The solution right now is not stable because it doesn´t understand the nesting... maybe better to add a flag to mixinable classes to target?
- Distribute the fonts in independent files to not to import all off them?
- Add dist to CDN
- Gulp tasks to optimize the images to diff screens
- Add the images for covers to CDN

### Technical decisions
- Decide to repeat the classes or use only the modifier. Pros and cons
- Tool to build the docs
- How to export scss mixins
- Is it a good desition not to use sass?
- Decide browser support level. 
- How to work with "add only what you need CSS"

### Testing
- Try the CDN version in a third party project
- Try the dist CSS through a third party project
- Add syntax verifier. Thought that prettifier was doing this but catched an error by a third party.

### Other
- Add semantic url
- Improve SEO
- Add accesibility 

## IDEAS
- Reproduce all the circle to try to understand the concepts. Find challenges, find weak points.
- Simplify all the components. Can I remove all the variables and use only the tokens?
- Control what variables imports each component. How can I avoid repetitions? Sure that I can improve the performace. Understand properly the custom properties and their duplication and its impact.
- Rebranding. Create your own reallity. ^^
- Goal: work the fullpage, modern layouts, 
- Define target. For visual landing pages. Marketing
- Easy to extend & scale
- Add philosophy: standard, simplicity, flexibility