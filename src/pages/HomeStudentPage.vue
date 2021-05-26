<template>
  <q-page class="flex-center" padding>
    <q-card class="bg-grey-1 q-pa-xl">
      <!-- :class="$q.screen.lt.md ? '' : 'row'" -->
      <div>
        <template v-for="(cons, index) in consultationList">
          <q-list>
            <q-item :key="index" clickable>
              <q-item-section>
                <q-item-label>{{ cons.header }}</q-item-label>
                <q-item-label caption lines="2">{{
                  cons.content
                }}</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-item-label caption>{{ cons.time }}</q-item-label>
                <q-icon name="star" color="yellow" />
              </q-item-section>
            </q-item>
            <q-separator spaced inset />
          </q-list>
        </template>
      </div>
      <q-card-actions> </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      consultationList: [
        {
          header: "Consultation 1",
          time: "08:30 am",
          content:
            "First line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit."
        },
        {
          header: "Consultation 2",
          time: "10:40 am",
          content:
            "Second line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit."
        },
        {
          header: "Consultation 3",
          time: "12:00 pm",
          content:
            "Third line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit."
        }
      ]
    };
  }
};
</script>
