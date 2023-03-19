<script setup lang="ts">
import { NForm, NFormItem, NInput, NRadio, NSelect, NSlider } from 'naive-ui'
const model = reactive({
  inputValue: '',
  textareaValue: '',
})
</script>

<template>
  <div h-full w-80 overflow-auto text="#FFFFFFD7" pt-12 px-2 class="control-pane">
    <ControlPaneArea v-for="it in 4" :key="it" title="Custom Title">
      <NForm
        ref="formRef"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
        size="small"
        label-align="left"
        :style="{
          maxWidth: '640px',
        }"
      >
        <NFormItem label="Input" path="inputValue">
          <NInput v-model:value="model.inputValue" placeholder="Input" />
        </NFormItem>
        <NFormItem label="Slider" path="textareaValue">
          <NSlider />
        </NFormItem>
        <NFormItem label="Radio" path="textareaValue">
          <NRadio
            value="Definitely Maybe"
            name="basic-demo"
          >
            Maybe
          </NRadio>
          <NRadio
            value="Be Here Now"
            name="basic-demo"
          >
            Now
          </NRadio>
        </NFormItem>
        <NFormItem label="Select" path="selectValue">
          <NSelect
            placeholder="Select"
          />
        </NFormItem>
      </NForm>
    </ControlPaneArea>
  </div>
</template>

<style scoped>
.control-pane {
  background-color: #fdfdfd;
  border-left: 1px solid #ddd;
}
</style>
