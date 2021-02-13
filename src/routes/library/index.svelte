<!-- Search Box Section -->
<section class="w-full h-screen flex justify-center items-center relative">
  <div class="w-2/3 h-2/3 rounded-md flex flex-col justify-center items-center shadow-md bg-gradient-to-r from-indigo-300 to-blue-500">
    <!-- Texts -->
    <div class="w-2/3 text-center">
      <h2 class="text-white font-bold text-4xl">Пошук по бібліотеці</h2>
      <p class="text-md text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reiciendis molestias sequi a sunt modi.</p>
    </div>

    <!-- Search Box + Tags -->
    <div class="mt-4 w-2/3">
      <!-- Search Box -->
      <div on:click={(e) => {
        document.getElementById("search__box").focus();
      }} class="w-full flex justify-start items-center bg-white rounded-md h-9 px-3">
        <!-- Input -->
        <input id="search__box" class="bg-white h-8 text-black" type="text" placeholder="Введіт пошуковий запит">
        
        <!-- Icon -->
      </div>

      <!-- Tags -->
      <div class="w-full flex justify-center items-center mt-3">
        <!-- Tag Entry -->
        <div class="mx-1 rounded-full py-0.5 px-3 bg-gray-100 text-sm">
          Tag 1
        </div>

        <div class="mx-1 rounded-full py-0.5 px-3 bg-gray-100 text-sm">
          Tag 1
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Library itself -->
<section class="h-min-screen w-full">
  <!-- Mini-Header -->
  <div class="w-full flex items-center justify-between px-8">
  </div>

  <!-- List -->
  <div class="mt-4 w-full h-full px-6">
    <!-- Card Decks -->
    <div class="my-8 flex flex-wrap justify-center">

      <div class="w-1/4 p-4 relative">
        <div style="padding-top: 135%;" class="relative">
          <div class="absolute inset-0 w-full h-full rounded-md bg-white shadow-md">
          </div>

          <!-- Card Left -->
          <div class="transform absolute inset-0 w-full h-full rounded-md bg-white shadow-md opacity-70">
          </div>

          <!-- Card Right -->
          <div class="transform absolute inset-0 w-full h-full rounded-md bg-white shadow-md opacity-70">
          </div>
        </div>
      </div>
  
    </div>

    <!-- Formula Category -->
    <div class="my-8 flex flex-wrap justify-center">
      <div class="mb-6 px-4 text-left">
        <h2 class="text-3xl text-gray-800 font-bold">Lorem ipsum dolor sit amet.</h2>
        <p class="text-md text-gray-700 opacity-65">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ea cupiditate a amet quam ad culpa, adipisci temporibus nihil, placeat obcaecati, sit consequuntur expedita quaerat?</p>
      </div>

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
              a + b = sosi
            </div>

            <!-- Formula Information -->
            <div class="h-2/3 p-5 relative">
              <!-- Texts -->
              <h1 class="text-3xl text-gray-800 font-bold">Lorem ipsum dolor sit.</h1>
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
              a + b = sosi
            </div>

            <!-- Formula Information -->
            <div class="h-2/3 p-5 relative">
              <!-- Texts -->
              <h1 class="text-3xl text-gray-800 font-bold">Lorem ipsum dolor sit.</h1>
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
              a + b = sosi
            </div>

            <!-- Formula Information -->
            <div class="h-2/3 p-5 relative">
              <!-- Texts -->
              <h1 class="text-3xl text-gray-800 font-bold">Lorem ipsum dolor sit.</h1>
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
              a + b = sosi
            </div>

            <!-- Formula Information -->
            <div class="h-2/3 p-5 relative">
              <!-- Texts -->
              <h1 class="text-3xl text-gray-800 font-bold">Lorem ipsum dolor sit.</h1>
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
    </div>


  </div>
</section>