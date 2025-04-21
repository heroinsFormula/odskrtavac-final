import { defineStore } from 'pinia'

export const useUiStore = defineStore('uiStore', {
  state: () => {
    return {
      bookFormOpen: false,
      bookEditFormOpen: false,
      authorFormOpen: false,
      deleteWarnOpen: false
    }
  }
})
