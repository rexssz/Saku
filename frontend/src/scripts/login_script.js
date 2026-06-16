const pw = document.getElementById('password');
const showPw = document.getElementById('show-pw');

function showPassword() {
    if (pw.type == "password") {
        pw.type = "text";
    } else {
        pw.type = "password";
    }
}