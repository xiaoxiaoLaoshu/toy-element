import { describe, test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import Icon from '../Icon/Icon.vue'
import Button from './Button.vue'

describe('Button.vue', () => {
  const onClick = vi.fn();
  test('basic button', async() => {
    const wrapper = mount(() => {
      <Button type="primary" {...{ onClick }}>
        button content
      </Button>
    })
    // class
    expect(wrapper.classes()).toContain('er-button-primary')

    // slot
    expect(wrapper.get('button').text()).toBe('button content')

    // event
    await wrapper.get('button').trigger('click')
    expect(onClick).toHaveBeenCalled()
  })

  test('disabled button', async () => {
    const wrapper = mount(() => {
      <Button disabled>
        disabled button
      </Button>
    })

    // class
    expect(wrapper.classes()).toContain('is-disabled')

    // attrs
    expect(wrapper.attributes('disabled')).toBeDefined();
    expect(wrapper.find('button').element.disabled).toBeTruthy()

    // event
    await wrapper.get('button').trigger('click')
    expect(onClick).not.toHaveBeenCalled
  })

  test('loading button', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
      slots: {
        default: 'loading button',
      },
      global: {
        stubs: ['ErIcon'],
      }
    })

    // class
    expect(wrapper.classes()).toContain('is-loading')

    // attrs
    expect(wrapper.attributes('disabled')).toBeDefined();
    expect(wrapper.find('button').element.disabled).toBeTruthy()

    // event
    wrapper.get('button').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')

    // icon
    const iconElement = wrapper.findComponent(Icon);
    expect(iconElement.exists()).toBeTruthy()
    expect(iconElement.attributes('icon')).toBe('spinner')
  })
})

