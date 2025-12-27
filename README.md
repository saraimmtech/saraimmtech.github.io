# Module Journal - Generative Computer Graphics

Coming from a background in carpentry, where my job description was basically "build it with your bare hands," using code as a creative tool has challenged me in ways I didn't see coming. This journal is a space for me to document the whole journey—the mistakes, the "aha!" moments, the total failures, and the wins. It’s a look at how my creative process is shifting from the analog world to an algorithmic one.

## Lesson 01 - Introduction & Foundations

In our first lecture, we dove into Generative Computer Graphics by playing a game called Sprouts. We started with a few random dots on paper, then took turns connecting them with lines and adding a new dot in the middle of every connection. We kept going until we were totally stuck. You can see our result below.

<img src="MediaPNG/Peach.png" width="500" />

Honestly, we might have messed up the rules a bit, but we ended up with this random sketch that started as dots and finished looking like... a peach? A cockatoo? We aren't really sure, but we had a blast making it.

It reminded me of something Jared Tarbell said: "When you write a program, it’s going to be executed the same way every single time. So if you define a system like this where things can happen at random, as the creator, you can be surprised by your own program, which is really great."

That’s exactly why I picked one of his pieces to feature here; it's that element of randomness that makes the visuals feel unique.

<img src="MediaPNG/jared.png" width="400"/>

I’ve always been fascinated by art that begins with one simple piece and, through nothing but repetition and a few rules, grows into something incredibly complex and complete.
  
## Lesson 02 - Grids & Iterative Patterns - Structured generative systems

My first attempt was inspired by a chessboard, using a simple function to build a grid of 8 columns and 8 rows. This served as the foundation for the logic I’d use later on.

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/gHh0xZ56N" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

The code calculates a `cellSize` by dividing the workspace into 8 columns and 8 rows. Using "nested loops" (a loop inside a loop), it systematically moves across every single "plot" on the grid, just like you’d mark out a piece of timber for repeatable cuts.

The line `if((i + j) % 2 == 0)` acts as a filter. It uses a bit of math to check if a cell is "even" or "odd." This ensures the code only draws on every other square, creating that alternating checkerboard pattern automatically rather than you having to pick each spot by hand.

This is a vital concept in creative coding.
- `push()`saves the current state of the canvas.
- `translate()` and `rotate()` move the "tools" to the center of a specific square.
- `pop()`resets everything back to the original corner. It’s exactly like using a jig in woodworking: you set it up to do one specific task in one specific spot, then remove it so you can move on to the next piece without your previous measurements interfering.

Instead of a static image, the code uses`frameCount` and `angle`.

- `frameCount` acts like a clock that never stops, causing the lines to spin.
- Adding `(i + j)` to the angle ensures that not every line spins at the exact same time. This creates a "staggered" or wave-like motion across the grid, adding that layer of complexity you mentioned admiring in Jared Tarbell’s work.

Building on what I learned in the first lesson, the next sketch takes the idea of a simple grid and makes it feel alive. It’s less about a static image and more about creating a "system" that moves on its own.

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/yL7A0Io8S" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

Just like the first experiment, this starts with a 10x10 grid. The code calculates a`centerX` and `centerY` for every single cell. This is important because it gives each square its own "anchor point." By defining these centers first, I can move, spin, or scale each square individually without them drifting out of their lane. It keeps the chaos organized.

Instead of just drawing squares, I’m using a `sin()` wave combined with the`frameCount` to control their size.
- The Scale: The `map()` function translates that mathematical wave into a `scaleFactor`, making the squares grow and shrink between 80% and 120% of their original size.
- The Offset: By adding `(x + y)` to the math, the squares don't pulse all at once. It creates a ripple effect that travels diagonally across the screen. It’s a perfect example of how adding one tiny variable to a simple rule can make a rigid grid feel organic and fluid.


After experimenting with rotating lines and pulsing squares, I wanted to combine the two ideas into turning tiles. In the process, I stumbled onto something pretty interesting.

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/VInFjYFkg" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

