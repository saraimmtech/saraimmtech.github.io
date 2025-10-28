# Module Journal - Generative Computer Graphics

## 16-09-2025 - Week 01

### Introduction & Foundations

- How did analog rules compare to coding rules?
  - analogue rules: Done physicaly by hand therfore it's imperfect but organic, it's time consuming, not really flexibal (Hard to change once started), when there is randomness it's mostly by acident, it has texture and "personality" because the rules lived in the artist hands
  - coding rules: Executed digitally by algorithms, precise until you add randomness, Easy to tweak parameters or generate variations instantly, feels calculated/ clean -> no personality, because even the randomness is calculated at some point

- Where did ambiguity or randomness lead to surprising results?
  - it brings unique visual effects
    > "When you write a program, it’s going to be executed the same way every single time. So if you define a system like this where things can happen at random, as the creator, you can be surprised by your own program, which is really great." - Jared Tarbell
    
- Which historical examples inspired you?
  - untiteld, Vera Molnár, 1985

    <img src="vera.png" width="400" />
    
  - Substrate - Jared Tarbell, 2003
    
    <img src="/jared.png" width="400"/>
    
- What was difficult about setting up your environment?
  - i had issues with github pages because i wanted to do it from scratch to get familiar with the envroment because i'm sure that is something that is important in the future
  
## 23-09-2025 - Week 02

### Grids & Patterns

- How did your initial paper sketches influence your digital pattern? Did anything change in translation?
  - I use the sketche as guidance and motivation to stay focused on the goal I had in mind at the beginning. Can be frustrating when I set the goals to high which don't add to my knowledge yet.
- What strategies did you use to balance order and randomness in your grid or pattern?
  - 
- Describe a moment when a mistake or unexpected result led to a new idea or direction.
  - 
- How did you approach making your pattern “infinite” or seamlessly tileable? What challenges did you face?
- How did working with code change your perception of artistic control compared to analog methods?
- What did you learn about the relationship between simple rules and complex outcomes?

{% raw %}
<iframe src="https://editor.p5js.org/saraimmtech/full/4rfxuTqXl" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}
  
## 30-09-2025 - Week 03

### Grids & Patterns

- Setting Up GitHub Pages
- Working on Grids

{% raw %}
<iframe src="https://editor.p5js.org/saraimmtech/full/yL7A0Io8S" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

{% raw %}
<iframe src="https://editor.p5js.org/saraimmtech/full/gHh0xZ56N" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

## 07-10-2025 - Week 04

How does your clock represent time differently from a real one?
- How it represents time differently:
Unlike a normal clock with fixed hands moving around a face, this design uses colored arcs that grow and shrink over time. Instead of hands rotating, each ring fills up as seconds, minutes, and hours pass — so time feels like expanding waves rather than ticking motion. The pulsing center and soft transitions make it feel alive and continuous instead of mechanical.

What does cyclical vs linear mean in your design?
- Cyclical vs linear meaning:
The design is cyclical because time loops visually — when seconds, minutes, or hours reset, their arcs start over smoothly, showing the repeating rhythm of time. There’s no straight path or endpoint. A linear design would show time as a timeline or progress bar moving in one direction. Here, everything circles back, symbolizing time as an ongoing cycle rather than a straight line.

{% raw %}
<iframe src="https://editor.p5js.org/saraimmtech/full/Acucskcub" width="100%" height="450" frameborder="no"></iframe> {% endraw %}


This code uses the current computer time to draw animated, circular arcs that represent hours, minutes, and seconds.

- setup() makes a pink canvas and sets drawing modes (center alignment, degrees for angles).
- draw() runs every frame, updates the clock, and redraws everything.
  - It gets the current hour, minute, and second using p5.js time functions.
  - The translate(width/2, height/2) moves the origin to the canvas center.
  - Then three concentric arcs show time progress:
    - Outer arc → seconds (thin red line)
    - Middle arc → minutes (blue line)
    - Inner arc → hours (greenish line)
  - The arcs sweep clockwise using map() to convert time values to angles.
  - A small dark pulsing circle in the center represents milliseconds (beats once per second).
  - Digital time is displayed below the arcs in white text with AM/PM formatting.
  - Below that, the date (day/month/year) is shown subtly.
- mousePressed() saves the canvas as a PNG snapshot when you click.

Below is an interaction thingyy

{% raw %}
<iframe src="https://editor.p5js.org/saraimmtech/full/yo2mJqUoO" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

Etch A Sketch

{% raw %}
<iframe src="https://editor.p5js.org/saraimmtech/full/-WTDxlDWW" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

