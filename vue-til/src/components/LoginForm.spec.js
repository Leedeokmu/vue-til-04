import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm';

describe('LoginForm 컴포넌트 테스트', () => {
  test('ID 가 이메일 형식이 아니면 경고 메시지가 출력된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test ',
        };
      },
    });
    const warningText = wrapper.find('.warning');
    expect(warningText.exists()).toBeTruthy();
  });

  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const button = wrapper.find('.btn');
    expect(button.element.disabled).toBeTruthy();
  });
});
