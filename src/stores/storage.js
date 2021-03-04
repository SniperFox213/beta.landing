// Importing modules
import { writable } from "svelte/store";
import storage from "local-storage";

// Store itself
const createStore = () => {
  // Getting some required methods
  const { subscribe, update } = writable({});

  // And now let's build and return this store
  return {
    subscribe,

    // Function, that'll initialize our cache object
    initialize: async () => {
      // Changing our state to "loading"
      update((obj) => { obj["loaded"] = false; return obj; });
      
      // Getting some information from cache;
      let cache = await storage("cache");
      if (cache != null) {
        update((obj) => {
          obj = cache;
          if (obj == null) obj = {};

          obj.fromLocalStorage = true;

          return obj;
        });
      };
      
      return true;
    },

    // Function to set new cached information
    set: (node, data, storeInCache) => {
      if (storeInCache) {
        // Let's now save this data into
        // our local-storage
        let cache = storage("cache");

        if (cache == null) cache = {};
        cache[node] = data;
        storage.set(`cache`, cache);
      };

      // Updating our store
      update((obj) => {
        obj[node] = data;

        return obj;
      });
    }
  }
};

const store = createStore();

export default store;