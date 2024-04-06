
       window.onload = function() {
            var dataAtual = new Date();
            var hora = dataAtual.getHours();
            var minuto = dataAtual.getMinutes();

            // Formatar a hora, adicionando um zero à esquerda se for menor que 10
            hora = hora < 10 ? '0' + hora : hora;
            minuto = minuto < 10 ? '0' + minuto : minuto;

            var horaAtual = hora + ':' + minuto;

            // Atualizar o conteúdo do elemento com id 'hora-atual'
            document.getElementById('hora-atual').textContent = horaAtual;
        };
   
document.write(`
<div id='whatsapp-chat' class='hide'>
  <div class='header-chat'>
    <div class='head-home'>
      <div class='info-avatar'><img src='https://static.wixstatic.com/media/e65861_e09a339c0d7d47a59188bf39852a036e~mv2.jpg' /></div>
      <p><span class="whatsapp-name">Hotel Saint Louis</span><br><small>Atendimento</small></p>
    </div>
    <div class='get-new hide'>
      <div id='get-label'></div>
      <div id='get-nama'></div>
    </div>
  </div>
  <div class='home-chat'></div>
  <div class='start-chat'>
    <div pattern="https://elfsight.com/assets/chats/patterns/whatsapp.png" class="WhatsappChat__Component-sc-1wqac52-0 whatsapp-chat-body">
      <div class="WhatsappChat__MessageContainer-sc-1wqac52-1 dAbFpq">
        <div style="opacity: 0;" class="WhatsappDots__Component-pks5bf-0 eJJEeC">
          <div class="WhatsappDots__ComponentInner-pks5bf-1 hFENyl">
            <div class="WhatsappDots__Dot-pks5bf-2 WhatsappDots__DotOne-pks5bf-3 ixsrax"></div>
            <div class="WhatsappDots__Dot-pks5bf-2 WhatsappDots__DotTwo-pks5bf-4 dRvxoz"></div>
            <div class="WhatsappDots__Dot-pks5bf-2 WhatsappDots__DotThree-pks5bf-5 kXBtNt"></div>
          </div>
        </div>
        <div style="opacity: 1;" class="WhatsappChat__Message-sc-1wqac52-4 kAZgZq">
          <div class="WhatsappChat__Author-sc-1wqac52-3 bMIBDo">Hotel Saint Louis</div>
          <div class="WhatsappChat__Text-sc-1wqac52-2 iSpIQi">Olá 👋<br><br>Comos podemos ajudar?</div>
          <div class="WhatsappChat__Time-sc-1wqac52-5 cqCDVm"><span id="hora-atual"></span></div>
        </div>
      </div>
    </div>
    <div class='blanter-msg'>
      <textarea id='chat-input' placeholder='Envie uma mensagem' maxlength='120' row='1'></textarea>
      <a href='javascript:void;' id='send-it'><svg viewBox="0 0 448 448">
          <path d="M.213 32L0 181.333 320 224 0 266.667.213 416 448 224z" /></svg></a>
    </div>
  </div>
  <div id='get-number'>5577999072922</div>
  <a class='close-chat' href='javascript:void'>×</a>
</div>

<a class='blantershow-chat' href='javascript:void' title='Show Chat'><span id='alert-red' class='alert-red'></span><img src='https://edivanguerra.github.io/chat-whats/hotelsaintlouis/btn-zap.png' heig/></a>
`);