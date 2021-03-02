<script>
  // Importing components
  import { Icon } from "@beta/components/basic";

  // Importing configs
  import { pages } from "../config/landing";
</script>

<!-- Landing -->

<!-- Section #1 -->
<section class="w-full h-screen flex flex-col lg:flex-row items-center px-12">
  <!-- Texts -->
  <div class="w-full lg:w-2/3">
    <!-- Badge -->
    <div class="mb-4">
      <div class="w-min px-4 py-1 bg-gray-300 text-sm text-gray-800 opacity-50 rounded-full">
        <span>Передмова</span>
      </div>
    </div>

    <h1 class="text-5xl text-gray-800 font-bold">Навчально-розвжальні сервіси, які <span class="text-indigo-400">піклуються</span> про твою успішність и настрій.</h1>
    <p class="text-xl text-gray-600 mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa deleniti animi dolor ullam molestias, aspernatur aut adipisci doloribus ad architecto incidunt cupiditate quam exercitationem corporis vel voluptas facere expedita rerum. Nobis perspiciatis numquam nemo odio.</p>
  </div>
</section>

<!-- Section #2 -->
<section class="w-full h-screen flex flex-col lg:flex-row items-center px-12">
  <!-- Services -->
  <div class="w-full lg:w-1/3 h-full flex items-center">
    <div class="w-full h-2/3 rounded-md bg-gradient-to-tr from-indigo-400 to-blue-500 flex flex-col items-center shadow-md p-8">
      <!-- Title -->
      <div class="w-full mb-4 text-center">
        <h1 class="text-2xl text-white font-bold">Не знайшли того, що шукали?</h1>
        <p class="text-sm text-gray-100">Ось тут ви можете подивитись на те, що ми розробляємо в данний момент.</p>
      </div>

      <!-- Authorize Buttons -->
      <div class="w-full h-full flex flex-wrap relative">
        { #each pages as page }
          <div class="w-1/3 p-1 relative">
            <div style="padding-top: 100%;" class="w-full relative">
              <div class="absolute inset-0 w-full h-full rounded-md bg-white shadow-md flex flex-col justify-center items-center">
                <!-- Logotype -->
                <div style="{ page.icon.background }" class="w-2/4 h-2/4 rounded-md flex justify-center items-center">
                  <img class="w-1/2 h-1/2" src="./icons/{ page.icon.image }" alt="">
                </div>

                <h1 class="text-md text-gray-800 font-medium mt-2">{ page.title }</h1>
              </div>
            </div>
          </div>
        { /each }

        <div class="w-1/3 p-1 relative">
          <div style="padding-top: 100%;" class="w-full relative">
            <div class="absolute inset-0 w-full h-full rounded-md border-2 border-gray-300 border-dotted shadow-md flex flex-col justify-center items-center">
              <Icon name="more-horizontal" attrs={{ class: "w-6 h-6 text-white" }} />
              
              <h1 class="text-md text-white font-medium mt-2">Ще буде</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <!-- Texts -->
  <div class="w-full lg:w-2/3 lg:pl-10">
    <!-- Badge -->
    <div class="mb-4">
      <div class="w-min px-4 py-1 bg-gray-300 text-sm text-gray-800 opacity-50 rounded-full">
        <span>Передмова</span>
      </div>
    </div>

    <h1 class="text-5xl text-gray-800 font-bold">Поринь у дивовижний світ науки, та дозволь нам тобі <span class="text-indigo-400">допомогти</span>.</h1>
    <p class="text-xl text-gray-600 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed quasi blanditiis aliquam sit facere doloremque quaerat nisi aperiam repudiandae? Iste a mollitia ad debitis eius assumenda, reprehenderit saepe officia provident minima quo, ut aut dicta fugit tenetur? Distinctio magni officia unde! Qui, suscipit dolorum!</p>
  </div>
</section>