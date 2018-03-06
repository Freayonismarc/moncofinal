$(function () {

    // TOOLTIP SELECTOR
    $('.tooltips').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    })

    // DataTables under Index Management Page
    $('#productlisting-data-table').dataTable({
        aoColumnDefs: [{
            bSortable: false,
            aTargets: [-1]
        }]
    });

    // DataTables under User Management Page
    $('#userlisting-data-table').dataTable({
        aoColumnDefs: [{
            bSortable: false,
            aTargets: [-1]
        }]
    });

    // DataTables under Dashboard / Orders
    $('#orderlisting-data-table').dataTable({
        aoColumnDefs: [{
            bSortable: false,
            aTargets: [-1]
        }]
    });

    $('#orderHistoryListing-data-table').dataTable();

});