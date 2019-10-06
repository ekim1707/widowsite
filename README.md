# Widowsite

This is a project I completed on the side of learning React.js as a practice tool. It was completely done on my own with the help of Udemy lectures.

## Video Link
[YouTube](https://youtu.be/fxX90aPSra8)

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
[Github](https://github.com/ekim1707/owrpg)

## Code Examples
---
  Use of classes and class constructors:
```
class Attack:
    def __init__(self, health, power, accuracy, dodge, ultimate, ultcount):
        self.health = health
        self.power = power
        self.accuracy = accuracy
        self.dodge = dodge
        self.ultimate = ultimate
        self.ultcount = ultcount
    
    def alive(self):
        if self.health <= 0:
            return False
        else:
            return True
```
  An example of how managing ultimates works:
```
while heroa.alive() and enemya.alive():
print(choice3.capitalize() + " will now attack. Ults will be used when possible, and sec abilities will be used as appropriate.")
user_input2 = input("Press ENTER to continue.")
if choice3 == 'reaper':
    if 1 == 2:
        pass
    else:
        enemya.attack(heroa)
        ulth += 4
        healult += (4 + hhealer.ultimate)
        ulte += (4 + enemya.ultimate)
        thealult += (4 + thealer.ultimate)
        cooldowne += 1
        break
```
