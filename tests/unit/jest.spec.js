// 测试vue组件，需要用到vue，其实就是在node层，解析组件
import Vue from 'vue'
import JestComp from '../../src/Jest.vue'
// 可以操作dom的库，模拟点击事件之类的
import { mount } from '@vue/test-utils'

describe('测试jest组件', () => {
  it('测试初始化的data', () => {
    expect(JestComp.data().message).toBe('vue-text')
  })
  it('测试新建完毕后，created生命周期后的数据', () => {
    // $mount实际并没有执行渲染，只是把vue渲染的结果放到内存中，没有放到dom中
    const vm = new Vue(JestComp).$mount()
    expect(vm.message).toBe('jest吧')
  })
  // 获取dom结构，再进行操作
  it('测试按钮点击后，message的改变', () => {
    const wrapper = mount(JestComp)
    expect(wrapper.vm.message).toBe('jest吧') // 也可以拿到数据
    // 点击一下（语法类似与jq语法）
    wrapper.find('.btn').trigger('click')
    expect(wrapper.vm.message).toBe('按钮点击')
  })
  it('测试按钮点击后，count>1, message的改变', () => {
    const wrapper = mount(JestComp)
    wrapper.vm.count = 2
    // count>1的情况
    // 点击一下（语法类似与jq语法）
    wrapper.find('.btn').trigger('click')
    expect(wrapper.vm.message).toBe('count 点击2')
  })
})
