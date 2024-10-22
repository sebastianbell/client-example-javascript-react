import { CharacterDetails } from "./CharacterDetails";
import logo from "/src/assets/recipe-helper-logo.webp";

function CharacterPreview() {
  return (
    <div className="p-4 flex flex-col gap-4 w-96 m-3 h-auto items-center">
      <img
        src={logo}
        alt="Recipe Helper Logo"
        className="w-32 h-auto mx-auto mb-4"
      />
      <h2 className="text-xl font-bold text-center text-gray-800 dark:text-gray-200 mt-2">
        Welcome to Recipe Helper!
      </h2>
      <p className="text-center text-gray-700 dark:text-gray-300 px-6">
        Meet Mia, your friendly AI kitchen assistant! Press the button below to
        chat with her. Whether you're looking for recipe ideas, cooking tips, or
        just need a little guidance, Mia is here to help make your culinary
        adventures fun and easy!
      </p>
      <div className="mt-6">
        <CharacterDetails />
      </div>
    </div>
  );
}

export { CharacterPreview };
