<script setup lang="ts">
import BookTable from '@/components/Tables/BookTable.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ButtonAddBook from '@/components/Buttons/ButtonAddBook.vue'
import ButtonAddAuthor from '@/components/Buttons/ButtonAddAuthor.vue'
import FormAddBook from '@/components/Forms/FormAddBook.vue'
import FormAddAuthor from '@/components/Forms/FormAddAuthor.vue'
import FormEditBook from '@/components/Forms/FormEditBook.vue'
import FormDeleteBook from '@/components/Forms/FormDeleteBook.vue'
import { useUiStore } from '@/stores/uiStore'
import { useUserStore } from '@/stores/userStore'
</script>

<template>
  <DefaultLayout>
    <div>
      <ButtonAddBook v-if="useUserStore().isAdmin">+Přidat knihu</ButtonAddBook>
      <ButtonAddAuthor v-if="useUserStore().isAdmin">+Přidat autora</ButtonAddAuthor>
    </div>

    <template v-if="useUiStore().bookFormOpen">
      <FormAddBook />
    </template>

    <template v-if="useUiStore().bookEditFormOpen">
      <FormEditBook />
    </template>

    <template v-if="useUiStore().authorFormOpen">
      <FormAddAuthor />
    </template>

    <template v-if="useUiStore().deleteWarnOpen">
      <FormDeleteBook />
    </template>

    <div class="col-span-12 xl:col-span-8">
      <BookTable />
    </div>
  </DefaultLayout>
</template>
