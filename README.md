# Frontend Mentor - Pricing component with toggle

![Design preview for the Pricing component with toggle coding challenge](./design/desktop-preview.jpg)

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard

### Screen Recording

https://github.com/FrancineHuang/pricing-component-with-toggle-master/assets/105546843/da4a9391-416e-4163-9a17-61fea1caa9f9

## My process
My working order will be like:

1. Build a whole HTML at first
2. Then brush up the CSS design
3. This time I wrote pure JS to change the price at last.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<!--Pricing Toggle-->
      <div class="pricing">
        <p>Annually</p>
        <label for="toggle" class="switch">
          <input type="checkbox" name="" id="toggle">
          <span class="slider"></span>
        </label>
        <p>Monthly</p>
      </div>
```
```css
/* to change the status of the toggle(checkbox) */
.slider::before {
    content: '';
    position: absolute;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: #fff;
    bottom: 4px;
    left: 4px;
    transition: all .4s ease-in-out;
}

input:checked+.slider::before {
    transform: translateX(26px);
}

/* reviewed how to use the first-child */
ul li:first-child {
    border-top: 1px solid var(--light-grayish-blue);
}
```
```js
//Wrote an if statement to change the price monthly or yearly
checkBox.addEventListener('change', function() {

    if(checkBox.checked) {
        annually.forEach(price => price.style.display = "none");
        monthly.forEach(price => price.style.display = "flex");
    } else {
        annually.forEach(price => price.style.display = "flex");
        monthly.forEach(price => price.style.display = "none");
    }
})
```

### Continued development

I WANNA BUILD BY USE REACT!!!!!

## Author

- Frontend Mentor - [@FrancineHuang](https://www.frontendmentor.io/profile/FrancineHuang)
- Twitter - [@Francine_webdev](https://twitter.com/Francine_webdev)
