# Module Journal - Generative Computer Graphics

This journal documents my exploration of **Generative Computer Graphics** and the shifting role of authorship when creative processes move from the analog to the algorithmic. Coming from a background where making things by hand feels intuitive, working with code as a creative medium challenged many of my usual assumptions. Instead of directly shaping every line or texture myself, I had to define rules, build systems, and allow algorithms to take part in the creative process.

## Lesson 01 - Introduction & Foundations

In the first lecture, we played a game during class to get to know **Generative Computer Graphics**. We drew a random number of dots on a piece of paper. Then, one of us started by connecting the dots with a line and drawing a new dot in the middle of the line.

<img src="MediaPNG/Peach.png" width="500" />

To be honest, we might have done it a bit wrong, but in the end, we had a random sketch that started as a few dots and ended up looking like… a peach? A cockatoo? We’re not sure, but it was a fun.

**How did analog rules compare to coding rules?**

When I created physically by hand, the preocess was imperfect but organic. Every stroke or decision carried a bit of human unpredictability - texture, irregularity, even small accidents that introduced a kind of natural randomness. Which is the beauty of analog art, but also it time consuming and makes the work less flexible.

Coding rules, in contrast, are executed by algorithms with complete precision. Nothing happens by accident unless randomness is intentionally programmed. This makes digital work extremely flexible: parameters can be adjusted instantly, and endless variations can be generated in seconds. At the same time, the output often feels cleaner, more calculated, and somewhat detached. Even when randomness is included, it is still governed by logic rather than intuition.

**Where did ambiguity or randomness lead to surprising results?**

The program began generating variations that felt almost collaborative, as if the system and I were co-creating. This randomness brought uniqueness and a kind of visual richness that I wouldn’t have arrived at through intentional design alone.

As Jared Tarbell explains: *“When you write a program, it’s going to be executed the same way every single time. So if you define a system like this where things can happen at random, as the creator, you can be surprised by your own program, which is really great.”*

**References**

Two historical examples particularly inspired me: Untitled by Vera Molnár (1985) and Substrate by Jared Tarbell (2003). I’m always fascinated by artworks that start with a single simple component and, through repetition and rule-based variation, unfold into a complete and complex image. Both pieces play with this idea beautifully.

  - untiteld, Vera Molnár, 1985

    <img src="MediaPNG/vera.png" width="400" />
    
  - Substrate - Jared Tarbell, 2003
    
    <img src="MediaPNG/jared.png" width="400"/>
  
## Lesson 02 - Grids & Iterative Patterns - Structured generative systems

**How did your initial paper sketches influence your digital pattern? Did anything change in translation?**

I use the sketche as guidance and motivation to stay focused on the goal I had in mind at the beginning. Can be frustrating when I set the goals to high which don't add to my knowledge yet.

**What strategies did you use to balance order and randomness in your grid or pattern?**

Your tiles are not turning at the same time because each tile has a different rotation speed.


` let angle = frameCount * 0.01 * (x + y); `

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/VInFjYFkg" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}
  
Because x + y is different for every tile:
- tiles in the top-left (x=0, y=0) → rotate slowly
- tiles in the bottom-right (x=19, y=9) → rotate much faster
So the farther down/right a tile is, the faster it spins.

**Describe a moment when a mistake or unexpected result led to a new idea or direction.**
  
In the first Canva i played around with shapes and turning options. In the second one i played around with color changes and it's fascinating what small changes likes color already have such an inpact on the art. The second one feels more like a floating simulation rather than the second one.

{% raw %}
<iframe src="https://editor.p5js.org/trisaratops2.0/full/4rfxuTqXl" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

**How did you approach making your pattern “infinite” or seamlessly tileable? What challenges did you face?**

Since draw() runs automatically at around 60 frames per second, the sketch constantly refreshes, which allows any rule or transformation to unfold endlessly over time.

{% raw %}
<iframe src="https://editor.p5js.org/trisaratops2.0/full/yL7A0Io8S" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

{% raw %}
<iframe src="https://editor.p5js.org/trisaratops2.0/full/gHh0xZ56N" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

**How did working with code change your perception of artistic control compared to analog methods?**

Working with code made me rethink what artistic control actually means. In analog methods, every mark is physical and irreversible—changes are slow, and mistakes become part of the artwork. That limitation creates a certain intimacy with the material; you can “feel” the artist in every imperfection, and randomness often emerges naturally through the process.

