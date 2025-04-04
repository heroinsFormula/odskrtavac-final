import { defineStore } from 'pinia'

export const useUiStore = defineStore('uiStore', {
  state: () => {
    return {
      bookFormOpen: false,
      bookEditFormOpen: false,
      deleteWarnOpen: false
    }
  }
})
