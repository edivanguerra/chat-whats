document.addEventListener("DOMContentLoaded", function() {
  
  // 1. INJEÇÃO DO HTML
  // Este bloco cria a estrutura do chat direto no body do site
  const widgetHTML = `
    <div class="wa-widget-container">
      <div id="wa-chat-window" class="wa-chat-window">
        <div class="wa-chat-header">
          <div class="wa-header-info">
            <img src="LINK_DA_LOGO_BIOVEST_AQUI" alt="Biovest" class="wa-logo">
            <div class="wa-titles">
              <span class="wa-title">Biovest</span>
              <span class="wa-subtitle">Atendimento</span>
            </div>
          </div>
          <button id="wa-close-btn" class="wa-close-btn" aria-label="Fechar">&times;</button>
        </div>
        <div class="wa-chat-body">
          <div class="wa-chat-bubble">
            <div class="wa-message-author">Biovest</div>
            <div class="wa-message-text">Olá 👋<br><br>Como podemos ajudar?</div>
            <div class="wa-message-time" id="wa-current-time">12:00</div>
          </div>
        </div>
        <div class="wa-chat-footer">
          <a href="SEU_LINK_DO_TINTIM_AQUI" target="_blank" rel="noopener noreferrer" class="wa-action-btn">
            Iniciar conversa
          </a>
        </div>
      </div>
      <div id="wa-floating-btn" class="wa-floating-btn">
        <img src="https://raw.githubusercontent.com/edivanguerra/chat-whats/041c4af4594aad366600cabd5bea51ae30631292/biovest/ico-whats.png" alt="WhatsApp" class="wa-float-icon">
        <span id="wa-notification-badge" class="wa-badge hidden">1</span>
      </div>
    </div>
  `;

  // Insere o HTML no final da página
  document.body.insertAdjacentHTML('beforeend', widgetHTML);

  // 2. LÓGICA DE FUNCIONAMENTO (Cliques e Hora)
  const chatWindow = document.getElementById('wa-chat-window');
  const closeBtn = document.getElementById('wa-close-btn');
  const floatingBtn = document.getElementById('wa-floating-btn');
  const notificationBadge = document.getElementById('wa-notification-badge');
  const timeElement = document.getElementById('wa-current-time');

  // Atualiza a hora da mensagem
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  if (timeElement) {
    timeElement.textContent = `${hours}:${minutes}`;
  }

  // Fecha no X e mostra a notificação
  closeBtn.addEventListener('click', function() {
    chatWindow.classList.add('hidden'); 
    notificationBadge.classList.remove('hidden'); 
  });

  // Abre/fecha no ícone do WhatsApp e gerencia a notificação
  floatingBtn.addEventListener('click', function() {
    chatWindow.classList.toggle('hidden');
    
    if (chatWindow.classList.contains('hidden')) {
      notificationBadge.classList.remove('hidden');
    } else {
      notificationBadge.classList.add('hidden');
    }
  });
});
