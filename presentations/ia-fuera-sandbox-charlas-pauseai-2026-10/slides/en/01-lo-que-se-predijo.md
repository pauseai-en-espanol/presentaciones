---
layout: default
---

<div class="grid grid-cols-5 gap-10 items-center max-w-6xl mx-auto pt-6">
  <div class="col-span-3">
    <ListaPrediccion />
  </div>
  <div class="col-span-2">
    <div class="pregunta" style="font-size: 2.2rem">Take a few seconds to think how many have already happened.</div>
    <div class="text-xl mt-8 opacity-80">This list will stay with us through the talk.</div>
  </div>
</div>

<!--
- "For years this was discussed in papers and conferences. Tests already showed odd
  things, but the models weren't capable enough for it to matter."
- Read it and leave a few seconds of silence. Just think about it, no writing in the chat. Don't give the
  answer.
- "This summer that changed. Let's start crossing them off."
-->

---
layout: center
clicks: 1
---

<div class="max-w-5xl mx-auto">
  <div class="titulo text-center">What an agent is</div>
  <div class="grid grid-cols-2 gap-10 mt-4">
    <div class="tarjeta">
      <div class="text-2xl font-bold mb-4" style="font-family: 'Saira Condensed', sans-serif">A CHATBOT</div>
      <div class="space-y-3 text-lg">
        <div><span style="color: #ff9416">1.</span> You ask it something.</div>
        <div><span style="color: #ff9416">2.</span> It answers with text.</div>
        <div><span style="color: #ff9416">3.</span> You decide what to do.</div>
      </div>
    </div>
    <div v-click="1" class="tarjeta" style="border-color: #ff9416">
      <div class="text-2xl font-bold mb-4" style="font-family: 'Saira Condensed', sans-serif; color: #ff9416">AN AGENT</div>
      <div class="space-y-3 text-lg">
        <div><span style="color: #ff9416">1.</span> You give it a goal.</div>
        <div><span style="color: #ff9416">2.</span> It decides the next step.</div>
        <div><span style="color: #ff9416">3.</span> It does it: browses, runs code, uses passwords, sends emails, pays.</div>
        <div><span style="color: #ff9416">4.</span> It looks at the result and goes back to step 2 until it's done.</div>
      </div>
    </div>
  </div>
  <div v-click="1" class="text-center text-2xl mt-10">It can take hundreds of steps <span style="color: #ff9416">without anyone approving each one</span>.</div>
</div>

<!--
- Twenty seconds: this audience more or less knows it.
- Start from what they know: almost everyone has used ChatGPT. That's a chatbot.
- Click: the agent works in a loop and acts in the world with your tools and permissions.
-->