It’s hard to miss that the tiles are turning at different speeds. This happened because of how I set up the rotation math:

`let angle = frameCount * 0.01 * (x + y);`

Because the value of `x + y` is different for every single tile, the speed changes depending on where the tile is located. The tiles in the top-left rotate slowly, while the ones in the bottom-right spin much faster. This was one of those great moments where an unexpected result—basically a "mistake"—led to a completely new idea.

In the first canvas, I mostly played around with shapes and different ways to make things turn. In the second version, I experimented with color. It’s fascinating how such a small change in color can completely shift the mood of the piece. While the first one feels more mechanical, the second one feels like a floating simulation.

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/4rfxuTqXl" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

Since the `draw()` function refreshes about 60 times per second, the sketch is constantly unfolding. I noticed there’s a specific moment where all the tiles seem to align and turn together—it almost looks like a wave catching the sun or a mirror reflecting light, even though the colors aren't actually changing. It’s that element of surprise in the code that Jared Tarbell talked about.

## Lesson 03 - Clock / Time - Generative representation of time

In today’s lesson we were building a device visualizing the passing of time. To have an idea how I want to build my clock I drew a quick sketch to define the key elements of the goal I wanted to achieve

### Clock

Unlike a normal clock with fixed hands moving around a face, this design uses colored arcs that grow and shrink over time. Instead of hands rotating, each ring fills up as seconds, minutes, and hours pass — so time feels like expanding waves rather than ticking motion. The pulsing center and soft transitions make it feel alive and continuous instead of mechanical.

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/Acucskcub" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

The most important part of this code is the `map()` function. Since time naturally comes in segments—60 seconds, 60 minutes, 12 hours—I had to find a way to translate those numbers into degrees to get the arcs to draw themselves around a circle.
I set it up so that as the time increases, the arc grows from -90 degrees (the top of the circle) all the way to 270 degrees. To make the movement feel fluid rather than jumpy, I added a bit of extra math, like `mn + sc / 60.0`. This ensures the minute hand doesn’t just snap to the next position every minute; instead, it creeps forward slightly with every second, making the system feel much more organic. To top it off, I used `millis()`to create a center pulse—a tiny "heartbeat" that keeps the sketch moving even when the hour hand seems still.

---

I’ve always been fascinated by how much actually happens in the world every single second, and I wanted to try and capture that scale within my clock. I used the website everysecond.io as a reference—it visualizes things like a whale’s heartbeat, Apple’s marketing spend, or the sheer amount of plastic entering the ocean.
The count starts the moment the page is refreshed. Since I’m also studying UI and UX, I have to admit it’s a bit of a "fail" on my part that I forgot to include a text display showing how many minutes have actually passed. In this system, one full 360-degree rotation equals one minute, and the data counts up second by second.

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/vN-LeUx2A" width="80%" height="150" frameborder="no"></iframe> {% endraw %}

The 60-Second Cycle A full 360∘ turn in p5.js is represented as `TWO_PI`. To ensure the needle completes this turn in exactly 60 seconds, the rotation is defined by the ratio of time passed against the target duration:

- `millis() / 1000`: Converts the internal clock to raw seconds.
- `/ 60`: Determines the "percentage" of the minute that has completed.
- `* TWO_PI`: Maps that percentage to the circle.

Every cell in the grid references the exact same `angle` variable. This creates a unified mechanical movement —acting as a single, distributed clock face.
The data visualization follows the same temporal logic. Since `runningTotal` uses the same `secondsElapsed` variable as the rotation, the numbers and the needles are perfectly tethered. As the needle completes its 60-second circuit, the numbers climb at the exact calibrated `rate` defined in the `stats` array.
Easy said: A visual rotation and data accumulation are locked to the same 1:1 real-world second.

## Lesson 04 - Drawing Machines - Generative systems as drawing tools

Instead of directly controlling every line, you define the logic and let the system execute it.

### Circle-Drawing tool

