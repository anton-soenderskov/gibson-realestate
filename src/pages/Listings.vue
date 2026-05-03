<script setup>
import { ref, computed } from 'vue';

const listings = [
  { id: '109221', address: '1869 W Red Oak Drive', city: 'Terre Haute, IN', price: '$299,900', beds: 3, baths: 2, sqft: '1,700', status: 'Pending', img: 'https://zimg.paragon.ice.com/ParagonImages/Property/PI/THAAR/109221/0/0/0/89c2ddd388fc214adef3f93e2d5d13ba/2/e932149f1b6cfb884f8065750e24823a/109221-32a98e8b-bab2-4de8-a7cb-793d3aeaf37a.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/109221/1869-W-Red-Oak-Drive-Terre-Haute-IN-47802?widgetReferer=true' },
  { id: '109166', address: '2018 N 1st Street', city: 'Terre Haute, IN', price: '$230,000', beds: 3, baths: 2, sqft: '1,519', status: 'Active', img: 'https://zimg.paragon.ice.com/ParagonImages/Property/PI/THAAR/109166/0/0/0/7e3a21ab77345f1cfb7d4e6ebf570e03/2/d59e24d8af095a962040a9041630ba05/109166-0a709655-385f-472d-90bb-cc09d06943b2.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/109166/2018-N-1st-Street-Terre-Haute-IN-47803?widgetReferer=true' },
  { id: '109167', address: '2025 N 1st Street', city: 'Terre Haute, IN', price: '$255,000', beds: 3, baths: 2, sqft: '1,519', status: 'Active', img: 'https://zimg.paragon.ice.com/ParagonImages/Property/PI/THAAR/109167/0/0/0/e83abac3115fe96acd0d93856f19e2b6/2/00161485afdeadf3003e008886a834b3/109167-69d2f3b4-5435-49dc-b142-4edea2c11105.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/109167/2025-N-1st-Street-Terre-Haute-IN-47803?widgetReferer=true' },
  { id: '109058', address: '1817 Garfield Avenue', city: 'Terre Haute, IN', price: '$129,900', beds: 2, baths: 2, sqft: '1,141', status: 'Pending', img: 'https://zimg.paragon.ice.com/ParagonImages/Property/PI/THAAR/109058/0/0/0/831b820b02204cc8ab0d3ae399953506/2/5617db9c373950877d42f191cb473396/109058-669ba6e0-368a-4bec-9023-fe158f79ed04.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/109058/1817-Garfield-Avenue-Terre-Haute-IN-47804?widgetReferer=true' },
  { id: '108922', address: '3776 Old Paris Road', city: 'West Terre Haute, IN', price: '$975,000', beds: 5, baths: 4, sqft: '8,649', status: 'Active', img: 'https://zimg.paragon.ice.com/ParagonImages/Property/PI/THAAR/108922/0/0/0/6c0f96ec76b0ec7c57e987ebaa668a7d/2/5348d3e7b616c55e67711881090df5a5/108922-0ab6418a-f8f1-44f9-90a1-75416192be27.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/108922/3776-Old-Paris-Road-West-Terre-Haute-IN-47885?widgetReferer=true' },
  { id: '108919', address: '2900 Franklin Street', city: 'Terre Haute, IN', price: '$165,000', beds: 2, baths: 2, sqft: '796', status: 'Pending', img: 'https://zimg.paragon.ice.com/ParagonImages/Property/PI/THAAR/108919/0/0/0/377d5fab2b778e9062a04d0ae363b6c0/2/9e44d8722ae8d4a40a81b60bc78e7165/108919-a0062a7d-3233-4505-9da8-d4a3839784c8.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/108919/2900-Franklin-Street-Terre-Haute-IN-47803?widgetReferer=true' },
  { id: '108889', address: '7371 Pinecroft Circle', city: 'Terre Haute, IN', price: '$399,900', beds: 5, baths: 3, sqft: '2,681', status: 'Pending', img: 'https://zimg.paragon.ice.com/ParagonImages/Property/PI/THAAR/108889/0/0/0/300ecc64490102fff58f9ade69def99c/2/294670cc24ba572d877a62da48383877/108889-3758ed7f-05ed-4a47-8149-0aa3ed4be0aa.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/108889/7371-Pinecroft-Circle-Terre-Haute-IN-47802?widgetReferer=true' },
  { id: '108875', address: '2401 Durkees Ferry Road', city: 'Terre Haute, IN', price: '$49,900', beds: null, baths: 1, sqft: null, status: 'Active', img: 'https://zimg.paragon.ice.com/ParagonImages/Property/PI/THAAR/108875/0/0/0/1aaf7557136113859bce921c4b608581/2/5362f6b4282d6a9fdb9b537dfb7d228e/108875-261928e7-07cb-44d5-a88d-5f94376bcefa.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/108875/2401-Durkees-Ferry-Road-Terre-Haute-IN?widgetReferer=true' },
  { id: '108876', address: '309 N French Street', city: 'Sullivan, IN', price: '$119,900', beds: 2, baths: 1, sqft: '960', status: 'Active', img: 'https://zimg.paragon.ice.com/ParagonImages/Property/PI/THAAR/108876/0/0/0/d8712dcb4fad4f5820ee552660445852/2/ae426ea47b04c456231c8179f0e9f705/108876-908fe591-be1b-4321-9ea3-85227c485f5a.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/108876/309-N-French-Street-Sullivan-IN-47882?widgetReferer=true' },
  { id: '108808', address: '4188 Cart Path', city: 'Terre Haute, IN', price: '$749,000', beds: 4, baths: 3, sqft: '5,574', status: 'Active', img: 'https://zimg.paragon.ice.com/ParagonImages/Property/PI/THAAR/108808/0/0/0/1a66ebedd2e2ea96962abef65161d48a/2/a797de90ba0faea27f19649040e1b2e3/108808-0f59093f-c7d5-4c47-b1e4-c94950387205.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/108808/4188-Cart-Path-Terre-Haute-IN-47802?widgetReferer=true' },
  { id: '108580', address: '5003 Par 4 Lane', city: 'Terre Haute, IN', price: '$549,252', beds: 5, baths: 4, sqft: '3,035', status: 'Pending', img: 'https://zimg.paragon.ice.com/ParagonImages/Property/PI/THAAR/108580/0/0/0/f955ff89ae58b8a2fc22ea940ab1f57d/2/d5e88e72c271536bc256010bb271206a/108580-e2f490f5-dc58-49db-a1bd-0ca95af289d6.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/108580/5003-Par-4-Lane-Terre-Haute-IN-47802?widgetReferer=true' },
  { id: '108384', address: '1112 E Curry Drive', city: 'Terre Haute, IN', price: '$290,000', beds: 3, baths: 3, sqft: '2,396', status: 'Pending', img: 'https://cdnparap80.paragonrels.com/ParagonImages/Property/P8/THAAR/108384/0/0/0/de49d7165c5bf1837df8b47c2dace921/2/d7f19628e7c7c010c3652f66c3e603bb/108384-9786be57-10c3-4c74-ba1b-849e1c3722e8.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/108384/1112-E-Curry-Drive-Terre-Haute-IN-47802?widgetReferer=true' },
  { id: '108374', address: '4523 N 14th St', city: 'Terre Haute, IN', price: '$229,900', beds: 3, baths: 2, sqft: '1,360', status: 'Pending', img: 'https://cdnparap80.paragonrels.com/ParagonImages/Property/P8/THAAR/108374/0/0/0/c577bd09f95e1fc830da2489cf0a994a/2/dbf353df62a5203e1d1133e85725107a/108374-07d74188-1492-48e2-9934-e3573d3adaf0.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/108374/4523-N-14th-St-Terre-Haute-IN-47805?widgetReferer=true' },
  { id: '108287', address: '13342 S Us Hwy 41', city: 'Terre Haute, IN', price: '$199,900', beds: 3, baths: 2, sqft: '1,400', status: 'Active', img: 'https://zimg.paragon.ice.com/ParagonImages/Property/PI/THAAR/108287/0/0/0/c0aa84096f6f68ab5df6f89474a21ecd/2/2ec6c2ff569d7abc3993702c75f32b4f/108287-6c17b8e9-e6f1-4052-adc5-7cdd65f7703a.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/108287/13342-S-Us-Hwy-41-Terre-Haute-IN-47802?widgetReferer=true' },
  { id: '108279', address: '7284 Belfonte Lane', city: 'Terre Haute, IN', price: '$363,500', beds: 4, baths: 3, sqft: '2,474', status: 'Pending', img: 'https://zimg.paragon.ice.com/ParagonImages/Property/PI/THAAR/108279/0/0/0/61754d87db3d9fa3aac0a11c021c00b8/2/051f332c836e67c0097ab966fc268d12/108279-dedaa0d3-1d3a-4dea-b69e-5083802b0b73.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/108279/7284-Belfonte-Lane-Terre-Haute-IN-47802?widgetReferer=true' },
  { id: '107621', address: '3309 Darwin Road', city: 'West Terre Haute, IN', price: '$450,000', beds: 3, baths: 2, sqft: '2,472', status: 'Pending', img: 'https://cdnparap80.paragonrels.com/ParagonImages/Property/P8/THAAR/107621/0/0/0/2642721e78fc573e9ad80d54249bb995/2/c276c23597fa45bb95ffe29ee3ea4d64/107621-ca3388fa-04be-4036-8025-ac4993496ae7.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/107621/3309-Darwin-Road-West-Terre-Haute-IN-47885?widgetReferer=true' },
  { id: '106356', address: '4400-4408 S 7th Street', city: 'Terre Haute, IN', price: '$1,199,900', beds: null, baths: 5, sqft: null, status: 'Active', img: 'https://cdnparap80.paragonrels.com/ParagonImages/Property/P8/THAAR/106356/0/0/0/9d77246888673130182a38d02dcbc2d9/2/64a24a6a71cf0813137ad101f71c2e9e/106356-4f16a9c4-e9e6-4ad1-965a-14cc8f00b27f.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/106356/4400-4408-S-7th-Street-Terre-Haute-IN?widgetReferer=true' },
  { id: '106354', address: '3900 S 7th Street', city: 'Terre Haute, IN', price: '$599,900', beds: null, baths: 5, sqft: null, status: 'Active', img: 'https://cdnparap80.paragonrels.com/ParagonImages/Property/P8/THAAR/106354/0/0/0/27a70cc30cfcde08039d7503bbf45ca3/2/01e477d9b45963d516c9a0de20eb7536/106354-ee03645c-bd65-4553-b132-0d2b5bb54006.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/106354/3900-S-7th-Street-Terre-Haute-IN?widgetReferer=true' },
  { id: '104668', address: '0000 Boulder Road', city: 'Terre Haute, IN', price: '$50,000', beds: null, baths: null, sqft: null, status: 'Active', img: 'https://cdnparap80.paragonrels.com/ParagonImages/Property/P8/THAAR/104668/0/0/0/ac665bd134d99500c3e45c986035e11f/1/5dc600dde2f89613c79d83717d2d539a/104668-dbcf2506-303f-4f53-9ed8-e4d5a2204394.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/104668/0000-Boulder-Road-Terre-Haute-IN?widgetReferer=true' },
  { id: '104246', address: '1150 E Harlan Drive', city: 'Terre Haute, IN', price: '$299,000', beds: null, baths: 1, sqft: null, status: 'Active', img: 'https://cdnparap80.paragonrels.com/ParagonImages/Property/P8/THAAR/104246/0/0/0/4047a6a664440a66873c5608aa63bbcd/1/2152bb92df3cf2dea94b5309c705b3ee/104246-20802e34-a617-47bb-8205-4a6cab2fab6c.JPG', url: 'https://terrehautelistings.idxbroker.com/idx/details/listing/a425/104246/1150-E-Harlan-Drive-Terre-Haute-IN?widgetReferer=true' },
];

