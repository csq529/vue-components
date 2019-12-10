<template>
  <label class="checkbox-container">
    <span>
      <input
        v-if="group"
        type="checkbox"
        :disabled="disabled"
        @change="change"
        :value="label"
        v-model="model">

      <input
        v-else
        type="checkbox"
        :disabled="disabled"
        @change="change"
        :checked="currentValue" />
    </span>
    
    <slot></slot>
  </label>
</template>

<script>
import { findComponentUpward } from '../../utils/assist.js';

export default {
  name: "ICheckbox",
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },

    disabled: {
      type: [String, Number, Boolean],
      default: false
    },

    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },

    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number, Boolean]
    }
  },
  watch: {
    value (val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModel();
      } else {
        throw 'Value should be trueValue or falseValue.';
      }
    }
  },
  data() {
    return {
      currentValue: this.value,
      model: [],
      group: false,
      parent: null
    };
  },

  methods: {
    change (e) {
      if (this.disabled) {
        return false;
      }

      let checked = e.target.checked;
      this.currentValue = checked;
      
      let value = checked ? this.trueValue : this.falseValue
      if (this.group) {
        this.parent.change(this.model);
      } else {
        this.$emit('on-change', value)
      }
      this.$emit('input', value);
    },

    updateModel () {
      this.currentValue = this.value === this.trueValue;
    }
  },

  mounted() {
    this.parent = findComponentUpward(this, 'iCheckboxGroup')

    if (this.parent) {
      this.group = true
    }

    if (this.group) {
      this.parent.updateModel(true);
    } else {
      this.updateModel();
    }
  }
};
</script>

<style scoped lang="stylus">
.checkbox-container {
  font-size: .3rem
}
</style>