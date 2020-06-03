$("#addBurger").on("click", (e)=>{
    e.preventDefault()
    console.log("clicked!");
    const burger_name = $("#burger").val().trim();
    const devoured = $("#dev").is(":checked") ? 1 : 0;
    $.post("/api/burger", {burger_name,devoured}).then(()=>location.reload())
})

$(".update").on("click", function(){
    $.ajax({
        url : `/api/burger/${$(this).attr('id')}`,
        method: "PUT"
    }).then(()=> location.reload())
})
$(".delete").on("click", function(){
    $.ajax({
        url : `/api/burger/${$(this).attr('id')}`,
        method: "DELETE"
    }).then(()=> location.reload())
})