Each click adds a new circle, building up a layered field of colors — a simple interactive generative composition where randomness and repetition create the pattern.

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/yo2mJqUoO" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

Unlike my previous sketches where things were drawn and then refreshed every frame, this one uses an empty "container" (an array) to store every circle I create. By pushing new data into this list every time I click, the code "remembers" every single circle’s position, size, and color. In the `draw()` loop, it constantly cycles through that list to redraw the entire collection, allowing the image to build up over time rather than just disappearing.

Even though I’m the one choosing where the circles go, I’ve left some of the decisions up to the code.

-	Every time I click, the code takes my `DEFAULT_RADIUS`and multiplies it by a random number between 0.2 and 1.2. This gives the "stamps" some organic variety.
-	I set the colors to pull from a random range of RGB values with a bit of transparency (200).
  
It’s a mix of my own intent—clicking exactly where I want—and the computer’s ability to add those "surprises".

---

### Etch A Sketch

I can't really say why or how, but while developing the circle drawing tool, I was reminded of another drawing tool. I couldn't remember what it was called, just the feeling of using it. I drew a quick sketch in Procreate, hoping someone would recognize it.

<img src="MediaPNG/EtchASketch.png" width="500" />

Finally, someone did: it was an Etch A Sketch. The toy was invented in the late 1950s by a French electrician. The idea came to him by watching pencil strokes being transferred through plastic sheets on a factory wall. Inside the glass screen is a thin layer of aluminum powder. When the knobs are turned, a hidden pointer (pen) moves across the surface and scratches away the powder. This process leaves dark lines where the powder has been removed.

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/-WTDxlDWW" width="100%" height="600" frameborder="no"></iframe> {% endraw %}

This sketch is an Etch A Sketch–inspired drawing tool built with p5.js. It uses an offscreen buffer as the “screen,” which allows the etched lines to remain while the main canvas continuously redraws the frame and interface elements. The drawing can be controlled either by interacting with the knobs using the mouse, or through the keyboard: W and S move the stylus up and down, while A and D move it left and right.

**Offscreen Drawing Buffer**

`let buffer; `

The buffer functions as the Etch A Sketch screen. Because all drawing happens there, the frame and controls can be redrawn every frame without affecting the marks that have already been made. This separation helps the drawing behave more like a physical surface than a typical digital canvas.

**Stylus State**

`let stylus; `

`let prevStylus; `

The stylus represents the current position of the hidden drawing mechanism. It is not a visible pen, but an abstract point that moves across the buffer. Each frame, the previous position is stored, a new position is calculated, and a line is drawn between the two. This produces continuous strokes rather than discrete points, reinforcing the feeling of a mechanical plotting process.

**Button object: Rotary encoder as control signal**

`function Knob(x, y, r, orientation) `

Each knob is defined as a small object with a position, a radius, a rotation angle, and a grab state to track interaction. The knobs do not move the stylus directly. Instead, changes in their rotation are interpreted as movement signals, which are later translated into drawing.

**Visual Representation**

```
Knob.prototype.draw = function() {
  rotate(this.angle);
  ellipse(0, 0, this.r*2);
  line(0, -this.r*0.5, 0, -this.r*0.9);
};
```
A simple line indicator shows the current orientation of each knob. This makes the rotation legible without the need for numerical values or additional interface elements.

**Interaction Logic**

`Knob.prototype.hitTest = function(mx, my) `

The knobs can be grabbed using distance-based hit detection. Once grabbed, their angle is updated using:

`atan2(mouseY - knob.y, mouseX - knob.x) `

This converts circular mouse movement into rotation, preserving an intuitive and physically familiar interaction.

**Translating Rotation into Drawing**

The most important conceptual step takes place in `applyKnobMovement()`:

`let dA_left  = leftKnob.angle  - lastAngles.left; `

`let dA_right = rightKnob.angle - lastAngles.right;`

Instead of using absolute angles, the sketch measures how much each knob has rotated since the last frame. These angular changes are then converted into linear movement:

