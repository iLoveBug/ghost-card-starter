<template>
  <div class="container">
    <label class="label-class" for="world">
      {{ $t("message.hello") }}
    </label>
    <input class="input-class"
      id="world" type="text" placeholder="Type here" v-model="text"
      @change="onTextChange" @blur="onTextChange">
  </div>
</template>
<script>
import { Base64 } from 'js-base64'
import { locale } from '../util/i18n.js'

const messages = {
  en: {
    message: {
      hello: 'Input something below',
    }
  },
  zh: {
    message: {
      hello: '在下面输入一点什么吧'
    }
  }
}

export default {
  name: 'GhostCardStarterEditor',
  props: {
    data: {
      type: String,
      default: ''
    },
    saveCallback: {
      type: Function,
      required: true
    }
  },
  i18n: {
    locale: locale,
    messages: messages
  },
  data () {
    return {
      text: 'world'
    }
  },
  methods: {
    onTextChange () {
      this.saveCallback(Base64.encode(JSON.stringify({ text: this.text})))
    }
  },
  mounted () {
    if (this.data.length === 0) {
      this.onTextChange()
    } else {
      let json = JSON.parse(Base64.decode(this.data))
      this.text = json.text
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  height: 1.25rem;;
}
.label-class {
  display: block;
  color: #4a5568;
  font-size: .875rem;
  font-weight: 700;
  margin-right: 0.5rem;
}
.input-class {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  appearance: none;
  border-radius: 0.25rem;
  width: 40%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  color: #4a5568;
  line-height: 1.25rem;
}
.input-class:focus {
  outline: 0;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}
</style>
