<script>
	// Importing components
	// import Message from "./components/Message.header.svelte";

  import { Logotype } from "@atbeta/components/brand";
  import { Icon } from "@atbeta/components/basic";

	// Importing config files
	import { pages } from "../../../config/landing";

  // Importing stores
  import profile from "../../../stores/profile.js";

  // Variables
  let dropdownOpened = false;
</script>

<!-- Current service message -->
<!-- <Message /> -->

<!-- Header -->
<header style="z-index: 3;" class="fixed w-full h-14 flex items-center justify-between px-8 bg-white">
  <!-- Logotype -->
  <div class="flex items-center w-1/4">
    <!-- Beta Logotype -->
    <Logotype />

    <!-- Text -->
    <h1 class="text-gray-800 ml-2 text-xl font-bold">Bёta</h1>
  </div>

  <!-- Links -->
  <div class="w-2/4 flex justify-center">
    <!-- Services -->
    <button
      on:click={(e) => {
        if (dropdownOpened) {
          dropdownOpened = false;
        } else {
          dropdownOpened = true;
        }
      }}
      class="transition duration-200 ease-in-out {dropdownOpened
        ? 'border-b-2 border-indigo-400'
        : ''} cursor-pointer mx-4 flex items-center opacity-70 hover:opacity-100 text-gray-700 hover:text-gray-800"
    >
      <span class="text-xs">Сервіси</span>

      <!-- Icon -->
      <Icon name="chevron-down" attrs={{ class: "ml-0.5 w-3 h-3 mt-0.5" }} />
    </button>

    <!-- About -->
    <div
      class="transition duration-200 ease-in-out cursor-pointer mx-4 flex items-center opacity-70 hover:opacity-100 text-gray-700 hover:text-gray-800"
    >
      <span class="text-xs">Про проєкт</span>
    </div>
    <!-- Donate -->
    <div
      class="transition duration-200 ease-in-out cursor-pointer mx-4 flex items-center opacity-70 hover:opacity-100 text-gray-700 hover:text-gray-800"
    >
      <!-- Icon -->

      <span class="text-xs text-gray-700">Підтримати проєкт</span>
    </div>
  </div>

  <!-- User Account -->
  <div class="flex justify-end items-center w-1/4">
    <button class="px-6 h-9 rounded-md bg-gradient-to-r from-indigo-400 to-blue-500 text-white">
      Авторізуватися
    </button>
  </div>
</header>

{ #if dropdownOpened }
	<!-- Dropdown -->
	<div
		on:click={(e) => dropdownOpened = false}
		class="fixed inset-0 w-full h-full bg-black opacity-40"
		style="z-index: 1;"
	/>

	<div
		class="w-full bg-white fixed mt-20 bg-white shadow-b-md flex justify-between items-start p-12 border-t border-gray-200"
		style="z-index: 2;"
	>
		<div class="w-5/6 relative">
			<h2 class="px-4 text-2xl text-gray-800 font-bold">Сервіси</h2>
			<p class="px-4 text-md text-gray-700 opacit-70">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id suscipit
				recusandae asperiores corrupti, praesentium earum!
			</p>
			<div class="mt-4 w-full relative flex flex-wrap">

				{ #each pages.filter((x) => !x.wip) as page }
					<div on:click={(e) => {
						window.location.href = page.href;
					}} class="w-1/3 flex items-center px-4 py-2 relative">
						<div
							class="w-12 h-12 rounded-md flex justify-center items-center opacity-70"
							style="{ page.icon.background }"
						>
							<img class="w-2/3" src="./icons/{ page.icon.image }" alt="" />
						</div>
	
						<div class="pl-3 w-2/3">
							<h2 class="text-xl text-gray-800 font-medium">
								<span class="font-bold">Bё</span> { page.title } 
							</h2>
							<p class="text-xs text-gray-700 opacity-70">
								{ page.description }
							</p>
						</div>
					</div>
				{ /each }

				<div class="w-1/3 flex items-center px-4 py-2 relative">
					<div
						class="w-12 h-12 rounded-md border-2 border-dotted border-gray-300"
					/>
					<div class="ml-3">
						<h2 class="text-xl text-gray-800 font-medium">Більше сервісів</h2>
						<p class="text-xs text-gray-700 opacity-70">
							Більше корисних сервісів для навчання
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
{ /if }