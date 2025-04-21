<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <DefaultCard
      cardTitle="Přidat autora"
      class="w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
    >
      <form @submit.prevent="handleSubmit" class="">
        <div class="p-6.5">
          <InputGroup
            v-model="authorName"
            label="Jméno autora"
            type="text"
            placeholder="Zadejte jméno autora"
            required
          />

          <DefaultSelect
            v-model="country"
            :label="'Země původu'"
            :placeholder="'Vyberte zemi'"
            :options="countryOptions"
            required
          />

          <div class="mb-6">
            <label class="mb-2.5 block text-black dark:text-white">Popis autora</label>
            <textarea
              v-model="description"
              rows="6"
              placeholder="Zadejte popis autora"
              class="w-full rounded border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            class="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          >
            Přidat autora
          </button>
        </div>
      </form>
    </DefaultCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputGroup from '@/components/Forms/InputGroup.vue'
import DefaultCard from '@/components/Forms/DefaultCard.vue'
import DefaultSelect from './SelectGroup/DefaultSelect.vue'
import { useBookStore } from '@/stores/bookStore.ts'
import { useUiStore } from '@/stores/uiStore'
import bookService from '@/api/bookService'
import { Author, Book, Country } from '@/types'

export default defineComponent({
  components: {
    InputGroup,
    DefaultCard,
    DefaultSelect
  },
  data() {
    return {
      authorName: '',
      country: '',
      description: ''
    }
  },
  computed: {
    countryOptions() {
      const store = useBookStore()
      return store.countries.map((country: Country) => country.name)
    }
  },
  methods: {
    validateData() {
      if (!this.authorName || !this.country) {
        return false
      }
    },
    prepareData() {
      const authorName = this.authorName
      const authorData: Author = {
        full_name: authorName,
        country: this.country,
        description: this.description
      }
      return authorData
    },

    handleSubmit() {
      useUiStore().authorFormOpen = false
      if (this.validateData()) {
        const data = this.prepareData()
        bookService.postAuthor(data)
      } else {
        return 'problééééém'
      }
    }
  }
})
</script>
