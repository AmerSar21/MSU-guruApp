<template>
  <q-page class="flex-center" padding>
    <q-card class="bg-grey-1 q-pa-xl">
      <div class="text-center" :class="$q.screen.lt.md ? '' : 'row'">
        <q-card-section class="col-6">
          <h3>Card-Header</h3>
          <p>this dashboard belongs to faculty</p>
        </q-card-section>
        <q-card-section class="col-6">
          <h3>Card-Header 2</h3>
          <p>this dashboard belongs to facult</p>
        </q-card-section>
      </div>
      <q-card-actions> </q-card-actions>
    </q-card>
  </q-page>
</template>