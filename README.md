
 ## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


### Overview


### The challenge

Requirements
- build it from scratch
- follow the design
[Figma file](https://www.figma.com/file/UE8l4LGR1joA1XbsHiHSS5/Send-to-Pager-(Copy)?t=pNGhqLngfDy6RFjv-0)
- make all 14 buttons work
- make the 2 displays work

Stretch goals
- add a time delay between send and pager display 
- play a notification sound
- prevent display from being too long 

Personal stretch goals
- make the design more 3D

Ideas: 
- setTimeout()
- HTML input max=""

 ### Screenshot

### Links

- Scrim: [Scrim](https://scrimba.com/scrim/coe73499faa56ad6f866587dc)
- Github: [Github](https://github.com/casserole27/send-to-pager)
- Live Site: [Live Site](https://www.clewisdev.com/send-to-pager/)

## My process

- Create Github repository
- Set up basic HTML file 
- Set up basic CSS file
- Set up basic JavaScript file
- Consult Figma design files
- Project work
- Publish live URL
- Check markup and accessibility
(https://validator.w3.org/)
(https://wave.webaim.org/)
- README file

### Built with

- semantic HTML5
- CSS custom properties
- CSS 3d rendering techniques
- Responsive Web Design
- Accessibility :hover, :focus, and :active

### What I learned

Think simpler! I had empty arrays, .push(), and a for loop to render the numbers into the field. All I had to do was make the field's value the value of the event delegation button clicked.

```javascript
function addNumber(e) {
    const target = e.target;
    phoneDisplay.value += target.value;
    
    if (phoneDisplay.value.length > 15) {
        phoneDisplay.value = phoneDisplay.value.slice(0, 15);
    };
};
```
I followed the Figma UI, but I made the overall application a little smaller to fit better in smaller viewports.


### Continued development

Stretch goal
- play a notification sound

From code reviewer:

```javascript

function playSound() {
    const pagerSound = new Audio("./assets/pager.wav");
    pagerSound.play();
}

```

### Useful resources

[Scrimba help](https://scrimba.com/scrim/cPPeRMhZ)


## Author

- Website - [C Lewis](https://www.clewisdev.com)
- LinkedIn - [LinkedIn](https://www.linkedin.com/in/clewisdev/)


## Acknowledgments





