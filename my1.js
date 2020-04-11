let text = document.getElementById('text');
text.value = localStorage.getItem('text');
text.oninput = () => {
      localStorage.setItem('text', text.value)
};