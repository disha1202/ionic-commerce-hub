<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-back-button slot="start" default-href="/" />
        <ion-title>{{ $t("Purchase order detail") }}</ion-title>
        <ion-buttons slot="end">
          <ion-button fill="clear" class="desktop-only">{{ $t("Receive") }}</ion-button>
          <ion-button fill="clear">
            <ion-icon :icon="syncOutline" slot="icon-only" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <main>
        <section class="header">
          <div class="id">
            <ion-item lines="none">
              <ion-icon slot="start" :icon="ticketOutline" />
              <ion-label>External Purchase Order ID</ion-label>
              <ion-badge slot="end">Approved</ion-badge>
            </ion-item>
          </div>

          <div class="timeline">
            <div>
              <ion-item lines="none" detail>
                <ion-icon slot="start" :icon="timeOutline" class="mobile-only" />
                <ion-label>{{ $t("Timeline") }}</ion-label>
                <ion-note slot="end">1:07pm 6th Dec 2021</ion-note>
              </ion-item>
            </div>
            <div v-for="item in 3" :key="item" class="desktop-only">
              <ion-item>
                <ion-icon slot="start" :icon="ticketOutline" />
                <ion-label>
                  <p class="overline">+ 10 minutes</p>
                  Imported from ERP
                </ion-label>
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </div>
          </div>

          <div class="info">
            <div>
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Facility name</ion-card-title>
                </ion-card-header>
                <ion-item>
                  <ion-icon :icon="locationOutline" slot="start" />
                  <ion-label>
                    Address1
                    <p>Address2</p>
                    <p>City, Zipcode</p>
                    <p>State, Country</p>
                  </ion-label>
                </ion-item>
              </ion-card>
            </div>

            <div>
              <ion-card>
                <ion-card-header>
                  <ion-card-title>{{ $t("Allocations") }}</ion-card-title>
                </ion-card-header>
                <ion-item>
                  <ion-label>{{ $t("All orders") }}</ion-label>
                  <ion-button color="dark" fill="outline">
                    40 {{ $t("orders") }}
                    <ion-icon slot="end" :icon="downloadOutline" />
                  </ion-button>
                </ion-item>
                <ion-item>
                  <ion-label>{{ $t("Pre orders") }}</ion-label>
                  <ion-button color="dark" fill="outline">
                    30 {{ $t("orders") }}
                    <ion-icon slot="end" :icon="downloadOutline" />
                  </ion-button>
                </ion-item>
                <ion-item lines="none">
                  <ion-label>{{ $t("Back orders") }}</ion-label>
                  <ion-button color="dark" fill="outline">
                    10 {{ $t("orders") }}
                    <ion-icon slot="end" :icon="downloadOutline" />
                  </ion-button>
                </ion-item>
              </ion-card>
            </div>
          </div>
        </section>

        <section class="products">
          <ion-item lines="none">
            <ion-icon slot="start" :icon="shirtOutline" />
            <ion-label>Products</ion-label>
          </ion-item>
          <div class="product-detail">
            <div class="product-image desktop-only">
              <Image src="https://cdn.shopify.com/s/files/1/0069/7384/9727/products/test-track.jpg?v=1626255137"/>
            </div>

            <div>
              <hr />

              <div class="list-item">
                <ion-item lines="none">
                  <ion-thumbnail slot="start" class="mobile-only">
                    <Image src="https://cdn.shopify.com/s/files/1/0069/7384/9727/products/test-track.jpg?v=1626255137" />
                  </ion-thumbnail>
                  <ion-label>
                    <p class="overline">Brand</p>
                    Parent product
                  </ion-label>
                </ion-item>

                <ion-chip outline class="tablet">
                  <ion-label>External ID</ion-label>
                </ion-chip>

                <ion-label class="tablet">
                  600
                  <p>{{ $t("ordered") }}</p>
                </ion-label>

                <ion-label>
                  400
                  <p>{{ $t("ATP") }}</p>
                </ion-label>

                <ion-label class="tablet">
                  400
                  <p>{{ $t("received") }}</p>
                </ion-label>

                <div></div>

                <ion-checkbox />

                <ion-button fill="clear" color="medium" @click="openProductPopover">
                  <ion-icon slot="icon-only" :icon="ellipsisVerticalOutline" />
                </ion-button>
              </div>

              <ion-list class="desktop-only">
                <ion-list-header>
                  {{ $t("Items") }}
                  <hr />
                </ion-list-header>

                <div class="list-item">
                  <ion-item lines="none">
                    <ion-label>
                      SKU
                      <p>{{ $t("Color") }}: Color</p>
                      <p>{{ $t("Size") }}: Size</p>
                    </ion-label>
                  </ion-item>

                  <ion-chip outline>
                    <ion-label>External ID</ion-label>
                  </ion-chip>

                  <ion-label>
                    600
                    <p>{{ $t("ordered") }}</p>
                  </ion-label>

                  <ion-label>
                    400
                    <p>{{ $t("ATP") }}</p>
                  </ion-label>

                  <ion-label>
                    400
                    <p>{{ $t("received") }}</p>
                  </ion-label>

                  <ion-label>
                    6th Dec 2021
                    <p>{{ $t("arrival date") }}</p>
                  </ion-label>

                  <ion-checkbox />

                  <ion-button fill="clear" color="medium" @click="openProductPopover">
                    <ion-icon slot="icon-only" :icon="ellipsisVerticalOutline"/>
                  </ion-button>
                </div>

                <hr />

                <div class="list-item">
                  <ion-item lines="none">
                    <ion-label>
                      SKU
                      <p>{{ $t("Color") }}: Color</p>
                      <p>{{ $t("Size") }}: Size</p>
                    </ion-label>
                  </ion-item>

                  <ion-chip outline>
                    <ion-label>External ID</ion-label>
                  </ion-chip>

                  <ion-label>
                    600
                    <p>{{ $t("ordered") }}</p>
                  </ion-label>

                  <ion-label>
                    400
                    <p>{{ $t("ATP") }}</p>
                  </ion-label>

                  <ion-label>
                    400
                    <p>{{ $t("received") }}</p>
                  </ion-label>

                  <ion-label>
                    6th Dec 2021
                    <p>{{ $t("arrival date") }}</p>
                  </ion-label>

                  <ion-checkbox />

                  <ion-button fill="clear" color="medium" @click="openProductPopover">
                    <ion-icon slot="icon-only" :icon="ellipsisVerticalOutline"/>
                  </ion-button>
                </div>
              </ion-list>

              <hr />
            </div>
          </div>
        </section>
      </main>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonBackButton,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCheckbox,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonNote,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  popoverController
} from '@ionic/vue';
import { defineComponent } from 'vue';
import {
  businessOutline,
  downloadOutline,
  ellipsisVerticalOutline,
  informationCircleOutline,
  locationOutline,
  shirtOutline,
  syncOutline,
  ticketOutline,
  timeOutline
} from 'ionicons/icons';
import Image from '@/components/Image.vue';
import ProductPopover from '@/components/ProductPopover.vue';

export default defineComponent({
  name: 'PurchaseOrder',
  components: {
    IonBackButton,
    IonBadge,
    IonButton,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCheckbox,
    IonChip,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonNote,
    IonPage,
    IonThumbnail,
    IonTitle,
    IonToolbar,
    Image
  },
  methods: {
    async openProductPopover(ev: Event) {
      const popover = await popoverController.create({
        component: ProductPopover,
        event: ev,
        showBackdrop: false,
        translucent: true,
      });
      return popover.present();
    },
  },
  setup() {
    return {
      businessOutline,
      downloadOutline,
      ellipsisVerticalOutline,
      informationCircleOutline,
      locationOutline,
      shirtOutline,
      syncOutline,
      ticketOutline,
      timeOutline
    }
  }
});
</script>

<style scoped>
@media (min-width: 991px) {
  .product-detail {
    display: grid;
    grid-template-columns: 250px 1fr;
    align-items: center;
  }
  .product-image {
    border: 1px solid var(--ion-color-medium);
    border-radius: 10px;
  }

  .product-info {
    margin-left: var(--spacer-lg);
  }
}
</style>
