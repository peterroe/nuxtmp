<script setup lang="ts">
import { NButton, NColorPicker, NDatePicker, NForm, NFormItem, NInput, NInputGroup, NInputGroupLabel, NInputNumber, NRadio, NSelect, NSlider, NSwitch } from 'naive-ui'
const model = reactive({
  inputValue: '',
  textareaValue: '',
})
const generalOptions = ['groode', 'veli good', 'emazing', 'lidiculous'].map(
  v => ({
    label: v,
    value: v,
  }),
)
</script>

<template>
  <div h-full w-80 overflow-auto text="#FFFFFFD7" pt-12 px-2 class="control-pane">
    <ControlPaneArea title="Demo Form Config">
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
        <NFormItem label="Text" path="inputValue">
          <NInput placeholder="Input" />
        </NFormItem>
        <NFormItem label="Operation" path="selectValue">
          <NSelect
            placeholder="Select"
            :options="generalOptions"
          />
        </NFormItem>
        <NFormItem label="Frequency" path="textareaValue">
          <NSlider :value="35" />
        </NFormItem>
      </NForm>
    </ControlPaneArea>
    <ControlPaneArea title="Demo Form Config">
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
        <NFormItem label="Time">
          <NInputGroup>
            <NInput size="small" />
            <NInputGroupLabel>ms</NInputGroupLabel>
          </NInputGroup>
        </NFormItem>
        <NFormItem label="Text" path="inputValue">
          <NInput placeholder="Input" />
        </NFormItem>
        <NFormItem label="Favour" path="textareaValue">
          <NRadio
            value="A"
            name="basic-demo"
          >
            A
          </NRadio>
          <NRadio
            value="B"
            name="basic-demo"
          >
            B
          </NRadio>
          <NRadio
            value="C"
            name="basic-demo"
          >
            C
          </NRadio>
        </NFormItem>
        <NFormItem label="Switch" path="textareaValue">
          <NSwitch />
        </NFormItem>
      </NForm>
    </ControlPaneArea>
    <ControlPaneArea title="Demo Form Config">
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
        <NFormItem label="Datetime" path="datetimeValue">
          <NDatePicker type="datetime" />
        </NFormItem>
        <NFormItem label="Text" path="inputValue">
          <NInput placeholder="Input" />
        </NFormItem>
        <NFormItem label="Input Number" path="inputNumberValue">
          <NInputNumber />
        </NFormItem>
        <NFormItem label="Color Picker" path="colorValue">
          <NColorPicker value="#54736e" />
        </NFormItem>
        <NFormItem label="Upload" path="uploadValue">
          <n-upload>
            <NButton>Upload file</NButton>
          </n-upload>
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
