<script>
	// Importing modules
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";

	// Importing components
	import { Header } from "../components/layout";
	import { Spinner } from "../components/basic";

	// Importing stores
	import profile from "../stores/profile.js";

	// onMount event
	// - Here we'll load our
	// application information
	onMount(() => {
		profile.initialize()
		.then(() => {
			loaded = true;
		});
	});

	// 
	let loaded = false;
</script>

{ #if loaded }
	<Header />

	<!-- Content -->
	<div class="bg-gray-100 w-full pt-16">
		<slot></slot>

		<!-- Footer -->
		<footer class="w-full mt-20 py-4 flex px-8 items-center opacity-60">
			<!-- Logotype -->
			<div class="bg-indigo-400 text-white font-bold w-9 h-9 rounded-md shadow-md flex items-center justify-center text-md">
				Bё
			</div>

			<!-- Texts -->
			<div class="w-2/3 pl-12 flex flex-wrap relative">
				<!-- Category: Project -->
				<div class="w-1/4">
					<p class="text-sm text-gray-800 font-medium">Про проєкт</p>

					<!-- List -->
					<div class="flex flex-col">
						<a href="/team" class="my-0.5 text-xs text-gray-700 opacity-70">Разробники</a>
						<a href="/team" class="my-0.5 text-xs text-gray-700 opacity-70">Мета проєкту</a>
						<a href="/team" class="my-0.5 text-xs text-gray-700 opacity-70">GitHub</a>
					</div>
				</div>

				<div class="w-1/4">
					<p class="text-sm text-gray-800 font-medium">Підтримка</p>

					<!-- List -->
					<div class="flex flex-col">
						<a href="/team" class="text-xs text-gray-700 opacity-70">Разробники</a>
						<a href="/team" class="text-xs text-gray-700 opacity-70">Разробники</a>
						<a href="/team" class="text-xs text-gray-700 opacity-70">Разробники</a>
						<a href="/team" class="text-xs text-gray-700 opacity-70">Разробники</a>
					</div>
				</div>

				<div class="w-1/4">
					<p class="text-sm text-gray-800 font-medium">Легальна інформація</p>

					<!-- List -->
					<div class="flex flex-col">
						<a href="/team" class="text-xs text-gray-700 opacity-70">Разробники</a>
						<a href="/team" class="text-xs text-gray-700 opacity-70">Разробники</a>
						<a href="/team" class="text-xs text-gray-700 opacity-70">Разробники</a>
						<a href="/team" class="text-xs text-gray-700 opacity-70">Разробники</a>
					</div>
				</div>

				<!-- Services -->
				<div class="w-1/4 h-max flex flex-col relative">
					<p class="text-sm text-gray-800 font-medium">Сервіси</p>
				
					<!-- List -->
					<div style="overflow: hidden; overflow-y: auto;" class="mt-1 flex flex-grow w-full relative">
						<div class="absolute inset-0 w-full h-full flex flex-wrap">
							
							<!-- FlashCards -->
							<div class="w-full flex items-center">
								<div class="w-6 h-6 rounded-md shadow-md bg-gradient-to-tr from-green-400 to-green-600"></div>

								<!-- Texts -->
								<div class="ml-1">
									<h1 class="text-xs text-gray-800 font-medium">Flashcards</h1>
								</div>
							</div>

							<!-- Library -->
							<div class="w-full flex items-center">
								<div class="w-6 h-6 rounded-md shadow-md bg-gradient-to-tr from-yellow-400 to-red-500 flex justify-center items-center"></div>

								<!-- Texts -->
								<div class="ml-1">
									<h1 class="text-xs text-gray-800 font-medium">Library</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
{ :else }
	<!-- Loading screen  -->
	<div out:fade class="w-full h-screen flex justify-center items-center bg-gray-100">
		<Spinner size="25" />
	</div>
{ /if }