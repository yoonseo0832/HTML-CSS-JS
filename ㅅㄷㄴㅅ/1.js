document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeBtn = document.getElementById('close-btn');
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const passwordHint = document.getElementById('password-hint');

    // 로그인 버튼 클릭 시 모달 열기
    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    // 닫기 버튼 클릭 시 모달 닫기
    closeBtn.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    // 패스워드 입력 시 힌트 표시
    passwordInput.addEventListener('focus', function() {
        passwordHint.style.display = 'block';
    });
    passwordInput.addEventListener('blur', function() {
        passwordHint.style.display = 'none';
    });

    // 폼 제출 시 유효성 검사
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // 초기화
        emailError.textContent = '';
        passwordError.textContent = '';

        let isValid = true;

        // 이메일 입력 확인
        if (!emailInput.value) {
            emailError.textContent = '이 입력란을 작성하세요.';
            isValid = false;
        }

        // 패스워드 입력 확인
        if (!passwordInput.value) {
            passwordError.textContent = '이 입력란을 작성하세요.';
            isValid = false;
        }

        // 유효성 검사 성공 시 로그인 처리
        if (isValid) {
            alert('로그인 성공!');
            loginModal.style.display = 'none';
        }
    });
});
