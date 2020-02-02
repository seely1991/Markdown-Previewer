function preview() {
	$("#preview").html(marked($("#editor").val()));
}


$("#editor").on('keyup',preview);

$("document").ready(preview());

console.log($("#preview").html());