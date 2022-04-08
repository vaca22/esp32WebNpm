document.addEventListener('DOMContentLoaded', function (event) {
    var baseHost = document.location.origin
    var streamUrl = baseHost + ':81'

    const bau = document.getElementById('bau')
    const button_save = document.getElementById('save')
    bau.onchange = () => {
        console.log(bau.value)
    }

    const wifi_name = document.getElementById('wifi_name')
    const wifi_password = document.getElementById('wifi_password')
    const ble_name = document.getElementById('ble_name')
    const is_connect_router = document.getElementById('is_connect_router')
    const router_name = document.getElementById('router_name')
    const router_password = document.getElementById('router_password')
    const inner_ip = document.getElementById('inner_ip')
    const tcp_port = document.getElementById('tcp_port')
    const udp_port = document.getElementById('udp_port')

    button_save.onclick=()=>{
        console.log("good"+wifi_name.value)

    }


})

