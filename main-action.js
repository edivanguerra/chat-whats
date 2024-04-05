    
    // JavaScript Aqui
    $(document).ready(function() {
  // Simular clique no botão para mostrar a janela de chat automaticamente
  $(".blantershow-chat").trigger("click");
});

$(document).on("click", "#send-it", function () {
  var chatInput = document.getElementById("chat-input").value.trim();
  if (chatInput !== "") {
    var phoneNumber = $("#get-number").text();
    var message = "&text=" + encodeURIComponent(chatInput);
    var url = "https://api.whatsapp.com/send";
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      url = "whatsapp://send";
    }
    var whatsappUrl = url + "?phone=" + phoneNumber + message;
    window.open(whatsappUrl, "_blank");
  }
});

$(document).on("click", ".informasi", function () {
  $("#get-number").html($(this).children(".my-number").text());
  $(".start-chat,.get-new").addClass("show").removeClass("hide");
  $(".home-chat,.head-home").addClass("hide").removeClass("show");
  $("#get-nama").html(
    $(this).children(".info-chat").children(".chat-nama").text()
  );
  $("#get-label").html(
    $(this).children(".info-chat").children(".chat-label").text()
  );
});

$(document).on("click", ".close-chat", function () {
  $("#whatsapp-chat").addClass("hide").removeClass("show");
});

$(document).on("click", ".blantershow-chat", function () {
  $("#whatsapp-chat").addClass("show").removeClass("hide");
});

