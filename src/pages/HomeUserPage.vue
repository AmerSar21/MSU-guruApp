<template>
  <q-page class="flex-center" padding>
    <!-- <q-card class="bg-grey-1 q-pa-xl">
      <div class="text-center" :class="$q.screen.lt.md ? '' : 'row'">
        <q-card-section class="col-6">
          <h3>Card-Header</h3>
          <p>this is a sample of card in quasar</p>
        </q-card-section>
        <q-card-section class="col-6">
          <h3>Card-Header 2</h3>
          <p>this is a sample of card in quasar</p>
        </q-card-section>
      </div>
      <q-card-actions> </q-card-actions>
    </q-card> -->
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="mails" label="Mails" />
            <q-tab name="alarms" label="Alarms" />
            <q-tab name="movies" label="Movies" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="mails">
              <div class="text-h6">Mails</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="alarms">
              <div class="text-h6">Alarms</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="movies">
              <div class="text-h6">Movies</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </q-card>

        <q-card>
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="mails">
              <div class="text-h6">Mails</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="alarms">
              <div class="text-h6">Alarms</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="movies">
              <div class="text-h6">Movies</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>

          <q-separator />

          <q-tabs v-model="tab" dense class="bg-grey-3" align="justify" narrow-indicator>
            <q-tab name="mails" label="Mails" />
            <q-tab name="alarms" label="Alarms" />
            <q-tab name="movies" label="Movies" />
          </q-tabs>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
