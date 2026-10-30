<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

const { t } = useI18n();

// lang у <html>, hreflang-ссылки на другие языки и og:locale
const i18nHead = useLocaleHead({ seo: true });

useHead(() => ({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs?.lang },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])]
}));

const pageKey = (route) => String(route.name).split("___")[0] + JSON.stringify(route.params);

useSeoMeta({
  title: () => t("meta.title"),
  description: () => t("meta.description")
});
</script>
<template>
  <div>
    <AppHeader />
    <main>
      <!-- ключ без языка: при смене языка страница не пересоздаётся, а только меняет текст -->
      <NuxtPage :page-key="pageKey" />
    </main>
    <AppFooter />
  </div>
</template>