const activeFilter = ref('All');
const filters = ['All', 'Active', 'Pending'];

const filtered = computed(() =>
  activeFilter.value === 'All'
    ? listings
    : listings.filter(l => l.status === activeFilter.value)
);
</script>

<template>
  <div class="bg-[var(--color-brand-cream)]">

    <!-- ── Hero banner ── -->
    <section class="bg-[var(--color-brand-dark)] text-[var(--color-brand-white)] py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <p class="label-eyebrow mb-4">Find your dream home</p>
        <h1 class="font-display text-section font-light tracking-wide mb-4">Current Listings</h1>
        <div class="divider-accent !mx-0"></div>
        <p class="mt-6 text-[var(--color-brand-white)]/80 font-[var(--font-body)] text-base leading-relaxed max-w-xl">
          Browse our latest properties in Terre Haute and the surrounding communities. We update our listings regularly — your next home may already be waiting.
        </p>
      </div>
    </section>

    <!-- ── Listings grid ── -->
    <section class="py-20 px-6">
      <div class="max-w-7xl mx-auto">

        <!-- Header + filter row -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p class="label-eyebrow mb-2">Fresh on the market</p>
            <h2 class="font-display text-3xl font-light tracking-wide text-[var(--color-brand-dark)]">
              New Terre Haute Listings
            </h2>
            <div class="divider-accent !mx-0 mt-4"></div>
          </div>

          <!-- Filter pills -->
          <div class="flex gap-2 shrink-0">
            <button
              v-for="f in filters" :key="f"
              @click="activeFilter = f"
              class="px-4 py-1.5 text-[10px] font-[var(--font-body)] font-medium tracking-[0.18em] uppercase border transition-colors duration-200"
              :class="activeFilter === f
                ? 'bg-[var(--color-brand-accent)] border-[var(--color-brand-accent)] text-white'
                : 'bg-transparent border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-accent)] hover:text-[var(--color-brand-accent)]'"
            >{{ f }}</button>
          </div>
        </div>

        <!-- Cards grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <a
            v-for="listing in filtered"
            :key="listing.id"
            :href="listing.url"
            target="_blank" rel="noopener"
            class="group block bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] overflow-hidden hover:shadow-lg transition-shadow duration-300 no-underline"
          >
            <!-- Image -->
            <div class="relative h-52 overflow-hidden bg-[var(--color-brand-border)]">
              <img
                :src="listing.img"
                :alt="listing.address"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <span
                class="absolute top-3 left-3 px-2.5 py-1 text-[9px] font-[var(--font-body)] font-medium tracking-[0.2em] uppercase text-white"
                :class="listing.status === 'Active'
                  ? 'bg-[var(--color-brand-accent)]'
                  : 'bg-[var(--color-brand-charcoal)]'"
              >{{ listing.status === 'Pending' ? 'Under Contract' : listing.status }}</span>
            </div>

            <!-- Details -->
            <div class="p-5">
              <p class="font-display text-xl font-semibold text-[var(--color-brand-dark)] mb-1">{{ listing.price }}</p>
              <p class="text-[var(--color-brand-charcoal)] text-base font-[var(--font-body)] font-medium mb-0.5 leading-snug">{{ listing.address }}</p>
              <p class="text-[var(--color-brand-muted)] text-xs font-[var(--font-body)] mb-4">{{ listing.city }}</p>

              <div class="flex gap-4 text-[10px] font-[var(--font-body)] font-medium tracking-[0.15em] uppercase text-[var(--color-brand-muted)] border-t border-[var(--color-brand-border)] pt-3">
                <span v-if="listing.beds">{{ listing.beds }} bd</span>
                <span v-if="listing.baths">{{ listing.baths }} bth</span>
                <span v-if="listing.sqft">{{ listing.sqft }} sq ft</span>
                <span v-if="!listing.beds && !listing.sqft">Land / Commercial</span>
              </div>
            </div>
          </a>
        </div>

        <div class="text-center mt-12">
          <a
            href="https://terrehautelistings.idxbroker.com/idx/results/listings?statusCategory=active&srt=newest"
            target="_blank" rel="noopener"
            class="btn-accent inline-block"
          >Browse All Listings</a>
        </div>

      </div>
    </section>

        <!-- ── Buyer intro ── -->
    <section class="py-20 px-6 border-b border-[var(--color-brand-border)]">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <div>
          <p class="label-eyebrow mb-3">An agency dedicated to you</p>
          <h2 class="font-display text-3xl font-light tracking-wide text-[var(--color-brand-dark)] mb-6">
            Let Us Find Your Dream Home
          </h2>
          <div class="divider-accent !mx-0 mb-6"></div>
          <p class="text-[var(--color-brand-muted)] text-base leading-relaxed font-[var(--font-body)] mb-4">
            As your Buyer's Representative, we can make the process of house hunting much easier and more efficient than if you did it all yourself. We can help you get financing, guide you to local neighborhoods, help you determine your budget, and prioritize a list of essential features that you need in your next home.
          </p>
          <p class="text-[var(--color-brand-muted)] text-base leading-relaxed font-[var(--font-body)] mb-4">
            Once you've found a place that catches your eye, we'll look at comparable properties in the area to help determine a purchase offer. Then we'll negotiate on your behalf with the seller to make sure you get the most favorable terms.
          </p>
          <p class="text-[var(--color-brand-muted)] text-base leading-relaxed font-[var(--font-body)]">
            It's our job to look after your best interests — and we will do so
            <span class="text-[var(--color-brand-dark)] font-medium">at no cost to you</span> as a buyer.
          </p>
        </div>

        <div class="bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] p-8 flex flex-col gap-6">
          <div class="w-6 h-px bg-[var(--color-brand-accent)]"></div>
          <h3 class="font-display text-2xl font-light text-[var(--color-brand-dark)] tracking-wide">
            Buying in Today's Market
          </h3>
          <p class="text-[var(--color-brand-muted)] text-base leading-relaxed font-[var(--font-body)]">
            Looking for a home in today's competitive market can be difficult. By understanding current conditions and staying a leader in the industry, we can help you locate and purchase your dream home for the best possible price.
          </p>
          <p class="text-[var(--color-brand-muted)] text-base leading-relaxed font-[var(--font-body)]">
            Together we will determine what your dream home includes and find the options that truly fit your life.
          </p>
          <div class="pt-2">
            <a
              href="https://terrehautelistings.idxbroker.com/idx/results/listings?statusCategory=active&srt=newest"
              target="_blank" rel="noopener"
              class="btn-outline-dark inline-block"
            >View All Listings</a>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>