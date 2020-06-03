$(document).ready(function () {
  $("#formOne").submit(function (event) {
    const nameInput = $("input#name").val();
    const addressInput = $("input#address").val();
    const mobileInput = $("input#mobile").val();
    const bloodInput = $("input#bloodtype").val();
    const firstbornInput = $("input#firstborn").val();

    $(".name span").text(nameInput);
    $(".address span").text(addressInput);
    $(".mobile span").text(mobileInput);
    $(".bloodtype span").text(bloodInput);
    $(".firstborn span").text(firstbornInput);

    $("#response").show();

    event.preventDefault();
  });
});