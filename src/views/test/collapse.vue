<template>
  <n-grid :cols="2">
    <n-form-item-gi label="数量">
      <n-input-number v-model:value="gridItemCount" :min="1" />
    </n-form-item-gi>
    <n-form-item-gi label="折叠后行数">
      <n-input-number v-model:value="gridCollapsedRows" :min="1" />
    </n-form-item-gi>
    <n-form-item-gi label="打开后缀节点">
      <n-switch v-model:value="showSuffix" />
    </n-form-item-gi>
    <n-form-item-gi label="折叠栅格">
      <n-switch v-model:value="gridCollapsed" />
    </n-form-item-gi>
  </n-grid>
  <n-grid
    :cols="5"
    :collapsed="gridCollapsed"
    :collapsed-rows="gridCollapsedRows"
  >
    <n-grid-item
      v-for="i in gridItemCount"
      :key="i"
      :class="i % 2 ? 'green' : 'light-green'"
    >
      {{ i }}
    </n-grid-item>
    <n-grid-item v-if="showSuffix" suffix class="suffix">
      <template #default="{ overflow }">
        {{ overflow ? "存在溢出" : "不存在溢出" }}
      </template>
    </n-grid-item>
  </n-grid>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { NGrid, NFormItemGi, NInputNumber, NGridItem, NSwitch } from "naive-ui";

export default defineComponent({
  components: {
    NGrid,
    NFormItemGi,
    NInputNumber,
    NGridItem,
    NSwitch,
  },
  setup() {
    return {
      gridCollapsed: ref(true),
      gridCollapsedRows: ref(1),
      gridItemCount: ref(7),
      showSuffix: ref(true),
    };
  },
});
</script>

<style scoped>
.suffix {
  height: 108px;
  border: 1px solid rgba(0, 128, 0, 0.36);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