`let dx = dA_left  * (speedFactor * 60); `

`let dy = dA_right * (speedFactor * 60); `

This approach avoids sudden jumps, encourages slow and continuous interaction, and introduces a sense of inertia similar to physical mechanisms. The stylus is constrained to the boundaries of the buffer, preserving the edges of the drawing surface.

**Drawing as Accumulation**

`buffer.line(prevStylus.x, prevStylus.y, stylus.x, stylus.y); `

Each frame leaves behind a permanent mark. There is no undo, and no way to correct a line once it has been drawn. This creates a subtle pressure toward patience and intentionality, echoing the constraints of analog drawing tools.

**Frame and Interface Design**

The red frame surrounding the drawing area is purely graphical, but it plays an important role in how the sketch is perceived. It frames the interaction as an object or device rather than an open canvas:

`rect(0, 0, width, height, 28); `

`text('ETCH A SKETCH', width/2, 28); `

This reinforces the metaphor and invites a more playful, exploratory approach to drawing.

**Reflection**

This sketch shows how relatively simple relationships—angular change, linear mapping, and constraint—can produce rich generative behavior when paired with a strong interaction metaphor. The drawing emerges over time through use, rather than through direct control, positioning the system somewhere between a drawing tool and a generative machine.

## Lesson 06 - Faces / Parametric Generators - Parametric design through faces

To be honest, I’ve never really been a fan of portraits, so focusing on faces wasn't exactly my favorite topic. Whether it’s a detailed sketch or something abstract made of shapes, it just never clicked with me the way geometric systems do. Because of that, I’m keeping this chapter short.

### Faces

My first attend was rather simple its is a simple face created like a little child is told to draw a face. It looks like a tomato with a few hair and a face.

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/67_o7XVZZ" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

At the top of the code, I defined a set of "blueprint" variables like `eyeSize`,  `irisSize`, and `eyeSpacing`. By doing this instead of just hard-coding numbers, I’ve created a system where I can change the entire character of the face just by tweaking a few values. It’s like having a master control panel for the face’s proportions. For example, if I change the `eyeSpacing`, both eyes move together, maintaining their symmetry automatically.

For the hair, I went back to the `for`loop logic I used in my grids. Instead of drawing every strand by hand, I wrote a loop that repeats a `bezier()` curve ten times. A bezier curve is basically a line that "bends" between two points—it’s much more fluid and natural-looking than a straight line, which is perfect for representing hair.

The next sketch takes the "digital anatomy" idea a step further by introducing Generative Design. Instead of me manually tweaking the values to change the face, I’ve built a system that does it for me at the click of a button. It’s all about creating a set of rules and then letting the computer "roll the dice."

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/ndnxCk6pG" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

This is the "brain" of the sketch. I’ve defined several variables—like faceWidth, eyeSize, and even `skinColor`—but I don't give them fixed numbers. Instead, I use the `random()` function to pick a value within a specific range every time the button is pressed.

What’s really cool here is the conditional randomness. For example,`numEyeballs` has a 20% chance of being 1 and an 80% chance of being 2. It’s not just random; it’s weighted randomness, allowing for "mutations" like a cyclops to appear every now and then. This is exactly what Jared Tarbell meant about the creator being surprised by their own program.

## Lesson 07 - Pixels - Pixels as material + Advanced pixel transformations

In this lesson, we were challenged to treat pixels as raw material—basically using them as digital "building blocks" to create an original design.

### From Paper Scrabs to Code

For the pixel project, I got the idea from an influencer on Instagram. My first step was picking a picture of someone you’d actually want to hang on your wall. I think I got a little carried away being creative with pencil and paper again.

<img src="MediaPNG/Meryl(2).png" width="400"/>

Even though it got a bit messy with all the glue, it had that organic "something" that only analog art has. There was a time when I wouldn’t have been happy with this outcome, but because it felt so good to build something using nothing but my hands, I was actually pretty pleased with it.

**Digital Growing Pains**

