# Widowsite

This is a project I completed on the side of learning React.js as a practice tool. It was completely done on my own with the help of Udemy lectures.

## Video Link
[Widowsite Video](https://youtu.be/fxX90aPSra8)

## Contents
  * What It Is
  * What We Used
  * Challenges
  * Screenshots
  * Github Link
  * Code Examples

## What It Is
I merely needed a subject-matter to build a practice site with, and I decided on this theme because I already had been planning to make a website of this content for quite some time anyway. As my focus was almost entirely on mastering React basics (and not necessarily on creating a fully functioning product), however, this project does not include a back-end portion (yet), and thus as of now, the Forum section cannot communicate with any actual database.

## What I Used
  * HTML
  * CSS (Materialize)
  * JavaScript
  * Node
  * React
  * React-Router

## Challenges
There weren't too many challenges in this project, given how simple it was to make in an overall sense. At times, Materialize defaults could be frustrating to try to manage, such as for input-fields/boxes. There were some other styling issues, a couple of which I still haven't managed to debug completely. Other than that things went relatively smoothly for a project that I considered to be a major one.

## Screenshots
![alt text](https://github.com/ekim1707/owrpg/blob/master/owrpgss1.png 'owrpgss1.png')
![alt text](https://github.com/ekim1707/owrpg/blob/master/owrpgss2.png 'owrpgss2.png')

## Github Link
[Github](https://github.com/ekim1707/widowsite)

## Code Examples
---
  Filter method used for Hero card page search bar:
```
const heroSearch = data.filter(function (data) {
    const newHero = data.name.filter(name => name.toLowerCase().includes(e.target.value.toLowerCase()));
    if (newHero.length > 0) {
        return true
    } else {
        return false
    }
});
this.setState({
    heroes: heroSearch,
    search: e.target.value
})
```
  flipCards method for the flip buttons in the Hero card page:
```
flipCards(type) {
    let getCards;
    if (type === 'All') {
        getCards = [].slice.call(document.querySelectorAll('.card'));
    } else {
        getCards = [].slice.call(document.querySelectorAll(`#${type}`));
    }
    if (getCards.length === 0) {
        document.getElementById(`flip-${type.toLowerCase()}`).classList.add('body-shake');
        setTimeout(() => {document.getElementById(`flip-${type.toLowerCase()}`).classList.remove('body-shake')}, 1000);
    } else {
        const newCards = getCards.filter(card => !card.classList.contains('flip'));
        if (newCards.length > 0) {
            newCards.forEach(card => card.classList.add('flip'));
        } else {
            getCards.forEach(card => card.classList.remove('flip'));
        }
    }
}
```
