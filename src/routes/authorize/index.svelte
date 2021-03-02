<script>
  // Importing modules
  import { onMount } from "svelte";

  // Importing stores
  import { stores } from "@sapper/app";
  const { page } = stores();

  import profile from "../../stores/profile.js";

  // onMount action
  onMount(() => {
    profile.initialize()
    .then((response) => {
      window.location.href = `${$page.query.uri}?token=${response.token._id}`;
    });
  });

  // Importing components
  import { 
    Spinner
  } from "@atbeta/components/basic";
</script>

<main style="z-index: 999;" class="fixed bg-white inset-0 w-full h-screen flex justify-center items-center">
  <!-- Spinner -->
  <Spinner size="25" />
</main>