<template>
  <img
    class="DiscordHeroLogo"
    alt="Discord Hero Logo"
    src="~/static/DiscordHeroLogo.png"
  >
</template>

<style>
.DiscordHeroLogo {
  width: 380px;
  margin: 5px;
  /* transform: rotateY(360deg);
  animation: turn 1.5s ease-out forwards 0s; */
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
