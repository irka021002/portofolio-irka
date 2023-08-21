<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import About from "./components/About.svelte";
  import Footer from "./components/Footer.svelte";
  import Skills from "./components/Skills.svelte";
  import Experiences from "./components/Experiences.svelte";
</script>

<Navbar />
<main
  class="p-2 md:p-6"
>
  <About />
  <Experiences />
  <Skills />
</main>
<Footer />

