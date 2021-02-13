<script>
	// Importing components
	import { Header } from "../components";
</script>

<!-- Message -->
<div style="z-index: 3;" class="fixed px-5 w-full h-6 bg-indigo-400 flex items-center justify-between">
	<!-- Text -->
	<div class="flex items-center">
		<!-- Icon -->
		<svg class="w-3 h-3 text-gray-100" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>

		<!-- Text -->
		<p class="ml-1 text-xs text-gray-100">Проєкт ще знаходится на стадії розробки.</p>
	</div>

	<!-- Close Button -->
	<button class="w-4 h-4 rounded-md bg-white text-gray-800 flex justify-center items-center">
		<svg class="w-3 h-3 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
	</button>
</div>

<Header />

<!-- Content -->
<div style="z-index: 0;" class="bg-gray-100 w-full pt-16">
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