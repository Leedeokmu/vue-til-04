import { shallowMount } from '@vue/test-utils';
import SignupForm from '@/components/SignupForm';

describe('SignupForm 컴포넌트 테스트 셋', () => {
  test('ID 는 이메일 형식이어야 한다', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    expect(wrapper.vm.isUsernameValid).toBeFalsy();
  });

  test('ID, PW, nickname 이 입력되지 않으면 로그인 버튼이 비활성화 된다', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: '',
          password: '',
          nickname: '',
        };
      },
    });
    const button = wrapper.find('.btn');
    expect(wrapper.vm.isValidForm).toBeFalsy();
    expect(button.element.disabled).toBeTruthy();
  });
});
