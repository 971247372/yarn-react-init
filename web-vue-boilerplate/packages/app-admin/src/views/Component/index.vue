<template>
  <div class="components-wrapper">
    <!-- row 1: typography, icons -->
    <i-row :gutter="50">
      <i-col span="12">
        <h2 class="title">Typography</h2>
        <typography />
      </i-col>
      <i-col span="12">
        <h2 class="title">Icons</h2>
        <icons />
      </i-col>
    </i-row>

    <!-- row 2: colors -->
    <i-row>
      <h2 class="title">Colors</h2>
      <colors class="content" />
    </i-row>

    <!-- row 3: buttons -->
    <i-row>
      <h2 class="title">Buttons</h2>
      <buttons class="content" />
    </i-row>

    <!-- row 4: text fields, number fields, input combinations, dropdowns, date picker, radio bttons, checkboxes, switchs -->
    <i-row :gutter="50">
      <i-col span="12">
        <h2 class="title">Text fields</h2>
        <text-fields class="content" />
        <h2 class="title">Number fields</h2>
        <number-fields class="content" />
        <h2 class="title">Input combinations</h2>
        <input-combinations class="content" />
        <h2 class="title">Dropdowns</h2>
        <dropdowns class="content" />
      </i-col>
      <i-col span="12">
        <h2 class="title">Date picker</h2>
        <date-picker class="content" />
        <h2 class="title">Radio buttons</h2>
        <radio-buttons class="content" />
        <h2 class="title">Checkboxes</h2>
        <checkboxes class="content" />
        <h2 class="title">Switches</h2>
        <switches class="content" />
      </i-col>
    </i-row>

    <!-- row 5: tables -->
    <i-row>
      <h2 class="title">Tables</h2>
      <tables class="content" />
    </i-row>

    <!-- row 6: pagination -->
    <i-row>
      <h2 class="title">Pagination</h2>
      <pagination class="content" />
    </i-row>

    <!-- row 7: pills -->
    <i-row>
      <h2 class="title">Pills</h2>
      <pills class="content" />
    </i-row>

    <!-- row 8: tooltips -->
    <i-row>
      <h2 class="title">Tooltips</h2>
      <tooltips class="content" />
    </i-row>

    <!-- row 9: notifications -->
    <i-row>
      <h2 class="title">Notifications</h2>
      <notifications class="content" />
    </i-row>

    <!-- row 10: accordion -->
    <i-row>
      <h2 class="title">Accordion</h2>
      <accordion class="content" />
    </i-row>

    <!-- row 11: trees -->
    <i-row>
      <h2 class="title">Trees</h2>
      <trees class="content" />
    </i-row>

    <!-- row 12: navigation tree -->
    <i-row>
      <h2 class="title">Navigation tree</h2>
      <navigation-tree class="content" />
    </i-row>

    <!-- row 13: progress bar -->
    <i-row>
      <h2 class="title">Progress bar</h2>
      <progress-bar class="content" />
    </i-row>

    <!-- row 14: loading -->
    <i-row>
      <h2 class="title">Loading</h2>
      <loading class="content" />
    </i-row>

    <!-- row 15: tabs -->
    <i-row>
      <h2 class="title">Tabs</h2>
      <tabs class="content" />
    </i-row>

    <!-- row 16: dialogs -->
    <i-row>
      <h2 class="title">Dialogs</h2>
      <dialogs class="content" />
    </i-row>

    <!-- row 17: system bar -->
    <i-row>
      <h2 class="title">System bar</h2>
      <system-bar class="content" />
    </i-row>
  </div>
</template>

<script>
import Typography from './Typography'
import Icons from './Icons'
import Colors from './Colors'
import Buttons from './Buttons'
import TextFields from './TextFields'
import NumberFields from './NumberFields'
import InputCombinations from './InputCombinations'
import Dropdowns from './Dropdowns'
import DatePicker from './DatePicker'
import RadioButtons from './RadioButtons'
import Checkboxes from './Checkboxes'
import Switches from './Switches'
import Tables from './Tables'
import Pagination from './Pagination'
import Pills from './Pills'
import Tooltips from './Tooltips'
import Notifications from './Notifications'
import Accordion from './Accordion'
import Trees from './Trees'
import NavigationTree from './NavigationTree'
import ProgressBar from './ProgressBar'
import Loading from './Loading'
import Tabs from './Tabs'
import Dialogs from './Dialogs'
import SystemBar from './SystemBar'

export default {
  metaInfo() {
    return {
      title: 'Components'
    }
  },
  components: {
    Typography,
    Icons,
    Colors,
    Buttons,
    TextFields,
    NumberFields,
    InputCombinations,
    Dropdowns,
    DatePicker,
    RadioButtons,
    Checkboxes,
    Switches,
    Tables,
    Pagination,
    Pills,
    Tooltips,
    Notifications,
    Accordion,
    Trees,
    NavigationTree,
    ProgressBar,
    Loading,
    Tabs,
    Dialogs,
    SystemBar
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/color.scss';

.components-wrapper {
  padding: 24px;
  min-width: 1100px;
}

.title {
  display: block;
  border-bottom: 1px solid $gray-color;
  padding-bottom: 4px;
  margin-top: 24px;
  margin-bottom: 24px;
}

.content {
  :global(.ivu-col) {
    margin-bottom: 24px;
  }
  :global(.ivu-form-item) {
    margin-bottom: 0;
  }
}
</style>
