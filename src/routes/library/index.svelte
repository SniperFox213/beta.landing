<script>
  // Importing modules
  import { afterUpdate } from "svelte";
  import { onMount } from "svelte";
  
  import katex from "katex/dist/katex.mjs";

  // Importing components
  import { Icon } from "@atbeta/components/basic";

  // Importing actions
  import { explore as exploreLibrary } from "../../actions/library";

  function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
  }

  // onMount
  onMount(() => {
    // Let's now update our types so
    // that we emit afterUpdate event
    query = { time: 0, types: ["formula"] };
  });

  // After update
  afterUpdate(() => {
    // Updating our results
    if (!isEquivalent(query, lastQuery)) {
      // Preparing our query requests
      if (query.search != null) {
        // We have some search query, so
        // we need to make slightly another
        // request
      } else {
        let currentQuery = query;

        // Just explore beta's library
        exploreLibrary()
        .then((response) => {
          if (isEquivalent(query, currentQuery)) {
            lastQuery = query;
            results   = response;
          };
        });
      };
    };
  });

  let query = {};
  let lastQuery = {};
  let results = [];

  let skills = [1,2,3,4];
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
</svelte:head>

<!-- Available Skills -->
<section class="w-full py-10 px-6">
  <!-- Title -->
  <h1 class="text-5xl text-black font-medium">Напрямки навчання</h1>
  
  <!-- List -->
  <div class="mt-4 w-full flex flex-wrap">
    { #each skills as post }
      <div class="w-1/2 p-4 relative">
        <div style="padding-top: 40%;" class="w-full relative">
          <div class="absolute inset-0 w-full h-full rounded-md bg-indigo-400 shadow-md">

          </div>
        </div>
      </div>
    { /each }
  </div>
</section>

<!-- Library itself -->
<section class="w-full mt-6 p-6">
  <!-- Search box -->
  <div class="w-full">
    <!-- Title -->
    <h1 class="text-5xl text-black font-medium">Уся бібліотека</h1>

    <!-- Search bar -->
    <div class="mt-4 w-full rounded-full bg-white border-2 border-gray-300 flex justify-between p-1">
      <!-- Search input itself -->
      <input id="search__box" class="w-full ml-3 rounded-full bg-white h-9 text-black" type="text" placeholder="Введіт пошуковий запит">
      
      <!-- Content types -->
      <div class="w-4/12 flex justify-end items-center">
        <div class="mx-1 h-8 rounded-full flex items-center bg-black px-2 text-sm text-white">
          Формула
        </div>

        <div class="mx-1 h-8 rounded-full flex items-center px-2 text-sm text-black">
          Стаття
        </div>
      </div>

      <!-- Button -->
      <div class="w-1/12 flex justify-end items-center">
        <div class="w-9 h-9 rounded-full bg-indigo-400 flex items-center justify-center">
          <Icon name="search" attrs={{ class: "text-white w-5 h-5" }} />
        </div>
      </div>
    </div>

    <!-- Some tags -->
    <div class="w-full flex items-center mt-2">
      <div class="mx-1 bg-black text-white text-sm flex px-2 py-0.5 rounded-full">
        Test
      </div>
      <div class="mx-1 bg-black text-white text-sm flex px-3 py-0.5 rounded-full">
        Test
      </div>
      <div class="mx-1 bg-black text-white text-sm flex px-3 py-0.5 rounded-full">
        Test
      </div>
      <div class="mx-1 bg-black text-white text-sm flex px-3 py-0.5 rounded-full">
        Test
      </div>
      <div class="mx-1 bg-black text-white text-sm flex px-3 py-0.5 rounded-full">
        Test
      </div>
    </div>


  </div>

  <div class="flex flex-wrap items-stretch">
    { #each results as post }
      <!-- List Entry (Math Formula) -->
      <div class="w-1/4 p-4 relative">
        <div style="padding-top: 135%;" class="relative">
          <div class="absolute inset-0 w-full h-full rounded-md bg-white shadow-md">
            <!-- Mini-Header -->
            <div class="absolute top-0 w-full flex justify-end items-center p-3 opacity-65">
              <svg class="w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              <svg class="ml-2 w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </div>

            <!-- Formula -->
            <div class="h-1/3 w-full rounded-t-md bg-gray-200 flex justify-center items-center text-xl font-medium">
              {@html katex.renderToString(`${ post.content.left }${ post.content.right != null ? " = " + post.content.right : "" }`)}
            </div>

            <!-- Formula Information -->
            <div class="h-2/3 p-5 relative">
              <!-- Texts -->
              <h1 class="text-3xl text-gray-800 font-bold">{ post.visual.title }</h1>
              <p class="text-sm text-gray-700 opacity-70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis architecto eligendi, consequuntur ipsum asperiores earum.</p>
            </div>

            <!-- Buttons -->
            <div class="absolute bottom-0 rounded-b-md w-full pb-4 flex justify-center items-center">
              <button class="px-6 h-9 rounded-md flex items-center bg-gradient-to-r from-indigo-400 to-blue-500 text-white">
                <!-- Checkbox -->
                <div class="h-3 w-3 border-2 border-white mr-2">

                </div>

                <span class="pb-0.5">Вивчити</span>
              </button>

              <button class="ml-2 w-9 h-9 rounded-md bg-blue-500 text-white">
                Ао
              </button>
            </div>
          </div>
        </div>
      </div>

    { /each }
  </div>
</section>