With code, the experience is almost the opposite. The medium is incredibly flexible: I can adjust parameters instantly, undo decisions effortlessly, and generate endless variations without restarting from scratch. This makes experimentation much more accessible, because nothing feels permanent or risky. At the same time, even randomness becomes something I define intentionally through algorithms. If something unexpected happens, it’s not because of physical chance but because something in the logic behaved differently than I anticipated.

This shift made me see coded art as both powerful and curious—it’s controlled, yet still capable of surprising me. But the “personality” doesn’t come from the hand of the artist; it emerges from the system I build and how it evolves over time.

## Lesson 03 - Clock / Time - Generative representation of time

### Clock

**How does your clock represent time differently from a real one?**

Unlike a normal clock with fixed hands moving around a face, this design uses colored arcs that grow and shrink over time. Instead of hands rotating, each ring fills up as seconds, minutes, and hours pass — so time feels like expanding waves rather than ticking motion. The pulsing center and soft transitions make it feel alive and continuous instead of mechanical.

**What does cyclical vs linear mean in your design?**

The design is cyclical because time loops visually — when seconds, minutes, or hours reset, their arcs start over smoothly, showing the repeating rhythm of time. There’s no straight path or endpoint. A linear design would show time as a timeline or progress bar moving in one direction. Here, everything circles back, symbolizing time as an ongoing cycle rather than a straight line.

{% raw %}
<iframe src="https://editor.p5js.org/trisaratops2.0/full/Acucskcub" width="100%" height="450" frameborder="no"></iframe> {% endraw %}


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

## Lesson 04 - Drawing Machines - Generative systems as drawing tools

### Circle-Drawing tool

This sketch makes a simple generative circle-drawing tool. Every time you click, it drops a randomly sized, randomly colored circle at the mouse position.

{% raw %}
<iframe src="https://editor.p5js.org/trisaratops2.0/full/yo2mJqUoO" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

**How it works:**
- *circles* stores all created circles as *objects {x, y, r, color}*.
- *DEFAULT_RADIUS* is a base size that gets scaled randomly when you click.
- *setup()* makes a white canvas, turns off strokes so circles look clean.
- *draw()* loops through the *circles* array each frame and draws every one — that’s why older circles stay visible.
  - *mousePressed()* adds a new circle with:
  - random radius (20–120% of default)
  - random color with slight transparency (so overlaps blend nicely)
  - position where you clicked
    
**Summary:**
Each click adds a new circle, building up a layered field of colors — a simple interactive generative composition where randomness and repetition create the pattern.

### Etch A Sketch

{% raw %}
<iframe src="https://editor.p5js.org/trisaratops2.0/full/-WTDxlDWW" width="100%" height="600" frameborder="no"></iframe> {% endraw %}

This is an Etch A Sketch-style sketch built with p5.js. It uses an offscreen buffer as the “screen” that keeps the etched lines persistent while the main canvas draws the frame and controls.

**Top-level data**
- *buffer* — *createGraphics(...)* offscreen canvas where all drawn lines go (so lines persist and can be cleared separately).
- *stylus* / *prevStylus* — current and previous pen positions inside the buffer.
- *leftKnob*, *rightKnob* — two Knob objects representing the physical knobs; left controls horizontal, right vertical.
- *lastAngles* — stores previous knob angles so movement is computed from angle differences.
- *speedFactor* — scales how much knob rotation translates to stylus movement (higher = faster pointer).
  
**Knob object**
- *Knob(x,y,r,orientation)* stores position, radius, visual *angle*, *grabbed* state and *orientation* (stored but not functionally used in this code).
- *draw()* — draws a round knob with a small indicator line rotated by *angle*.
- *hitTest(mx,my)* — checks if mouse is inside the knob circle.
  
**Setup**
- Canvas and buffer created, buffer cleared with *resetBuffer()*.
- Stylus starts centered in the buffer.
- Knobs positioned at bottom left / bottom right. *angleMode(RADIANS)* is used.
  
**Draw loop**
- Draws the red Etch A Sketch frame and places the *buffer* image inside it (translated by *translate(40,40)*).
- Draws a tiny indicator for current stylus position on top of the buffer.
- Draws knob UI and labels.
- Calls *applyKnobMovement()* every frame to convert knob rotations to movement on the buffer.
- Handles *shaking* animation: small horizontal wobble, then clears *buffer* after ~30 frames.
  
