$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });

    $(".delBtn").click(function (e) {
        e.preventDefault();

        var delete_id = $(this).closest("div").find(".delVal").val();
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                var data = {
                    _token: $('input[name="csrf-token"]').val(),
                    id: delete_id,
                };
                $.ajax({
                    type: "DELETE",
                    url: "/delete/" + delete_id,
                    data: data,
                    success: function (response) {
                        swal(response.status, {
                            icon: "success",
                        }).then((result) => {
                            location.reload();
                        });
                    },
                });
            }
        });
    });

    $(".delBtn_Category").click(function (e) {
        e.preventDefault();

        var delete_id = $(this).closest("tr").find(".delVal_Category").val();
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                var data = {
                    _token: $('input[name="csrf-token"]').val(),
                    id: delete_id,
                };
                $.ajax({
                    type: "DELETE",
                    url: "/delete-category/" + delete_id,
                    data: data,
                    success: function (response) {
                        swal(response.status, {
                            icon: "success",
                        }).then((result) => {
                            location.reload();
                        });
                    },
                });
            }
        });
    });

    $(".delBtn_Comment").click(function (e) {
        e.preventDefault();

        var delete_id = $(this).closest("tr").find(".delVal_Comment").val();
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                var data = {
                    _token: $('input[name="csrf-token"]').val(),
                    id: delete_id,
                };
                $.ajax({
                    type: "DELETE",
                    url: "/delete-usercomment/" + delete_id,
                    data: data,
                    success: function (response) {
                        swal(response.status, {
                            icon: "success",
                        }).then((result) => {
                            location.reload();
                        });
                    },
                });
            }
        });
    });
});
