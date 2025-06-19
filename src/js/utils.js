document.addEventListener('DOMContentLoaded', () => {
  const tabList = document.querySelector('[role="tablist"]');
  const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));
  const tabpanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

  let currentTabIndex = -1; // No tab selected by default

  // Function to activate a tab
  function activateTab(index) {
    // Deactivate all tabs and hide all panels first
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', 'false');
      tab.setAttribute('tabindex', '-1');
      tabpanels[i].classList.add('is-hidden');
    });

    // Activate the selected tab, only if a valid index is provided
    if (index >= 0 && index < tabs.length) {
      tabs[index].setAttribute('aria-selected', 'true');
      tabs[index].removeAttribute('tabindex'); // Make it focusable
      tabpanels[index].classList.remove('is-hidden');
      tabs[index].focus(); // Focus the newly activated tab
      currentTabIndex = index;
    } else {
      currentTabIndex = -1; // Reset if no tab is activated
    }
  }

  // No initial activation: Removed activateTab(0);

  // Click event listener for tabs
  tabList.addEventListener('click', (event) => {
    const clickedTab = event.target.closest('[role="tab"]');
    if (clickedTab) {
      const index = tabs.indexOf(clickedTab);
      if (index !== -1) {
        activateTab(index);
      }
    }
  });

  // Keyboard navigation for tabs
  tabList.addEventListener('keydown', (event) => {
    let newIndex = currentTabIndex;

    // If no tab is selected and an arrow key is pressed, default to the first tab
    if (currentTabIndex === -1 && (event.key === 'ArrowRight' || event.key === 'ArrowLeft' || event.key === 'Home' || event.key === 'End')) {
      newIndex = 0;
    } else {
      switch (event.key) {
        case 'ArrowRight':
          newIndex = (currentTabIndex + 1) % tabs.length;
          event.preventDefault(); // Prevent page scrolling
          break;
        case 'ArrowLeft':
          newIndex = (currentTabIndex - 1 + tabs.length) % tabs.length;
          event.preventDefault(); // Prevent page scrolling
          break;
        case 'Home':
          newIndex = 0;
          event.preventDefault();
          break;
        case 'End':
          newIndex = tabs.length - 1;
          event.preventDefault();
          break;
        case 'Enter':
        case 'Space':
          // If Enter or Space is pressed, activate the focused tab
          if (currentTabIndex !== -1) {
            // Only activate if a tab is currently "focused" by keyboard nav
            activateTab(currentTabIndex);
          }
          event.preventDefault();
          break;
        default:
          return; // Do nothing for other keys
      }
    }

    if (newIndex !== currentTabIndex) {
      // Only change focus with arrow keys
      // If coming from no selected tab, set the first tab's tabindex
      if (currentTabIndex === -1 && newIndex === 0) {
        tabs[newIndex].removeAttribute('tabindex');
      } else if (currentTabIndex !== -1) {
        // If there was a previously focused tab
        tabs[currentTabIndex].setAttribute('tabindex', '-1');
        tabs[newIndex].removeAttribute('tabindex');
      }
      tabs[newIndex].focus();
      currentTabIndex = newIndex; // Update currentTabIndex for next arrow key press
    }
  });

  // Handle focusout from the tablist to correctly set tabindex for next focus
  tabList.addEventListener('focusout', () => {
    tabs.forEach((tab, index) => {
      if (index !== currentTabIndex) {
        tab.setAttribute('tabindex', '-1');
      }
    });
  });

  // Set tabindex for tabpanels (keep them focusable for accessibility)
  tabpanels.forEach((panel) => {
    panel.setAttribute('tabindex', '0');
    // Ensure all panels are hidden initially
    panel.classList.add('is-hidden');
  });

  // Ensure all tabs start with tabindex -1, except the one that will be focused if user tabs into the group
  tabs.forEach((tab, index) => {
    tab.setAttribute('tabindex', '-1');
    // The first tab should be tab-accessible when the user first reaches the tablist by tabbing
    if (index === 0) {
      tab.removeAttribute('tabindex');
    }
  });
});
