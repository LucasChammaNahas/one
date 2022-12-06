export function getNextTab({ tabs, currentTab }) {
   if (!Array.isArray(tabs) || typeof currentTab !== 'string') {
      throw new Error('getNextTab says: invalid arguments');
   }
   const currentTabIndex = tabs.indexOf(currentTab);
   if (currentTabIndex === -1) {
      throw new Error('getNextTab says: tab does not exist in tabs array');
   }
   if (currentTabIndex >= tabs.length - 1) {
      return undefined;
   }
   return tabs[currentTabIndex + 1];
}
