# 需求分析文档：按钮组件需求

## 用户调研摘要
- **用户痛点**：
  - 当前按钮组件在样式和状态切换上不够灵活，无法满足不同应用场景（如表单、导航等）的需求。
  - 部分用户希望按钮能在特定情况下提供反馈，例如加载时的状态。

- **期望功能**：
  - 用户希望按钮能够快速适配不同的视觉样式（如主按钮、危险按钮等）。
  - 支持不同状态（如禁用、加载等），以提高用户操作的可预测性。
  - 需要支持图标和文本的组合展示，增强视觉提示。

- **安全性需求**：
  - 禁用状态下，用户无法点击按钮，避免无效操作。
  - 加载状态下，应明确提示用户当前操作正在进行，避免重复提交。

## 竞品对比报告
- **竞品A**：
  - **优点**：多样化的样式和状态支持，提供友好的API文档。
  - **缺点**：缺少节流机制，用户可能误触发按钮。

- **竞品B**：
  - **优点**：按钮组功能完善，可以灵活组合不同按钮。
  - **缺点**：API设计较为复杂，上手难度较高。

- **竞品C**：
  - **优点**：良好的加载反馈，支持异步操作。
  - **缺点**：样式选择有限，缺乏个性化选项。

## 市场趋势分析
- **用户需求上升**：随着用户对界面交互的要求提高，市场对灵活、可自定义的组件需求增加。
- **设计趋势**：简约和直观的设计风格越来越受欢迎，用户期望组件不仅功能强大，还能提供良好的视觉体验。
- **开发效率**：组件化的开发方式有助于提高产品开发效率，用户更倾向于选择可以快速集成的组件库。

## 功能性描述
1. **样式与状态**：
   - 支持多种样式类型（如主按钮、成功、警告、危险）。
   - 提供不同状态的视觉反馈（如加载状态、禁用状态）。

2. **按钮交互**：
   - **点击事件**：按钮应具备响应用户点击的能力，支持事件回调。
   - **节流机制**：防止用户快速连续点击，避免重复提交。

3. **图标支持**：
   - 支持在按钮中添加图标，提升用户界面的友好性。
   - 提供图标的大小、位置及样式的配置选项。

4. **按钮组功能**：
   - 允许将多个按钮组合为一组，统一样式与操作，提升整体界面的一致性。

5. **可访问性**：
   - 确保按钮组件对屏幕阅读器友好，支持键盘导航。

## 结论
基于用户调研、竞品分析及市场趋势，建议开发一个功能丰富、易于使用的按钮组件，以满足多样化的用户需求。下一步可以进入功能点设计阶段，以明确具体实现细节。

# 功能点设计文档：按钮组件

## 功能描述
按钮组件将提供多种样式、状态及交互功能，支持用户在不同场景下使用，确保操作简便和视觉清晰。

## API 设计
- **主要属性**：
  - `type`: String — 按钮类型（`primary`, `success`, `info`, `warning`, `danger`）。
  - `size`: String — 按钮尺寸（`large`, `medium`, `small`）。
  - `disabled`: Boolean — 是否禁用按钮。
  - `loading`: Boolean — 是否显示加载状态。
  - `icon`: String — 按钮左侧图标的名称。
  - `plain`: Boolean — 是否为朴素按钮。
  - `onClick`: Function — 点击事件回调。

## 交互关系
1. **样式变化**：
   - 当`type`属性改变时，按钮的视觉样式随之更新。
   - 当`size`属性变化时，按钮的尺寸相应调整。

2. **状态反馈**：
   - 当`disabled`属性为`true`时，按钮呈现禁用样式，无法触发`onClick`事件。
   - 当`loading`属性为`true`时，按钮展示加载动画，并禁用其他交互。

3. **图标展示**：
   - 当`icon`属性提供值时，按钮左侧展示对应图标，文本与图标之间留有适当间隔。

4. **节流机制**：
   - 在点击事件中，判断`loading`状态，若为`true`则阻止后续点击，避免重复提交。

## 用户操作流程
1. 用户选择按钮类型、尺寸并配置相关属性。
2. 用户点击按钮，若状态为`disabled`，则无反应。
3. 若状态为`loading`，按钮显示加载动画，阻止后续点击。
4. 点击事件成功触发后，根据需求执行相应的回调函数。

## 异常处理
- **无效属性**：若传入无效的`type`或`size`，组件应输出警告，使用默认样式。
- **异步操作错误**：在`onClick`回调中，应处理异常情况，避免导致组件状态异常。

