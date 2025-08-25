// --- Atualiza hora ---
function atualizarHora() {
  var dataAtual = new Date();
  var hora = dataAtual.getHours();
  var minuto = dataAtual.getMinutes();

  hora = hora < 10 ? "0" + hora : hora;
  minuto = minuto < 10 ? "0" + minuto : minuto;

  var horaAtual = hora + ":" + minuto;
  var spanHora = document.getElementById("hora-atual");
  if (spanHora) {
    spanHora.textContent = horaAtual;
  }
}

// --- Detecta mobile/desktop ---
function isMobileDevice() {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

// --- Envio de mensagem ---
function abrirWhatsApp() {
  var numero = document.getElementById("get-number").textContent;
  var texto = document.getElementById("chat-input").value.trim();

  if (texto === "") {
    texto = "Olá! Gostaria de mais informações.";
  }

  var baseLink = isMobileDevice()
    ? "https://api.whatsapp.com/send?phone="
    : "https://web.whatsapp.com/send?phone=";

  var url = baseLink + numero + "&text=" + encodeURIComponent(texto);
  window.open(url, "_blank");
}

// --- Abre/fecha chat ---
function toggleChat(show) {
  var chat = document.getElementById("whatsapp-chat");
  if (chat) {
    chat.className = show ? "show" : "hide";
  }
}

// --- HTML do chat ---
document.write(`
<div id='whatsapp-chat' class='hide'>
  <div class='header-chat'>
    <div class='head-home'>
      <div class='info-avatar'>
        <img src='https://static.wixstatic.com/media/e65861_05154c1c655941ab86ce2404dcbb86f0~mv2.jpg' />
      </div>
      <p>
        <span class="whatsapp-name">Lara Nutrição Animal</span><br>
        <small>Atendimento</small>
      </p>
    </div>
  </div>

  <div class='home-chat'></div>

  <div class='start-chat'>
    <div class="WhatsappChat__Component-sc-1wqac52-0 whatsapp-chat-body">
      <div class="WhatsappChat__MessageContainer-sc-1wqac52-1 dAbFpq">
        <div style="opacity: 1;" class="WhatsappChat__Message-sc-1wqac52-4 kAZgZq">
          <div class="WhatsappChat__Author-sc-1wqac52-3 bMIBDo">Lara Nutrição Animal</div>
          <div class="WhatsappChat__Text-sc-1wqac52-2 iSpIQi">
            Olá 👋<br><br>Como podemos ajudar?
          </div>
          <div class="WhatsappChat__Time-sc-1wqac52-5 cqCDVm">
            <span id="hora-atual"></span>
          </div>
        </div>
      </div>
    </div>

    <div class='blanter-msg'>
      <textarea id='chat-input' placeholder='Envie uma mensagem' maxlength='120' rows='1'></textarea>
      <a href='javascript:void(0);' id='send-it'>
        <svg viewBox="0 0 448 448">
          <path d="M.213 32L0 181.333 320 224 0 266.667.213 416 448 224z" />
        </svg>
      </a>
    </div>
  </div>

  <div id='get-number'>5577999006015</div>
  <a class='close-chat' href='javascript:void(0);'>×</a>
</div>

<a class='blantershow-chat' href='javascript:void(0);' title='Show Chat'>
  <span id='alert-red' class='alert-red'></span>
  <img src='https://edivanguerra.github.io/chat-whats/laranutricao/btn-zap.png' />
</a>
`);

// --- Inicialização ---
window.onload = function () {
  atualizarHora();

  // botão enviar
  var botao = document.getElementById("send-it");
  if (botao) {
    botao.onclick = abrirWhatsApp;
  }

  // botão abrir chat (zap flutuante)
  var showBtn = document.querySelector(".blantershow-chat");
  if (showBtn) {
    showBtn.onclick = function () {
      toggleChat(true);
    };
  }

  // botão fechar (X)
  var closeBtn = document.querySelector(".close-chat");
  if (closeBtn) {
    closeBtn.onclick = function () {
      toggleChat(false);
    };
  }
};
