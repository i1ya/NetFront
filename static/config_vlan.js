const ConfigVLAN = function(currentDevice) {
    var buttonElem = document.getElementById('config_button_vlan_script');
    var modalElem = document.getElementById('config_modal_vlan_script');
    var table = document.getElementById('config_table_vlan_script');

    $(buttonElem.innerHTML).appendTo('#config_switch_name');
    $(modalElem.innerHTML).appendTo('body');


    $(document).ready(function() {
        $('#config_switch_vlan').off('click').on('click', function() {
            if ($(this).is(':checked')){
                $('#switch_vlan').after(table.innerHTML);
                generateTableContent(currentDevice);
            } else {
                $('#config_table_vlan').remove();
            }
        });

        $('#vlanConfigrationCancelIcon').on('click', function() {
            $('#VlanModal').modal('hide');
        });

        $('#vlanConfigrationCancel').on('click', function() {
            $('#VlanModal').modal('hide');
        });

        $('#vlanConfigrationSubmit').on('click', function() {
            $('#VlanModal').modal('hide');
        });

        $('#config_button_vlan').off('click').on('click', function() {
            generateTableContent(currentDevice);
        });
    });
}

function generateTableContent(currentDevice) {
    // Clearing previous lines in tbody
    $('#config_table_vlan tbody').empty();

    var edgesMap = new Map();
    for (var i = 0; i < edges.length; i++) {
        edgesMap.set(edges[i].data.id, edges[i]);
    }

    for (var i = 0; i < currentDevice.interface.length; i++) {
        var interface = currentDevice.interface[i];
        var connectedEdge = edgesMap.get(interface.connect);

        if (connectedEdge !== undefined) {
            var targetDeviceId = connectedEdge.data.target;

            // Checking whether the current device is the source or not
            if (connectedEdge.data.source === currentDevice.data.id) {
                targetDeviceId = connectedEdge.data.target;
            } else {
                targetDeviceId = connectedEdge.data.source;
            }

            var row = '<tr>' +
            '<td>' + targetDeviceId + '</td>' +
            '<td><input type="number" value="0" class="form-control" /></td>' +
            '<td>' +
                '<select class="form-select">' +
                    '<option value="Access" selected>Access</option>' +
                    '<option value="Trunk">Trunk</option>' +
                '</select>' +
            '</td>' +
            '</tr>';

            $('#config_table_vlan tbody').append(row);
        }
    }
}