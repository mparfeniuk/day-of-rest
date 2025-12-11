export function setupKeyboardNavigation(
  containerSelector: string,
  blockIds: string[]
) {
  const container = document.querySelector(containerSelector);
  if (!container) return () => {};

  let currentIndex = 0;

  // Update current index based on scroll position
  const updateCurrentIndex = () => {
    const sections = blockIds.map((id) => document.getElementById(id));
    const scrollTop = container.scrollTop;
    const viewportHeight = window.innerHeight;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      if (section) {
        const sectionTop = section.offsetTop;
        if (scrollTop >= sectionTop - viewportHeight / 2) {
          currentIndex = i;
        }
      }
    }
  };

  const scrollToIndex = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, blockIds.length - 1));
    const targetSection = document.getElementById(blockIds[clampedIndex]);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      currentIndex = clampedIndex;
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    // Don't interfere if user is typing in an input
    if (
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLTextAreaElement
    ) {
      return;
    }

    updateCurrentIndex();

    switch (event.key) {
      case "ArrowDown":
      case "PageDown":
        event.preventDefault();
        scrollToIndex(currentIndex + 1);
        break;

      case "ArrowUp":
      case "PageUp":
        event.preventDefault();
        scrollToIndex(currentIndex - 1);
        break;

      case "Home":
        event.preventDefault();
        scrollToIndex(0);
        break;

      case "End":
        event.preventDefault();
        scrollToIndex(blockIds.length - 1);
        break;
    }
  };

  document.addEventListener("keydown", handleKeyDown);
  container.addEventListener("scroll", updateCurrentIndex);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
    container.removeEventListener("scroll", updateCurrentIndex);
  };
}
