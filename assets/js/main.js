document.querySelectorAll("[data-download-selector]").forEach((selector) => {
  const buttons = selector.querySelectorAll("[data-image-choice]");
  const title = selector.querySelector("[data-download-title-output]");
  const description = selector.querySelector("[data-download-description-output]");
  const link = selector.querySelector("[data-download-link]");
  const checksumLink = selector.querySelector("[data-download-checksum-link]");
  const unavailable = selector.querySelector("[data-download-unavailable]");

  if (!buttons.length || !title || !description || !link || !checksumLink || !unavailable) {
    return;
  }

  const setChoice = (button) => {
    const available = button.dataset.downloadAvailable === "true";
    const downloadTitle = button.dataset.downloadTitle || "";
    const downloadDescription = button.dataset.downloadDescription || "";
    const downloadUrl = button.dataset.downloadUrl || "";
    const checksumUrl = button.dataset.downloadChecksumUrl || "";

    buttons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    title.textContent = downloadTitle;
    description.textContent = downloadDescription;

    if (available && downloadUrl) {
      link.href = downloadUrl;
      link.textContent = "Download AMD / Intel ISO";
      link.classList.remove("is-hidden");
      if (checksumUrl) {
        checksumLink.href = checksumUrl;
        checksumLink.classList.remove("is-hidden");
      } else {
        checksumLink.removeAttribute("href");
        checksumLink.classList.add("is-hidden");
      }
      unavailable.classList.add("is-hidden");
    } else {
      link.removeAttribute("href");
      link.classList.add("is-hidden");
      checksumLink.removeAttribute("href");
      checksumLink.classList.add("is-hidden");
      unavailable.classList.remove("is-hidden");
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => setChoice(button));
  });

  setChoice(buttons[0]);
});

document.querySelectorAll("[data-contact-user][data-contact-domain][data-contact-tld]").forEach((target) => {
  const address = `${target.dataset.contactUser}@${target.dataset.contactDomain}.${target.dataset.contactTld}`;
  const link = document.createElement("a");

  link.href = `mailto:${address}`;
  link.textContent = address;
  target.replaceChildren(link);
});
