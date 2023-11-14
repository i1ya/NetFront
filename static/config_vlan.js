const ConfigVLAN = function (currentDevice) {
    var buttonElem = document.getElementById('config_button_vlan_script');
    var modalElem = document.getElementById('config_modal_vlan_script');
    var table = document.getElementById('config_table_vlan_script');

    $(buttonElem.innerHTML).appendTo('#config_switch_name');
    $(modalElem.innerHTML).appendTo('body');

    $(document).ready(function () {
        $('#config_switch_vlan').off('click').on('click', function () {
            if ($(this).is(':checked')) {
                $('#switch_vlan').after(table.innerHTML);
                generateTableContent(currentDevice);
            } else {
                $('#config_table_vlan').remove();
            }
        });

        $('#vlanConfigrationCancelIcon').on('click', function () {
            restoreFormData(currentDevice);
            $('#VlanModal').modal('hide');
        });

        $('#vlanConfigrationCancel').on('click', function () {
            restoreFormData(currentDevice);
            $('#VlanModal').modal('hide');
        });

        $('#vlanConfigrationSubmit').on('click', function () {
            if ($('#config_switch_vlan').is(':checked')) {
                saveCurrentFormData(currentDevice);
            } else {
                resetInterfaceFields(currentDevice);
            }
            $('#VlanModal').modal('hide');
        });

        $('#config_button_vlan').off('click').on('click', function () {
            if (areInterfaceFieldsFilled(currentDevice)) {
                $('#config_switch_vlan').prop('checked', true);
                if (!$('#config_table_vlan').is(':visible')) {
                    $('#switch_vlan').after(table.innerHTML);
                }
                generateTableContent(currentDevice);
            }
            else {
                $('#config_switch_vlan').prop('checked', false);
                $('#config_table_vlan').remove();
            }
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

            var vlan = (interface.vlan !== null && interface.vlan !== undefined) ? interface.vlan : 1;
            var type_connection = (interface.type_connection !== null && interface.type_connection !== undefined) ? interface.type_connection : 0;

            var selectedAccess = type_connection === 0 ? 'selected' : '';
            var selectedTrunk = type_connection === 1 ? 'selected' : '';

            var row = '<tr data-id="' + interface.id + '">' +
                '<td>' + targetDeviceId + '</td>' +
                '<td><input type="number" value="' + vlan + '" min="1" class="form-control vlan-input" /></td>' +
                '<td>' +
                '<select class="form-select">' +
                '<option value="Access" ' + selectedAccess + '>Access</option>' +
                '<option value="Trunk" ' + selectedTrunk + '>Trunk</option>' +
                '</select>' +
                '</td>' +
                '</tr>';

            $('#config_table_vlan tbody').append(row);
        }
    }
}

function saveCurrentFormData(currentDevice) {
    $('#config_table_vlan tbody tr').each(function (index, row) {
        var row = $(row);
        var interfaceId = row.data('id');
        var vlan = Number(row.find('input').val());
        var type_connection = row.find('select').val() === 'Access' ? 0 : 1;

        var interface = currentDevice.interface.find(function (item) {
            return item.id === interfaceId;
        });

        if (interface) {
            interface.vlan = vlan;
            interface.type_connection = type_connection;
        };
    });
}

function restoreFormData(currentDevice) {
    $('#config_table_vlan tbody tr').each(function (index, row) {
        var row = $(row);
        var interfaceId = row.data('id');

        var interface = currentDevice.interface.find(function (item) {
            return item.id === interfaceId;
        });
        if (interface) {
            row.find('input').val(interface.vlan);
            row.find('select').val(interface.type_connection === 0 ? 'Access' : 'Trunk');
        }
    });
}

function areInterfaceFieldsFilled(device) {
    return device.interface.some(interface =>
        interface.vlan !== null &&
        interface.vlan !== undefined &&
        interface.type_connection !== null &&
        interface.type_connection !== undefined
    );
}

function resetInterfaceFields(device) {
    device.interface.forEach(interface => {
        interface.vlan = null;
        interface.type_connection = null;
    });
}

$(document).on('input', '.vlan-input', function () {
    var value = $(this).val();
    if (value < 1) {
        $(this).val(0);
    }
});