**applyKnobMovement() — the important mapping**
- Computes angle deltas: *dA_left = leftKnob.angle - lastAngles.left*, same for right.
- Updates *lastAngles* to current angles.
- Converts deltas to pixel movement:
  - *dx = dA_left * (speedFactor * 60)*
  - *dy = dA_right * (speedFactor * 60)*
    (so small angle changes move the stylus; 60 is an arbitrary scale factor)
- Moves *stylus* by *dx, dy*, constraining it inside the buffer bounds.
- Draws a line on *buffer* from *prevStylus* to *stylus* so the path is etched.
  
**User interactions**
- *mousePressed()* sets *grabbed* for a knob if clicked; stores *lastMouseAngle* (used to make dragging feel relative).
- *mouseDragged()* updates the grabbed knob’s *angle* using *atan2(mouseY - knob.y, mouseX - knob.x)* so turning the mouse around a knob rotates it.
- *mouseReleased()* drops knobs.
- *keyPressed()* provides keyboard control: arrow/WASD rotate the left/right knobs; spacebar triggers *startShake()* to clear.
- *startShake()* starts the shake animation and eventually calls *resetBuffer()* to wipe the drawing.
  
**Other small details**
- *resetBuffer()* fills the buffer with a gray background (clears the drawing).
- Stroke caps/joins set for smoother lines.
- *orientation* on the *Knob* is present but not used — both knobs affect movement via their angles (the left maps to *dx*, the right to *dy*).
- Angles are in radians; movement comes from change in angle, not absolute angle.

**Summary (one-liner)**
It simulates an Etch A Sketch by converting knob rotation deltas into x/y stylus movement that draws persistent lines on an offscreen buffer; knobs are interactive with mouse + keyboard, and shaking clears the buffer.

## Lesson 06 - Faces / Parametric Generators - Parametric design through faces

### Faces

This week we learend how to write a program that generates parametric faces and learned about the difference between **Continuous parameters** (smooth transitions) and **Discrete parameters** (distinct options). 

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/67_o7XVZZ" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

### Reflection

- How is your machine “expressive” rather than “functional”?
- What limitations or constraints shaped your outcome?

## Lesson 07 - Pixels - Pixels as material + Advanced pixel transformations

### Pixels

What if pixels had different shapes?
What if they were arranged differently than in a grid?
What if they could be represented in a completely different form?
How can pixel data (color, brightness, position) drive visual generation?

For the pixel project I got the idea from an influencer on instagram. First step is using a picture of someone you would hang on your wall.

<img src="MediaPNG/Meryl.png" width="400"/>

Third and fourth step is rearange the pixels.

<img src="MediaPNG/Meryl(2).png" width="400"/>

For the digital version I wanted to change the width of the image but at the begining I had the wrong idea of doing so. I was deviding the image through 4 (marked orange), or so i thought. Actually i was only dividing the canvas. So the canvas was getting smaller but not the image itself that's why in the end you can see the top right corner the grey background of the tiger.

<img src="MediaPNG/ImageSizeWrong.png" width="400"/>

In the second attempt i made the canvas smaller and to guarantee that the image always fits the canva we add this part of code: image(img, 0, 0, width, height);

<img src="MediaPNG/ImageSizeRight.png" width="400"/>

After that I wanted 

# Project Idea

## Mind Garden

**Concept**

An interactive visualization of emotions. Users type one word describing how they feel, and the system grows a visual form based on its semantic meaning — e.g., “calm” creates smooth blue waves, “angry” triggers red spikes and chaotic movement.

**Interaction**
- Text input = seed word
- Algorithm translates sentiment → color, form, and motion rules
- Over time, the canvas becomes a garden of emotions from the users

**Why?**

It’s interactive and personal — visualizing emotions is always fascinating, as the outcomes can be surprising and unique each time. I can also imagine this being a fun and creative tool for psychologists to include on their websites, allowing visitors to express their feelings and receive engaging visual feedback.

(Sketch of my core idea)

## First Prototype

To help me visualize in what i wanna go I started with a simple canvas where i can put in emotions, depending on the word a different "plant" is growing in the canvas.

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/6MoSRjm5T" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

### Explanations of key codes

**let plants = [];**
This array stores all the emotion-plants the user creates.
Each new word becomes a new instance of the EmotionPlant class.

**button.mousePressed(() => addEmotion(input.value()));**
Links the button to the emotion-creation system.
When the user clicks Grow, the word they typed is processed and turned into a plant.

