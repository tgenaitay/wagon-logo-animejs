var logoTimeline = anime.timeline({
  loop: true
});

logoTimeline
.add ({
  targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: function(el, i) { return i * 1000 },
    direction: 'alternate',
    loop:true
  })
.add ({
  targets: '.lines',
  duration: 1500,
  fill: {value: '#FFF',duration: 800, easing: 'linear' },
  opacity: { value: 0, duration: 300, delay: 3000, easing: 'linear' }
});
