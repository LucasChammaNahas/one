import { tabs } from 'App/Pages/AddMenuPage/AddMenuForm/AddMenuMainPanel/AddMenuTabs/addMenuTabsConstants';

export function getNextTab({ activeTab }) {
   if (typeof activeTab !== 'string') {
      throw new Error('getNextTab says: invalid argument');
   }
   const activeTabIndex = tabs.indexOf(activeTab);
   if (activeTabIndex === -1) {
      throw new Error('getNextTab says: tab does not exist in tabs array');
   }
   if (activeTabIndex >= tabs.length - 1) {
      return undefined;
   }
   return tabs[activeTabIndex + 1];
}