**getMoodScore(word)**
This function classifies the user’s emotion word into a mood score:
1 → positive
0.5 → neutral
0 → negative
This single score determines color, shape, and growth behavior.

**plants.push(new EmotionPlant(word, moodScore));**
Creates a new plant object and adds it to the world.
Every plant is independent and grows each animation frame.

**class EmotionPlant { ... }**
Encapsulates all the logic for representing emotions visually.
Each plant stores:
where it appears
its color
its growth size
its shape behavior

**getColor()**
Maps emotion intensity to color:
red → negative
yellow → neutral
blue → positive
Color becomes a visual cue for emotional tone.

**grow()**
Runs every frame and determines:
how the plant is drawn (chaotic / balanced / smooth)
how fast and in what direction it grows
This makes the sketch feel alive — each emotion keeps evolving on its own.

## Second Prototype

With these adjustments current state looks like this:

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/qzwCd8oHs" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

### Improvements on the Emotinal Logic

**Weigted emotional dictionary**
Instead of classifying words as only positive/neutral/negative, i'm giving them each a score between 0-1.

```js
let emotionMap = {
  happy: 0.9,
  calm: 0.7,
  bored: 0.3,
  anxious: 0.1,
  angry: 0.05
};
```

**Partial matching**
Let's words like "happier", "angriness", "stressfull" still be recognized:

`if (word.includes("stress")) return 0.1;`

`if (word.includes("happy")) return 0.9;`

**Intensifiers**
Giving Adjectives more value and letting them affecting the plant:

`if (word.includes("very")) score += 0.1;`

`if (word.includes("slightly")) score -= 0.1;`

## Prototype 3

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/lzCFzuMod" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

### Improvments of Visuals

Since a human beings emotion can't just be pushed into 3 catories and a Matthew reminded me of the movie inside out, i wanted to implement that into the project to improve the visual.

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/XbXVN_bI6" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

# Shift of Concept

My initial concept was an Emotional Garden—an interactive visualization where a single emotion word (e.g., "calm," "angry") seeds a personal, evolving, abstract form. The core fascination was the translation of subjective inner states into objective visual output.

However, I recognized an opportunity to apply this generative visualization not just to personal emotion, but to constructive public engagement.

The Shift: I'm transitioning from a purely expressive tool for personal reflection to an analytical tool for constructive service feedback. Instead of asking "How do you feel?" I'm asking "How did this service/feature make you feel, and why?"

So the Core Concept of getting a visual feedback stays the same, simply its purpose has changed.

## The Generative Feedback Machine

This interactive system is designed for service websites to gather more nuanced, actionable feedback than a simple star rating or open text box typically provides.

Input: Users interact with a feedback prompt after using a service (e.g., "How was the checkout process?"). They are presented with a constrained choice of emotional tones ("Frustrated," "Efficient," "Confused," "Delighted," etc.) and a small text input for elaboration.

Generative Visualization: The system combines the chosen emotional tone and the semantic content of the text input to generate a unique, abstract 3D or 2D p5.js form.

Emotion (Color/Motion): "Frustrated" might trigger jagged, rapid, red/orange forms. "Delighted" might generate smooth, slow, expanding yellow/gold spheres.

Text Semantics (Form/Complexity): Analyzing the text ("The delivery was late" vs. "The design was sleek") refines the form. The word "late" might introduce a dragging, distorted texture, while "sleek" might sharpen the edges and increase smoothness.

Visualization as Data: Each piece of feedback is instantly added to a collective, evolving visualization (a "Feedback Cloud" or "Service Aura").

The service provider can view this collective visualization, immediately identifying dominant tones (a massive "Frustrated" spike) and drilling down into the specific forms/text associated with it to understand why the service feels that way.

## Giorgia Lupi (Data Humanism)

<img src="MediaPNG/dialogue.png" width="400"/>

My visualization is grounded in the philosophy of Data Humanism, championed by designers like Giorgia Lupi. Her work advocates for visualizing data not as cold, objective facts, but as nuanced, subjective human experiences. By translating collective user sentiment (Frustrated, Delighted, etc.) into a growing, abstract sculptural form, we are providing a humanistic, emotional summary of the service experience, moving beyond the sterile efficiency of a standard feedback form.

## Iterations

 (sketch of my core idea)

###  01

In the first prototype I was trying visualize that in a simple way.

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/iqbApEpX_" width="100%" height="450" frameborder="no"></iframe> {% endraw %}
