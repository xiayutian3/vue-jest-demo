// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

import { add } from '../../src/util'

// describe ： 定义⼀一个测试套件
// it ：定义⼀一个测试⽤用例例
// expect ：断⾔言的判断条件
// toBe ：断⾔言的⽐比较结果

// 测试的核心逻辑看输入和输出(it 可以写多个)
describe('测试加法函数', () => {
  it('一个具体的功能测试，测试数字相加', () => {
    expect(add(1, 2)).toBe(3)
    // expect(add(1, 2)).toBe(4)   //错误的例子
  })
  it('一个具体的功能测试，测试数字相加', () => {
    expect(add('a', 2)).toBe('a2')
  })
  it('一个具体的功能测试，测试数字相加', () => {
    expect(add('1', '2')).toBe(3)
  })
})