When it came to the digital version, I wanted to adjust the width of the image, but I started out with the wrong approach. I tried dividing the image by four (marked in orange)—or at least, that’s what I thought I was doing. In reality, I was only shrinking the canvas, not the image itself. That’s why you can see the grey background of the tiger getting cut off in the top right corner.


<img src="MediaPNG/ImageSizeWrong.png" width="400"/>

In my second attempt, I fixed this by making the canvas smaller and adding a specific line of code to guarantee the image always fits the workspace perfectly:

`image(img, 0, 0, width, height);`

<img src="MediaPNG/ImageSizeRight.png" width="400"/>

It was a good reminder that in code, you have to be very specific about whether you are resizing the "frame" or the "picture" itself.

To make the "pixels" round, I needed to change how the image is rendered inside the loop. Instead of drawing the raw rectangular `image()` tile, I used the `get()` function to grab the color of that specific area and use it to fill an `ellipse()`.

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/tuPOCAB1Q" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

Instead of drawing the image tile, we use `img.get(sx, sy)` to pick up the color at that coordinate.

-	`ellipse()` instead of `image()`: We draw a circle filled with the sampled color.
-	 Added `background(0)`because, unlike the rectangular tiles, circles leave small gaps between them where the canvas background shows through.

---

# Mind Garden

For my semester project, I decided to dive deeper into **Lesson 04 - Drawing Machines**. I wanted to see how I could move beyond simple shapes and create a generative system that actually acts as a tool for expression.

**The Concept**

My starting point was the idea of a digital emotion diary—an interactive visualization where feelings take on a physical form. The goal is for a user to type in a single word describing how they feel, and the system grows a "plant" based on the meaning of that word. For example, "calm" might create smooth, blue waves, while "angry" would trigger sharp, red spikes and chaotic movement.

**How it works:**

•	**Text input**: Acts as the "seed" for the visualization.
•	**The Algorithm**: Translates that sentiment into specific rules for color, form, and motion.
•	The Outcome: Over time, the canvas becomes a "garden" of emotions contributed by different users.

**Why this?**

I love that this is both interactive and personal. Visualizing emotions is always fascinating because the outcomes are unique every time. I could even see this being a creative tool for psychologists; it would give visitors a way to express feelings and get immediate, engaging visual feedback instead of just staring at a blank text box.

<img src="MediaPNG/MindGarden.png" width="400"/>

This sketch captures the core mechanic I’m going for. It’s all about that direct link between the user and the screen—you provide the 'seed' via the input bar, and the flower grows out of it in real-time. It’s the first step in turning a static word into a living, generative form.

## First Prototype

To figure out the direction I wanted to take, I started with a basic canvas where I could test the "planting" logic. In this version, you enter an emotion like joy, happy, or anger into the bar and hit enter. The code then triggers the specific "plant" assigned to that word. It’s a simple start, but it’s the first step in seeing how a word can actually grow into a visual structure.

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/6MoSRjm5T" width="100%" height="450" frameborder="no"></iframe> {% endraw %}

### Explanations of key codes

`let plants = [];*`

This array stores all the emotion-plants the user creates. Each new word becomes a new instance of the EmotionPlant class.

`button.mousePressed(() => addEmotion(input.value()));`

Links the button to the emotion-creation system.
When the user clicks Grow, the word they typed is processed and turned into a plant.

`getMoodScore(word)`

This function classifies the user’s emotion word into a mood score:
1 → positive
0.5 → neutral
0 → negative
This single score determines color, shape, and growth behavior.

`plants.push(new EmotionPlant(word, moodScore));`
ld.
Every plant is independent and grows each animation frame.

**class EmotionPlant { ... }**
Encapsulates all th`class EmotionPlant { ... }`
ons visually.
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

In the second attend it looked already more like the reference

{% raw %} <iframe src="https://editor.p5js.org/trisaratops2.0/full/xx4RtjXxb" width="100%" height="450" frameborder="no"></iframe> {% endraw %}
