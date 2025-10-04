import { Check, Languages } from "lucide-preact";
import { useEffect, useState } from "preact/hooks";
export function LanguageSelector<T extends string>({
  selectedLanguage,
  localisedLanguages,
  localisedPathname,
  languages,
}: {
  selectedLanguage: T;
  languages: Record<T, string>;
  localisedLanguages: Record<T, string>;
  localisedPathname: Record<T, string>;
}) {
  const [popover, setPopover] = useState(false);
  const togglePopover = () => {
    setPopover(!popover);
  };

  useEffect(() => {
    function closePopover() {
      if (popover) setPopover(false);
    }
    function escapePopover(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closePopover();
      }
    }
    document.addEventListener("click", closePopover);
    document.addEventListener("keydown", escapePopover);
    return () => {
      document.removeEventListener("click", closePopover);
      document.removeEventListener("keydown", escapePopover);
    };
  }, [popover]);

  return (
    <div className="relative">
      <button
        className="icon-button inline-flex items-center gap-2"
        onClick={togglePopover}
        role="combobox"
        aria-label="Language"
        aria-haspopup="listbox"
        aria-expanded={popover}
      >
        <Languages width={24} />
        {selectedLanguage.toUpperCase()}
      </button>
      <ul
        id="selector-options"
        role="listbox"
        className={`absolute right-0 mt-4 bg-white shadow-lg rounded-md list-none ${
          popover ? "block" : "hidden"
        }`}
      >
        {Object.keys(languages).map((language) => (
          <li
            key={language}
            role="option"
            id={`language-select-option-${language}`}
            aria-selected={language === selectedLanguage}
          >
            <a
              className="flex items-center justify-between gap-8 px-4 py-2 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
              href={localisedPathname[language as T]}
            >
              <div className="text-left">
                <span className="block font-semibold text-accent-700 text-lg">
                  {languages[language as T]}
                </span>
                <span className="block font-light text-sm text-gray-600">
                  {localisedLanguages[language as T]}
                </span>
              </div>
              {language === selectedLanguage ? (
                <Check stroke="var(--accent-600)" size={24} />
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
