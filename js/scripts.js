$(document).ready(function () {
  $("#formOne").submit(function (event) {
    const nameInput = $("input#name").val();
    const addressInput = $("input#address").val();
    const mobileInput = $("input#mobile").val();
    const bloodInput = $("input#bloodtype").val();
    const firstbornInput = $("input#firstborn").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".mobile").text(mobileInput);
    $(".bloodtype").text(bloodInput);
    $(".firstborn").text(firstbornInput);


    $("#response").show();

    event.preventDefault();
  });
});