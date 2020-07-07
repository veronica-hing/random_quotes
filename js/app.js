function quotely(){
  let allQuotes = [
    { quote: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
     author: "Alan Watts"},
    { quote: "Trying to define yourself is like trying to bite your own teeth.",
     author: "Alan Watts"},
    { quote: "Muddy water is best cleared by leaving it alone.",
      author: "Alan Watts"},
    { quote: "You are an aperture through which the universe is looking at and exploring itself.",
      author: "Alan Watts"},
    { quote: "The past has no power over the present moment.",
      author: "Eckhart Tolle"},
    { quote: "Life isn't as serious as the mind makes it out to be.",
      author: "Eckhart Tolle"},
    { quote: "Whatever the present moment contains, accept it as if you had chosen it.",
      author: "Eckhart Tolle"},
    { quote: "Life is the dancer and you are the dance.",
      author: "Eckhart Tolle"},
    { quote: "I have lived with several Zen masters -- all of them cats.",
      author: "Eckhart Tolle"},
    { quote: "Worry pretends to be necessary but serves no useful purpose.",
      author: "Eckhart Tolle"},
    { quote: "Being spiritual has nothing to do with what you believe and everything to do with your state of consciousness.",
      author: "Eckhart Tolle"},
    { quote: "In your actions, don't procrastinate. In your conversations, don't confuse. In your thoughts, don't wander. In your soul, don't be passive or aggressive. In your life, don't be all about business.",
      author: "Marcus Aurelius"},
    { quote: "If it is not right, do not do it, if it is not true, do not say it.",
      author: "Marcus Aurelius"},
    { quote: "Be tolerant with others and strict with yourself.",
      author: "Marcus Aurelius"},
    { quote: "The cost of sanity in this society, is a certain level of alienation.",
      author: "Terence Mckenna"},
    { quote: "You are a divine being. You matter, you count. You come from realms of unimaginable power and light, and you will return to those realms.",
      author: "Terence Mckenna"},
    { quote: "Western civilization is a loaded gun pointed at the head of this planet.",
      author: "Terence Mckenna"},
    { quote: "Nobody is smarter than you are. And what if they are? What good is their understanding to you?",
      author: "Terence Mckenna"},
    { quote: "The imagination is the goal of history. I see culture as an effor to literally realize our collective dreams.",
      author: "Terence Mckenna"},
    { quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
      author: "Jimmy Dean"},
    { quote: "Life is like riding a bicycle. To keep your BALANCE, you must keep MOVING.",
      author: "Albert Einstein"},
    { quote: "If you were born with the weakness to fall, you were born with the strength to rise.",
      author: "Rupi Kaur"},
    { quote: "People go, but how they left always stays.",
      author: "Rupi Kaur"},
    { quote: "Let it go, let it leave, let it happen. Nothing in this world was promised or belonged to you anyway.",
      author: "Rupi Kaur"},
    { quote: "Trust your body, it reacts to right and wrong better than your mind does.",
      author: "Rupi Kaur"},
    { quote: "The thing worth holding onto would not have let go.",
      author: "Rupi Kaur"},
    { quote: "I will no longer compare my path to others-I refuse to do a disservice to my life",
      author: "Rupi Kaur"},
    { quote: "If I'm not the love of your life, I'll be the greatest loss instead",
      author: "Rupi Kaur"},
    { quote: "Do not feel lonely, the entire universe is inside you.",
      author: "Rumi"},
    { quote: "You are not a drop in the ocean. You are the entire ocean, in a drop.",
      author: "Rumi"},
    { quote: "Why do you stay in prison, when the door is so wide open?",
      author: "Rumi"},
    { quote: "Seek the wisdom that will untie your knot. Seek the path that demands your whole being.",
      author: "Rumi"},
    { quote: "Travel brings power and love back into your life.",
      author: "Rumi"},
    { quote: "Be empty of worrying. Think who created thought!",
      author: "Rumi"},
    { quote: "What? Are you still pretending you are separate from the Beloved?",
      author: "Rumi"},
    { quote: "Gratitude is the wine for the soul. Go on. Get drunk.",
      author: "Rumi"},
    { quote: "When the world pushes you down on your knees, you're in the perfect position to pray.",
      author: "Rumi"},
    { quote: "Live life as if everything is rigged in your favor.",
      author: "Rumi"},
    { quote: "Maybe you are searching among the branches, for what only appears in the roots. ",
      author: "Rumi"},
    { quote: "Look past your thoughts, so you may drink the pure nectar of This Moment",
      author: "Rumi"},
    { quote: "The beauty you see in me is a reflection of you.",
      author: "Rumi"},
    { quote: "Let the waters settle and you will see the moon and the stars mirrored in your own being",
      author: "Rumi"},
    { quote: "If you look too closely at the form, you'll miss the essence",
      author: "Rumi"},
    { quote: "Do thing and you will have the power",
      author: "Ralph Waldo Emerson"},
  ]//end of allQuotes array
  let nummu = Math.floor(Math.random()*allQuotes.length);
  document.querySelector(".quote > span").innerHTML = "\""+ allQuotes[nummu].quote + "\"";
  document.querySelector(".author > span").innerHTML = "- "+ allQuotes[nummu].author;
}

function fadeIn(){
  document.getElementById('main').style.opacity = '1';
}

function  fadeOut(){
  document.getElementById('main').style.opacity = '0';
}

function main(){
  window.setTimeout(fadeIn,1000);
  quotely();
  window.setTimeout(fadeOut,6000);
}
setInterval(main,7000);
