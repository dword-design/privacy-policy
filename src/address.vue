<template>
  {{ personalData.name }}<br />
  {{ personalData.street }}<br />
  {{ personalData.postalCode }} {{ personalData.city }}<br />
  {{ locale === 'de' ? 'Deutschland' : 'Germany' }}
</template>

<script setup lang="ts">
import * as personalData from '@dword-design/personal-data';

defineProps({ locale: { required: true, type: String } });
</script>