## 测试用例
```js
import { mount } from '@vue/test-utils';
import Button from '@/components/Button.vue';

describe('Button Component Tests', () => {
  // 测试按钮类型
  test('should render primary button with correct type', () => {
    const wrapper = mount(<Button type="primary">Click Me</Button>);
    expect(wrapper.classes()).toContain('btn-primary');
    expect(wrapper.text()).toBe('Click Me');
  });

  test('should render success button with correct type', () => {
    const wrapper = mount(<Button type="success">Success</Button>);
    expect(wrapper.classes()).toContain('btn-success');
    expect(wrapper.text()).toBe('Success');
  });

  test('should render danger button with correct type', () => {
    const wrapper = mount(<Button type="danger">Delete</Button>);
    expect(wrapper.classes()).toContain('btn-danger');
    expect(wrapper.text()).toBe('Delete');
  });

  // 测试按钮尺寸
  test('should apply large size class when size prop is large', () => {
    const wrapper = mount(<Button size="large">Large Button</Button>);
    expect(wrapper.classes()).toContain('btn-large');
  });

  test('should apply small size class when size prop is small', () => {
    const wrapper = mount(<Button size="small">Small Button</Button>);
    expect(wrapper.classes()).toContain('btn-small');
  });

  // 测试按钮禁用状态
  test('should disable button when disabled prop is true', async () => {
    const wrapper = mount(<Button disabled={true}>Disabled</Button>);
    expect(wrapper.attributes('disabled')).toBe('disabled');
    expect(wrapper.classes()).toContain('is-disabled');
    await wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeUndefined(); // Click event should not be emitted
  });

  // 测试按钮加载状态
  test('should show loading state when loading prop is true', async () => {
    const wrapper = mount(<Button loading={true}>Loading</Button>);
    expect(wrapper.classes()).toContain('is-loading');
    expect(wrapper.text()).toBe('Loading'); // Loading text should be visible
    await wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeUndefined(); // Click event should not be emitted
  });

  // 测试点击事件
  test('should emit click event when button is clicked', async () => {
    const clickHandler = jest.fn();
    const wrapper = mount(<Button onClick={clickHandler}>Click Me</Button>);
    await wrapper.trigger('click');
    expect(clickHandler).toHaveBeenCalled(); // Click handler should be called
    expect(wrapper.emitted().click).toBeTruthy(); // Click event should be emitted
  });

  // 测试节流机制
  test('should not emit click event when loading state is true', async () => {
    const clickHandler = jest.fn();
    const wrapper = mount(<Button loading={true} onClick={clickHandler}>Click Me</Button>);
    await wrapper.trigger('click');
    expect(clickHandler).not.toHaveBeenCalled(); // Click handler should not be called
  });

  // 测试图标显示
  test('should render icon on button when icon prop is provided', () => {
    const wrapper = mount(<Button icon="check">Check</Button>);
    expect(wrapper.find('.icon-check').exists()).toBe(true); // Check if icon exists
    expect(wrapper.text()).toContain('Check'); // Ensure text is present alongside icon
  });

  // 测试无效属性处理
  test('should handle invalid type gracefully', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const wrapper = mount(<Button type="invalid">Invalid Type</Button>);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Invalid prop: type'));
    expect(wrapper.classes()).toContain('btn-default'); // Should fall back to default style
    consoleSpy.mockRestore();
  });

  // 测试按钮组功能
  test('should render button group correctly', () => {
    const wrapper = mount(
      <div>
        <Button type="primary">Button 1</Button>
        <Button type="success">Button 2</Button>
      </div>
    );
    expect(wrapper.findAll('button').length).toBe(2); // Ensure two buttons are rendered
    expect(wrapper.find('.btn-primary').text()).toBe('Button 1'); // Check first button
    expect(wrapper.find('.btn-success').text()).toBe('Button 2'); // Check second button
  });

  // 测试可访问性
  test('should be accessible via keyboard navigation', async () => {
    const wrapper = mount(<Button>Accessible Button</Button>);
    await wrapper.trigger('focus'); // Simulate focus
    expect(document.activeElement).toBe(wrapper.element); // Check if button is focused
    await wrapper.trigger('keydown.enter'); // Simulate pressing enter
    expect(wrapper.emitted().click).toBeTruthy(); // Click event should be emitted
  });
});

```
