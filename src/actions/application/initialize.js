// Importing modules
import { locale, locales } from "svelte-i18n";

// Importing stores
import profile from "../../stores/profile";
import storage from "../../stores/storage";

// Exporting main function
export default async () => {
  // TODO:
  // offline-mode check
  try {

    // 1. Checking current user profile
    await profile.initialize();

    // 2. Initializing current storage
    await storage.initialize();

    // 3. Checking current language
    await storage.subscribe(async (obj) => {
      if (obj["language"] == null) {
        storage.set("language", "ua", true);
      } else {
        // Updating language in i18n
        let language = obj["language"];

        // Checking if current languages list includes
        // this locale
        const unsubscribe = locales.subscribe((obj) => {
          if (obj.includes(language)) {
            locale.set(language);
          } else {
            storage.set("language", "ua", true);
          };
        });

        unsubscribe();
      };
    });

    // Everything is loaded correctly!
    storage.set("loaded", true);
  } catch(error) {
    console.log(error);
    throw new Error();
  };
};