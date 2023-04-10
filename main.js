let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #007f5c;">Soy programadora frontend e ingeniera en biotecnología.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
